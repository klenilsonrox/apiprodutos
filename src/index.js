import express from "express"
import cors from "cors"
import { connectDatabase } from "./database/dbcon.js"
import routerProducts from "./routes/router.js"


const app = express()

const whitelist = ['https://rxdvamazon.netlify.app/', 'https://apipostprodutos.netlify.app/'];

const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Acesso não permitido por CORS'));
      }
    },
  };

  app.use(cors(corsOptions));

app.use(express.json())
app.use("/",routerProducts)

connectDatabase()

app.listen(process.env.PORT || 3000)