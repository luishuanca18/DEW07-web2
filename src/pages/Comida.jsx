import { useState } from "react";
import { useCarrito } from "../context/CarritoContext.jsx";

export default function Comida() {
  const carrito = useCarrito();

  const [mascotaElegida, setMascotaElegida] = useState(null);
  const [marcaElegida, setMarcaElegida] = useState(null);
  const [tipoElegido, setTipoElegido] = useState(null);

  function cambiarMascota(evento) {
    setMascotaElegida(evento.target.value);
  }

  function cambiarMarca(evento) {
    setMarcaElegida(evento.target.value);
  }

  function cambiarTipo(evento) {
    setTipoElegido(evento.target.value);
  }

  function LimpiarFiltro() {
    setMascotaElegida(null);
    setMarcaElegida(null);
    setTipoElegido(null);
  }

  const mostrarProducto = (mascota, marca, tipo) => {
    // Si no hay filtro seleccionado (es null), muestra todos
    const coincideMascota = mascotaElegida === null || mascota === mascotaElegida;
    const coincideMarca = marcaElegida === null || marca === marcaElegida;
    const coincideTipo = tipoElegido === null || tipo === tipoElegido;

    return coincideMascota && coincideMarca && coincideTipo;
  };

  // TUS FUNCIONES ORIGINALES PARA AGREGAR AL CARRITO
  function agregarDogxtreme() {
    const producto = {
      nombre: "Dogxtreme Adulto Cordero",
      precio: 169.90,
      imagen: "./imagenes/Comida/Comida1.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarProPlan() {
    const producto = {
      nombre: "Pro Plan Piel Sensible Adulto",
      precio: 359.90,
      imagen: "./imagenes/Comida/Comida2.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarSalvaje() {
    const producto = {
      nombre: "Salvaje Adulto Con Pollo",
      precio: 164.90,
      imagen: "./imagenes/Comida/Comida3.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarMioCane() {
    const producto = {
      nombre: "Mio Cane Premium Adulto 15 kg",
      precio: 171.90,
      imagen: "./imagenes/Comida/Comida4.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarRoyalCanin() {
    const producto = {
      nombre: "Royal Canin Gato Fhn Kitten 2 Kg",
      precio: 143.90,
      imagen: "./imagenes/Comida/Comida6.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarHills() {
    const producto = {
      nombre: "Hills SD Mature 7 Lb Adulto + 7 Años 3.17 Kg",
      precio: 187.90,
      imagen: "./imagenes/Comida/Comida7.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarCatxtreme() {
    const producto = {
      nombre: "Catxtreme Adulto Esterilizado Pollo 2.5 Kg",
      precio: 62.90,
      imagen: "./imagenes/Comida/Comida8.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarCatChow() {
    const producto = {
      nombre: "Cat Chow Esterilizado Defense Plus 3kg",
      precio: 57.90,
      imagen: "./imagenes/Comida/Comida9.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarRicocanCordero() {
    const producto = {
      nombre: "Ricocan Adulto Paté de Cordero 312 g",
      precio: 5.90,
      imagen: "./imagenes/Comida/Humedo1.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarRicocanPollo() {
    const producto = {
      nombre: "Ricocan Adulto Paté de Pollo 330 g",
      precio: 5.90,
      imagen: "./imagenes/Comida/Humedo2.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarCanboHipoalergenico() {
    const producto = {
      nombre: "Canbo Enlatado Hipoalergenico 330 g",
      precio: 14.90,
      imagen: "./imagenes/Comida/Humedo3.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarCanboMovilidad() {
    const producto = {
      nombre: "Canbo Dog Paté Flexibilidad y Movilidad 330g",
      precio: 12.90,
      imagen: "./imagenes/Comida/Humedo4.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarFancyFeast() {
    const producto = {
      nombre: "Fancy Feast Al Horno Con Salmon En Salsa Y Otros 85 g",
      precio: 7.90,
      imagen: "./imagenes/Comida/Humedo5.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarRicocatPate() {
    const producto = {
      nombre: "Ricocat Adulto Paté Sardina Pollo 330 g",
      precio: 6.90,
      imagen: "./imagenes/Comida/Humedo6.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarApplaws() {
    const producto = {
      nombre: "Applaws Filete De Atun Con Camaron X 70 Gr",
      precio: 8.80,
      imagen: "./imagenes/Comida/Humedo7.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarParPets() {
    const producto = {
      nombre: "Par Pets gato paté de pescado 160g",
      precio: 9.90,
      imagen: "./imagenes/Comida/Humedo8.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarSnout() {
    const producto = {
      nombre: "Snout Hueso Deshidratado Minibone Ahumado De Cerdo",
      precio: 16.90,
      imagen: "./imagenes/Comida/Snack1.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarWanpy() {
    const producto = {
      nombre: "Soft Duck Jerky Strips",
      precio: 19.90,
      imagen: "./imagenes/Comida/Snack2.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarNaturalistic() {
    const producto = {
      nombre: "Naturalistic Tiras De Cordero 100 g",
      precio: 13.90,
      imagen: "./imagenes/Comida/Snack3.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarMimma() {
    const producto = {
      nombre: "Carnitas Tradicional 30g",
      precio: 5.90,
      imagen: "./imagenes/Comida/Snack4.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarChuru() {
    const producto = {
      nombre: "Churu Sabor Pollo con Camarón 60Gr",
      precio: 12.90,
      imagen: "./imagenes/Comida/Snack5.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarDentalife() {
    const producto = {
      nombre: "Dentalife Gatos 40g Xl",
      precio: 9.90,
      imagen: "./imagenes/Comida/Snack6.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarRambala() {
    const producto = {
      nombre: "Rambala Bites Tarta De Pescado 100 g",
      precio: 16.90,
      imagen: "./imagenes/Comida/Snack7.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  function agregarGnawlers() {
    const producto = {
      nombre: "Gnawlers Lick'N'Likable Yogurt & Arándanos 100Gr",
      precio: 13.90,
      imagen: "./imagenes/Comida/Snack8.jpg"
    };
    carrito.agregar(producto);
    carrito.abrir();
  }

  return (
    <div className="pagina-comida">
      {/* Carrusel de Bootstrap */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./imagenes/Comida/banner1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./imagenes/Comida/banner2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./imagenes/Comida/banner3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="titulo">
        <h2>COMIDAS PARA MASCOTAS</h2>
        <p>LO MEJOR PARA TUS ENGREÍDOS</p>
      </section>

      {/* SECCIÓN PRINCIPAL: FILTROS Y PRODUCTOS */}
      <section className="contenido">
        <aside className="filtro">
          <h2>FILTROS</h2>
          <h3>Mascota</h3>
          <label><input type="checkbox" name="mascota" value="perros" onChange={cambiarMascota} checked={mascotaElegida === 'perros'}/> Perros </label>
          <label><input type="checkbox" name="mascota" value="gatos" onChange={cambiarMascota} checked={mascotaElegida === 'gatos'} /> Gatos </label>

          <h3>Marca</h3>
          <label><input type="checkbox" name="marca" value="ricocat" onChange={cambiarMarca} checked={marcaElegida === 'ricocat'} /> Ricocat </label>
          <label><input type="checkbox" name="marca" value="ricocan" onChange={cambiarMarca} checked={marcaElegida === 'ricocan'} /> Ricocan </label>
          <label><input type="checkbox" name="marca" value="salvaje" onChange={cambiarMarca} checked={marcaElegida === 'salvaje'} /> Salvaje </label>

          <h3>Tipo de Comida</h3>
          <label><input type="checkbox" name="tipo" value="seco" onChange={cambiarTipo} checked={tipoElegido === 'seco'}/> Seco </label>
          <label><input type="checkbox" name="tipo" value="humedo" onChange={cambiarTipo} checked={tipoElegido === 'humedo'}/> Húmedo </label>
          <label><input type="checkbox" name="tipo" value="snacks" onChange={cambiarTipo} checked={tipoElegido === 'snacks'}/> Snacks </label>
          <button type="button" className="btn-limpiar-filtros" onClick={LimpiarFiltro}>Limpiar filtros </button>
        </aside>

        {/* LISTA DE PRODUCTOS */}
        <section className="productos">
          {mostrarProducto("perros", "dogxtreme", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida1.jpg" alt="Comida1" />
              <span className="tag">Alimento Seco Perro</span>
              <h3>Dogxtreme Adulto Cordero</h3>
              <p>Para perros adultos de todas las razas</p>
              <h2>S/ 169.90</h2>
              <button className="btn-comprar" onClick={agregarDogxtreme}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "proplan", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida2.jpg" alt="Comida2" />
              <span className="tag">Alimento Seco Perro</span>
              <h3>Pro Plan Piel Sensible Adulto</h3>
              <p>Equilibrio metabólico, salud digestiva y protección corporal</p>
              <h2>S/ 359.90</h2>
              <button className="btn-comprar" onClick={agregarProPlan}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "salvaje", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida3.jpg" alt="Comida3" />
              <span className="tag">Alimento Seco Perro</span>
              <h3>Salvaje Adulto Con Pollo</h3>
              <p>Alimentación Completa y Vitalidad</p>
              <h2>S/ 164.90</h2>
              <button className="btn-comprar" onClick={agregarSalvaje}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "miocane", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida4.jpg" alt="Comida4" />
              <span className="tag">Alimento Seco Perro</span>
              <h3>Mio Cane Premium Adulto 15 kg</h3>
              <p>Nutricional completa, sabrosa y balanceada</p>
              <h2>S/ 171.90</h2>
              <button className="btn-comprar" onClick={agregarMioCane}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "royalcanin", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida6.jpg" alt="Comida6" />
              <span className="tag">Alimento Seco Gato</span>
              <h3>Royal Canin Gato Fhn Kitten 2 Kg</h3>
              <p>Nutrición Clínica y Precisión Veterinario</p>
              <h2>S/ 143.90</h2>
              <button className="btn-comprar" onClick={agregarRoyalCanin}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "hills", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida7.jpg" alt="Comida7" />
              <span className="tag">Alimento Seco Gato</span>
              <h3>Hills SD Mature 7 Lb Adulto + 7 Años 3.17 Kg</h3>
              <p>Nutrición balanceada</p>
              <h2>S/ 187.90</h2>
              <button className="btn-comprar" onClick={agregarHills}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "catxtreme", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida8.jpg" alt="Comida8" />
              <span className="tag">Alimento Seco Gato</span>
              <h3>Catxtreme Adulto Esterilizado Pollo 2.5 Kg</h3>
              <p>Aportan proteínas, vitaminas y minerales</p>
              <h2>S/ 62.90</h2>
              <button className="btn-comprar" onClick={agregarCatxtreme}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "catchow", "seco") && (
            <div className="card">
              <img src="./imagenes/Comida/Comida9.jpg" alt="Comida9" />
              <span className="tag">Alimento Seco Gato</span>
              <h3>Cat Chow Esterilizado Defense Plus 3kg</h3>
              <p>Garantiza una excelente palatabilidad</p>
              <h2>S/ 57.90</h2>
              <button className="btn-comprar" onClick={agregarCatChow}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "ricocan", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo1.jpg" alt="Humedo1" />
              <span className="tag">Alimento Húmedo Perro</span>
              <h3>Ricocan Adulto Paté de Cordero 312 g</h3>
              <p>Alimento húmedo premium</p>
              <h2>S/ 5.90</h2>
              <button className="btn-comprar" onClick={agregarRicocanCordero}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "ricocan", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo2.jpg" alt="Humedo2" />
              <span className="tag">Alimento Húmedo Perro</span>
              <h3>Ricocan Adulto Paté de Pollo 330 g</h3>
              <p>Alimento húmedo premium</p>
              <h2>S/ 5.90</h2>
              <button className="btn-comprar" onClick={agregarRicocanPollo}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "canbo", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo3.jpg" alt="Humedo3" />
              <span className="tag">Alimento Húmedo Perro</span>
              <h3>Canbo Enlatado Hipoalergenico 330 g</h3>
              <p>Fortalecimiento de la barrera cutánea</p>
              <h2>S/ 14.90</h2>
              <button className="btn-comprar" onClick={agregarCanboHipoalergenico}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "canbo", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo4.jpg" alt="Humedo4" />
              <span className="tag">Alimento Húmedo Perro</span>
              <h3>Canbo Dog Paté Flexibilidad y Movilidad 330g</h3>
              <p>Promueven la salud articular</p>
              <h2>S/ 12.90</h2>
              <button className="btn-comprar" onClick={agregarCanboMovilidad}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "fancy", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo5.jpg" alt="Humedo5" />
              <span className="tag">Alimento Húmedo Gato</span>
              <h3>Fancy Feast Al Horno Con Salmon En Salsa Y Otros 85 g</h3>
              <p>Alimentación Completa y Vitalidad</p>
              <h2>S/ 7.90</h2>
              <button className="btn-comprar" onClick={agregarFancyFeast}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "ricocat", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo6.jpg" alt="Humedo6" />
              <span className="tag">Alimento Húmedo Gato</span>
              <h3>Ricocat Adulto Paté Sardina Pollo 330 g</h3>
              <p>Garantiza una excelente palatabilidad</p>
              <h2>S/ 6.90</h2>
              <button className="btn-comprar" onClick={agregarRicocatPate}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "applaws", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo7.jpg" alt="Humedo7" />
              <span className="tag">Alimento Húmedo Gato</span>
              <h3>Applaws Filete De Atun Con Camaron X 70 Gr</h3>
              <p>Una propuesta nutricional completa</p>
              <h2>S/ 8.80</h2>
              <button className="btn-comprar" onClick={agregarApplaws}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "parpets", "humedo") && (
            <div className="card">
              <img src="./imagenes/Comida/Humedo8.jpg" alt="Humedo8" />
              <span className="tag">Alimento Húmedo Gato</span>
              <h3>Par Pets gato paté de pescado 160g</h3>
              <p>Fortalece el pelaje y brinda la energía activa</p>
              <h2>S/ 9.90</h2>
              <button className="btn-comprar" onClick={agregarParPets}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "snout", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack1.jpg" alt="Snack1" />
              <span className="tag">Snack Perro</span>
              <h3>Snout Hueso Deshidratado Minibone Ahumado De Cerdo</h3>
              <p>Sabrosa y balanceada</p>
              <h2>S/ 16.90</h2>
              <button className="btn-comprar" onClick={agregarSnout}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "wanpy", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack2.jpg" alt="Snack2" />
              <span className="tag">Snack Perro</span>
              <h3>Soft Duck Jerky Strips</h3>
              <p>Elaborado com ingredientes seleccionados</p>
              <h2>S/ 19.90</h2>
              <button className="btn-comprar" onClick={agregarWanpy}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "naturalistic", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack3.jpg" alt="Snack3" />
              <span className="tag">Snack Perro</span>
              <h3>Naturalistic Tiras De Cordero 100 g</h3>
              <p>Protege la salud digestiva</p>
              <h2>S/ 13.90</h2>
              <button className="btn-comprar" onClick={agregarNaturalistic}>Comprar</button>
            </div>
          )}

          {mostrarProducto("perros", "mimma", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack4.jpg" alt="Snack4" />
              <span className="tag">Snack Perro</span>
              <h3>Carnitas Tradicional 30g</h3>
              <p>Formulación perfectamente adaptada</p>
              <h2>S/ 5.90</h2>
              <button className="btn-comprar" onClick={agregarMimma}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "churu", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack5.jpg" alt="Snack5" />
              <span className="tag">Snack Gato</span>
              <h3>Churu Sabor Pollo con Camarón 60Gr</h3>
              <p>Mayor hidratación</p>
              <h2>S/ 12.90</h2>
              <button className="btn-comprar" onClick={agregarChuru}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "dentalife", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack6.jpg" alt="Snack6" />
              <span className="tag">Snack Gato</span>
              <h3>Dentalife Gatos 40g Xl</h3>
              <p>Cuidado focalizado en dental</p>
              <h2>S/ 9.90</h2>
              <button className="btn-comprar" onClick={agregarDentalife}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "rambala", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack7.jpg" alt="Snack7" />
              <span className="tag">Snack Gato</span>
              <h3>Rambala Bites Tarta De Pescado 100 g</h3>
              <p>Alimentación Completa y Vitalidad</p>
              <h2>S/ 16.90</h2>
              <button className="btn-comprar" onClick={agregarRambala}>Comprar</button>
            </div>
          )}

          {mostrarProducto("gatos", "gnawlers", "snacks") && (
            <div className="card">
              <img src="./imagenes/Comida/Snack8.jpg" alt="Snack8" />
              <span className="tag">Snack Gato</span>
              <h3>Gnawlers Lick'N'Likable Yogurt &amp; Arándanos 100Gr</h3>
              <p>Una manera saludable de consentir a tu gato</p>
              <h2>S/ 13.90</h2>
              <button className="btn-comprar" onClick={agregarGnawlers}>Comprar</button>
            </div>
          )}
        </section>

      </section>
    </div>
  );
}

