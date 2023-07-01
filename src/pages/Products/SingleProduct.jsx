import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";

const SingleProduct = ({ product }) => {
  const { _id, category, product_name, product_image, price, admin_name } =
    product || {};
  const [selected, setSelected] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();

  const handleAddToCart = () => {
    if (!user) {
      return Swal.fire({
        title: "Oops!",
        text: "You have to be logged in to add the product.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    const selectedProduct = {
      user_name: user?.displayName,
      user_email: user?.email,
      product_name,
      product_image,
      category,
      price,
      admin_name,
      payment_status: "bookmarked",
    };
    fetch(`${import.meta.env.VITE_apiUrl}/purchases`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedProduct),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to insert product");
        }
      })
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Done!", `Product added in cart successfully`, "success");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops!", `You have already added this product`, "error");
      });
  };
  return (
    <div
      key={_id}
      className="bg-gradient-to-br from-blue-200 border border-x-violet-600 border-y-blue-600  rounded-bl-lg rounded-tr-lg px-4 py-5"
    >
      <div className="flex justify-between items-center">
        <p className="bg-gradient-to-r from-sky-500 hover:from-sky-600 inline px-2 py-1 rounded-lg text-white text-sm font-semibold">
          {category}
        </p>
        {selected ? (
          <AiFillHeart
            onClick={() => setSelected(!selected)}
            className="text-2xl text-red-600 cursor-pointer"
          />
        ) : (
          <AiOutlineHeart
            onClick={() => setSelected(!selected)}
            className="text-2xl cursor-pointer"
          />
        )}
      </div>
      <div>
        <h1 className="mt-8 text-xl font-bold text-gray-900">
          {product_name?.length > 25
            ? `${product_name?.slice(0, 25)}...`
            : product_name}
        </h1>
        <img
          className="mx-auto py-20 w-3/4"
          src={product_image}
          alt="product"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-gray-900">Price: ${price}</p>
        {/* TODO: update operation */}
        {isAdmin ? (
          <button
            onClick={() => handleAddToCart()}
            className="btn-primary flex gap-2 items-center relative z-10"
          >
            Update Now <BsCart4 className="text-xl" />
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart()}
            className="btn-primary flex gap-2 items-center relative z-10"
          >
            Add to Cart <BsCart4 className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
