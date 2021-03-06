import React, { useEffect, useState } from "react";
import Review from "./Review";

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://secret-coast-72696.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-10 px-10">
      <h2 className="text-4xl text-primary font-bold text-center">
        Our Client Reviews
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
        {reviews.slice(0, 6).map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
