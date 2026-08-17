export default function Ropa() {
  return (
<div className="pagina-ropa">
  <section className="banner-ropa">
    <img src="./imagenes/Ropa/Banner 2.jpg" alt="Banner de ropa para mascotas" className="imagenes-banner2" />
    <div className="banner-contenido">
      <h1>Ropa para Perros y Gatos</h1>
      <span>
        Encuentra polos, abrigos, pijamas y disfraces para que tu mascota
        se vea cómoda y adorable.
      </span>
      <a href="#productos-ropa">Ver productos</a>
    </div>
  </section>
  <main className="contenido">
    <aside className="filtros">
      <h2>FILTROS</h2>
      <h3>Tipo</h3>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="polo" /> Polos</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="abrigo" /> Abrigos</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="pijama" /> Pijamas</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="camiseta" /> Camiseta manga larga</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="vestido" /> Vestidos</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="disfraz" /> Disfraces</label>
      <hr />
      <h3>Talla</h3>
      <label><input type="checkbox" className="filtro-input" data-filtro="talla" defaultValue={1} /> 1</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="talla" defaultValue={2} /> 2</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="talla" defaultValue={3} /> 3</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="talla" defaultValue={4} /> 4</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="talla" defaultValue={5} /> 5</label>
      <hr />
      <h3>Color</h3>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="marron" /> Marrón</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="azul" /> Azul</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="negro" /> Gris</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="verde" /> Blanco</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="amarillo" /> Crema</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="morado" /> Morado</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="rosado" /> Rosado</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="color" defaultValue="rojo" /> Rojo</label>
      <button type="button" id="Limpiar-filtros">Limpiar filtros</button>
    </aside>
    <div className="contenido-productos">
      <div className="selector-mascota">
        <button type="button" className="boton-mascota activo-mascota" id="boton-perros">
          🐶 Perros
        </button>
        <button type="button" className="boton-mascota" id="boton-gatos">
          🐱 Gatos
        </button>
      </div>
      <p className="texto-mascota" id="texto-mascota">
        🐾 Mostrando productos para <strong>Perros</strong>
      </p>
      <section className="productos" id="productos-ropa">
        <div className="card" data-mascota="perro" data-tipo="polo" data-talla={1} data-color="marron">
          <img src="./imagenes/Ropa/Perro/imagen 1.png" alt="Polo animal print para perro" />
          <h3>Polo Animal Print</h3>
          <p>Diseño animal print cómodo y moderno.</p>
          <h2>S/ 29.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="polo" data-talla={2} data-color="gris">
          <img src="./imagenes/Ropa/Perro/Imagen 2.png" alt="Polo deportivo para perro" />
          <h3>Polo Deportivo</h3>
          <p>Diseño casual para paseos y días frescos.</p>
          <h2>S/ 32.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="polo" data-talla={2} data-color="rosado">
          <img src="./imagenes/Ropa/Perro/Imagen 3.png" alt="Polo rosado para perro" />
          <h3>Polo Rosado</h3>
          <p>Suave y cómodo para uso diario.</p>
          <h2>S/ 29.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="pijama" data-talla={3} data-color="morado">
          <img src="./imagenes/Ropa/Perro/Imagen 4.png" alt="Pijama morada para perro" />
          <h3>Pijama Animal Print</h3>
          <p>Pijama abrigadora con diseño estampado.</p>
          <h2>S/ 36.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="pijama" data-talla={3} data-color="azul">
          <img src="./imagenes/Ropa/Perro/Imagen 5.png" alt="Pijama azul para perro" />
          <h3>Pijama Azul</h3>
          <p>Ideal para mantener a tu mascota abrigada.</p>
          <h2>S/ 36.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="polo" data-talla={2} data-color="azul">
          <img src="./imagenes/Ropa/Perro/Imagen 6.png" alt="Polo azul estampado para perro" />
          <h3>Polo Floral Azul</h3>
          <p>Diseño alegre para paseos y días soleados.</p>
          <h2>S/ 28.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="abrigo" data-talla={3} data-color="verde">
          <img src="./imagenes/Ropa/Perro/Imagen 7.png" alt="Abrigo verde para perro" />
          <h3>Abrigo Verde</h3>
          <p>Perfecto para proteger del frío.</p>
          <h2>S/ 44.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="abrigo" data-talla={4} data-color="crema">
          <img src="./imagenes/Ropa/Perro/Imagen 8.png" alt="Abrigo crema para perro" />
          <h3>Abrigo Clásico</h3>
          <p>Prenda elegante y abrigadora.</p>
          <h2>S/ 46.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="abrigo" data-talla={3} data-color="negro">
          <img src="./imagenes/Ropa/Perro/Imagen 9.png" alt="Abrigo negro para perro" />
          <h3>Abrigo Deportivo</h3>
          <p>Diseño moderno para días fríos.</p>
          <h2>S/ 45.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="camiseta" data-talla={2} data-color="azul">
          <img src="./imagenes/Ropa/Perro/Imagen 10.png" alt="Camiseta azul estampada para perro" />
          <h3>Camiseta Celeste</h3>
          <p>Ligera y fresca para todos los días.</p>
          <h2>S/ 31.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="vestido" data-talla={2} data-color="rosado">
          <img src="./imagenes/Ropa/Perro/Imagen 11.png" alt="Vestido rosado para perro" />
          <h3>Vestido Floral</h3>
          <p>Diseño delicado para ocasiones especiales.</p>
          <h2>S/ 39.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="disfraz" data-talla={3} data-color="negro">
          <img src="./imagenes/Ropa/Perro/Imagen 12.png" alt="Disfraz vaca para perro" />
          <h3>Disfraz de Vaquita</h3>
          <p>Divertido disfraz para ocasiones especiales.</p>
          <h2>S/ 45.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="camiseta" data-talla={3} data-color="blanco">
          <img src="./imagenes/Ropa/Perro/Imagen 13.png" alt="Camiseta estampada para perro" />
          <h3>Camiseta Floral</h3>
          <p>Estampado fresco y colorido.</p>
          <h2>S/ 32.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="abrigo" data-talla={1} data-color="morado">
          <img src="./imagenes/Ropa/Perro/Imagen 14.png" alt="Abrigo morado para perro" />
          <h3>Abrigo Morado</h3>
          <p>Suave y cálido para perros pequeños.</p>
          <h2>S/ 42.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="abrigo" data-talla={3} data-color="gris">
          <img src="./imagenes/Ropa/Perro/Imagen 15.png" alt="Abrigo gris para perro" />
          <h3>Abrigo Rayado</h3>
          <p>Diseño cómodo y moderno.</p>
          <h2>S/ 43.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="camiseta" data-talla={2} data-color="rosado">
          <img src="./imagenes/Ropa/Perro/Imagen 16.png" alt="Camiseta rosada para perro" />
          <h3>Camiseta Rayada</h3>
          <p>Prenda ligera con diseño rayado.</p>
          <h2>S/ 30.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="polo" data-talla={1} data-color="morado">
          <img src="./imagenes/Ropa/Perro/Imagen 17.png" alt="Polo morado para perro" />
          <h3>Polo Morado</h3>
          <p>Cómodo y ligero para uso diario.</p>
          <h2>S/ 29.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="camiseta" data-talla={2} data-color="marron">
          <img src="./imagenes/Ropa/Perro/Imagen 18.png" alt="Camiseta elegante para perro" />
          <h3>Camiseta Elegante</h3>
          <p>Diseño clásico y sofisticado.</p>
          <h2>S/ 34.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="abrigo" data-talla={3} data-color="marron">
          <img src="./imagenes/Ropa/Perro/Imagen 19.png" alt="Abrigo marrón para perro" />
          <h3>Abrigo Marrón</h3>
          <p>Ideal para paseos durante el invierno.</p>
          <h2>S/ 44.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="abrigo" data-talla={2} data-color="azul">
          <img src="./imagenes/Ropa/Perro/Imagen 20.png" alt="Abrigo azul para perro" />
          <h3>Abrigo Multicolor</h3>
          <p>Diseño cálido y divertido.</p>
          <h2>S/ 46.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="perro" data-tipo="camiseta" data-talla={1} data-color="amarillo">
          <img src="./imagenes/Ropa/Perro/Imagen 21.png" alt="Camiseta amarilla para perro" />
          <h3>Camiseta Amarilla</h3>
          <p>Diseño fresco para perros pequeños.</p>
          <h2>S/ 30.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="abrigo" data-talla={2} data-color="azul">
          <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Abrigo para gato" />
          <h3>Abrigo Tejido</h3>
          <p>Ideal para los días fríos.</p>
          <h2>S/ 49.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="pijama" data-talla={3} data-color="negro">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Pijama para gato" />
          <h3>Pijama Estrellas</h3>
          <p>Para un descanso perfecto.</p>
          <h2>S/ 35.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="camiseta" data-talla={4} data-color="verde">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Camiseta manga larga para gato" />
          <h3>Camiseta Manga Larga</h3>
          <p>Para días frescos.</p>
          <h2>S/ 59.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="disfraz" data-talla={5} data-color="rojo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Disfraz para gato" />
          <h3>Disfraz Diablito</h3>
          <p>Para ocasiones especiales.</p>
          <h2>S/ 44.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={1} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        <div className="card" data-mascota="gato" data-tipo="polo" data-talla={5} data-color="amarillo">
            <img src="./imagenes/Ropa/Gato/Imagen 1.png" alt="Polo casual para gato" />
          <h3>Polo Casual</h3>
          <p>Cómodo y elegante.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
      </section>
    </div>
  </main>
</div>
  )
}





