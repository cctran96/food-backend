import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import foodsRouter from "./routes/foods.js"
import usersRouter from "./routes/users.js"

dotenv.config()

const app = express()
const URL = process.env.URL
const PORT = process.env.PORT || 5000

app.use(cors())
app.use("/foods", foodsRouter)
app.use("/users", usersRouter)

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
})

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch(err => console.log(err.message))

    mongoose.set("useFindAndModify", false)

