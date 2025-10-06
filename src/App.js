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
            <img src="https://undergoldapparel.com/cdn/shop/files/7_b5eba40a-e3fe-48e7-a01c-0ce0761a5664.jpg?v=1755708534&width=600" alt="Camisa" />
            <h3>Camisa Urbana</h3>
            <p>$89.900</p>
          </div>
          <div className="card">
            <img src="https://undergoldapparel.com/cdn/shop/files/7_a52722ed-f084-4898-a8c6-9aec7461b78e.jpg?v=1755707366&width=600" alt="Chaqueta" />
            <h3>Chaqueta Street</h3>
            <p>$149.900</p>
          </div>
          <div className="card">
            <img src="https://undergoldapparel.com/cdn/shop/files/7_590817cd-1e50-4057-bf5d-2316c05a1769.jpg?v=1755708779&width=600" alt="Pantalón" />
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
        <p>📧 juanabril@gmail.com</p>
        <p>© 2025 UrbanStyle. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
