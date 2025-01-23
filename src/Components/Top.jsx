import React from "react";

export default function Top() {
  return (
    <div className="bg-blue-900 text-white  flex justify-end px-4 h-11">
      <div className="flex  gap-4">
        <a className="flex items-center justify-center" href="/">
          <i className="fa-regular fa-envelope"></i>
          <p className="mx-2 mb-1">www.registerkaro.in</p>
        </a>
        <div className="flex items-center " href="/">
        <i className="fa-solid fa-phone"></i>
          <p className="mx-2 mb-1">+91-8447746183</p>
        </div>
        <div className="flex gap-2 items-center" href="/">
        
       <a href="/"><i className="fa-brands fa-instagram"></i></a>      
       <a href="/"><i className="fa-brands fa-facebook"></i></a>            
       <a href="/"><i className="fa-brands fa-twitter"></i></a>           
       <a href="/"><i className="fa-brands fa-pinterest"></i> </a>    
        </div>
      </div>
    </div>
  );
}
