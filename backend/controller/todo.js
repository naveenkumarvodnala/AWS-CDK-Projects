const db = require("../controller/db")

const Todo = (req,res) =>{
    const {item} = req.body

    const id = Date.now();

    const query = "CALL ADDtodo(?,?)";
    db.query(query,[id,item],(err, result) =>{
        if (err) {
            console.error ("DB Error",err);
            return res.status(500).json();
        }
        const response = {id,item};
        res.status(200).json({message : "todo created" , todo : response})
    })
}

module.exports = { Todo };