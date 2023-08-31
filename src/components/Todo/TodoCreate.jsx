import styles from './TodoCreate.module.scss';
import { useState } from 'react';
import TodoForm from './TodoForm'
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

function TodoCreate() {
const [showOpenForm,setShowOpenForm] = useState(false)

  const hdlClick = () => {
    console.log("click")
    setShowOpenForm(!showOpenForm)
  }


  return (<>
    {showOpenForm ?
    < TodoForm textSubmit = " Add Task" setIsOpenForm ={setShowOpenForm}/>
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
