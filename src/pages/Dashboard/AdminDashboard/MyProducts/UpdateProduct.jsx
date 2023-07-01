import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UpdateProduct = () => {
  const [axiosSecure] = useAxiosSecure();
  const product = useLoaderData();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    axiosSecure.patch(`/products/${product._id}`, data).then((data) => {
      if (data.data.modifiedCount > 0) {
        Swal.fire("Done!", `Product updated successfully`, "success");
        navigate("/dashboard/myProducts");
      }
    });
  };
  return (
    <div className="p-10">
      <h1 className="text-2xl lg:text-3xl text-gray-500 font-semibold uppercase text-center leading-6">
        You can update now!
      </h1>
      <div className="mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-8 rounded-lg w-4/5 mx-auto"
        >
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Product Name</span>
            </label>
            <input
              {...register("product_name")}
              type="text"
              defaultValue={product?.product_name}
              placeholder="Product name"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="text"
              pattern="^\d+(\.\d{1,2})?$"
              defaultValue={product?.price}
              placeholder="0.00"
              required
              className="input input-bordered border-2"
            />
          </div>
          <input
            className="btn-primary mt-5 btn-block cursor-pointer"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
