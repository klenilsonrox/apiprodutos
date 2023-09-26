import express from "express"
import cors from "cors"
import { connectDatabase } from "./database/dbcon.js"
import routerProducts from "./routes/router.js"


const app = express()
const link01= process.env.MONGODB_LINK1
const link02= process.env.MONGODB_LINK2



const corsOptions = {
  origin: [
    link01,
    link02
  ],
};

  app.use(cors(corsOptions));

app.use(express.json())
app.use("/",routerProducts)

connectDatabase()

app.listen(process.env.PORT || 3000)