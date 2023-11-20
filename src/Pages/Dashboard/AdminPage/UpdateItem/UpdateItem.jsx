
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import SessionTItle from "../../../../Component/SessionTItle";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";


const UpdateItem = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const defaultData = useLoaderData();


    const onSubmit = async (data) => {

        const itemsAddId = toast.loading("Item updating...");

        const recipeData = {
            name: data.name,
            recipe: data.recipe,
            category: data.category,
            price: data.price
        }

        axiosSecure.patch(`/api/v1/update-item/${defaultData._id}?email=${user?.email}`, recipeData)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount) {
                    toast.success("Product updated successfully!", { id: itemsAddId });
                    reset();
                }
            }).catch(err => {
                toast.error(err.message, { id: itemsAddId });
            })
    }

    return (
        <div className="md:py-10 py-5">
            <SessionTItle
                subTitle={"What's new?"}
                title={"Update An Item"}
            ></SessionTItle>

            <div className="md:px-7 px-5 mb-28">
                <div className="mt-16 bg-[#fafafa] 2xl:w-[80%] w-full mx-auto rounded-lg shadow-lg md:py-16 py-10 md:px-20 px-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-7">
                        <label htmlFor="name"><span className="md:text-lg text-base font-medium">Recipe name*</span>
                            <input defaultValue={defaultData?.name} {...register("name", { required: true })} className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" type="text" placeholder="Recipe name" />
                        </label>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <label htmlFor="category"><span className="md:text-lg text-base font-medium">Category*</span>
                                <select defaultValue={defaultData?.category} {...register("category", { required: true })} className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3">
                                    <option disabled >Choose Category</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="salad">Salad</option>
                                </select>
                            </label>

                            <label htmlFor="price"><span className="md:text-lg text-base font-medium">Price*</span>
                                <input defaultValue={defaultData?.price} {...register("price", { required: true })} className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" type="number" placeholder="Price" />
                            </label>
                        </div>

                        <label htmlFor="recipe">
                            <span className="md:text-lg text-base font-medium">Recipe Details*</span>
                            <textarea defaultValue={defaultData?.recipe} {...register("recipe", { required: true })} className="w-full bg-white rounded-lg shadow-md md:py-5 py-3 px-5 mt-3" id="" cols="30" rows="10" placeholder="Review in detail"></textarea>
                        </label>

                        <div>
                            <button
                                style={{
                                    background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"
                                }}
                                type="submit"
                                className="flex btn justify-center items-center gap-2 text-white px-7">
                                Update Item <FaUtensils className="md:text-2xl text-xl"></FaUtensils>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default UpdateItem;