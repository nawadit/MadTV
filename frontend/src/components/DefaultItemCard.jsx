import React from "react";
/*
props ={
image:value,
rating:value,
quality:value,
name:value,
description:value,
}
*/

export default function ItemCard(props) {
  return (
    <div className="flex overflow-hidden bg-slate-800 h-fit text-slate-50 m-3 p-1">
      <div className="h-40 w-32 bg-red-900">
        <img src={props.image} alt="poster" className="max-w-32 max-h-40" />
      </div>
      <div className="w-full h-40 flex flex-col justify-between px-6">
        <div className="flex justify-between ">
          <p className="text-xs self-center">{props.rating}</p>
          <p className="text-xs self-center">{props.quality}</p>
        </div>
        <div className="">
          <p className="text-l font-semibold shrink-0">{props.name}</p>
        </div>
        <div className="">
          <p className="overflow-clip max-h-11 flex-1 text-xs ">{props.description}</p>
        </div>

        <div className="">
          <button className=" mt-2 rounded-md p-3 bg-slate-700">
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
}
