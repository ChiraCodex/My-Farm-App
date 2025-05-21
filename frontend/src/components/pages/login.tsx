import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { Link } from "react-router-dom"; 
import axios from 'axios';


type LoginFormData = {
  email: string;
  password: string;
};

function Login() {
  const schema: ZodType<LoginFormData> = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, "Password must be at least 5 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });


  const submitData = async (data: FormData) => {
    try {
      const url = "http://localhost:5000/api/Auth";
      const {data:res} = await axios.post(url, data);
      console.log("it worked!", res);
      localStorage.setItem("token", res.data);
      window.location.href = "/"
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(submitData)}
        action="#"
        className="w-1/4 justify-center border-4 py-8 px-4 rounded-3xl"
      >
        <h2 className="text-center text-2xl">Login</h2>
        <p className="text-center text-xs mb-8">Welcome back! Please log in</p>

        <div className="flex flex-col mb-4">
          <label>Email</label>
          <input
            {...register("email")}
            className="bg-springBeige text-[black] rounded-xl px-2 py-1"
            type="email"
          />
          {errors.email && (
            <span className="text-[red] text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col mb-6">
          <label>Password</label>
          <input
            {...register("password")}
            className="bg-springBeige text-[black] rounded-xl px-2 py-1"
            type="password"
          />
          {errors.password && (
            <span className="text-[red] text-xs">{errors.password.message}</span>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-someBrown px-2 py-1 rounded-xl text-lg font-semibold"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Don’t have an account? <Link to="/sign-up" className="text-neonGreen hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
