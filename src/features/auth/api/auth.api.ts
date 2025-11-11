import { type LoginPayload, type LoginResponse } from "@/features/auth/types";

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await fetch(`http://localhost:3000/users?email=${payload.email}&password=${payload.password}`);
  
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  
  const users = await res.json();
  
  if (!users.length) {
    throw new Error("Invalid email or password");
  }
  
  const user = users[0];
  
  return {
    token: "fake-jwt-token",
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
    },
  };
};

export const logoutUser = async () => {
  localStorage.removeItem("token"); 
};


export type { LoginPayload, LoginResponse };