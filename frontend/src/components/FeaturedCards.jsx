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
        className="w-full aspect-[2.5] bg-cover flex items-end"
      >
        <div className=" bg-opacity-80 bg-slate-800 shadow-slate-900 text-slate-50 flex flex-col text-lg justify-center pb-10 pt-10 shadow-md   pl-10 w-full">
          <p className=" mb-1 font-bold text-3xl">{name}</p>
          <div className=" bg-black w-fit py-2 px-4 rounded-lg">
            <span className="text-gray-500  text-2xl">Click to play </span>
            <i className="fa-solid fa-play hover:scale-110 active:scale-100"></i>
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
