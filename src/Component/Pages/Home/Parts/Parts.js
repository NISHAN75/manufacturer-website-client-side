import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <h1 className="text-3xl text-center font-bold text-primary">
        Our Services
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 px-10 my-16">
        {services.slice(0, 6).map((service) => (
          <Part key={service._id} service={service}></Part>
        ))}
      </div>
    </section>
  );
};

export default Parts;
