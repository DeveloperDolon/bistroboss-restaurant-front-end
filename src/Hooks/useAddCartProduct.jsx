import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAccessCart from "./useAccessCart";
import { axiosPublic } from "./useAxiosPublic";

const addToCart = async (product) => {
    return axiosPublic.post("/api/v1/carts", product);
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