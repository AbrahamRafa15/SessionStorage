# SessionStorage

## ¿Qué es Session Storage?

Es una propiedad que nos permite acceder al almacenamiento local de la sesión actual en nuestro navegador. Es similar a Local Storage, con la diferencia de que al cerrar el navegador (finalizar la sesión) los datos guardados son eliminados. Por lo que si recargamos la página, seguirá la sesión.

## Propiedades 

### Validar objeto

Para checar que Storage está definido en nuestro navegador y es accesible

```JavaScript
if (typeof(Storage) !== 'undefined') {
    // Código cuando el Storage es válido
}
else {
    // Código cuando el Storage no es válido
}
```

### Guardar datos

Existen dos opciones para guardar los datos:

```JavaScript
//Opción 1:
sessionStorage.setItem(name, content);

//Opción 2: (Sólo funciona con nombres válidos de variables)
sessionStorage.name = content;
```

### Recuperar datos

De igual forma, se pueden extraer los datos de formas:

```JavaScript
//Opción 1: 
let content = sessionStorage.getItem(name);

//Opción 2: (Sólo funciona con nombres válidos de variables)
let content = sessionStorage.name;
```

### Eliminar datos

Para eliminar un elemento:

```JavaScript
sessionStorage.removeItem(propiedad);
```

O también se puede limpiar completamente:

```JavaScript
sessionStorage.clear();
```

## Diferencias con LocalStorage

- Mientras que en LocalStorage los datos son persistentes en la computadora, en SessionStorage se eliminan al cerrar el navegador.
- En LocalStorage los datos se pueden "compartir" entre diferentes pestañas de la misma página, mientras que SessiónStorage sólo funciona para esa pestaña específica

## Referencias

Alexiz Mora. (2018). _¿Qué es y cómo utilizar localStorage y sessionStorage?_. https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage

MDN. (17 de diciembre de 2024). _Window.sessionStorage._ https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage
