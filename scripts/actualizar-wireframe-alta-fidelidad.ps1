$ErrorActionPreference = 'Stop'

$raizProyecto = Split-Path -Parent $PSScriptRoot
$archivoDrawio = Join-Path $raizProyecto 'wireframes-portada.drawio'
$carpetaImagenes = Join-Path $raizProyecto 'public\imagenes'

[xml]$documento = Get-Content -LiteralPath $archivoDrawio -Raw
$paginaAlta = $documento.mxfile.diagram | Where-Object { $_.name -eq 'Alta fidelidad' }

if (-not $paginaAlta) {
    throw 'No se encontró la página Alta fidelidad.'
}

function Obtener-TipoImagen($nombreArchivo) {
    $extension = [System.IO.Path]::GetExtension($nombreArchivo).ToLowerInvariant()

    switch ($extension) {
        '.png'  { return 'image/png' }
        '.jpg'  { return 'image/jpeg' }
        '.jpeg' { return 'image/jpeg' }
        '.webp' { return 'image/webp' }
        '.avif' { return 'image/avif' }
        default { throw "Formato de imagen no reconocido: $extension" }
    }
}

function Obtener-ImagenBase64($nombreArchivo) {
    $rutaImagen = Join-Path $carpetaImagenes $nombreArchivo

    if (-not (Test-Path -LiteralPath $rutaImagen)) {
        throw "No se encontró la imagen: $rutaImagen"
    }

    $tipoImagen = Obtener-TipoImagen $nombreArchivo
    $contenido = [Convert]::ToBase64String([IO.File]::ReadAllBytes($rutaImagen))
    # %3B representa el signo ; dentro del estilo de diagrams.net.
    # Sin esta conversión, diagrams.net corta la dirección y muestra una imagen rota.
    return "data:$tipoImagen%3Bbase64,$contenido"
}

function Colocar-Imagen($idCelda, $nombreArchivo, $texto, $ajustarImagen) {
    $celda = $paginaAlta.SelectSingleNode(".//mxCell[@id='$idCelda']")

    if (-not $celda) {
        throw "No se encontró la celda: $idCelda"
    }

    $imagen = Obtener-ImagenBase64 $nombreArchivo
    $celda.value = $texto
    $celda.style = "shape=image;html=1;imageAspect=$ajustarImagen;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;fontSize=15;fontStyle=1;spacingTop=6;image=$imagen;"
}

# Logo e imagen principal de la portada.
Colocar-Imagen 'a2' 'logo.png' '' '1'
Colocar-Imagen 'a6' 'animales-hero.png' '' '1'

# Imágenes reales de las categorías.
Colocar-Imagen 'a8' 'comida1.webp' 'Comida' '1'
Colocar-Imagen 'a9' 'ropa1.avif' 'Ropa' '1'
Colocar-Imagen 'a10' 'accesorios1.jpg' 'Accesorios' '1'
Colocar-Imagen 'a11' 'Juguetes1.jpg' 'Juguetes' '1'
Colocar-Imagen 'a12' 'higiene1.jpg' 'Higiene' '1'
Colocar-Imagen 'a13' 'promocion.png' 'Promociones' '1'

# Logos reales de las marcas.
Colocar-Imagen 'a15' 'LOGOMIMASKOT.jpg' '' '1'
Colocar-Imagen 'a16' 'logo-ricocan-1024x1007.webp' '' '1'
Colocar-Imagen 'a17' 'logo-pedigree.png' '' '1'
Colocar-Imagen 'a18' 'logo-whiskas.jpg' '' '1'
Colocar-Imagen 'a19' 'logo-proplan.png' '' '1'

# Imágenes de las promociones y beneficios.
Colocar-Imagen 'a21' 'comidas-varias.png' '20% EN ALIMENTOS' '1'
Colocar-Imagen 'a22' 'manchas.png' '15% EN HIGIENE' '1'
Colocar-Imagen 'a23' 'carro-delivery.png' 'ENVÍO GRATIS' '1'

# Footer dividido en columnas, igual que en la página web.
$fondoFooter = $paginaAlta.SelectSingleNode(".//mxCell[@id='a30']")
$fondoFooter.value = ''
$fondoFooter.style = 'rounded=0;whiteSpace=wrap;html=1;fillColor=#168b43;strokeColor=#168b43;'

