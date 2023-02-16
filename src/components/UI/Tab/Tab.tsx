import {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './Tab.module.scss'

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  isActive:boolean;
}

export const Tab = ({isActive,children,...other}:TabProps) => {
  return (
    <button className={[styles.tab, isActive?styles.active:''].join(' ')} {...other}>
      {children}
    </button>
  )
}