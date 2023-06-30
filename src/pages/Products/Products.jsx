import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Shared/Loader/Loader";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: products = [], isLoading } = useQuery(
    ["products"],
    async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    }
  );

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="container mx-auto py-14 md:py-20 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold title-text text-center mb-10 md:mb-20">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
