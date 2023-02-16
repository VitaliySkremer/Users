import {Route, Routes} from "react-router-dom";
import {Registration} from "../pages/Registration";
import {Main} from "../pages/Main";
import {User} from "../pages/User";

export const Navigate = () => {
  return (
    <Routes>
      <Route index element={<Main/>}/>
      <Route path="/:id" element={<User/>}/>
      <Route path='/registration' element={<Registration/>}/>
    </Routes>
  )
}