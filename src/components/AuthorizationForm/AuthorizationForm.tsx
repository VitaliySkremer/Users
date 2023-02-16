import styles from './Authorization.module.scss'
import {RegistrationForm} from "../RegistrationForm/RegistrationForm";
import {Tab} from "../UI/Tab/Tab";
import {useState} from "react";
import {LoginForm} from "../LoginForm/LoginForm";

export enum Auth {
  'AUTHORIZATION' = 'Авторизация',
  'REGISTRATION' = 'Регистрация',
}

export const AuthorizationForm = () => {
  const [active,setActive] = useState<Auth>(Auth.REGISTRATION)
  return (
    <div className={styles.form}>
      <div className={styles.title__wrapper}>
        <Tab
          isActive={active===Auth.REGISTRATION}
          onClick={()=>setActive(Auth.REGISTRATION)}>
          {Auth.REGISTRATION}</Tab>
        <Tab
          isActive={active===Auth.AUTHORIZATION}
          onClick={()=>setActive(Auth.AUTHORIZATION)}>
          {Auth.AUTHORIZATION}</Tab>
      </div>
      {active === Auth.REGISTRATION && <RegistrationForm/>}
      {active === Auth.AUTHORIZATION && <LoginForm/>}
    </div>
  )
}