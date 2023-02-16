import {Header} from "../components/Header/Header";
import {OurTeamDescription} from "../components/OurTeamDescriptiopn/OurTeamDescription";
import {UsersList} from "../components/UsersList/UsersList";

export const Main = () => {
  return (
    <>
      <Header>
        <OurTeamDescription/>
      </Header>
      <UsersList/>
    </>
  )
}