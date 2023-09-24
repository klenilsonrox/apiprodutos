import express from "express"
import cors from "cors"
import { connectDatabase } from "./database/dbcon.js"
import routerProducts from "./routes/router.js"


const app = express()

// app.use((req, res, next) => {
//     // Definir a origem permitida (http://www.google.com)
//     res.header('Access-Control-Allow-Origin', 'https://rxdvamazon.netlify.app');
//     // Definir outros cabeçalhos CORS permitidos
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
//     // Permitir credenciais (cookies)
//     res.header('Access-Control-Allow-Credentials', 'true');
    
//     // Tratar as solicitações OPTIONS (preflight)
//     if (req.method === 'OPTIONS') {
//       res.sendStatus(200);
//     } else {
//       next();
//     }
//   });

app.use(express.json())
app.use("/",routerProducts)

connectDatabase()

app.listen(process.env.PORT || 3000)