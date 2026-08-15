export default function Comida() {
  return (
<div className="pagina-comida">
  <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/imagenes/Comida/banner1.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/imagenes/Comida/banner2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/imagenes/Comida/banner3.jpg" className="d-block w-100" alt="..." />
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
  <br />
  <section className="titulo">
    <h2>COMIDAS PARA MASCOTAS</h2>
    <p>Lo mejor para tus engreídos</p>
  </section>
  <section className="contenido">
    <aside className="filtro">
      <h2>FILTROS</h2>
      <h3>Mascota</h3>
      <label><input type="checkbox" className="filtro-input" data-filtro="mascota" defaultValue="perros" /> Perros</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="mascota" defaultValue="gatos" /> Gatos</label>
      <h3>Marca</h3>
      <label><input type="checkbox" className="filtro-input" data-filtro="marca" defaultValue="ricocat" /> Ricocat</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="marca" defaultValue="ricocan" /> Ricocan</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="marca" defaultValue="salvaje" /> Salvaje</label>
      <h3>Tipo de Comida</h3>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="seco" /> Seco</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="humedo" /> Húmedo</label>
      <label><input type="checkbox" className="filtro-input" data-filtro="tipo" defaultValue="snacks" /> Snacks</label>
      <button id="btnLimpiarFiltros">Limpiar filtros</button>
    </aside>
    <section className="productos">
      <div className="card" data-mascota="perros" data-marca="dogxtreme" data-tipo="seco">
        <img src="/imagenes/Comida/Comida1.jpg" alt="Comida1" />
        <span className="tag">Alimento Seco Perro</span>
        <h3>Dogxtreme Adulto Cordero</h3>
        <p>Para perros adultos de todas las razas</p>
        <h2>S/ 169.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="proplan" data-tipo="seco">
        <img src="/imagenes/Comida/Comida2.jpg" alt="Comida2" />
        <span className="tag">Alimento Seco Perro</span>
        <h3>Pro plan Piel Sensible Adulto</h3>
        <p>Equilibrio metabólico, salud digestiva y protección corporal</p>
        <h2>S/ 359.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="salvaje" data-tipo="seco">
        <img src="/imagenes/Comida/Comida3.jpg" alt="Comida3" />
        <span className="tag">Alimento Seco Perro</span>
        <h3>Salvaje Adulto Con Pollo</h3>
        <p>Alimentación Completa y Vitalidad</p>
        <h2>S/ 164.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="miocane" data-tipo="seco">
        <img src="/imagenes/Comida/Comida4.jpg" alt="Comida4" />
        <span className="tag">Alimento Seco Perro</span>
        <h3>Mio Cane Premium Adulto 15 kg</h3>
        <p>Nutricional completa, sabrosa y balanceada</p>
        <h2>S/ 171.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="royalcanin" data-tipo="seco">
        <img src="/imagenes/Comida/Comida6.jpg" alt="Comida6" />
        <span className="tag">Alimento Seco Gato</span>
        <h3>Royal Canin Gato Fhn Kitten 2 Kg</h3>
        <p>Nutrición Clínica y Precisión Veterinario</p>
        <h2>S/ 143.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="hills" data-tipo="seco">
        <img src="/imagenes/Comida/Comida7.jpg" alt="Comida7" />
        <span className="tag">Alimento Seco Gato</span>
        <h3>Hills SD Mature 7 Lb Adulto + 7 Años 3.17 Kg</h3>
        <p>Nutrición balanceada</p>
        <h2>S/ 187.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="catxtreme" data-tipo="seco">
        <img src="/imagenes/Comida/Comida8.jpg" alt="Comida8" />
        <span className="tag">Alimento Seco Gato</span>
        <h3>Catxtreme Adulto Esterilizado Pollo 2.5 Kg</h3>
        <p>Aportan proteínas, vitaminas y minerales</p>
        <h2>S/ 62.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="catchow" data-tipo="seco">
        <img src="/imagenes/Comida/Comida9.jpg" alt="Comida9" />
        <span className="tag">Alimento Seco Gato</span>
        <h3>Cat Chow Esterilizado Defense Plus 3kg</h3>
        <p>Garantiza una excelente palatabilidad</p>
        <h2>S/ 57.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="ricocan" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo1.jpg" alt="Humedo1" />
        <span className="tag">Alimento Húmedo Perro</span>
        <h3>Ricocan Adulto Paté de Cordero 312 g</h3>
        <p>Alimento húmedo premium</p>
        <h2>S/ 5.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="ricocan" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo2.jpg" alt="Humedo2" />
        <span className="tag">Alimento Húmedo Perro</span>
        <h3>Ricocan Adulto Paté de Pollo 330 g</h3>
        <p>Alimento húmedo premium</p>
        <h2>S/ 5.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="canbo" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo3.jpg" alt="Humedo3" />
        <span className="tag">Alimento Húmedo Perro</span>
        <h3>Canbo Enlatado Hipoalergenico 330 g</h3>
        <p>Fortalecimiento de la barrera cutánea</p>
        <h2>S/ 14.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="canbo" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo4.jpg" alt="Humedo4" />
        <span className="tag">Alimento Húmedo Perro</span>
        <h3>Canbo Dog Paté Flexibilidad y Movilidad 330g</h3>
        <p>Promueven la salud articular</p>
        <h2>S/ 12.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="fancy" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo5.jpg" alt="Humedo5" />
        <span className="tag">Alimento Húmedo Gato</span>
        <h3>Fancy Feast Al Horno Con Salmon En Salsa Y Otros 85 g</h3>
        <p>Alimentación Completa y Vitalidad</p>
        <h2>S/ 7.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="ricocat" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo6.jpg" alt="Humedo6" />
        <span className="tag">Alimento Húmedo Gato</span>
        <h3>Ricocat Adulto Paté Sardina Pollo 330 g</h3>
        <p>Garantiza una excelente palatabilidad</p>
        <h2>S/ 6.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="applaws" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo7.jpg" alt="Humedo7" />
        <span className="tag">Alimento Húmedo Gato</span>
        <h3>Applaws Filete De Atun Con Camaron X 70 Gr</h3>
        <p>Una propuesta nutricional completa</p>
        <h2>S/ 8.80</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="parpets" data-tipo="humedo">
        <img src="/imagenes/Comida/Humedo8.jpg" alt="Humedo8" />
        <span className="tag">Alimento Húmedo Gato</span>
        <h3>Par Pets gato paté de pescado 160g</h3>
        <p>Fortalece el pelaje y brinda la energía activa</p>
        <h2>S/ 9.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="snout" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack1.jpg" alt="Snack1" />
        <span className="tag">Snack Perro</span>
        <h3>Snout Hueso Deshidratado Minibone Ahumado De Cerdo</h3>
        <p>Sabrosa y balanceada</p>
        <h2>S/ 16.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="wanpy" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack2.jpg" alt="Snack2" />
        <span className="tag">Snack Perro</span>
        <h3>Soft Duck Jerky Strips</h3>
        <p>Elaborado con ingredientes seleccionados</p>
        <h2>S/ 19.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="naturalistic" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack3.jpg" alt="Snack3" />
        <span className="tag">Snack Perro</span>
        <h3>Naturalistic Tiras De Cordero 100 g</h3>
        <p>Protege la salud digestiva</p>
        <h2>S/ 13.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="perros" data-marca="mimma" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack4.jpg" alt="Snack4" />
        <span className="tag">Snack Perro</span>
        <h3>Carnitas Tradicional 30g</h3>
        <p>Formulación perfectamente adaptada</p>
        <h2>S/ 5.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="churu" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack5.jpg" alt="Snack5" />
        <span className="tag">Snack Gato</span>
        <h3>Churu Sabor Pollo con Camarón 60Gr</h3>
        <p>Mayor hidratación</p>
        <h2>S/ 12.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="dentalife" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack6.jpg" alt="Snack6" />
        <span className="tag">Snack Gato</span>
        <h3>Dentalife Gatos 40g Xl</h3>
        <p>Cuidado focalizado en dental</p>
        <h2>S/ 9.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="rambala" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack7.jpg" alt="Snack7" />
        <span className="tag">Snack Gato</span>
        <h3>Rambala Bites Tarta De Pescado 100 g</h3>
        <p>Alimentación Completa y Vitalidad</p>
        <h2>S/ 16.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
      <div className="card" data-mascota="gatos" data-marca="gnawlers" data-tipo="snacks">
        <img src="/imagenes/Comida/Snack8.jpg" alt="Snack8" />
        <span className="tag">Snack Gato</span>
        <h3>Gnawlers Lick'N'Likable Yogurt &amp; Arándanos 100Gr</h3>
        <p>Una manera saludable de consentir a tu gato</p>
        <h2>S/ 13.90</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
    </section>
  </section>
</div>
  )
}

