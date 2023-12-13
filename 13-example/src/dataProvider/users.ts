import axios from "axios";
import { User } from "../types/User";

type UserResponse = {
  users: User[];
  total: number;
};



export const getUsers = async (params: URLSearchParams): Promise<UserResponse> => {
  const limit= Number(params.get('page_size'));
  const page = Number(params.get('page'));
  if(!limit || !page) return {
    users: [],
    total: 0,
  };
  const skip = (page - 1) * limit;
  try {
    const res = await axios.get<UserResponse>(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
    return res.data;
  } catch (e) {
    console.error("Oops", e);
    return {
      users: [],
      total: 0,
    };
  }
};
