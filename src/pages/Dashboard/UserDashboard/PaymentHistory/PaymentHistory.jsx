import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/Shared/Loader/Loader";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: payments = [] } = useQuery(["payments", user], async () => {
    const res = await axiosSecure.get(`/payments?email=${user?.email}`);
    return res.data;
  });

  if (loading) {
    return <Loader></Loader>;
  }
  if (payments.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No payments found.
      </p>
    );
  }
  return (
    <div className="w-full mx-auto my-20">
      <h2 className="text-2xl lg:text-3xl text-gray-500 font-semibold uppercase">
        Payment History
      </h2>
      <div className="overflow-x-auto">
        <table className="text-gray-500 table-sm font-semibold md:table-md lg:table-lg w-full mt-5 rounded-lg mb-5">
          <thead className="border-b-2">
            <tr>
              <th className="text-start uppercase">No.</th>
              <th className="text-start uppercase">Email</th>
              <th className="text-start uppercase">Product</th>
              <th className="text-start uppercase">Transaction ID</th>
              <th className="text-start uppercase">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => (
              <tr key={payment._id} className="border-b-2">
                <td>{index + 1}</td>
                <td className="font-semibold">{payment?.email}</td>
                <td className="font-semibold">
                  {payment?.product_name.length > 20
                    ? `${payment?.product_name.slice(0, 20)}...`
                    : payment?.product_name}
                </td>
                <td className="font-semibold">
                  <h3>{payment?.transactionId}</h3>
                </td>
                <td className="font-semibold">
                  {new Date(payment?.date).toLocaleDateString("en-GB")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
