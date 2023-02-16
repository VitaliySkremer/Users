import {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children:ReactNode;
  className?:string;
  size?:'small'|'full';
  color?:string;
  bdColor?:string;
  fillColor?:string;
}

export const Button = ({size='full',color='var(--Black)',bdColor='black',
                        fillColor='transparent',className,children, ...other}:ButtonProps) => {
  return (
    <button
      className={[styles.button,size==='small'?styles.small:'',className].join(' ')}
      style={{color:color, borderColor:bdColor, backgroundColor:fillColor}}
      {...other}
    >
      {children}
    </button>
  )
}