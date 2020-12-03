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

app.get("/apiProductos", async(req, res)=>{
    const productos = await Producto.find({});
    res.send(productos);
    // console.log(res)
    
})

app.post("/apiProductos",async(req, res)=>{
    const nuevoProducto = new Producto(req.body);
    const guardarProducto = await nuevoProducto.save();
    res.send(guardarProducto);
    // console.log(req)
})

app.delete("/apiProductos/:id",async(req, res)=>{
    const eliminarProducto = await Producto.findByIdAndDelete(req.params.id);
    res.send(eliminarProducto);
    // console.log(req,res)
})

const Order = mongoose.model("order", new mongoose.Schema({
    _id:{
        type: String,
        default: shortid.generate
    },
    email:String,
    nombre: String,
    direccion: String,
    total: Number,
    cartItems:[{
        _id: String,
        titulo: String,
        precio: Number,
        count: Number
    }]
},
{timestamps: true}));

app.post("/apiOrders", async(req, res)=>{
    if(!req.body.nombre ||
        !req.body.email ||
        !req.body.direccion ||
        !req.body.total ||
        !req.body.cartItems 
        ){
            return res.send({mensaje: "Data es requerida."});
        }
        const order = await Order(req.body).save();
        res.send(order);
        console.log(req.body)
})



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('server at http://localhost:5000')
})