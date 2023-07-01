import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/Shared/Loader/Loader";

const PurchasedProducts = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: products = [] } = useQuery(["products", user], async () => {
    const res = await axiosSecure.get(
      `/purchases/purchased?email=${user?.email}`
    );
    return res.data;
  });

  console.log(products);

  if (loading) {
    return <Loader></Loader>;
  }
  if (products.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No purchased product found.
      </p>
    );
  }
  return <div>ff</div>;
};

export default PurchasedProducts;
