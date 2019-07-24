import React from 'react'

const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <h1>Mapa do Bairro App</h1>
      </header>
    )
  }

export default Header