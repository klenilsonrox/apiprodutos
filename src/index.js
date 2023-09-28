import express from "express"
import cors from "cors"
import { connectDatabase } from "./database/dbcon.js"
import routerProducts from "./routes/router.js"


const app = express()
const corsOptions = {
  origin: [
    'https://rxdvamazon.netlify.app',
    'https://apipostprodutos.netlify.app',
    "http://localhost:5173"
  ],
};

  app.use(cors(corsOptions));

app.use(express.json())
app.use("/",routerProducts)

connectDatabase()

app.listen(process.env.MONGODB_PORT || 3000)