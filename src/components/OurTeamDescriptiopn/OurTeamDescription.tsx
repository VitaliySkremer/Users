import styles from './OurTeamDescription.module.scss'

export const OurTeamDescription = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Наша Команда</h2>
      <p className={styles.description}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
    </div>
  )
}