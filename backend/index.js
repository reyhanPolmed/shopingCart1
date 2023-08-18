import express from "express"
import cors from "cors"
import products from "./products.js";

const app = express();
app.use(express.json())
app.use(cors())

app.get('/products', (req, res) => {
    res.send(products)
})


app.listen(5000, () => console.log("server up and running...."))
