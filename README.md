# Descripción

Aplicación móvil y web desarrollada con React Native (Expo) que permite buscar películas, ver detalles completos y reproducir su tráiler dentro de la app.

# Estructura del Proyecto

movieApp/
│
├── App.js
├── app.json
│
├── components/
│ ├── SearchBar.js
│ ├── TrailerPlayer.js
│ ├── TrailerPlayer.native.js
│
├── screens/
│ ├── HomeScreen.js
│ └── DetailScreen.js
│
├── services/
│ └── api.js
│
├── styles/
│ └── styles.js
│
└── README.md

# Tecnologías utilizadas
- React Native
- Expo
- React Navigation
- AsyncStorage
- YouTube Data API v3
- OMDb API

# Dependencias instaladas
- npm install @react-navigation/native
- npm install @react-navigation/native-stack
- npm install react-native-screens react-native-safe-area-context
- npm install @react-native-async-storage/async-storage
- npm install react-native-youtube-iframe

# APIs utilizadas
## OMDb API
Usada para buscar películas y obtener detalles
Endpoint:
https://www.omdbapi.com/

## YouTube Data API v3
Usada para obtener el ID del tráiler
Endpoint:
https://www.googleapis.com/youtube/v3/search

# Funcionamiento general
## HomeScreen
- Contiene la barra de búsqueda (SearchBar)
- Realiza consultas a OMDb
- Muestra lista de películas

## SearchBar

Funciones principales:

- Guarda la última búsqueda con AsyncStorage
- Muestra categorías en formato grid 
- Permite limpiar búsqueda
- Autocompleta con categorías

## DetailScreen
- Muestra detalles completos de la película:
- Título
- Rating ⭐
- Géneros 
- Descripción
- Información técnica
- Obtiene el tráiler desde YouTube API

# TrailerPlayer
- Web (TrailerPlayer.js)
- Usa <iframe> dentro de un Modal
- Reproduce el tráiler embebido

# TrailerPlayer.native.js
- Mobile (TrailerPlayer.native.js)
- Usa react-native-youtube-iframe
- Reproduce el tráiler dentro de la app
- Controlado por modal

# Estilos

Archivo central:

/styles/styles.js

Contiene:

- Diseño general (dark theme)
- Tarjetas de películas
- Categorías tipo grid
- Modal del tráiler
- Diseño estilo streaming 

# Navegación

## Definida en App.js:

- Inicio → HomeScreen
- Detalle → DetailScreen

## Configuración:

- Header personalizado

# Características principales

- Búsqueda dinámica de películas
- Guardado automático de búsqueda
- Categorías rápidas
- Diseño moderno tipo streaming
- Tráiler dentro de la app      // (NO redirección)
- Compatible con Web y Android

# Problemas conocidos

## Web
Algunos reproductores pueden fallar dependiendo del navegador
Uso de <iframe> para compatibilidad

## Mobile
Requiere instalación correcta de:
react-native-youtube-iframe

# Ejecución del proyecto
npm install
npx expo start

## Opciones:

w → Web
a → Android
Escanear QR con Expo Go

# Configuración importante
- app.json
- Nombre de la app: Peliculas
- Orientación: vertical

# Notas para desarrolladores
Separación clara por carpetas (components, screens, services, styles)
Código modular y reutilizable

# Autor

- BRYAN DIAZ MERA

# Licencia

- Libre para uso y modificación.