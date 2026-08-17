import FiltrosCatalogo from "../components/FiltrosCatalogo";
import { useState } from "react";

export default function Ropa() {
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState("perro");
const [tipoElegido, setTipoElegido] = useState("todos");
const [tallaElegida, setTallaElegida] = useState("todas");
const [colorElegido, setColorElegido] = useState("todos");

function cambiarTipo(evento) {
  setTipoElegido(evento.target.value);
}
function cambiarTalla(evento) {
  setTallaElegida(evento.target.value);
}
function cambiarColor(evento) {
  setColorElegido(evento.target.value);
}
  return (
<div className="pagina-ropa">
  <section className="banner-ropa">
    <img src= "./imagenes/Ropa/Banner 2.jpg" alt="Banner de ropa para mascotas" className="imagenes-banner2" />
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
      <label><input type="radio" name="tipo" value="polo" className="filtro-input" onChange={cambiarTipo} checked={tipoElegido === "polo"}
      /> 
      Polos
      </label>
      
      <label><input type="radio" name="tipo" value="sueter" className="filtro-input" onChange={cambiarTipo} checked={tipoElegido === "sueter"} /> 
      Sueters
      </label>

      <label><input type="radio" name="tipo" value="buzo" className="filtro-input" onChange={cambiarTipo} checked={tipoElegido === "buzo"} /> 
      Buzos
      </label>

      <label><input type="radio" name="tipo" value="camiseta" className="filtro-input" onChange={cambiarTipo} checked={tipoElegido === "camiseta"} /> 
      Camisetas
      </label>

      <label><input type="radio" name="tipo" value="vestido" className="filtro-input" onChange={cambiarTipo} checked={tipoElegido === "vestido"} /> 
      Vestidos
      </label>

      <label><input type="radio" name="tipo" value="disfraz" className="filtro-input" onChange={cambiarTipo} checked={tipoElegido === "disfraz"} /> 
      Disfraces
      </label>

      <hr />
      <h3>Talla</h3>
      <label><input type="radio" name="talla" value="1" className="filtro-input" onChange={cambiarTalla} checked={tallaElegida === "1"}  
      />1
      </label>
      <label><input type="radio" name="talla" value="2" className="filtro-input" onChange={cambiarTalla} checked={tallaElegida === "2"}  
      />
      2
      </label>
      <label><input type="radio" name="talla" value="3" className="filtro-input" onChange={cambiarTalla} checked={tallaElegida === "3"}  
      />
      3
      </label>
      <label><input type="radio" name="talla" value="4" className="filtro-input" onChange={cambiarTalla} checked={tallaElegida === "4"}  
      />
      4
      </label>
      <label><input type="radio" name="talla" value="5" className="filtro-input" onChange={cambiarTalla} checked={tallaElegida === "5"}  
      />
      5
      </label>
      <hr />
      <h3>Color</h3>
      <label><input type="radio" name="color" value="marron" className="filtro-input" onChange={cambiarColor} checked={colorElegido === "marron"}
     />Marrón
      </label>
      <label>
      <input type="radio" name="color" value="azul" className="filtro-input" onChange={cambiarColor} checked={colorElegido === "azul"}
      /> Azul
      </label>
      <label>
      <input type="radio" name="color" value="gris" className="filtro-input" onChange={cambiarColor} checked={colorElegido === "gris"} 
      />  Gris
      </label>
      <label>
      <input type="radio" name="color" value="blanco" className="filtro-input" onChange={cambiarColor} checked={colorElegido === "blanco"} 
      /> Blanco
      </label>
      <label>
      <input type="radio" name="color" value="verde" className="filtro-input" onChange={cambiarColor} checked={colorElegido === "verde"} 
     /> Verde
     </label>
      <label>
     <input type="radio" name="color" value="rosado" className="filtro-input" onChange={cambiarColor} checked={colorElegido === "rosado"}
      /> Rosado
      </label>
      <label>
     <input type="radio" name="color" value="rojo" className="filtro-input" onChange={cambiarColor} checked={colorElegido === "rojo"}
      /> Rojo
      </label>
     <label>
     <input type="radio" name="color" value="amarillo" className="filtro-input" onChange={cambiarColor}checked={colorElegido === "amarillo"}
     />
      Amarillo
     </label>
      
    <button
     type="button"
    id="Limpiar-filtros"
    onClick={() => {
    setTipoElegido("todos");
    setTallaElegida("todas");
    setColorElegido("todos");
    }}
   >
    Limpiar filtros
    </button>
    </aside>

    <div className="contenido-productos">
      <div className="selector-mascota">

       <button
         type="button"
         className={`boton-mascota ${mascotaSeleccionada === "perro" ? "activo-mascota" : ""}`}
         id="boton-perros"
         onClick={() => setMascotaSeleccionada("perro")}
          >
         🐶 Perros
        </button>

        <button
        type="button"
        className={`boton-mascota ${mascotaSeleccionada === "gato" ? "activo-mascota" : ""}`}
       id="boton-gatos"
        onClick={() => setMascotaSeleccionada("gato")}
       >
        🐱 Gatos
       </button>
      
      </div>
      <p className="texto-mascota" id="texto-mascota">
        🐾 Mostrando productos para{" "}
       <strong>
        {mascotaSeleccionada === "perro" ? "Perros" : "Gatos"}
       </strong>
      </p>
   
      <section className="productos" id="productos-ropa">

      {mascotaSeleccionada === "perro" && (
      <>

      {(tipoElegido === "todos" || tipoElegido === "polo") && 
       (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
      (colorElegido === "todos" || colorElegido === "marron") && (
     <div
        className="card" data-mascota="perro" data-tipo="polo" data-talla="1,2,3,4,5" data-color="marron"
        >
          <img src="./imagenes/Ropa/Perro/imagen 1.png" alt="Polo animal print para perro" />
          <h3>Polo Animal Print</h3>
          <p>Diseño animal print cómodo y moderno.</p>
          <h2>S/ 29.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") &&
       (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "gris") && (
        <div 
        className="card" data-mascota="perro" data-tipo="polo" data-talla="1,2,3,4,5" data-color="gris"
        >
          <img src="./imagenes/Ropa/Perro/imagen 2.png" alt="Polo deportivo para perro" />
          <h3>Polo Deportivo</h3>
          <p>Diseño casual para paseos y días frescos.</p>
          <h2>S/ 32.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}
        
        {(tipoElegido === "todos" || tipoElegido === "sueter") && 
          (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
         (colorElegido === "todos" || colorElegido === "rosado") && (
        <div
         className="card" data-mascota="perro" data-tipo="sueter" data-talla="1,2,3,4,5" data-color="rosado"
         >
          <img src="./imagenes/Ropa/Perro/imagen 3.png" alt="Sueter rosado para perro" />
          <h3>Sueter Rosado</h3>
          <p>Suave y cómodo para uso diario.</p>
          <h2>S/ 29.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rosado") && (

        <div className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="rosado"
        >
          <img src="./imagenes/Ropa/Perro/imagen 4.png" alt="Camiseta rosada para perro" />
          <h3>Camiseta rosa de Animal Print</h3>
          <p>Manga larga estampada para tu engreida.</p>
          <h2>S/ 36.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div 
        className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="azul"
        >
          <img src="./imagenes/Ropa/Perro/imagen 5.png" alt="Camiseta azul para perro" />
          <h3>Camiseta Azul</h3>
          <p>Ideal para mantener a tu mascota abrigada pero comodo.</p>
          <h2>S/ 36.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
         )}

         {(tipoElegido === "todos" || tipoElegido === "vestido") && 
         (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
         (colorElegido === "todos" || colorElegido === "azul") && (

        <div
         className="card" data-mascota="perro" data-tipo="vestido" data-talla="1,2,3,4,5" data-color="azul"
         >
          <img src="./imagenes/Ropa/Perro/imagen 6.png" alt="Vestido azul para perro" />
          <h3>Vestido Floral Azul</h3>
          <p>Diseño alegre para paseos y días soleados.</p>
          <h2>S/ 28.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
          )}

          {(tipoElegido === "todos" || tipoElegido === "buzo") && 
          (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
          (colorElegido === "todos" || colorElegido === "verde") && (
        <div 
        className="card" data-mascota="perro" data-tipo="buzo" data-talla="1,2,3,4,5" data-color="verde"
        >
          <img src="./imagenes/Ropa/Perro/imagen 7.png" alt="Buzo verde para perro" />
          <h3>Buzo Verde con capucha</h3>
          <p>Perfecto para proteger del frío.</p>
          <h2>S/ 44.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "Buzo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "gris") && (
        <div
         className="card" data-mascota="perro" data-tipo="Buzo" data-talla="1,2,3,4,5" data-color="gris"
         >
          <img src="./imagenes/Ropa/Perro/imagen 8.png" alt="Buzo gris para perro" />
          <h3>Buzo Clásico con capucha </h3>
          <p>Buzito de algodon super comodo. Ideal para los dias frescos.</p>
          <h2>S/ 46.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "verde") && (
        <div 
        className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="verde"
        >
          <img src="./imagenes/Ropa/Perro/imagen 9.png" alt="Camiseta verde para perro" />
          <h3>Camiseta cuadrille</h3>
          <p>Camiseta ideal para una sesion de fotos y que tu engreido se vea espectacular.</p>
          <h2>S/ 43.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div 
        className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="azul"
        >
          <img src="./imagenes/Ropa/Perro/imagen 10.png" alt="Camiseta azul estampada para perro" />
          <h3>Camiseta celeste de arcoiris</h3>
          <p> Camiseta coqueta, ideal para una sesion de fotos de tu engreida.</p>
          <h2>S/ 31.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "vestido") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
         (colorElegido === "todos" || colorElegido === "blanco, rojo") && (
        <div
         className="card" data-mascota="perro" data-tipo="vestido" data-talla="1,2,3,4,5" data-color="blanco, rojo"
         >
          <img src="./imagenes/Ropa/Perro/imagen 11.png" alt="Vestido para perro" />
          <h3>Vestido Blanco con fresas rojas</h3>
          <p>Diseño delicado para ocasiones especiales.</p>
          <h2>S/ 39.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "disfraz") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "blanco")&& (
        <div 
        className="card" data-mascota="perro" data-tipo="disfraz" data-talla="1,2,3,4,5" data-color="blanco"
        >
          <img src="./imagenes/Ropa/Perro/imagen 12.png" alt="Disfraz vaca para perro" />
          <h3>Disfraz de Vaquita</h3>
          <p>Divertido disfraz para lucir a tu engreido.</p>
          <h2>S/ 45.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "blanco") && (
        <div
         className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="blanco"
         >
          <img src="./imagenes/Ropa/Perro/imagen 13.png" alt="Camiseta estampada para perro" />
          <h3>Camiseta de monitos</h3>
          <p>Camiseta de algodon, comodo y moderno para salir a pasear.</p>
          <h2>S/ 32.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
         )}
         {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rojo") && (
        <div 
        className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="rojo"
        >
          <img src="./imagenes/Ropa/Perro/imagen 14.png" alt="Camiseta roja para perro" />
          <h3>Camiseta Roja de algodon</h3>
          <p>Suave y cálido para perros pequeños.</p>
          <h2>S/ 42.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "verde") && (
        <div 
        className="card" data-mascota="perro" data-tipo="polo" data-talla="1,2,3,4,5" data-color="verde"
        >
          <img src="./imagenes/Ropa/Perro/imagen 15.png" alt="Polo verde para perro" />
          <h3>Polo estampado Verde</h3>
          <p>Diseño cómodo y moderno.</p>
          <h2>S/ 43.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rosado") && (
        <div 
        className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="rosado"
        >
          <img src="./imagenes/Ropa/Perro/imagen 16.png" alt="Camiseta rosada para perro" />
          <h3>Camiseta Rayada</h3>
          <p>Prenda ligera con diseño rayado.</p>
          <h2>S/ 30.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div 
        className="card" data-mascota="perro" data-tipo="polo" data-talla="1,2,3,4,5" data-color="azul"
        >
          <img src="./imagenes/Ropa/Perro/imagen 17.png" alt="Polo azul para perro" />
          <h3>Camiseta tipo camisa Azul</h3>
          <p>Cómodo y ligero para un lindo look para tu engreido.</p>
          <h2>S/ 29.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "marron") && (
        <div 
        className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="marron"
        >
          <img src="./imagenes/Ropa/Perro/imagen 18.png" alt="Camiseta elegante para perro" />
          <h3>Camiseta Elegante</h3>
          <p>Diseño clásico y sofisticado.</p>
          <h2>S/ 34.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "abrigo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "marron") && (
        <div 
        className="card" data-mascota="perro" data-tipo="abrigo" data-talla="1,2,3,4,5" data-color="marron"
        >
          <img src="./imagenes/Ropa/Perro/imagen 19.png" alt="Abrigo marrón para perro" />
          <h3>Abrigo Marrón</h3>
          <p>Ideal para paseos durante el invierno.</p>
          <h2>S/ 44.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "abrigo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div 
        className="card" data-mascota="perro" data-tipo="abrigo" data-talla="1,2,3,4,5" data-color="azul"
        >
          <img src="./imagenes/Ropa/Perro/imagen 20.png" alt="Abrigo azul para perro" />
          <h3>Abrigo Multicolor</h3>
          <p>Diseño cálido y divertido.</p>
          <h2>S/ 46.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "amarillo") && (
        <div 
        className="card" data-mascota="perro" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="amarillo"
        >
          <img src="./imagenes/Ropa/Perro/imagen 21.png" alt="Camiseta amarilla para perro" />
          <h3>Camiseta Amarilla</h3>
          <p>Diseño fresco para perros pequeños.</p>
          <h2>S/ 30.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "sueter") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rojo") && (
        <div 
        className="card" data-mascota="perro" data-tipo="sueter" data-talla="1,2,3,4,5" data-color="rojo"
        >
          <img src="./imagenes/Ropa/Perro/imagen 22.png" alt="Sueter rojo para perro" />
          <h3>Sueter tejido con cuellito</h3>
          <p>Ideal para abrigar a nuestro engreidos.</p>
          <h2>S/ 32.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>

         )}

        {(tipoElegido === "todos" || tipoElegido === "disfraz") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "amarillo") && (
        <div 
        className="card" data-mascota="perro" data-tipo="disfraz" data-talla="1,2,3,4,5" data-color="amarillo"
        >
          <img src="./imagenes/Ropa/Perro/imagen 23.png" alt="Disfraz para perro" />
          <h3>Disfraz de abejita</h3>
          <p>Adorable disfraz de abejita con capucha, antenitas y alas.</p>
          <h2>S/ 45.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>

         )}

        {(tipoElegido === "todos" || tipoElegido === "buzo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "verde") && (
        <div 
        className="card" data-mascota="perro" data-tipo="buzo" data-talla="1,2,3,4,5" data-color="verde"
        >
          <img src="./imagenes/Ropa/Perro/imagen 24.png" alt="Buzo para perro" />
          <h3>Buzo verde estampado</h3>
          <p> Buzo de dinosauros.Ideal para mantener abrigado a tu perro en los días fríos.</p>
          <h2>S/ 49.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
         )}
         </>
        )}

          {mascotaSeleccionada === "gato" && (
         <>
         
         {(tipoElegido === "todos" || tipoElegido === "vestido") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rosado") && (
        <div 
        className="card" data-mascota="gato" data-tipo="vestido" data-talla="1,2,3,4,5" data-color="rosado"
        >
          <img src="./imagenes/Ropa/Gato/imagen 1.png" alt="Vestido para gato" />
          <h3>Vestido Floral</h3>
          <p>Ideal para nuestras gatitas, comodo y llamativo</p>
          <h2>S/ 39.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "buzo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div 
        className="card" data-mascota="gato" data-tipo="buzo" data-talla="1,2,3,4,5" data-color="azul"
        >
            <img src="./imagenes/Ropa/Gato/imagen 2.png" alt="Abrigo para gato" />
          <h3>Buzo hoddie azul</h3>
          <p>Ideal para mantener abrigado a tu gato en los días fríos.</p>
          <h2>S/ 49.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

         {(tipoElegido === "todos" || tipoElegido === "sueter") &&
         (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
         (colorElegido === "todos" || colorElegido === "rosado") && (
        <div
         className="card" data-mascota="gato" data-tipo="sueter" data-talla="1,2,3,4,5" data-color="rosado"
         >
            <img src="./imagenes/Ropa/Gato/imagen 3.png" alt="sueter para gato" />
          <h3>Sueter corazones</h3>
          <p>Sueter tejido con cuello alto y mangas cortas, comoda e ideal.</p>
          <h2>S/ 34.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
         )}

         {(tipoElegido === "todos" || tipoElegido === "buzo") && 
         (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
         (colorElegido === "todos" || colorElegido === "gris") && (
        <div 
        className="card" data-mascota="gato" data-tipo="buzo" data-talla="1,2,3,4,5" data-color="gris"
        >
            <img src="./imagenes/Ropa/Gato/imagen 4.png" alt="Buzo para gato" />
          <h3>Buzo rayado con capucha</h3>
          <p>Buzo con capucha de diseño rayado en gris. Comodo, liviano, ideal para los dias frescos</p>
          <h2>S/ 38.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "verde") && (
        <div 
        className="card" data-mascota="gato" data-tipo="polo" data-talla="1,2,3,4,5" data-color="verde"
        >
            <img src="./imagenes/Ropa/Gato/imagen 5.png" alt="Polo moderno para gato" />
          <h3>Chomba Urban Green</h3>
          <p>Una opcion fresca y moderna para darle un look casual y divetido a tu gato.</p>
          <h2>S/ 44.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") &&
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "verde") && (

        <div
         className="card" data-mascota="gato" data-tipo="polo" data-talla="1,2,3,4,5" data-color="verde"
         >
            <img src="./imagenes/Ropa/Gato/imagen 6.png" alt="Polo casual para gato" />
          <h3>Chomba clasic Olive</h3>
          <p>Chomba verde oliva con cuello basico y botones decorativos. Diseño elegante, perfecto para ocasion especial.</p>
          <h2>S/ 32.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "disfraz") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "blanco") && (
        <div
         className="card" data-mascota="gato" data-tipo="disfraz" data-talla="1,2,3,4,5" data-color="blanco"
         >
            <img src="./imagenes/Ropa/Gato/imagen 7.png" alt="Disfraz para gato" />
          <h3>Disfraz de vaquita</h3>
          <p>Divertido difraz de vaquita. Ideal para fiestas o sesiones de fotos</p>
          <h2>S/ 50.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "disfraz") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "amarillo") && (
        <div
         className="card" data-mascota="gato" data-tipo="disfraz" data-talla="1,2,3,4,5" data-color="amarillo"
         >
            <img src="./imagenes/Ropa/Gato/imagen 8.png" alt="Disfraz para gato" />
          <h3>Disfraz de abejita</h3>
          <p>Adorable disfraz de abeja en amarillo y negro, con capucha y antenitas. Perfecto para cualquier ocasion.</p>
          <h2>S/ 45.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "buzo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "amarillo") && (
        <div
         className="card" data-mascota="gato" data-tipo="buzo" data-talla="1,2,3,4,5" data-color="amarillo"
         >
            <img src="./imagenes/Ropa/Gato/imagen 9.png" alt="Buzo casual para gato" />
          <h3>Hoddie Sunny Casual</h3>
          <p>Buzo amarillo con capucha.Ideal para un look urbano, alegre y moderno</p>
          <h2>S/ 31.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "sueter") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rojo") && (
        <div
         className="card" data-mascota="gato" data-tipo="sueter" data-talla="1,2,3,4,5" data-color="rojo"
         >
            <img src="./imagenes/Ropa/Gato/imagen 10.png" alt="Sueter rojo para gato" />
          <h3>Sueter Red Winter</h3>
          <p>Sueter tejido de cuello alto. Su diseño le da un toque elegante para los dias frios.</p>
          <h2>S/ 40.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "vestido") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rosa") && (
        <div
         className="card" data-mascota="gato" data-tipo="vestido" data-talla="1,2,3,4,5" data-color="rosa"
         >
            <img src="./imagenes/Ropa/Gato/imagen 11.png" alt="Vestido rosa para gato" />
          <h3>Vestido Floral Vintage</h3>
          <p>Delicado vestido con estampado floral y cuello decorado con volados y encaje para mimar a tu gatita</p>
          <h2>S/ 36.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div
         className="card" data-mascota="gato" data-tipo="polo" data-talla="1,2,3,4,5" data-color="azul"
         >
            <img src="./imagenes/Ropa/Gato/imagen 12.png" alt=" Camisa casual para gato" />
          <h3>Camisa Blue Lines</h3>
          <p>Camisa azul de manga corta, fresca y elegante para darle a tu gato un look casual.</p>
          <h2>S/ 48.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div
         className="card" data-mascota="gato" data-tipo="polo" data-talla="1,2,3,4,5" data-color="azul"
         >
            <img src="./imagenes/Ropa/Gato/imagen 13.png" alt="Chomba casual para gato" />
          <h3>Chomba Blue Pink</h3>
          <p>Cómodo y elegante.Su combinacion aporta un estilo moderno.</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "vestido") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4","5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rosado") && (
        <div
         className="card" data-mascota="gato" data-tipo="vestido" data-talla="1,2,3,4,5" data-color="rosado"
         >
            <img src="./imagenes/Ropa/Gato/imagen 14.png" alt="Vestido rosado para gato" />
          <h3>Vestido Primavera</h3>
          <p>Vesrtido en tonos rosa y morado con un lidno estampado de flores multicolor. Super moderno</p>
          <h2>S/ 38.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rosado") && (
        <div
         className="card" data-mascota="gato" data-tipo="polo" data-talla="1,2,3,4,5" data-color="rosado"
         >
            <img src="./imagenes/Ropa/Gato/imagen 15.png" alt="Polo casual para gato" />
          <h3>Polo Soft Pink</h3>
          <p>Polo de manga corta.Perfecta para el uso diario y mantener a tu gato comodo</p>
          <h2>S/ 25.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "blanco") && (
        <div
         className="card" data-mascota="gato" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="blanco"
         >
            <img src="./imagenes/Ropa/Gato/imagen 16.png" alt="camiseta manga corta para gato" />
          <h3>Camiseta Classic White</h3>
          <p>Manga larga blanca basica de algodon. Una prenda liviana que combina facilmente.</p>
          <h2>S/ 29.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "sueter") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rojo") && (
        <div
         className="card" data-mascota="gato" data-tipo="sueter" data-talla="1,2,3,4,5" data-color="rojo"
         >
            <img src="./imagenes/Ropa/Gato/imagen 17.png" alt="Sueter rojo para gato" />
          <h3>Sueter Nordic blanco con Rojo</h3>
          <p>Sueter tejido con detalles rojos, cuello alto y abrigado.</p>
          <h2>S/ 40.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div> 
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rosado") && (
        <div
         className="card" data-mascota="gato" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="rosado"
         >
            <img src="./imagenes/Ropa/Gato/imagen 18.png" alt="Camisa rosada para gato" />
          <h3>Camisa Pink elegante</h3>
          <p>Camisa estampada con cuello amplio y botones, Original para un look diferente.</p>
          <h2>S/ 34.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "disfraz") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "rojo") && (
        <div
         className="card" data-mascota="gato" data-tipo="disfraz" data-talla="1,2,3,4,5" data-color="rojo"
         >
            <img src="./imagenes/Ropa/Gato/imagen 19.png" alt="Disfraz rojo para gato" />
          <h3>Disfraz de diablito</h3>
          <p>Divertido disfraz de diablito rojo y negro con cuernos, alas y detalles brilantes.</p>
          <h2>S/ 46.00</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "camiseta") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "marron") && (
        <div
         className="card" data-mascota="gato" data-tipo="camiseta" data-talla="1,2,3,4,5" data-color="marron"
         >
            <img src="./imagenes/Ropa/Gato/imagen 20.png" alt="Camiseta marrón para gato" />
          <h3>Camiseta marrón rayado </h3>
          <p>Cómoda y moderna. Ideal para consentir a tu engreido.</p>
          <h2>S/ 39.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}

        {(tipoElegido === "todos" || tipoElegido === "polo") && 
        (tallaElegida === "todas" || ["1", "2", "3", "4", "5"].includes(tallaElegida)) &&
        (colorElegido === "todos" || colorElegido === "azul") && (
        <div
         className="card" data-mascota="gato" data-tipo="polo" data-talla="1,2,3,4,5" data-color="azul"
         >
            <img src="./imagenes/Ropa/Gato/imagen 21.png" alt="Polo azul para gato" />
          <h3>Polo Azul con estampado</h3>
          <p>Polo comodo de algodon con estampado de delfines.</p>
          <h2>S/ 28.90</h2>
          <button className="btn-comprar">Comprar</button>
        </div>
        )}
        </>
      )}

      </section>

    </div>
  </main>
</div>
  )
}




