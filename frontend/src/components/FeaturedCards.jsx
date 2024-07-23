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
      <div className="bg-slate-800 w-full text-slate-50 text-lg shadow-custome_for_featured">
        <p>{props.name}</p>
      </div>
    </div>
  );
}