$raizDiagrama = $paginaAlta.SelectSingleNode('.//root')
$celdasAnteriores = @($paginaAlta.SelectNodes(".//mxCell[starts-with(@id,'a30-')]") )

foreach ($celdaAnterior in $celdasAnteriores) {
    [void]$celdaAnterior.ParentNode.RemoveChild($celdaAnterior)
}

function Agregar-CeldaFooter($id, $texto, $x, $y, $ancho, $alto, $estilo) {
    $celda = $documento.CreateElement('mxCell')
    $celda.SetAttribute('id', $id)
    $celda.SetAttribute('value', $texto)
    $celda.SetAttribute('style', $estilo)
    $celda.SetAttribute('vertex', '1')
    $celda.SetAttribute('parent', '1')

    $geometria = $documento.CreateElement('mxGeometry')
    $geometria.SetAttribute('x', [string]$x)
    $geometria.SetAttribute('y', [string]$y)
    $geometria.SetAttribute('width', [string]$ancho)
    $geometria.SetAttribute('height', [string]$alto)
    $geometria.SetAttribute('as', 'geometry')

    [void]$celda.AppendChild($geometria)
    [void]$raizDiagrama.AppendChild($celda)
}

$estiloTitulo = 'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=none;fontColor=#ffffff;fontSize=16;fontStyle=1;align=left;verticalAlign=top;'
$estiloTexto = 'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=none;fontColor=#ffffff;fontSize=12;align=left;verticalAlign=top;spacingTop=4;'

$imagenLogoFooter = Obtener-ImagenBase64 'logo.png'
Agregar-CeldaFooter 'a30-logo' '' 130 1570 125 48 "shape=image;html=1;imageAspect=1;aspect=fixed;image=$imagenLogoFooter;"
Agregar-CeldaFooter 'a30-descripcion' 'Todo para tu mejor amigo en un solo lugar.<br><br>● Instagram&nbsp;&nbsp; ● Facebook<br>● WhatsApp&nbsp; ● TikTok' 130 1625 205 95 $estiloTexto

Agregar-CeldaFooter 'a30-titulo-categorias' 'Categorías' 370 1570 180 28 $estiloTitulo
Agregar-CeldaFooter 'a30-categorias' 'Comidas<br>Ropa<br>Accesorios<br>Juguetes<br>Higiene<br>Promociones' 370 1605 180 115 $estiloTexto

Agregar-CeldaFooter 'a30-titulo-informacion' 'Información' 590 1570 190 28 $estiloTitulo
Agregar-CeldaFooter 'a30-informacion' 'Nosotros<br>Envíos y entregas<br>Métodos de pago<br>Cambios y devoluciones<br>Términos y condiciones<br>Política de privacidad' 590 1605 200 115 $estiloTexto

Agregar-CeldaFooter 'a30-titulo-atencion' 'Atención al Cliente' 830 1570 210 28 $estiloTitulo
Agregar-CeldaFooter 'a30-atencion' 'Preguntas frecuentes<br>Guía de tallas<br>Cuidados de tu mascota<br>Contacto<br><br>◷ Lunes a Sábado: 8am - 8pm' 830 1605 220 115 $estiloTexto

Agregar-CeldaFooter 'a30-linea' '' 130 1725 840 1 'rounded=0;whiteSpace=wrap;html=1;fillColor=#65b77c;strokeColor=#65b77c;'
Agregar-CeldaFooter 'a30-derechos' '© 2024 PetLove. Todos los derechos reservados.' 130 1740 420 25 $estiloTexto
Agregar-CeldaFooter 'a30-pagos' 'VISA     Mastercard     Yape     Plin' 755 1740 285 25 'rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#ffffff;fontColor=#16853b;fontSize=11;fontStyle=1;align=center;'

$configuracion = New-Object System.Xml.XmlWriterSettings
$configuracion.Indent = $true
$configuracion.Encoding = New-Object System.Text.UTF8Encoding($false)
$escritor = [System.Xml.XmlWriter]::Create($archivoDrawio, $configuracion)
$documento.Save($escritor)
$escritor.Close()

Write-Output "Wireframe actualizado: $archivoDrawio"
