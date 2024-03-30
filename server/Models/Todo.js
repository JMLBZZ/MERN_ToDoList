const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    task : String,
    done : {
            type: Boolean,
            default: false
        }
})

const TodoModel = mongoose.model(
                                "todolist",//nom de la base de donnée
                                TodoSchema
                                )

module.exports = TodoModel