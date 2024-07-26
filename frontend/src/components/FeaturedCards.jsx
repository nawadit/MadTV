import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function FeaturedCards({ id, backgroundURL, name }) {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(`/watch?q=${id}`);
  }, [id]);

  return (
    <a href={link}>
      <div
        style={{ backgroundImage: `url(${backgroundURL})` }}
        className="w-full min-h-72 bg-cover flex items-end"
      >
        <div className="bg-slate-800 w-full text-slate-50 flex flex-col text-lg justify-center shadow-custome_for_featured">
          <p className="ml-4 mb-1 font-semibold">{name}</p>
          <div>
            <span className="text-gray-500 ml-4">Click to play</span>
            <i className="fa-solid fa-play pb-4 ml-1 hover:scale-110 active:scale-100"></i>
          </div>
        </div>
      </div>
    </a>
  );
}

FeaturedCards.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
