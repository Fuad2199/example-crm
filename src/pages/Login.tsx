import LoginForm from "@/features/auth/components/LoginForm"
import { AuthLayout } from "../routes/AuthLayout"

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm/>
    </AuthLayout>
  )
}

export default Login
