# Evaluación FrontEnd
​	Solución de solicitudes de Evaluación FrontEnd.

- **Autor:** José Mirabal.

- **Lenguajes utilizados:** HTML, CSS y JavaScript (Vanilla).

**Nota:** Los archivos dentro de la carpeta "code" son tres carpetas (cada una con el nombre de una solicitud), a su vez, dentro de cada carpeta está la estructura de carpetas base (carpetas como css, js, img y video). Para probar el código no es necesario instalar o descargar librerías o componentes adicionales ya que todo el código está realizado desde cero.

------



## Solicitud R2.

Crear una web R2.html, y maquetar la tabla de datos de ejemplo, responsive mobile, tablet y web, y debe cumplir con las siguientes características de diseño web, en este ejemplo solo utilizar html y css.

  ##### Solución R2.
El desarrollo de la solución de esta solicitud consiste en crear la estructura de de la tabla en HTML con datos estáticos, en este caso, utilicé los primeros diez datos que aparecen en la tabla de la solución R4. Además de agregar estilos sencillos para la tabla y un ícono en formato SVG en la cabecera de cada columna de la tabla.

------



## Solicitud R3.

Crear una  web R3.html, y maquetar el diseño suministrado. Al dar click en el play reproducir un video en un modal. Las fotografias y video, a consideracion del candidato. Se evaluara Metatagas, Favicon, Codificacion (html, css y javascript), y responsive.

  ##### Solución R3.

Para la solución de esta solicitud ustilicé un video descargado con poco peso para reproducirlo cuando el modal se está mostrando, se aplicó estilos al contenedor de la imagen, al botón que llama el modal y al texto, luego estilos para darle forma al modal, para posicionarlo sobre el conteneder principal y oscurecer el fondo con una transición.

En lo que al script se refiere, hay dos funciones, mostrarModal() y ocultarModal(), la primera función es activada al presionar el botón que abre el modal (imagen del contenedor principal con el botón de play) y la segunda al presionar el botón que cierra el modal (botón con el ícono X en la esquina superior derecha del modal). Cabe destacar que cuando el modal está activo, se deshabilita el scroll del body en el HTML (en caso de que el texto del body sea extenso).

------



## Solicitud R4.

Crear una pagina R4.html, y consumir un servicio gratuito de datos (Rest Api - GET), para listar informacion, en una tabla con diseño similiar a la solicitada en R2.

  ##### Solución R4.

La API de referencia utilizada es: https://mediastack.com/product

Desde esta API se toman los datos de Autor, Título, Fuente, Categoría, Idioma y País del arreglo obtenido.

Se realiza la petición por medio de fetch() con la URL y la access_key proporcionada en la cuenta gratuita de mediastack

La respuesta obtenida de la API es pasada a formato json y ese resultado es recorrido por un forEach(), el cual crea en cada iteración una fila con los datos solicitadosy por último, cada fila es agregada el tbody del HTML.

------