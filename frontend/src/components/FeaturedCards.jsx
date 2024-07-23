import React from "react";

/*
props :{
backgroundURL:value,
name:value
}
 */

export default function FeaturedCards(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundURL})` }}
      className={`w-full min-h-72 bg-cover flex items-end`}
    >
      <div className="bg-slate-800 w-full text-slate-50 flex flex-col text-lg justify-center shadow-custome_for_featured">
        <p className="ml-4 mb-1 font-semibold">{props.name}</p>
        <div>
          <span className="text-gray-500 ml-4">Click to play</span>
          <i class="fa-solid fa-play pb-4 ml-1 hover:scale-110 active:scale-100"></i>
        </div>
      </div>
    </div>
  );
}
