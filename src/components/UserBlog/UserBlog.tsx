import styles from './UserBlog.module.scss'

interface UserBlogProps {
  email:string;
}

export const UserBlog = ({email}:UserBlogProps) => {
  return (
    <section className={[styles.blog].join(' ')}>
      <p className={styles.blog_description}>
        Клиенты видят в&nbsp;нем эксперта по&nbsp;вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и&nbsp;ИТ-компоненты. Он&nbsp;помогает клиентам лучше понимать структуру рисков их&nbsp;бизнеса, улучшать процессы за&nbsp;счет применения новейших технологий и&nbsp;увеличивать продажи, используя самые современные аналитические инструменты.<br/><br/>

        В&nbsp;работе с&nbsp;клиентами недостаточно просто решить конкретную проблему или помочь справиться с&nbsp;трудностями. Не&nbsp;менее важно уделять внимание обмену знаниями: &laquo;Один из&nbsp;самых позитивных моментов&nbsp;&mdash; это осознание того, что ты&nbsp;помог клиенту перейти на&nbsp;совершенно новый уровень компетентности, уверенность в&nbsp;том, что после окончания проекта у&nbsp;клиента есть все необходимое, чтобы дальше развиваться самостоятельно&raquo;.<br/><br/>

        Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он&nbsp;является совладельцем сети клиник эстетической медицины в&nbsp;Швейцарии, предлагающей инновационный подход к&nbsp;красоте, а&nbsp;также инвестором других бизнес-проектов.
      </p>
      <div className={styles.blog_links}>
        <a
          className={[styles.link,styles.tel].join(' ')}
          href="tel:+79543334455">+7 (954) 333-44-55</a>
        <a
          className={[styles.link, styles.mail].join(' ')}
          href={`mailto:${email}`}>{email}</a>
      </div>
    </section>
  )
}