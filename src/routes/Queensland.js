import React, { useState } from "react";
import "../App.css";

function Queensland() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  return (
    <div>
      <h1>Queensland </h1>
      <button onClick={onClick}>Show Info</button>
      {showText ? <Text /> : null}
      </div>
  );
}
//const divStyleText = {width:'25%'};
const Text = () => 

//<div style ={divStyleText} className ="infoNSW">
<div className="infoNSW">

  <p>
    
    Queensland is a state situated in northeastern Australia, and is the second-largest and third-most populous Australian state. It is bordered by the Northern Territory, South Australia, and New South Wales to the west, south-west and south respectively. To the east, Queensland is bordered by the Coral Sea and the Pacific Ocean.
  </p>
 
</div>

export default Queensland;