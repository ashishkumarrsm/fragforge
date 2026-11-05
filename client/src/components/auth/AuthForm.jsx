import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import FormField from "./FormField";
import Button from "../ui/Button";

const email = z.string().email("Enter a valid email address");
const password = z.string().min(6, "Password must be at least 6 characters");
const loginSchema = z.object({ email, password });
const registerSchema = loginSchema.extend({ name: z.string().min(2, "Enter your name") });

/** Remounted (via `key`) whenever mode changes, so each mode gets its own validation. */
export default function AuthForm({ mode, onToggleMode }) {
  const isLogin = mode === "login";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(isLogin ? loginSchema : registerSchema) });

  // Demo only — replace with a real API call (JWT) later
  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 400));
    toast.success(isLogin ? "Welcome back!" : "Account created!");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-md">
      <h2 className="text-3xl font-extrabold">{isLogin ? "Welcome back" : "Create your account"}</h2>
      <p className="mt-2 text-sm text-muted">
        {isLogin ? "Log in to continue creating." : "Start forging your gaming identity."}
      </p>

      <div className="mt-8 space-y-5">
        {!isLogin && (
          <FormField label="Name" placeholder="Your gamer name" registration={register("name")} error={errors.name?.message} />
        )}
        <FormField label="Email address" type="email" placeholder="you@example.com" registration={register("email")} error={errors.email?.message} />
        <FormField
          label="Password"
          type="password"
          placeholder="Enter your password"
          registration={register("password")}
          error={errors.password?.message}
          extra={isLogin && <span className="font-normal text-brand">Forgot password?</span>}
        />
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Please wait…" : isLogin ? "Log in to FragForge →" : "Create account →"}
      </Button>

      <div className="my-6 flex items-center gap-3 text-[11px] tracking-wider text-muted">
        <span className="h-px flex-1 bg-line" />
        OR CONTINUE WITH
        <span className="h-px flex-1 bg-line" />
      </div>
      <Button type="button" variant="ghost" className="w-full font-normal">
        G&nbsp; Continue with Google
      </Button>

      <p className="mt-8 text-center text-xs text-muted">
        {isLogin ? "New to FragForge? " : "Already have an account? "}
        <button type="button" onClick={onToggleMode} className="font-bold text-brand">
          {isLogin ? "Create an account" : "Log in"}
        </button>
      </p>
      <p className="mt-10 text-center text-[10px] text-muted">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
}
