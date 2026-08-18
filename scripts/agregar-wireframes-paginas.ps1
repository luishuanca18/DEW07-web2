$ErrorActionPreference = 'Stop'

$raizProyecto = Split-Path -Parent $PSScriptRoot
$archivoDrawio = Join-Path $raizProyecto 'wireframes-portada.drawio'
$carpetaImagenes = Join-Path $raizProyecto 'public\imagenes'
[xml]$documento = Get-Content -LiteralPath $archivoDrawio -Raw

function Obtener-Imagen($nombre) {
    $ruta = Join-Path $carpetaImagenes $nombre
    $extension = [IO.Path]::GetExtension($nombre).ToLowerInvariant()
    $tipo = switch ($extension) {
        '.png' { 'image/png' }
        '.jpg' { 'image/jpeg' }
        '.jpeg' { 'image/jpeg' }
        '.webp' { 'image/webp' }
        '.avif' { 'image/avif' }
        default { throw "Formato no reconocido: $extension" }
    }
    $base64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($ruta))
    return "data:$tipo%3Bbase64,$base64"
}

function Nueva-Pagina($id, $nombre) {
    $anterior = $documento.mxfile.diagram | Where-Object { $_.id -eq $id }
    if ($anterior) { [void]$documento.mxfile.RemoveChild($anterior) }

    $pagina = $documento.CreateElement('diagram')
    $pagina.SetAttribute('id', $id)
    $pagina.SetAttribute('name', $nombre)
    $modelo = $documento.CreateElement('mxGraphModel')
    $modelo.SetAttribute('dx', '1200'); $modelo.SetAttribute('dy', '1900')
    $modelo.SetAttribute('grid', '1'); $modelo.SetAttribute('gridSize', '10')
    $modelo.SetAttribute('page', '1'); $modelo.SetAttribute('pageScale', '1')
    $modelo.SetAttribute('pageWidth', '1200'); $modelo.SetAttribute('pageHeight', '1900')
    $raiz = $documento.CreateElement('root')
    $cero = $documento.CreateElement('mxCell'); $cero.SetAttribute('id', '0')
    $uno = $documento.CreateElement('mxCell'); $uno.SetAttribute('id', '1'); $uno.SetAttribute('parent', '0')
    [void]$raiz.AppendChild($cero); [void]$raiz.AppendChild($uno)
    [void]$modelo.AppendChild($raiz); [void]$pagina.AppendChild($modelo); [void]$documento.mxfile.AppendChild($pagina)
    return $pagina
}

function Agregar-Celda($pagina, $id, $texto, $x, $y, $ancho, $alto, $estilo) {
    $celda = $documento.CreateElement('mxCell')
    $celda.SetAttribute('id', $id); $celda.SetAttribute('value', $texto)
    $celda.SetAttribute('style', $estilo); $celda.SetAttribute('vertex', '1'); $celda.SetAttribute('parent', '1')
    $geometria = $documento.CreateElement('mxGeometry')
    $geometria.SetAttribute('x', "$x"); $geometria.SetAttribute('y', "$y")
    $geometria.SetAttribute('width', "$ancho"); $geometria.SetAttribute('height', "$alto"); $geometria.SetAttribute('as', 'geometry')
    [void]$celda.AppendChild($geometria); [void]$pagina.SelectSingleNode('.//root').AppendChild($celda)
}

function Agregar-Imagen($pagina, $id, $archivo, $texto, $x, $y, $ancho, $alto) {
    $imagen = Obtener-Imagen $archivo
    Agregar-Celda $pagina $id $texto $x $y $ancho $alto "shape=image;html=1;imageAspect=1;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;fontSize=13;fontStyle=1;image=$imagen;"
}

$gris = 'rounded=0;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#777777;fontColor=#333333;'
$grisOscuro = 'rounded=0;whiteSpace=wrap;html=1;fillColor=#d9d9d9;strokeColor=#555555;fontColor=#333333;fontStyle=1;'
$verde = 'rounded=1;whiteSpace=wrap;html=1;fillColor=#168b43;strokeColor=#168b43;fontColor=#ffffff;'
$blanco = 'rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#dddddd;fontColor=#222222;'
$titulo = 'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=none;fontColor=#168b43;fontSize=25;fontStyle=1;align=left;'
$texto = 'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=none;fontColor=#444444;fontSize=13;align=left;verticalAlign=top;'

