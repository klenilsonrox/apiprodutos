import mongoose from "mongoose";
import { Schema } from "mongoose";

const productsSchema = new Schema({
    title:String,
    price:String,
    image:String,
    category:String
})

export const Products = mongoose.model("Products", productsSchema)