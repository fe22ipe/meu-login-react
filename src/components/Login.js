import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simula uma requisição de login
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="login-container">
      <h2>LOGIN DO SISTEMA</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="seu@email.com" 
            required
          />
        </div>
        
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button 
          type="submit" 
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;