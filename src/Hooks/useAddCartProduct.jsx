import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import toast from "react-hot-toast";
import useAccessCart from "./useAccessCart";

const addToCart = (product) => {
    return axiosSecure.post("/api/v1/carts", product);
}

const useAddCartProduct = () => {
    const {refetch} = useAccessCart();

    return useMutation({
        mutationFn: addToCart,
        onSuccess: () => {
            refetch();
            toast.success("Product added to cart successfully!")
        }
    })
};

export default useAddCartProduct;