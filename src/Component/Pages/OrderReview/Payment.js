import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { FaCat } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3xaWGYUGMAfkTXqJ3dGUXCsSORicM7HiTbKukjhEaWLELhzJxkLisKWx1kFVAumZuShq52aP6IMRD4RxLFOMvX00ylsVqnmR"
);


const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(order);
  return (
    <section className="my-12 lg:flex lg:justify-center lg:items-center gap-5 ">
      <div class="card w-96 bg-base-100 shadow-xl mb-5">
        <div class="card-body">
          <p className="text-primary font-bold">
            <FaCat className="text-4xl" />
            Hello ! {order.user}
          </p>
          <h2 class="card-title text-secondary font-bold text-xl">
            Your selected order : {order.partName}
          </h2>
          <p className="font-bold text-secondary text-xl">
            Please Pay : ${order.pay}
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
