import styles from './TodoLists.module.scss';
import { useState } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm';

const ToDoListItem = (props) => {
    const [showOpenForm,setShowOpenForm] = useState(false)
    const hdlClick = () => {
        console.log("click")
        setShowOpenForm(!showOpenForm)
      }


return (
    <ul className={styles.todo__lists}>
    {showOpenForm ? <TodoForm textSubmit = 'Edit Task' setIsOpenForm = {setShowOpenForm}/>:
      <li className={styles.todo}>
      <div className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}>
        <HiOutlineCheck className={styles.todo__checkbox__icon} />
      </div>
      <p className={`${styles.todo__task} ${styles.todo__task__done}`}>{props.text} </p>
      <span className={styles.todo__date}>{props.dueDate}</span>
      <div className={styles.todo__action}>
        <span>
          <FaPen className={styles.todo__edit} onClick={hdlClick}/>
        </span>
        <span>
          <FaTrashAlt className={styles.todo__delete} />
        </span>
      </div>
    </li>

    }
  </ul>

)

}



export default ToDoListItem