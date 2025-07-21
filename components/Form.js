import React, { useState, useEfect } from 'react';

function Form(){
  const [email, setEmail] = useState("");
  
  return (
    <form className="form" action="/">
      <div>
        <input type="email" placeholder="Seu e-mail" />
      </div>
      
      <div>
        <button disabled={!email}>Solicitar orçamento</button>
      </div>
    </form>
  );
};
export default Form;
