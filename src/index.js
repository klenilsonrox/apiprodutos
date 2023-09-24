import express from "express"
import cors from "cors"
import { connectDatabase } from "./database/dbcon.js"
import routerProducts from "./routes/router.js"


const app = express()
app.use(cors({
    origin:"http://localhost:3000/api/produtos"
}))
app.use(express.json())
app.use("/",routerProducts)

connectDatabase()

app.listen(process.env.PORT || 3000)