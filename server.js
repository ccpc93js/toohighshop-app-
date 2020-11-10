const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const shortid = require('shortid')

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/toohighshop-db",{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

const Producto = mongoose.model("productos",
new mongoose.Schema({
    _id:{type: String, default: shortid.generate},
    imagen: String,
    titulo: String,
    descripcion: String,
    tallasDisponibles: [String],
    precio: Number
}))

app.get("/api", async(req, res)=>{
    const productos = await Producto.find({});
    res.send(productos);
    console.log(res)
    
})

app.post("/api",async(req, res)=>{
    const nuevoProducto = new Producto(req.body);
    const guardarProducto = await nuevoProducto.save();
    res.send(guardarProducto);
    console.log(req)
})

app.delete("/api/:id",async(req, res)=>{
    const eliminarProducto = await Producto.findByIdAndDelete(req.params.id);
    res.send(eliminarProducto);
    console.log(req,res)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('server at http://localhost:5000')
})