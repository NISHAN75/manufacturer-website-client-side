import React from "react";
import { FaFlag } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <section className="my-24 px-10">
      <h2 className="text-5xl text-center font-bold text-primary uppercase">
        millions business trust us
      </h2>
      <p className="text-2xl text-center font-bold text-primary mt-5">
        try to understand user experctation{" "}
      </p>

      <div className="summary-card grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10  my-10">
        <div class="card  bg-base-100">
          <figure class="px-10 pt-10">
            <FaFlag className="text-primary text-8xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary text-6xl">72</h2>
            <p className="text-3xl text-primary">countries </p>
          </div>
        </div>
        <div class="card  bg-base-100 ">
          <figure class="px-10 pt-10">
            <FaFlag className="text-primary text-8xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary text-6xl">72</h2>
            <p className="text-3xl text-primary">complete projects+</p>
          </div>
        </div>
        <div class="card  bg-base-100">
          <figure class="px-10 pt-10">
            <FaFlag className="text-primary text-8xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary text-6xl">72</h2>
            <p className="text-3xl text-primary">happy clients+ </p>
          </div>
        </div>
        <div class="card  bg-base-100">
          <figure class="px-10 pt-10">
            <FaFlag className="text-primary text-8xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-primary text-6xl">72</h2>
            <p className="text-3xl text-primary">feedbacks+ </p>
          </div>
        </div>
      </div>

      <div className="q-area grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 shadow-xl p-20">
        <div className="q-area">
          <h2 className="text-4xl font-bold text-primary mb-5">
            Have any question about us or get a products request ?
          </h2>
          <p className="text-2xl text-secondary">
            {" "}
            Don't hesitate to contact us{" "}
          </p>
        </div>
        <div className="q-btn flex justify-evenly items-center">
        <button class="btn btn-primary px-20 text-white hover:bg-white hover:text-black">Don't hesitate to</button>
        <button class="btn btn-secondary px-10 text-white hover:bg-white hover:text-black">contact us  </button>
      </div>
      </div>
      
    </section>
  );
};

export default BusinessSummary;