function Agregar-CabeceraAlta($pagina, $prefijo, $tituloPagina) {
    Agregar-Celda $pagina "$prefijo-top" '🚚 Envíos a Lima Metropolitana       🛡 Pagos 100% seguros       🎧 Atención 24/7' 60 35 1080 42 'rounded=0;whiteSpace=wrap;html=1;fillColor=#168b43;strokeColor=#168b43;fontColor=#ffffff;fontSize=12;align=center;'
    Agregar-Imagen $pagina "$prefijo-logo" 'logo.png' '' 85 92 125 55
    Agregar-Celda $pagina "$prefijo-nav" 'Inicio   Comida   Ropa   Accesorios   Juguetes   Higiene   Promociones   Contacto' 250 95 710 50 'rounded=0;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#eeeeee;fontColor=#222222;fontSize=13;align=center;'
    Agregar-Celda $pagina "$prefijo-icons" '♡   👤   🛒' 985 95 130 50 'rounded=0;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#eeeeee;fontColor=#168b43;fontSize=16;align=center;'
    Agregar-Celda $pagina "$prefijo-page" $tituloPagina 60 170 1080 65 $titulo
}

function Agregar-FooterAlta($pagina, $prefijo) {
    Agregar-Celda $pagina "$prefijo-news" '¡Únete a la familia PetLove! 🐾     Recibe 10% de descuento            correo@ejemplo.com     SUSCRIBIRME' 60 1510 1080 75 'rounded=1;whiteSpace=wrap;html=1;fillColor=#309854;strokeColor=#168b43;fontColor=#ffffff;fontSize=14;fontStyle=1;align=center;'
    Agregar-Celda $pagina "$prefijo-footer" '<b>PetLove</b><br>Todo para tu mejor amigo<br><br>● Instagram  ● Facebook  ● WhatsApp' 60 1600 270 205 'rounded=0;whiteSpace=wrap;html=1;fillColor=#168b43;strokeColor=#168b43;fontColor=#ffffff;fontSize=12;align=left;verticalAlign=top;spacing=20;'
    Agregar-Celda $pagina "$prefijo-cat" '<b>Categorías</b><br><br>Comidas<br>Ropa<br>Accesorios<br>Juguetes<br>Higiene<br>Promociones' 330 1600 240 205 'rounded=0;whiteSpace=wrap;html=1;fillColor=#168b43;strokeColor=#168b43;fontColor=#ffffff;fontSize=12;align=left;verticalAlign=top;spacing=20;'
    Agregar-Celda $pagina "$prefijo-info" '<b>Información</b><br><br>Nosotros<br>Envíos y entregas<br>Métodos de pago<br>Cambios y devoluciones<br>Política de privacidad' 570 1600 270 205 'rounded=0;whiteSpace=wrap;html=1;fillColor=#168b43;strokeColor=#168b43;fontColor=#ffffff;fontSize=12;align=left;verticalAlign=top;spacing=20;'
    Agregar-Celda $pagina "$prefijo-help" '<b>Atención al Cliente</b><br><br>Preguntas frecuentes<br>Guía de tallas<br>Contacto<br><br>Lun-Sáb: 8am - 8pm<br><br>VISA · Mastercard · Yape · Plin' 840 1600 300 205 'rounded=0;whiteSpace=wrap;html=1;fillColor=#168b43;strokeColor=#168b43;fontColor=#ffffff;fontSize=12;align=left;verticalAlign=top;spacing=20;'
}

