import {InputHTMLAttributes} from "react";
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  type?:string;
  className?:string;
  title?:string;
}

export const Input = ({title,type, className, ...other}:InputProps) => {
  return (
    <label className={[styles.label,className].join(' ')}>
      {title && <p className={styles.title}>{title}</p>}
      <input
        type={type}
        className={styles.input}
        {...other}
      />
    </label>
  )
}