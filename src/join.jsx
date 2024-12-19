import React, { useState } from "react";

const Form = () => {
  const [status, setStatus] = useState(""); 

  

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Submit Your CV</h2>
      <form
  action="https://formspree.io/f/mgvejyzg"
  method="POST"
  enctype="multipart/form-data"
>
  <label>
    Your email:
    <input type="email" name="email" />
  </label>
  <label>
    Your file:
    <input type="file" name="upload" />
  </label>
  <button type="submit">Send</button>
</form>

   </div>   
)
}


export default Form;
