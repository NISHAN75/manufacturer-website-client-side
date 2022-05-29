import React from "react";

const About = () => {
  return (
    <section className="my-10">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-photo/photo-attractive-bearded-young-man-with-cherful-expression-makes-okay-gesture-with-both-hands-likes-something-dressed-red-casual-t-shirt-poses-against-white-wall-gestures-indoor_273609-16239.jpg?t=st=1653765125~exp=1653765725~hmac=55357b12f55a3971c426d83861a46483fe259020690e0ffcd0dbbe48f8b741af&w=740"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-left px-10 ">
            <h2 className="text-primary font-bold  text-4xl">About Us</h2>
            <p className=" text-primary mt-5 mb-5 font-bold">
              “Cyclers see considerably more of this beautiful world than any
              other class of
              <br /> citizens. A good bicycle, well applied, will cure most ills
              this flesh is heir to”
              <br />
              <span className="font-bold text-secondary">
                ---C.E.O Nishan Das
              </span>
            </p>
            <button className="btn btn-primary mt-5 px-10 text-white hover:bg-white hover:text-black">
              Buy Parts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
