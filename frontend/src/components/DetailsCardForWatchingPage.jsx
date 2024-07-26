import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailsCardForWatchingPage(props) {
    const [link, setLink] = useState("");

    useEffect(() => {
      setLink("/watch?q=" + props.id);
    }, []);
  
    // console.log(`from ItemCard, id = ${props.id}`);
  
    const navigate = useNavigate();
   
  
    return (
      <div>
          <div className="flex items-center bg-slate-800 h-fit max-w-full text-slate-50 m-3 p-1">
            <div className="h-40  min-w-28 bg-red-900">
              <img src={props.image} alt="poster" className="w-full h-40" />
            </div>
            <div className="w-full h-fit flex flex-col justify-between px-6">
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
                  <p className=" h-fit flex-1 text-xs ">
                    {props.description}
                  </p>
                )}
              </div>
  
              
            </div>
          </div>
     
      </div>
    );
}