function Agregar-CabeceraBaja($pagina, $prefijo, $nombre) {
    Agregar-Celda $pagina "$prefijo-title" "WIREFRAME DE BAJA FIDELIDAD — $nombre" 60 20 1080 35 $grisOscuro
    Agregar-Celda $pagina "$prefijo-top" 'BARRA INFORMATIVA' 60 70 1080 35 $gris
    Agregar-Celda $pagina "$prefijo-logo" 'LOGO' 80 120 140 55 $grisOscuro
    Agregar-Celda $pagina "$prefijo-nav" 'MENÚ DE NAVEGACIÓN' 250 120 690 55 $gris
    Agregar-Celda $pagina "$prefijo-icons" 'ICONOS' 970 120 150 55 $gris
}

function Agregar-FooterBaja($pagina, $prefijo) {
    Agregar-Celda $pagina "$prefijo-news" 'BOLETÍN / CORREO / BOTÓN SUSCRIBIRME' 60 1510 1080 70 $grisOscuro
    Agregar-Celda $pagina "$prefijo-footer" 'FOOTER: LOGO Y REDES | CATEGORÍAS | INFORMACIÓN | ATENCIÓN AL CLIENTE | PAGOS' 60 1600 1080 205 $grisOscuro
}

# HIGIENE - BAJA FIDELIDAD
$p = Nueva-Pagina 'higiene-baja' 'Higiene - Baja fidelidad'
Agregar-CabeceraBaja $p 'hb' 'HIGIENE'
Agregar-Celda $p 'hb-head' 'MIGA DE PAN   |   TÍTULO Y DESCRIPCIÓN                                      ORDENAR' 60 215 1080 95 $gris
Agregar-Celda $p 'hb-filter' 'FILTROS<br><br>Categoría<br>○ Opción<br>○ Opción<br>○ Opción<br><br>Mascota<br>○ Perros<br>○ Gatos<br><br>Presentación<br>○ Pequeña<br>○ Mediana<br>○ Grande<br><br>BOTÓN LIMPIAR' 60 330 250 850 $gris
$posiciones = @(@(340,330),@(600,330),@(860,330),@(340,760),@(600,760),@(860,760))
for($i=0;$i -lt 6;$i++){ Agregar-Celda $p "hb-card$i" "IMAGEN DEL PRODUCTO<br><br>Nombre<br>Descripción<br>Precio<br>★★★★★          [CARRITO]" $posiciones[$i][0] $posiciones[$i][1] 230 390 $gris }
Agregar-Celda $p 'hb-garantias' 'GARANTÍA 1        GARANTÍA 2        COMPRA SEGURA        VARIEDAD' 60 1220 1080 130 $grisOscuro
Agregar-FooterBaja $p 'hb'

# HIGIENE - ALTA FIDELIDAD
$p = Nueva-Pagina 'higiene-alta' 'Higiene - Alta fidelidad'
Agregar-CabeceraAlta $p 'ha' 'Higiene y cuidado'
Agregar-Celda $p 'ha-desc' 'Productos para mantener a tu mascota limpia, sana y perfumada.' 60 220 650 35 $texto
Agregar-Celda $p 'ha-sort' 'Ordenar por: Más vendidos ▼' 850 215 290 45 $blanco
Agregar-Celda $p 'ha-filter' '<b>Filtrar por</b><br><br><b>Categoría</b><br>○ Shampoo<br>○ Acondicionador<br>○ Limpieza dental<br>○ Toallitas<br>○ Perfumes<br>○ Cepillos<br><br><b>Mascota</b><br>○ Perros<br>○ Gatos<br><br><b>Presentación</b><br>○ Pequeña<br>○ Mediana<br>○ Grande<br><br><br>Limpiar filtros' 60 290 220 830 $blanco
$productos = @(
    @('shampo-perro.webp','Shampoo Mimaskot<br>Pelaje brillante<br><b>S/ 24.90</b>',310,290),
    @('acondicionador-perro.jpg','Acondicionador<br>Suavidad y cuidado<br><b>S/ 22.90</b>',590,290),
    @('limpieza-dental.webp','Limpieza dental<br>Uso frecuente<br><b>S/ 18.90</b>',870,290),
    @('toallas-higienicas.jpg','Toallitas húmedas<br>Paquete práctico<br><b>S/ 16.90</b>',310,720),
    @('perfume.jpg','Perfume mascotas<br>Aroma suave<br><b>S/ 28.90</b>',590,720),
    @('cepillo.png','Cepillo removedor<br>Para el pelaje<br><b>S/ 19.90</b>',870,720)
)
for($i=0;$i -lt $productos.Count;$i++){
    $pr=$productos[$i]; Agregar-Celda $p "ha-card$i" '' $pr[2] $pr[3] 240 390 $blanco
    Agregar-Imagen $p "ha-img$i" $pr[0] '' ($pr[2]+25) ($pr[3]+20) 190 235
    Agregar-Celda $p "ha-text$i" "$($pr[1])<br>★★★★★                 🛒" ($pr[2]+18) ($pr[3]+270) 205 100 $texto
}
Agregar-Celda $p 'ha-garantias' '🌿 Ingredientes de calidad       🏅 Marcas originales       🛡 Compra 100% segura       ✓ Variedad' 60 1160 1080 115 'rounded=1;whiteSpace=wrap;html=1;fillColor=#f5faf6;strokeColor=#dcecdf;fontColor=#168b43;fontSize=14;align=center;'
Agregar-FooterAlta $p 'ha'

