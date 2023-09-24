import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDatabase= async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@produtos.vbiovv5.mongodb.net/`)
        console.log("conectado ao MONGODB com sucesso")
    }catch(error){
        console.log(error)
    }
}