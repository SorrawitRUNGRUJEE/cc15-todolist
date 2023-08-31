import styles from './TodoLists.module.scss';
import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';
import ToDoListItem from './TodoListItem';



const content = [
  {id:1, text:"Homework",dueDate:"TBA"},
  {id:2, text:"Football practice",dueDate:"TBA"},
  {id:3, text:"world domination",dueDate:"TBA"},
  {id:4, text:"Dev op prctice",dueDate:"TBA"},
  {id:5, text:"JS practice",dueDate:"TBA"},
] 
function TodoLists() {
  const [showOpenForm,setShowOpenForm] = useState(false)
  const hdlClick =()=>{
    setShowOpenForm(!showOpenForm)
    
  }



  return (<>
      {content.map((item)=>< ToDoListItem text = {item.text} dueDate = {item.dueDate}/>)}
   

    
  
  </>


  );
}

export default TodoLists;
