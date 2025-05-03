# Grupo 14(Rojo)

- FAI-2258 Cifuentes Flores Andrés Emanuel
- FAI-3236 Villegas Reibold Martin Esteban
- FAI-4971 Farroni Carrera Juan Manuel

# Descripcion del proyecto

DinoWiki es una SPA(Single Page App) realizada con React y Tailwind que consume datos desde una API simulada de 
Dinosaurios, que incluya navegación entre páginas, búsqueda, idioma en español e inglés, y persistencia de 
preferencias del usuario. Se tendrá una página de home donde muestre una lista de elementos en forma de tarjetas 
y permita al usuario ver detalles adicionales al hacer click en un elemento. También se desarrollará una página 
de elementos favoritos del usuario.


## Instalación / visualización

### Requisitos

Tener instalado:

- [Node.js](https://nodejs.org/): Un popular entorno de programación que puede utilizarse para crear aplicaciones a gran escala que necesiten soportar múltiples peticiones concurrentes

- [Tailwind] (https://tailwindcss.com): Un framework de utilidades para estilos rápidos y consistentes(CSS).

- [React-Router] (https://reactrouter.com): Herramienta para la gestión de rutas dentro de aplicaciones React.

- [i18next] (https://www.i18next.com): Una biblioteca de React que facilita la internacionalización y localización de aplicaciones web

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Martin-VillegasReibold/PWA-REACT-TP2.git
```

2. Abrir la terminal en el directorio _/PWA-REACT-TP2_ e ingresar:

```bash
npm install
```
- Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```
- React-Router

```bash
npm i react-router
```
- i18next

```bash
npm install i18n --save
```

### Visualización

1. Abrir la terminal en el directorio del proyecto e ingresar:

```bash
npm run dev
```

Copiar la URL, en este caso:

```bash
http://localhost:5173/
```

2. Ingresar en un navegador web la URL.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.