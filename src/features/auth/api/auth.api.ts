import { type LoginPayload, type LoginResponse, type User } from "@/features/auth/types";

const BASE_URL = "http://localhost:3000";

export const loginUser = async (
  payload: LoginPayload
): Promise<User> => {
  const res = await fetch(
    `${BASE_URL}/users?email=${payload.email}&password=${payload.password}`
  );

  if (!res.ok) {
    throw new Error(`Network error: ${res.status} ${res.statusText}`);
  }

  const users: User[] = await res.json();
  const user = users[0];

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Update login state
  await fetch(`${BASE_URL}/users/${user.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isLoggedIn: true }),
  });

  return user;
};

export const logoutUser = async (user: User): Promise<User> => {
  // Önce mevcut kullanıcıyı al
  const getUserRes = await fetch(`${BASE_URL}/users/${user.id}`);
  const currentUser = await getUserRes.json();
  console.log("Current user before logout:", currentUser);
  
  // PATCH isteği gönder
  const res = await fetch(`${BASE_URL}/users/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...currentUser,
      isLoggedIn: false
    }),
  });
  
  return await res.json();
};

export type { LoginPayload, LoginResponse };