import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function DetailsCardForWatchingPage({ id, image, rating, quality, name, description }) {
  // const [link, setLink] = useState("");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setLink(`/watch?q=${id}`);
  // }, [id]);

  return (
    <div className="flex items-center bg-slate-800 h-fit max-w-full text-slate-50 m-3 p-1">
      <div className="h-40 min-w-28 bg-red-900">
        <img src={image} alt={`${name} poster`} className="w-full h-40" />
      </div>
      <div className="w-full h-fit flex flex-col justify-between px-6">
        <div className="flex justify-between">
          {rating && <p className="text-xs self-center">{rating}</p>}
          {quality && <p className="text-xs self-center">{quality}</p>}
        </div>
        <div>
          {name && <p className="text-l font-semibold shrink-0">{name}</p>}
        </div>
        <div>
          {description && <p className="h-fit flex-1 text-xs">{description}</p>}
        </div>
      </div>
    </div>
  );
}

DetailsCardForWatchingPage.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.string,
  quality: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
