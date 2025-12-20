import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState, type FormEvent, type JSX } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Input, Label } from "@/components/ui";
import type { LoginPayload } from "@/features/auth/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginThunk } from "../store/loginThunk";

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 🔒 Redux state tam type-safe
  const { loading, error } = useAppSelector((state) => state.auth);

  // 🔒 Local state-lər explicit typed
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const payload: LoginPayload = { email, password };

    try {
      // unwrap → ya LoginResponse qaytarır, ya da error atır
      const result = await dispatch(loginThunk(payload)).unwrap();

      // 🔒 role artıq union type-dir: "admin" | "agent"
      switch (result.user.role) {
        case "admin":
          navigate("/dashboard");
          break;
        case "agent":
          navigate("/orders");
          break;
        default:
          navigate("/");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Login failed";
      alert(message);
    }
  };

  const fillDemoCredentials = (): void => {
    setEmail("test@example.com");
    setPassword("password123");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back
            </h1>
            <p className="text-gray-600">
              Enter your credentials to access your account
            </p>
          </div>

          <button
            type="button"
            onClick={fillDemoCredentials}
            className="w-full py-2 text-sm bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100"
          >
            Fill Demo Credentials
          </button>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e): void => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e): void => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={(): void => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={rememberMe}
                  onCheckedChange={(checked): void =>
                    setRememberMe(Boolean(checked))
                  }
                />
                <Label>Remember me</Label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </form>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              <FaGithub className="mr-2" /> GitHub
            </Button>
            <Button variant="outline">
              <FcGoogle className="mr-2" /> Google
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
