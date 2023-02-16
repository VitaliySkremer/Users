import {Button} from "../UI/Button/Button";
import {ReactNode} from "react";
import styles from './Header.module.scss'
import {useNavigate} from "react-router-dom";

interface HeaderProps {
  children:ReactNode
}

export const Header = ({children}:HeaderProps) => {

  const navigate = useNavigate();

  const handleOut = () =>{
    navigate('/registration')
  }

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          {window.location.pathname !== '/' && (
            <Button
              onClick={()=>navigate(-1)}
              className={styles.button}
              size='small'
              color='white'
              bdColor='white'
            >Назад</Button>
          )}

          <div className={styles.header_wrapper}>
            {children}
          </div>

          <Button
            className={styles.button}
            size='small'
            color='white'
            bdColor='white'
            onClick={handleOut}
          >Выход</Button>
        </div>
      </div>
    </header>
  )
}