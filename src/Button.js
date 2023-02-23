import React from "react";

const Button = ({ title = "Zen Tech" }) => {
  /* if you use this curly brases,
     100%  this return keyword nessesory
    *This Title is Actually a variable And 
     injected in belew one 
     */
  return (
    <>
      <button className='button'>{title}</button>
    </>
  );
};

export default Button;
