import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser, IUsersList} from "../models";

export const usersApi = createApi({
  reducerPath:'usersApi',
  baseQuery:fetchBaseQuery({baseUrl:'https://reqres.in/'}),
  endpoints:(build)=>({
    getUsersList:build.query<IUsersList,number>({
      query:(page)=>({
        url:`api/users?page=${page}`
      })
    }),
    getUser:build.query<IUser,number>({
      query:(id)=>({
        url:`api/users/${id}`
      })
    })
  })
})