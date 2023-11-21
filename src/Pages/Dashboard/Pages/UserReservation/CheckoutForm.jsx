import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAccessCart from "../../../../Hooks/useAccessCart";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import toast from "react-hot-toast";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const axiosSecure = useAxiosSecure();
    const { data } = useAccessCart();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(AuthContext);
    const [transactionID, setTransactionID] = useState(null);


    const totalPrice = data?.reduce((total, item) => {
        return total + parseFloat(item.product_price)
    }, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/api/v1/create-payment-intent", { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                }).catch(err => console.log(err));
        }

    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            setError("");
        }
        // confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.displayName || "anonymous"
                    }
                }
            }
        )

        if (confirmError) {
            console.log("confirm error")
        } else {
            console.log("payment intent ", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                setTransactionID(paymentIntent.id);

                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    transactionID: paymentIntent.id,
                    cartIds: data.map(item => item._id),
                    menuItemIds: data.map(item => item.product_id),
                    status: "pending"
                }

                const res = await axiosSecure.post("/api/v1/payment", payment);
                console.log(res);
                if(res?.data?.paymentResult?.insertedId) {
                    toast.success("Transaction complete!!")
                }

            }
        }
    }

    return (
        <form className="2xl:w-[50%] md:w-[60%] w-[90%] mx-auto my-24" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button disabled={!stripe || !clientSecret} className="btn btn-primary my-8" type="submit">
                Pay
            </button>

            <p className="text-red-500 md:text-sm text-xs">
                {error}
            </p>

            {
                transactionID && <p className="text-green-600">Your Transaction ID : {transactionID}</p>
            }
        </form>
    );
};

export default CheckoutForm;