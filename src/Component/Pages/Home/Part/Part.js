import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Part = ({ service }) => {
  const { _id, name, img, description, minimum, available, price } = service;
  const navigate=useNavigate();
  const navigateToPartDetalias= id =>{
    navigate(`/services/${id}`)
  }
  
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="parts img"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title"><span className="text-primary font-bold text-xl mr-3">Part name:</span>{name}</h2>
        <p className="text-zinc font-bold text-xl ">{description}</p>
        <p className="text-zinc font-bold"><span className="text-xl mr-3 text-primary">minimum Order:</span><span>{minimum}</span></p>
        <p className="text-zinc font-bold"><span className="text-xl mr-3 text-primary">Available:</span><span>{available}</span></p>
        <p className="text-zinc font-bold"><span className="text-xl mr-3 text-primary">Price:</span><span>${price}</span></p>
        <div class="card-actions justify-center mt-3">
          <button   onClick={ () => navigateToPartDetalias (_id)} class=" btn  btn-primary hover:bg-white hover:text-black px-10"><Link to="/login" >Buy Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Part;