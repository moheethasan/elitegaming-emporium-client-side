import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../../../../components/Dashboard/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaymentCheckout = () => {
  const selectedProduct = useLoaderData();

  const amount = selectedProduct.price;
  const price = parseFloat(amount.toFixed(2));

  return (
    <div className="text-center my-20">
      <h1 className="text-2xl lg:text-4xl font-semibold uppercase mb-20 text-center">
        <span className="title-text">Complete Your Payment</span>
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={price}
          selectedProduct={selectedProduct}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentCheckout;
