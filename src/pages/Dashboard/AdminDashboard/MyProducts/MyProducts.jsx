import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../components/Shared/Loader/Loader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { BiEdit } from "react-icons/bi";

const MyProducts = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: products = [] } = useQuery(["products", user], async () => {
    const res = await axiosSecure.get(`/products/admin?email=${user?.email}`);
    return res.data;
  });

  console.log(products);

  if (loading) {
    return <Loader></Loader>;
  }
  if (products.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No products found.
      </p>
    );
  }
  return (
    <div className="w-full mx-auto my-20">
      <Link
        to="/dashboard/addProduct"
        className="text-gray-500 font-semibold inline-block"
      >
        <button className="flex gap-2 items-center">
          <HiArrowLongLeft className="text-3xl border border-gray-500 rounded-full p-1" />{" "}
          Add new product
        </button>
      </Link>
      <div className="flex items-center justify-between mb-3 mt-4">
        <h2 className="text-2xl lg:text-3xl text-gray-500 font-semibold uppercase">
          Your Products
        </h2>
        <h2 className="text-2xl lg:text-3xl text-gray-500 font-semibold uppercase">
          Total items: {products?.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="text-gray-500 table-sm font-semibold md:table-md lg:table-lg w-full mt-5 rounded-lg">
          <thead className="border-b-2">
            <tr>
              <th className="text-start uppercase text-gray-500">No.</th>
              <th className="text-start uppercase text-gray-500">Image</th>
              <th className="text-start uppercase text-gray-500">Name</th>
              <th className="text-start uppercase text-gray-500">Category</th>
              <th className="text-start uppercase text-gray-500">Price</th>
              <th className="text-start uppercase text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product._id} className="border-b-2">
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product?.product_image} alt="product" />
                    </div>
                  </div>
                </td>
                <td>
                  {product?.product_name.length > 20
                    ? `${product?.product_name.slice(0, 20)}...`
                    : product?.product_name}
                </td>
                <td>{product?.category}</td>
                <td>${product?.price}</td>
                <td>
                  <Link
                    to={`/dashboard/updateProduct/${product?._id}`}
                    className="btn text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0"
                  >
                    <BiEdit className="text-xl" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
