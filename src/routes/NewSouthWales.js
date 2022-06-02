import React, { useState } from "react";
function NewSouthWales() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  return (
    <div>
      <h1>NewSouthWales </h1>
      <button onClick={onClick}>Info</button>
      {showText ? <Text /> : null}
    </div>
  );
}
const divStyle = {width:'25%', background: './images/NSW.png'};
const Text = () => 

<div style ={divStyle}>
  <p>
  New South Wales (commonly abbreviated as NSW) is a state on the east coast of Australia. It borders Queensland to the north, Victoria to the south, and South Australia to the west. Its coast borders the Coral and Tasman Seas to the east. The Australian Capital Territory is an enclave within the state. New South Wales' state capital is Sydney, which is also Australia's most populous city.
    </p>
  
</div>;
export default NewSouthWales;