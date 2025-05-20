import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import axios from "axios";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  contacts: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      contacts: z
        .string()
        .regex(/^\d{10,15}$/, "Invalid phone number"),
      password: z.string().min(5).max(15),
      confirmPassword: z.string().min(5).max(15),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    try {
      const res = await axios.post("http://localhost:5000/sign-up", data); // adjust your API endpoint
      console.log("User created:", res.data);
      reset(); // Clear form
    } catch (err) {
      console.error("Error creating user", err);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(submitData)}
        className="w-1/3 border-4 py-8 px-4 rounded-3xl"
      >
        <p className="text-right text-sm">Step 1 of 2</p>
        <h2 className="text-center text-2xl">Sign Up Form</h2>
        <p className="text-center text-xs mb-8">
          Please fill in all details correctly
        </p>
        <div className="grid grid-cols-2 gap-8">
          {/* First Name */}
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              {...register("firstName")}
              className="bg-springBeige text-black rounded-xl px-2 py-1"
              type="text"
            />
            {errors.firstName && (
              <span className="text-[red] text-xs">
                {errors.firstName.message}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              {...register("lastName")}
              className="bg-springBeige text-black rounded-xl px-2 py-1"
              type="text"
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">
                {errors.lastName.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label>Email</label>
            <input
              {...register("email")}
              className="bg-springBeige text-black rounded-xl px-2 py-1"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input
              {...register("contacts")}
              className="bg-springBeige text-black rounded-xl px-2 py-1"
              type="text"
            />
            {errors.contacts && (
              <span className="text-red-500 text-xs">
                {errors.contacts.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label>Password</label>
            <input
              {...register("password")}
              className="bg-springBeige text-black rounded-xl px-2 py-1"
              type="password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label>Confirm Password</label>
            <input
              {...register("confirmPassword")}
              className="bg-springBeige text-black rounded-xl px-2 py-1"
              type="password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-someBrown px-4 py-2 rounded-xl text-lg font-semibold"
          >
            Create Account
          </button>
        </div>
        <p className="text-center text-sm mt-10">
          Already have an account?
        </p>
      </form>
    </div>
  );
}

export default SignUp;
