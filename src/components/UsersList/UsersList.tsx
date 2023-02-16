import {UserItem} from "./UserItem/UserItem";
import styles from './UsersList.module.scss'
import {usersApi} from "../../store/services/users";
import {Tab} from "../UI/Tab/Tab";
import {useState} from "react";
export const UsersList = () => {
  const [page, setPage] = useState(1);

  const {data, isLoading, error} = usersApi.useGetUsersListQuery(page);
  return (
    <div className='container'>
      {isLoading && <div>Идёт загрузка...</div>}
      {error && <div>Ошибка</div>}
      {data && (
        <>
          <ul className={styles.user__list}>
            {data.data.map(item=>
              <li key={item.id} className={styles.user__list_item}>
                <UserItem
                  email={item.email}
                  avatar={item.avatar}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  id={item.id}
                />
              </li>
            )}
          </ul>
          <ul className={styles.pages__list}>
            {new Array(data.total_pages).fill('').map((pag,index)=>
              <li className={styles.pages__list_page} key={index}>
                <Tab
                  onClick={()=>setPage(index+1)}
                  isActive={index+1 === page}>
                  {index + 1}
                </Tab>
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  )
}