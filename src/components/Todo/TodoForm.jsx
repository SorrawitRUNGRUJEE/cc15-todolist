import styles from './TodoForm.module.scss';
import { Button } from '../Common/Button/Button'
import { useState } from 'react';

/*
form handling
by default, every buttom is  a submit
fix this problem by designating type of button
*/

function TodoForm(props) {
  const [isError, setIsShown] = useState(true)
  const [task, setTask] = useState("")

  const hdlChange = (e) => {
    setTask(e.target.value)
    
    if (e.target.value) {
      setIsShown(false)
      return
    }
    setIsShown(true)
    
  }
  const hdlSubmit = (e) => {
    e.preventDefault();
    if (task.trim() == "") {
      console.log('error')
      return
    }
    else console.log('success')

    
  // console.log('submit')
  }

  const hdlCancelClick = () => {
    props.setIsOpenForm(false)
    console.log('cancel')
  }
  return (

    <form className={styles.todo__form__container} onSubmit={hdlSubmit}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' onChange={hdlChange} />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>Title is required</p> : <span></span>}
        <div className={styles.todo__form__buttons}>
          < Button text='cancel' active={false} type="button" onClick={hdlCancelClick} />
          < Button text={props.textSubmit} active={true} type="submit" />

        </div>
      </div>
    </form>
  );
}

export default TodoForm;
