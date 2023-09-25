import mongoose from "mongoose";
import { Schema } from "mongoose";

const productsSchema = new Schema({
    title:String,
    price:String,
    category:String,
    image:String,
    url:String
    })

export const Products = mongoose.model("Products", productsSchema)