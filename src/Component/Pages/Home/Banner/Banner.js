import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div className="relative">
        <img src="https://img.freepik.com/free-photo/cyclist_1150-7484.jpg?t=st=1653365226~exp=1653365826~hmac=36fc1f118ade3f81cb2ee682885eb5b075b12875d61636c0d1ddef6793fdef88&w=740" />
        <div className="banner-info absolute text-left top-64  left-20">
          <h2 className="text-6xl font-bold text-emerald-500 mb-8">
            Distance means so little
            <br /> when you want to reach.
          </h2>
          <p className="text-xl font-bold text-black">
            Cycles are our best friends, in fact not only ours but best for
            mother Earth as
            <br /> well. We ride cars and bikes all day and every day to do our
            daily household
            <br /> activities or to go to our work. But we must take out time to
            ride a bicycle too!
          </p>
          <button class="btn btn-primary mt-5 px-10 text-white hover:bg-white hover:text-black">
          contact us  
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="https://img.freepik.com/free-photo/cyclist_1150-7486.jpg?t=st=1653365976~exp=1653366576~hmac=caf97d016d41f826ef950a93367045e63f74d09dbab2f027acc89904d14882b6&w=740" />
        <div className="banner-info absolute text-left top-64  left-20">
          <h2 className="text-6xl font-bold text-emerald-500 mb-8">
            Distance means so little
            <br /> when you want to reach.
          </h2>
          <p className="text-xl font-bold text-black">
            Cycles are our best friends, in fact not only ours but best for
            mother Earth as
            <br /> well. We ride cars and bikes all day and every day to do our
            daily household
            <br /> activities or to go to our work. But we must take out time to
            ride a bicycle too!
          </p>
          <button class="btn btn-primary mt-5 px-10 text-white hover:bg-white hover:text-black">
            Warning
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="https://img.freepik.com/free-photo/cyclist_1150-7487.jpg?t=st=1653365226~exp=1653365826~hmac=c48b232821af0642de02445a939fcd806ef52c41f2e7bd98a2585a7208c6d0cc&w=740" />
        <div className="banner-info absolute text-left top-64  left-20">
          <h2 className="text-6xl font-bold text-emerald-500 mb-8">
            Distance means so little
            <br /> when you want to reach.
          </h2>
          <p className="text-xl font-bold text-black">
            Cycles are our best friends, in fact not only ours but best for
            mother Earth as
            <br /> well. We ride cars and bikes all day and every day to do our
            daily household
            <br /> activities or to go to our work. But we must take out time to
            ride a bicycle too!
          </p>
          <button class="btn btn-primary mt-5 px-10 text-white hover:bg-white hover:text-black">
            Warning
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
