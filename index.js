import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import foodsRouter from "./routes/foods.js"
import usersRouter from "./routes/users.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
})

app.use("/foods", foodsRouter)
app.use("/users", usersRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})


