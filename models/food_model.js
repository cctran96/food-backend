import mongoose from "mongoose"

export const foodSchema = mongoose.Schema({
    _id: String,
    product_name: String,
    quantity: String,
    ingredients: String,
    nova_group: String,
    nova_groups_tag: Array,
    grade: String,
    nutrient_levels: Map,
    nutriments: Map,
    image: String
})

const Food = mongoose.model("Food", foodSchema)

export default Food