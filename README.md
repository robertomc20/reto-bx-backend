# reto-bx-backend
Backend del desafío técnico de BX, desarrollado con Node.js, Express y MongoDB Atlas.

## Configuración de Variables de Ambiente
Copiar .env.example a .env y completar las variables necesarias.

## Configuración de Base de Datos
Este proyecto fue pensado para trabajar con la capa gratuita de MongoDB Atlas.

Durante el desarrollo del proyecto, se utilizó una instancia de MongoDB local, ya que se presentaron problemas de red (aparentemente relacionados con DNS). Se intentaron distintas configuraciones de red e IP en el equipo local, entre otras pruebas, pero no fue posible establecer conexión con el clúster de MongoDB Atlas.

De todas maneras, para probar ambos escenarios no se requiere ningún cambio en el código. Solo es necesario actualizar la variable de entorno indicada a continuación.

### Base de Datos LOCAL
En el archivo `.env`:
MONGODB_URI=mongodb://127.0.0.1:27017/characters_db

### Base de Datos Atlas
En el archivo .env:
MONGODB_URI=mongodb+srv://<user>:<password>@reto-bx.clfk8ml.mongodb.net/characters_db