
import Button from "@/components/ui/Button/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password })
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="test@yourwebsite.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-0 transform translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="cursor-pointer" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm">
                Forgot Password?
              </a>
            </div>
            <Button type="submit" onClick={handleSubmit} className="w-full cursor-pointer">
                Sign in
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"/>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant={"outline"} className="w-full cursor-pointer">
                <FaGithub className="mr-2 h-4 w-4"/>
                Github
            </Button>
            <Button variant={"outline"} className="w-full cursor-pointer">
                <Mail className="mr-2 h-4 w-4"/>
                Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Don't have an account? <a href="#" className="text-primary font-medium">Sign up</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
