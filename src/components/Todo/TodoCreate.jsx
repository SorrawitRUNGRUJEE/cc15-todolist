import styles from './TodoCreate.module.scss';
import { useState } from 'react';
import TodoForm from './TodoForm'
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

function TodoCreate() {
const [addFormActive,setAddForm] = useState(false)

  const hdlClick = () => {
    console.log("click")
    setAddForm(!addFormActive)
  }


  return (<>
    {addFormActive ?
    < TodoForm textSubmit = " Add Task" setIsOpenForm ={setAddForm}/>
    :
      <div className={styles.todo__create} onClick={hdlClick}>
      <div className={styles.todo__create__button}> <HiPlus /></div> 
      <h3 className={styles.todo__create__text}>Add Task</h3>
    </div>
      }
  </>
  );
}

export default TodoCreate;
