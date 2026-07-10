# Prácticas Fundamentales de React 🚀 (`t3_act5_react`)

Este proyecto tiene prácticas en React construidas con Vite que muestran componentes, propiedades, estados y renderizado dinámico.


## Respuestas 

### a) ¿Qué diferencia hay entre props y state en React?
Props son parámetros o datos que un componente padre le transfiere a un componente hijo y el hijo solo las recibe para leerlas y mostrarlas, no puede modificarlas mientras que State es la memoria interna de un componente. guarda datos que pueden cambiar al actualizarse y actualizar la pantalla.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Es un identificador único que React necesita cuando transformamos un arreglo en elementos visuales mediante un ciclo. Le sirve a React para rastrear los elementos específicos que se cambiaron, se agregaron o se eliminaron.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un Hook que nos permite añadirle un estado a un componente. Nos devuelve un arreglo con dos cosas: la variable que guarda el valor actual y una función especial para modificar ese valor. 
En la mini aplicación, lo utilicé en el componente `Contador.jsx` para crear la variable `cuenta`. Cada que se da click en el botón Incrementar, se dispara la función `setCuenta`, lo que actualiza el número en la pantalla de inmediato.

### d) Enlace del repositorio de GitHub
* [Repositorio de GitHub](https://github.com/MiguelAAH/t3_act5_react)

### e) Enlace de GitHub Pages
* [Proyecto en Vivo en GitHub Pages](https://miguelaah.github.io/t3_act5_react/)*