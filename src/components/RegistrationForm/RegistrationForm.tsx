import styles from './RegistrationForm.module.scss'
import {Button} from "../UI/Button/Button";
import {Input} from "../UI/Input/Input";
import {useNavigate} from "react-router-dom";

export const RegistrationForm = () => {

  const navigate = useNavigate();
  const handleSubmit = (event:React.FormEvent) =>{
    event.preventDefault();
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className={styles.input}
        placeholder='Введите имя'
        title="Имя"
      />
      <Input
        className={styles.input}
        placeholder='Введите email'
        title="Электронная почта"
      />
      <Input
        className={styles.input}
        type='password'
        placeholder='Введите пароль'
        title="Пароль"
      />
      <Input
        className={styles.input_password}
        type='password'
        placeholder='Подтвердите пароль'
        title="Подтвердите пароль"
      />
      <Button
        fillColor="var(--primary)"
        color='white'
        bdColor='var(--primary)'
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}