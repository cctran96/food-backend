import express from "express"
import Food from "../models/food_model.js"

const router = express.Router();

router.route('/').get((req, res) => {
    Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('add').post((req, res) => {
    const id = req.body.id;
    const product_name = req.body.product_name;
    const quantity = req.body.quantity;
    const ingredients = req.body.ingredients;
    const nova_group = req.body.nova_group;
    const nova_groups_tag = req.body.nova_groups_tag;
    const grade = req.body.grade;
    const nutrient_levels = req.body.grade;
    const nutriments = req.body.nutriments;
    const image = req.body.image;

    const newFood = new Food({
        id,
        product_name,
        quantity,
        ingredients,
        nova_group,
        nova_groups_tag,
        grade,
        nutrient_levels,
        nutriments,
        image
    })
    newFood.save()
    .then(() => res.json("Food added!"))
    .catch(err => res.status(400).json("Error: " + err))
})

export default router;