# CONTACTO - BAJA FIDELIDAD
$p = Nueva-Pagina 'contacto-baja' 'Contacto - Baja fidelidad'
Agregar-CabeceraBaja $p 'cb' 'CONTACTO'
Agregar-Celda $p 'cb-head' 'TÍTULO: CONTÁCTANOS<br>Texto de presentación' 60 215 1080 100 $gris
Agregar-Celda $p 'cb-info' 'INFORMACIÓN DE CONTACTO<br><br>Icono + Dirección<br><br>Icono + Teléfono<br><br>Icono + Correo<br><br>Icono + Horario<br><br>REDES SOCIALES' 60 350 430 610 $gris
Agregar-Celda $p 'cb-form' 'FORMULARIO<br><br>Nombre completo ____________________<br><br>Correo electrónico __________________<br><br>Asunto _____________________________<br><br>Mensaje<br>__________________________________<br>__________________________________<br>__________________________________<br><br>[ ENVIAR MENSAJE ]' 520 350 620 610 $gris
Agregar-Celda $p 'cb-faq' 'PREGUNTAS FRECUENTES<br><br>Pregunta 1                                      +<br>Pregunta 2                                      +<br>Pregunta 3                                      +<br>Pregunta 4                                      +' 60 1000 1080 360 $gris
Agregar-FooterBaja $p 'cb'

# CONTACTO - ALTA FIDELIDAD
$p = Nueva-Pagina 'contacto-alta' 'Contacto - Alta fidelidad'
Agregar-CabeceraAlta $p 'ca' 'Contáctanos'
Agregar-Celda $p 'ca-desc' 'Estamos para ayudarte. Escríbenos o visítanos.' 60 220 700 35 $texto
Agregar-Celda $p 'ca-info' '<b>Información de contacto</b><br><br>📍 <b>Dirección</b><br>Av. PetLove 123, Lima<br><br>◉ <b>Teléfono / WhatsApp</b><br>+51 987 654 321<br><br>✉ <b>Email</b><br>hola@petlove.pe<br><br>◷ <b>Horario</b><br>Lunes a sábado, 9:00 am - 8:00 pm<br><br><b>Síguenos</b><br>● Facebook   ● Instagram   ● WhatsApp   ● TikTok' 60 285 430 610 $blanco
Agregar-Celda $p 'ca-form' '<b>Envíanos un mensaje</b><br><br><b>Nombre completo</b><br>Escribe aquí...<br><br><b>Correo electrónico</b><br>Escribe aquí...<br><br><b>Asunto</b><br>Escribe aquí...<br><br><b>Mensaje</b><br><br><br><br><br><br><b>ENVIAR MENSAJE</b>' 520 285 620 610 'rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#dddddd;fontColor=#222222;fontSize=14;align=left;verticalAlign=top;spacing=30;'
Agregar-Celda $p 'ca-button' 'Enviar mensaje' 560 820 540 48 $verde
Agregar-Celda $p 'ca-faq-title' 'Preguntas frecuentes' 60 940 1080 55 $titulo
$preguntas=@('¿Cuánto demora el envío?','¿Qué métodos de pago aceptan?','¿Puedo cambiar un producto?','¿Cómo verifico mi pedido?')
for($i=0;$i -lt 4;$i++){ Agregar-Celda $p "ca-faq$i" "$($preguntas[$i])                                                        +" 60 (1010+$i*70) 1080 55 $blanco }
Agregar-FooterAlta $p 'ca'

