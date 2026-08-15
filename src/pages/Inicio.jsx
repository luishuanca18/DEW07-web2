export default function Inicio() {
    return (
        <main>
         <section className="hero">
            <div className="contenedor-hero">
                <div className="texto-hero">
                    <h1>Encuentra todo lo que tu mascota necesita, en un solo lugar</h1>
                    <p className="ph2">Alimentos, accesorios, ropa, juguetes y mucho más.Las mejores marcas para perros y gatos.</p>
                    <div className="buttons-hero">
                        <button className="btn-comprar">Comprar ahora</button>
                        <button className="btn-categorias">Ver categorías</button>
                    </div>
                </div>

                <div className="imagen-hero">
                <img src="/imagenes/animales-hero.png" alt="Perro y gato de PetLove"/>
                </div>
            </div>

            <div className="beneficios-hero">
                <div className="beneficio-item">
                    <i className="bi bi-truck"></i>

                    <div className="texto-beneficio">
                    <h4>Envíos rápidos</h4>
                    <p>A todo Lima</p>
                    </div>
                </div>
                <div className="beneficio-item">
                    <i className="bi bi-shield-check"></i>
                    <div className="texto-beneficio">
                    <h4>Pagos 100% seguros</h4>
                    <p>yape,plin,tarjetas y más</p>
                    </div>  
                </div>

                <div className="beneficio-item">
                    <i className="bi bi-headset"></i>
                    <div className="texto-beneficio">
                    <h4>Atención 24/7</h4>
                    <p>estamos para ayudarte</p>
                    </div>
                </div>
                <div className="beneficio-item">
                    <i className="bi bi-box-seam"></i>
                    <div className="texto-beneficio">
                    <h4>Devoluciones fáciles</h4>
                    <p>sin complicaciones</p>
                    </div>
                </div>
            </div>

       

         </section>

            <section className="categorias-populares">
        <div className="contenedor-categorias-populares">
            <div className="titulo-categorias">
                <h2>Categorías Populares</h2>
            </div>
            <div className="boton-ver-todas">
                <a href="#">Ver todas <i className="bi bi-arrow-right"></i></a>
                
            </div>
        </div>    
        <div className="imagenes-categorias">
            <div className="cards-categorias">
                <img src="/imagenes/comida1.webp" alt=""/>
                <p>comida</p>
            </div>
            <div className="cards-categorias">
                <img src="/imagenes/ropa1.avif" alt=""/>
                <p>ropa</p>
            </div>
            <div className="cards-categorias">
                <img src="/imagenes/accesorios1.jpg" alt=""/>
                <p>accesorios</p>
            </div>
            <div className="cards-categorias">
                <img src="/imagenes/Juguetes1.jpg" alt=""/>
                <p>juguetes</p>
            </div>
            <div className="cards-categorias">
                <img src="/imagenes/higiene1.jpg" alt=""/>
                <p>higiene</p>
            </div>
            <div className="cards-categorias">
                <img src="/imagenes/promocion.png" alt=""/>
                <p>promocion</p>
            </div>

        </div>

        <div className="contenedor-marcas-favoritas">
            <div className="titulo-marcas-favoritas">
                <h2>Marcas Favoritas</h2>
            </div>
        </div> 
         <div className="imagenes-marcas">
            <div className="cards-marcas">
                <img src="/imagenes/LOGOMIMASKOT.jpg" alt=""/>
                <p>Mimaskot</p>
            </div>
            <div className="cards-marcas">
                <img src="/imagenes/logo-ricocan-1024x1007.webp" alt=""/>
                <p>Ricocan</p>
            </div>
            <div className="cards-marcas">
                <img src="/imagenes/logo-pedigree.png" alt=""/>
                <p>Pedigree</p>
            </div>
            <div className="cards-marcas">
                <img src="/imagenes/logo-dogshow.png" alt=""/>
                <p>Dog Chow</p>
            </div>
            <div className="cards-marcas">
                <img src="/imagenes/logo-whiskas.jpg" alt=""/>
                <p>Whiskas</p>
            </div>
            <div className="cards-marcas">
                <img src="/imagenes/logo-royal-canin.png" alt=""/>
                <p>Royal Canin</p>
            </div>
            <div className="cards-marcas">
                <img src="/imagenes/logo-proplan.png" alt=""/>
                <p>Pro Plan</p>
            </div>
            <div className="cards-marcas">
                <img src="/imagenes/logo-nutrecan.png" alt=""/>
                <p>Nutrecan</p>
            </div>

        </div>

        <div className="contenedor-promociones">
            <div className="promociones-box promo-verde">
                <div className="descripcion-promociones">
                    <h2>Alimentos de calidad</h2>
                    <p>Para cada etapa de su vida</p>
                    <button className="btn-promociones">Ver productos</button>
                </div>
                <div className="imagen-promociones">
                    <img src="/imagenes/comidas-varias.png" alt="comida varias"/>
                </div>
            </div>

            <div className="promociones-box promo-crema">
                <div className="descripcion-promociones">
                    <h2 className="color-verde">Hasta 20%</h2>
                    <p className="color-verde">de Descuento en seleccionados</p>
                    <button className="btn-promociones2">Aprovechar Promociones</button>
                </div>
                <div className="imagen-promociones">
                    <img src="/imagenes/manchas.png" alt="comida varias"/>
                </div>
            </div>

            <div className="promociones-box promo-menta">
                <div className="descripcion-promociones">
                    <h2 className="color-verde">Envio gratis</h2>
                    <p className="color-verde">por compras mayores a S/120</p>
                    <button className="btn-promociones2">Ver productos</button>
                </div>
                <div className="imagen-promociones">
                    <img src="/imagenes/carro-delivery.png" alt="comida varias"/>
                </div>
            </div>
        </div>
    </section> 
    <section className="franjas-garantias">
        <div className="contenedor-garantias">

            <div className="garantia-item">
                <i className="bi bi-tree"></i>
                <div className="texto-garantia">
                    <h4>Ingredientes de calidad</h4>
                    <p>para una nutrición completa</p>
                </div>
            </div>

            <div className="garantia-item">
                <i className="bi bi-award"></i>
                <div className="texto-garantia">
                    <h4>Marcas originales</h4>
                    <p>y 100% garantizadas</p>
                </div>
            </div>

            <div className="garantia-item">
                <i className="bi bi-shield-lock"></i>
                <div className="texto-garantia">
                    <h4>Compra 100% segura</h4>
                    <p>Tus datos protegidos</p>
                </div>
            </div>

            <div className="garantia-item">
                <i className="bi bi-patch-check"></i>
                <div className="texto-garantia">
                    <h4>Variedad de sabores</h4>
                    <p>a tu mascota le encantarán</p>
                </div>
            </div>

        </div>
    </section>

    
    </main>
    )
}
