import styles from './HeaderUserInfo.module.scss'

interface HeaderUserInfoProps {
  avatar:string;
  first_name:string;
  last_name:string;
}

export const HeaderUserInfo = ({avatar, first_name, last_name}:HeaderUserInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={avatar} alt={last_name}/>
      <div className={styles.info}>
        <h3 className={styles.name}>{first_name} {last_name}</h3>
        <p className={styles.status}>Партнёр</p>
      </div>
    </div>
  )
}