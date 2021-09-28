import mongoose from "mongoose"
import Food from "../models/Food.js"

export const getFoods = async(req, res) => {
    try {
        const foods = await Food.find()
        res.status(200).json(foods)
    } catch(error) {
        res.status(404).json({ error: error.message })
    }
}

export const getFood = async(req, res) => {
    const { id } = req.params

    try {
        const food = await Food.findById(id)

        res.status(200).json(food)
    } catch(error) {
        res.status(404).json({ error: error.message })
    }
}

export const createFood = async(req, res) => {
    const food = new Food(req.body)

    try {
        await food.save()
        res.status(201).json(food)
    } catch(error) {
        res.status(409).json({ error: error.message })
    }
}

export const updateFood = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Food not found.")

    const updatedFood = await Food.findByIdAndUpdate(id, {...req.body, _id: id }, { new: true })
    
    res.status(200).json(updatedFood)
}

export const deleteFood = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Food not found.")

    await Food.findByIdAndDelete(id)

    req.status(200).json({ message: "Food deleted."})
}