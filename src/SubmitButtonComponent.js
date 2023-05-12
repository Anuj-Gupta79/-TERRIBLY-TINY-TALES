import React, { useState } from "react";
// import Histogram from "./Histogram";
import { useNavigate } from 'react-router-dom';



export default function SubmitButtonComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loadHandle = () => {
    setIsLoading(!isLoading);
    navigate('/submit');
  };

//   <Histogram />
  return (
    // <div>
    //   {isLoading ? (
    //     <Histogram />
      
    //   ) : (
    //     <button
    //       onClick={loadHandle}
    //       style={{
    //         margin: "300px",
    //         padding: "20px",
    //         width : "30vh",
    //         borderRadius: "5px",
    //         cursor: "pointer",
    //       }}
    //     >
    //         <h1>Submit</h1>
    //     </button>
    //   )}
    // </div>
    <button
    onClick={loadHandle}
    style={{
      margin: "300px",
      padding: "20px",
      width : "30vh",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
      <h1>Submit</h1>
  </button>
  );
}
