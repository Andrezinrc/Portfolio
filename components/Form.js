import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Form() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState(null);
  
  // Regex simples para validar e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      email: email,
    };
    
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setEmail('');
      },
      (error) => {
        console.log('FAILED...', error);
        setStatus('error');
      }
    );
  };
  
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
        <button type="submit" disabled={!isValid}>
          Solicitar orçamento
        </button>
      </div>

      {status === 'success' && <p className="success">E-mail enviado com sucesso!</p>}
      {status === 'error' && <p className="error">Ocorreu um erro. Tente novamente.</p>}
    </form>
  );
}

export default Form;
