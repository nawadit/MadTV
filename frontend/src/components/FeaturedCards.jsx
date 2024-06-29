import React from "react";

export default function FeaturedCards(props) {
  return (
    <div>
      <div
        className={`w-full h-72 bg-[url(${props.backgroundURL})] bg-cover flex mb-5`}
      >
        <div className="self-end bg-slate-800 w-full text-slate-50 text-xl shadow-custome_for_featured">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}
