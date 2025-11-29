import { type LoginPayload, type LoginResponse, type User } from "@/features/auth/types";

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await fetch(
    `http://localhost:3000/users?email=${payload.email}&password=${payload.password}`
  );

  if (!res.ok) {
    throw new Error("Network error");
  }

  const users: User[] = await res.json();
  const user = users[0];

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Update login state
  await fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isLoggedIn: true }),
  });

  const token = "fake-jwt-token";
  localStorage.setItem("token", token);

  return {
    token,
    user,
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