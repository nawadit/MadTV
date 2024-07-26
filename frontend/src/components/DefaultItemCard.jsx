import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ItemCard({
  id,
  image,
  rating,
  quality,
  name,
  description,
}) {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLink(`/watch?q=${id}`);
  }, [id]);

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <div> 
      {(rating > 0) && (<div className="flex overflow-hidden bg-slate-800 h-fit text-slate-50 m-3 p-1">
      <div
        className="min-h-40 min-w-28 bg-red-900 "
        onClick={handleButtonClick}
      >
        <img src={image} alt={`${name} poster`} className="w-full max-h-40" />
      </div>
      <div className="w-full h-40 flex flex-col justify-between px-6">
        <div className="flex justify-between">
          {rating && <p className="text-xs self-center">{rating}</p>}
          {quality && <p className="text-xs self-center">{quality}</p>}
        </div>
        <div>
          {name && <p className="text-l font-semibold shrink-0">{name}</p>}
        </div>
        <div>
          {description && (
            <p className="overflow-clip max-h-11 flex-1 text-xs">
              {description}
            </p>
          )}
        </div>
        <div>
          <button
            onClick={handleButtonClick}
            className="mt-2 rounded-md p-3 bg-slate-700"
          >
            Watch now
          </button>
        </div>
      </div>
    </div>)}
    </div>
    
  );
}

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.string,
  quality: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
