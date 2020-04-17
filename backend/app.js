//Importar express
const express = require('express')
const router = express.Router();
const cors = require('cors');
//Inicializar librería
const app = express()
app.use(express.json());
app.use(cors());

//Endpoint
app.get("/", (req, res)=>{
  res.send('Bienvenido a la API de creación de bookmarks')
})
///Importarlas rutas
const rutas_url = require("./routes/url")
app.use(rutas_url);

//Puerto
const port = 3001
//Levantamiento
app.listen(port,()=>{
  console.log(`Escuchando API en http://localhost:${port}`);
})
