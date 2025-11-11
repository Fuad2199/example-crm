export type LoginPayload = {
  email: string;
  password: string;
}

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  isLoggedIn: boolean;
}