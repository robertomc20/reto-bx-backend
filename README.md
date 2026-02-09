# reto-bx-backend
Backend del desafío técnico **BX**, desarrollado con **Node.js**, **Express** y **MongoDB**.  
Este servicio se encarga de obtener personajes desde APIs externas, almacenar votos y exponer endpoints para el frontend.

---

## 🧩 Descripción
El backend permite:

- Obtener personajes aleatorios desde distintas fuentes externas
- Registrar votos (like / dislike) por personaje
- Almacenar y actualizar información en base de datos
- Exponer métricas básicas de votación

Las fuentes de personajes utilizadas son:

- Rick and Morty API
- Pokémon API
- SuperHero API

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB** (local / Atlas)
- **Mongoose**
- **Axios**
- **dotenv**
- **cors**

---

## 🔌 APIs externas utilizadas
- Rick and Morty API: https://rickandmortyapi.com/
- Pokémon API: https://pokeapi.co/
- SuperHero API: https://superheroapi.com/

---

## 📦 Funcionalidades principales
- Obtener un personaje aleatorio por categoría
- Registrar votos (like / dislike) por personaje
- Crear personajes automáticamente al primer voto
- Actualizar contadores de likes y dislikes
- Manejo de errores básicos
- Normalización de datos provenientes de APIs externas

---

## 📂 Estructura general del proyecto
- **routes**: definición de endpoints
- **controllers**: manejo de requests y responses
- **services**: lógica para consumir APIs externas
- **models**: esquemas de MongoDB
- **config**: conexión a base de datos
- **utils**: helpers y utilidades

---

## ⚙️ Configuración de Variables de Ambiente
1.- Crear archivo `.env`  
2.- Copiar el contenido de `.env.example` y pegarlo en el archivo `.env`

## Configuración de Base de Datos
Este proyecto fue pensado para trabajar con la capa gratuita de MongoDB Atlas.

Durante el desarrollo del proyecto, se utilizó una instancia de MongoDB local, ya que se presentaron problemas de red (aparentemente relacionados con DNS). Se intentaron distintas configuraciones de red e IP en el equipo local, entre otras pruebas, pero no fue posible establecer conexión con el clúster de MongoDB Atlas.

De todas maneras, para probar ambos escenarios no se requiere ningún cambio en el código. Solo es necesario actualizar la variable de entorno indicada a continuación.

### Base de Datos LOCAL
1.- Crear base de datos localmente en MongoDB Compass con el nombre de:
characters_db

2.- En el archivo `.env`:
MONGODB_URI=mongodb://127.0.0.1:27017/characters_db

### Base de Datos Atlas (DEBE SER EL CONNECTIONSTRING QUE SALE EN EL ATLAS)
En el archivo .env:
MONGODB_URI=mongodb+srv://<user>:<password>@reto-bx.clfk8ml.mongodb.net/characters_db

▶️ Instalación y ejecución
1.- Instalar dependencias:
npm install

2.- Levantar el servidor en modo desarrollo:
npm run dev (recomendado)
o
npm start

3.- El backend quedará disponible en:
http://localhost:3001

📡 Endpoints
1.- Obtener personaje aleatorio:
GET http://localhost:3001/api/characters/random?category=superhero
GET http://localhost:3001/api/characters/random?category=pokemon
GET http://localhost:3001/api/characters/random?category=rick_and_morty

2.- Registrar voto:
POST http://localhost:3001/api/votes
BODY en caso de "Me gusta": 
{
    "externalId": "149",
    "source": "pokemon",
    "name": "Dragonite",
    "vote": "like"
}
BODY en caso de "No me gusta"
{
    "externalId": "149",
    "source": "pokemon",
    "name": "Dragonite",
    "vote": "dislike"
}

3.- Obtener personaje con más "Me gusta":
GET http://localhost:3001/api/metrics/top-liked

4.- Obtener personaje con más "No me gusta":
GET http://localhost:3001/api/metrics/top-disliked

5.- Obtener último personaje votado:
GET http://localhost:3001/api/metrics/last

### Autor
Desarrollado por Roberto Marihuán Crisóstomo
Desafío técnico BX