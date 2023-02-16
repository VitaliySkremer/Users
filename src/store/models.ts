export interface IUser {
  data:{
    id:number;
    email: string;
    first_name:string;
    last_name:string;
    avatar: string;
  }
}

export interface IUsersList extends IUser{
  page: number;
  per_page:number;
  total: number;
  total_pages:2;
}