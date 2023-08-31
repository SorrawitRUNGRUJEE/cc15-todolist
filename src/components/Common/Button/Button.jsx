import styles from './Button.module.scss';

export function Button({ onSubmit,onClick,type,text, active = true }) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return <button onSubmit = {onSubmit} onClick={onClick} type = {type} className={`${styles.btn} ${btnStyles}`}>{text}</button>;
}
