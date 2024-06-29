import React from "react";

function NavigationBar() {
  return (
    <div className="w-full h-14 bg-slate-700 flex justify-between p-5">
      <div className="flex">
        <div className="h-fit self-center text-slate-50"> ☰ </div>
        <div className="h-14 ml-3 self-center">
          {" "}
          <img
            src="./src/assets/site-logo.png"
            alt="site logo"
            className="h-12"
          />
        </div>
      </div>
<div className="flex">
<div className="self-center text-xl"> 🔍 </div>
<div className="self-center text-xl ml-3 ">👤</div>
</div>
      
    </div>
  );
}

export default NavigationBar;
