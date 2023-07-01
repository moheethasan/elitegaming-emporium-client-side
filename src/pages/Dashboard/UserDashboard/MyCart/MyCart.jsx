import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loader from "../../../../components/Shared/Loader/Loader";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

const MyCart = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: products = [], refetch } = useQuery(
    ["products", user],
    async () => {
      const res = await axiosSecure.get(
        `/purchases/bookmarked?email=${user?.email}`
      );
      return res.data;
    }
  );

  console.log(products);

  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/purchases/${product._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              "Product has been deleted from your cart.",
              "success"
            );
          }
        });
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  if (products?.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No products added in cart.
      </p>
    );
  }
  return (
    <div className="w-full mx-auto my-20">
      <Link to="/products" className="text-gray-500 font-semibold inline-block">
        <button className="flex gap-2 items-center">
          <HiArrowLongLeft className="text-3xl border border-gray-500 rounded-full p-1" />{" "}
          Continue Shopping
        </button>
      </Link>
      <div className="flex items-center justify-between mb-3 mt-4">
        <h2 className="text-2xl lg:text-3xl text-gray-500 font-semibold uppercase">
          Your Cart
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
              <th className="text-start uppercase text-gray-500">Status</th>
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
                <td>{product?.payment_status}</td>
                <td className="flex items-center gap-3">
                  <button
                    onClick={() => handleDelete(product)}
                    className="px-7 py-2 md:px-10 md:py-3 rounded-tr-3xl rounded-bl-3xl
                    border bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <FaTrashAlt className="text-lg md:text-xl" />
                  </button>
                  <Link
                    to={`/dashboard/paymentCheckout/${product?._id}`}
                    className="btn-secondary"
                  >
                    Pay
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

export default MyCart;
