import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loader from "../../../../components/Shared/Loader/Loader";

const AddProduct = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const img_hosting_token = import.meta.env.VITE_ImageUpload_apiKey;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.price = parseFloat(data.price);

    const formData = new FormData();
    formData.append("image", data?.product_image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          data.product_image = imgURL;
          data.total_sold = 0;
          axiosSecure.post("/products", data).then((data) => {
            if (data.data.acknowledged) {
              Swal.fire("Done!", `Product added successfully`, "success");
              reset();
              navigate("/dashboard/myProducts");
            }
          });
        }
      });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <div className="container mx-auto px-2 py-10">
        <h1 className="text-center text-4xl md:text-5xl font-bold pb-8">
          <span className="title-text">Add New Product</span>
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-2xl bg-base-100 p-14 rounded-lg lg:w-4/5 2xl:w-3/5 mx-auto"
        >
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Product Name</span>
            </label>
            <input
              {...register("product_name")}
              type="text"
              placeholder="Product name"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Product Image</span>
            </label>
            <input
              type="file"
              {...register("product_image")}
              required
              className="file-input file-input-bordered file-input-success  border-2"
            />
          </div>
          <div className="lg:flex gap-5">
            <div className="w-full form-control">
              <label className="label">
                <span className="font-semibold label-text">Admin Name</span>
              </label>
              <input
                {...register("admin_name")}
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered border-2"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="font-semibold label-text">Admin Email</span>
              </label>
              <input
                {...register("admin_email")}
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered border-2"
              />
            </div>
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Category</span>
            </label>
            <select
              {...register("category")}
              className="input input-bordered border-2"
            >
              <option value="Headset">Headset</option>
              <option value="Card">Card</option>
              <option value="Chair">Chair</option>
              <option value="Monitor">Monitor</option>
            </select>
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="text"
              pattern="^\d+(\.\d{1,2})?$"
              placeholder="0.00"
              required
              className="input input-bordered border-2"
            />
          </div>
          <input
            className="btn-primary btn-block mt-6 cursor-pointer"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
