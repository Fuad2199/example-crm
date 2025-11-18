import { type LoginPayload, type LoginResponse, type User } from "@/features/auth/types";

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({...payload, isLoggedIn: true }),
  });
  console.log("Current user", res)
  
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  
  const users: User[] = await res.json();
  const user = users[0];
  
  if (!user) {
    throw new Error("Invalid email or password");
  }
  
  const token = "fake-jwt-token";
  localStorage.setItem("token", token);
  
  return {
    token,
    user: {
      id: (user.id),
      email: user.email,
      name: user.name,
      avatar: user.avatar ?? "",
      role: user.role
    },
  };
};

export const logoutUser = async (userId: number) => {
  localStorage.removeItem("token");

  await fetch(`http://localhost:3000/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isLoggedIn: false }),
  });
};


export type { LoginPayload, LoginResponse };