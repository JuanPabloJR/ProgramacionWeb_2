const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const productRoutes = require('./routes/index');
app.use('/api', productRoutes);

app.listen(3000, () => console.log("Servidor en el puerto 3000"));