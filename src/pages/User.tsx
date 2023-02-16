import {Header} from "../components/Header/Header";
import {usersApi} from "../store/services/users";
import {HeaderUserInfo} from "../components/HeaderUserInfo/HeaderUserInfo";
import {UserBlog} from "../components/UserBlog/UserBlog";

export const User = () => {

  const {data,isLoading, error} = usersApi.useGetUserQuery(+window.location.pathname.replace('/',''))

  return (
    <>
      {isLoading && <div>Идёт загрузка...</div>}
      {error && <div>Произошла ошибка</div>}
      {data && (
        <>
          <Header>
            <HeaderUserInfo
              avatar={data.data.avatar}
              first_name={data.data.first_name}
              last_name={data.data.last_name}
            />
          </Header>
          <UserBlog email={data.data.email}/>
        </>
      )}
    </>
  )
}