# PROMOCIONES - BAJA FIDELIDAD
$p = Nueva-Pagina 'promociones-baja' 'Promociones - Baja fidelidad'
Agregar-CabeceraBaja $p 'pb' 'PROMOCIONES'
Agregar-Celda $p 'pb-head' 'TÍTULO: PROMOCIONES Y OFERTAS<br>Texto de presentación' 60 215 1080 100 $gris
$promosBaja=@(@(60,350),@(610,350),@(60,750),@(610,750))
for($i=0;$i -lt 4;$i++){ Agregar-Celda $p "pb-promo$i" "TÍTULO DE PROMOCIÓN<br>Descripción<br><br>[ VER PRODUCTOS ]                       IMAGEN" $promosBaja[$i][0] $promosBaja[$i][1] 530 350 $gris }
Agregar-Celda $p 'pb-garantias' 'GARANTÍA 1        GARANTÍA 2        COMPRA SEGURA        VARIEDAD' 60 1160 1080 130 $grisOscuro
Agregar-FooterBaja $p 'pb'

# PROMOCIONES - ALTA FIDELIDAD
$p = Nueva-Pagina 'promociones-alta' 'Promociones - Alta fidelidad'
Agregar-CabeceraAlta $p 'pa' 'Promociones y ofertas'
Agregar-Celda $p 'pa-desc' 'Descuentos especiales en productos seleccionados.' 60 220 700 35 $texto
$promos=@(
    @('comidas-varias.png','20% de descuento en alimentos<br>Oferta por tiempo limitado.<br><br><b>Ver productos</b>',60,285,'#fff4db'),
    @('higiene1.jpg','15% de descuento en higiene<br>Oferta por tiempo limitado.<br><br><b>Ver productos</b>',610,285,'#eaf7ee'),
    @('Juguetes1.jpg','2x1 en juguetes seleccionados<br>Oferta por tiempo limitado.<br><br><b>Ver productos</b>',60,690,'#f3eafd'),
    @('carro-delivery.png','Envío gratis desde S/ 120<br>Oferta por tiempo limitado.<br><br><b>Ver productos</b>',610,690,'#e8f1fc')
)
for($i=0;$i -lt 4;$i++){
    $pr=$promos[$i]; Agregar-Celda $p "pa-promo$i" $pr[1] $pr[2] $pr[3] 530 350 "rounded=1;whiteSpace=wrap;html=1;fillColor=$($pr[4]);strokeColor=#dddddd;fontColor=#168b43;fontSize=17;fontStyle=1;align=left;verticalAlign=top;spacing=28;"
    Agregar-Imagen $p "pa-img$i" $pr[0] '' ($pr[2]+285) ($pr[3]+55) 215 230
}
Agregar-Celda $p 'pa-garantias' '🌿 Ingredientes de calidad       🏅 Marcas originales       🛡 Compra 100% segura       ✓ Variedad' 60 1110 1080 115 'rounded=1;whiteSpace=wrap;html=1;fillColor=#f5faf6;strokeColor=#dcecdf;fontColor=#168b43;fontSize=14;align=center;'
Agregar-FooterAlta $p 'pa'

