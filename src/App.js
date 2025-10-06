import React from "react";
import "./index.css";

function App() {
  return (
    <div className="app">
      {/* ===== Encabezado ===== */}
      <header className="header">
        <div className="logo">URBANSTYLE</div>
        <nav className="nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* ===== Banner principal ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>MODA MASCULINA MODERNA</h1>
          <p>Explora nuestra colección urbana, cómoda y auténtica.</p>
          <button>Ver colección</button>
        </div>
      </section>

      {/* ===== Catálogo ===== */}
      <section id="catalogo" className="catalogo">
        <h2>CATÁLOGO DESTACADO</h2>
        <div className="grid">
          <div className="card">
            <img src="https://i.ibb.co/r0g2WmV/ropa1.jpg" alt="Camisa" />
            <h3>Camisa Urbana</h3>
            <p>$89.900</p>
          </div>
          <div className="card">
            <img src="https://i.ibb.co/j5kWbXk/ropa2.jpg" alt="Chaqueta" />
            <h3>Chaqueta Street</h3>
            <p>$149.900</p>
          </div>
          <div className="card">
            <img src="https://i.ibb.co/BqzZT5p/ropa3.jpg" alt="Pantalón" />
            <h3>Pantalón Slim</h3>
            <p>$119.900</p>
          </div>
        </div>
      </section>

      {/* ===== Nosotros ===== */}
      <section id="nosotros" className="nosotros">
        <h2>NOSOTROS</h2>
        <p>
          En <strong>UrbanStyle</strong> creemos que la moda debe reflejar tu
          personalidad. Somos una marca 100% colombiana que combina estilo,
          comodidad y actitud.
        </p>
      </section>

      {/* ===== Contacto ===== */}
      <footer id="contacto" className="footer">
        <h3>CONTÁCTANOS</h3>
        <p>📍 Tunja, Colombia</p>
        <p>📧 contacto@urbanstyle.co</p>
        <p>© 2025 UrbanStyle. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
