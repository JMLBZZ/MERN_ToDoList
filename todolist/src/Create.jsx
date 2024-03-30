import React, {useState} from "react";
import axios from "axios";

function Create(){
    const [task, setTask] = useState()
    const handleAdd = () =>{
        axios.post("http://localhost:3001/add", {task: task})
            .then(result=>{location.reload()})
            .catch(err => console.log(err))
    }

    return(
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control border border-dark rounded-start-pill bg-dark text-light" 
                id="inputTask"
                placeholder="Ajouter une tâche" 
                onChange={(e)=>setTask(e.target.value)} 
                />
            <button className="btn btn-outline-dark rounded-end-pill" type="button" onClick={handleAdd}>Ajouter</button>
        </div>
        
    );
}

export default Create;