# JUGUETES - BAJA FIDELIDAD
$p = Nueva-Pagina 'juguetes-baja' 'Juguetes - Baja fidelidad'
Agregar-CabeceraBaja $p 'jb' 'JUGUETES'
Agregar-Celda $p 'jb-banner' 'IMAGEN DEL BANNER DE MASCOTAS' 60 210 1080 210 $grisOscuro
Agregar-Celda $p 'jb-filter' 'FILTRAR JUGUETES<br><br><b>Mascota</b><br>○ Todas<br>○ Perros<br>○ Gatos<br><br><b>Edad</b><br>○ Todas<br>○ Cachorro<br>○ Adulto<br><br><b>Tamaño</b><br>○ Todos<br>○ Pequeño<br>○ Mediano<br>○ Grande<br><br>[ LIMPIAR FILTROS ]' 60 460 250 750 $gris
Agregar-Celda $p 'jb-search' 'BUSCAR JUGUETE...                                      🔍' 340 460 800 55 $gris
$posicionesJuguetes = @(@(340,550),@(610,550),@(880,550),@(340,900),@(610,900),@(880,900))
for($i=0;$i -lt 6;$i++){
    Agregar-Celda $p "jb-card$i" "IMAGEN DEL JUGUETE<br><br>Nombre del juguete<br>Precio<br><br>[ AGREGAR AL CARRITO ]" $posicionesJuguetes[$i][0] $posicionesJuguetes[$i][1] 230 310 $gris
}
Agregar-FooterBaja $p 'jb'

# JUGUETES - ALTA FIDELIDAD
$p = Nueva-Pagina 'juguetes-alta' 'Juguetes - Alta fidelidad'
Agregar-CabeceraAlta $p 'ja' 'Juguetes para perros y gatos'
Agregar-Imagen $p 'ja-banner' 'peroygatomascota.png' '' 60 210 1080 210
Agregar-Celda $p 'ja-filter' '<b>Filtrar juguetes</b><br><br><b>Mascota</b><br>○ Todas<br>○ Perros<br>○ Gatos<br><br><b>Edad</b><br>○ Todas<br>○ Cachorro<br>○ Adulto<br><br><b>Tamaño</b><br>○ Todos<br>○ Pequeño<br>○ Mediano<br>○ Grande<br><br><br><b>Limpiar filtros</b>' 60 460 230 750 $blanco
Agregar-Celda $p 'ja-search' 'Buscar juguete...                                                     🔍' 320 460 820 55 'rounded=1;arcSize=50;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#dddddd;fontColor=#888888;fontSize=14;align=left;spacingLeft=25;'
$juguetes = @(
    @('Juguetes/MordedorDehueso.jpg','Mordedor de hueso<br><b>S/ 25.90</b>',320,550),
    @('Juguetes/MordedorDental.png','Mordedor Dental<br><b>S/ 18.90</b>',595,550),
    @('Juguetes/MordedorNylon.png','Mordedor de nylon<br><b>S/ 30.90</b>',870,550),
    @('Juguetes/PelotaGoma.png','Pelota de Goma<br><b>S/ 22.90</b>',320,900),
    @('Juguetes/PelotaTenis.png','Pelota de tenis<br><b>S/ 35.90</b>',595,900),
    @('Juguetes/RatonParagatos.webp','Ratón para gatos<br><b>S/ 22.90</b>',870,900)
)
for($i=0;$i -lt $juguetes.Count;$i++){
    $ju=$juguetes[$i]
    Agregar-Celda $p "ja-card$i" '' $ju[2] $ju[3] 240 310 $blanco
    Agregar-Imagen $p "ja-img$i" $ju[0] '' ($ju[2]+30) ($ju[3]+15) 180 170
    Agregar-Celda $p "ja-text$i" "$($ju[1])<br><br><b>Agregar al carrito</b>" ($ju[2]+15) ($ju[3]+195) 210 95 'rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=none;fontColor=#222222;fontSize=13;align=center;verticalAlign=top;'
    Agregar-Celda $p "ja-button$i" 'Agregar al carrito' ($ju[2]+25) ($ju[3]+260) 190 34 $verde
}
Agregar-FooterAlta $p 'ja'

$configuracion = New-Object System.Xml.XmlWriterSettings
$configuracion.Indent = $true
$configuracion.Encoding = New-Object System.Text.UTF8Encoding($false)
$escritor = [Xml.XmlWriter]::Create($archivoDrawio, $configuracion)
$documento.Save($escritor); $escritor.Close()
Write-Output 'Se actualizaron los wireframes de las páginas.'
