import mongoose from "mongoose"
import Food from "../models/food_model"

export const getFoods = async(req, res) => {
    try {
        const foods = await Food.find()
        res.status(200).json(foods)
    } catch(error) {
        res.status(404).json({ error: error.message })
    }
}

export const createFood = async(req, res) => {
    const newFood = new Food(req.body)
    try {
        await newFood.save()
        res.status(201).json(newFood)
    } catch(error) {
        res.status(409).json({ error: error.message })
    }
}

export const updateFood = async(req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Food not found.")

    const updatedFood = await Food.findByIdAndUpdate(_id, req.body, { new: true })
    res.status(200).json(updatedFood)
}

export const deleteFood = async(req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Food not found.")

    await Food.findByIdAndDelete(_id)
    req.json({ message: "Food deleted."})
}