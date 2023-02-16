import {Input} from "../UI/Input/Input";
import styles from './LoginForm.module.scss'
import {Button} from "../UI/Button/Button";

export const LoginForm = () => {
  return (
    <form>
      <Input
        className={styles.input}
        placeholder='Введите email'
        title="Электронная почта"
      />
      <Input
        className={styles.input_password}
        type='password'
        placeholder='Введите пароль'
        title="Пароль"
      />
      <Button
        fillColor="var(--primary)"
        color='white'
        bdColor='var(--primary)'
      >
        Авторизоваться
      </Button>
    </form>
  )
}