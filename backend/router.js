const express = require ("express")
const { Todo } = require ("../backend/controller/todo")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


// const router = express.Router();

app.post("/UpdateTodolist", Todo)


// module.exports = router;


const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server running on the ${PORT}`)
})