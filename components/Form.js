import React, { useState, useEffect } from 'react';

function Form({ buttonText }) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState(null);
  
  // Regex simples para validar e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY
  } = window.env
    
  useEffect(() => {
    // Inicializa EmailJS usando a variável de ambiente
    window.emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  
  function handleChange(e) {
    const value = e.target.value;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const templateParams = {
      email,
    };
    
    window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={handleChange}
          className={
            email.length === 0
              ? ''
              : isValid
              ? 'input-valid'
              : 'input-invalid'
          }
        />
      </div>
      <div>
        <button type = "submit"
          disabled = {!isValid } > { buttonText } </button>
      </div>
      {status === 'success' && <p className="success">E-mail enviado com sucesso!</p>}
      {status === 'error' && <p className="error">Ocorreu um erro. Tente novamente.</p>}
    </form>
  );
}

export default Form;

