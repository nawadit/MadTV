import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/*
props ={
key:Id,
image:value,
rating:value,
quality:value,
name:value,
description:value,
}
*/

export default function ItemCard(props) {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink("/watch?q=" + props.id);
  }, []);

  console.log(`from ItemCard, id = ${props.id}`);

  const navigate = useNavigate();
 

  return (
    <div>
      <a href={link}>
        <div className="flex overflow-hidden bg-slate-800 h-fit text-slate-50 m-3 p-1">
          <div className="min-h-40 min-w-28 bg-red-900">
            <img src={props.image} alt="poster" className="w-full max-h-40" />
          </div>
          <div className="w-full h-40 flex flex-col justify-between px-6">
            <div className="flex justify-between ">
              {props.rating && (
                <p className="text-xs self-center">{props.rating}</p>
              )}
              {props.quality && (
                <p className="text-xs self-center">{props.quality}</p>
              )}{" "}
            </div>
            <div className="">
              {props.name && (
                <p className="text-l font-semibold shrink-0">{props.name}</p>
              )}
            </div>
            <div className="">
              {props.description && (
                <p className="overflow-clip max-h-11 flex-1 text-xs ">
                  {props.description}
                </p>
              )}
            </div>

            <div className="">
              <button className=" mt-2 rounded-md p-3 bg-slate-700">
                Watch now
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
