import React, {useState, useEffect} from "react";
import axios from "axios";
import Create from "./Create";
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill} from 'react-icons/bs';


function Home(){
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/get")
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err))
    },[])

    const handleEdit = (id) =>{
        axios.put("http://localhost:3001/update/" + id)
        .then(result=>{location.reload()})
        .catch(err=>console.log(err))
    }
    const handleDelete = (id) =>{
        axios.delete("http://localhost:3001/delete/" + id)
        .then(result=>{location.reload()})
        .catch(err=>console.log(err))
    }


    return(
        <div className="container col col-6 d-flex flex-column shadow rounded p-5 bg-light bg-gradient bg-opacity-45">
            <h2 className="text-center mb-5 fw-bold">Just Do List !</h2>
            <Create/>
            {
                todos.length === 0 ?//Si la constante todos est vide, alors affiche "aucun enregistrement"
                    <div>
                        <h2 className="text-center mb-5 fw-bold">Il n'y a rien à faire...</h2>
                    </div>
                ://... sinon affiche la liste
                todos.map(todo=>(

                    <div 
                        key={todo._id} 
                        //className="d-flex align-items-center justify-content-between bg-dark text-white rounded-pill px-2 my-1" 
                        className={`d-flex align-items-center justify-content-between text-white rounded-pill px-2 my-1 ${todo.done ? 'bg-success' : 'bg-dark'}`} 
                        style={{minHeight: '35px'}}
                    >
                        <div 
                            className="d-flex align-items-center" 
                            onClick={() => handleEdit(todo._id)}
                        >
                            {todo.done 
                                ? <BsFillCheckCircleFill className="pointer fs-5 me-3"></BsFillCheckCircleFill>
                                : <BsCircleFill className="pointer fs-5 me-3"/>
                            }
                            <p className="m-0 " 
                                style={todo.done ? {textDecoration: "line-through"} : {}}
                            >
                                {todo.task}
                            </p>
                        </div>
                        <div>
                            <span className="pointer pe-3 my-5">
                                <BsFillTrashFill 
                                    className="" 
                                    onClick={() => handleDelete(todo._id)}
                                />
                            </span>
                        </div>
                    </div>



                /* TEST DESIGN à revoir!!!!

                    <div className="toto d-flex align-items-stretch input-group my-2 form-check bg-danger py-5">
                        <input 
                            className="toto input-group-text form-check-input rounded-start-pill border-0 bg-dark text-white" 
                            type="checkbox" 
                            value="" 
                            id={todo._id}/>
                        <label 
                            type="checkbox" 
                            className="toto form-control form-check-input border-0 bg-dark text-white" 
                            forHtml={todo._id}
                            >
                                {todo.task}
                            </label>
                        <button 
                            className="toto btn input-group-text rounded-end-pill border-0 btn-dark"
                            type="button">
                                <i class="bi bi-trash3-fill text-white"></i>
                            </button>
                    </div> 
                */
                    

                ))
            }
        </div>
    );
}

export default Home;