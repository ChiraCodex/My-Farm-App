import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { z, ZodType } from 'zod'

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  contacts: string;
  password:string;
  confirmPassword:string;
};

function SignUp() {
  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    contacts: z.string().regex(/^\d{10,15}$/, "Invalid phone number"),
    password: z.string().min(5).max(15),  
    confirmPassword: z.string().min(5).max(20),    
  })
  .refine((data) => data.password === data.confirmPassword, {message: 'Passwords Do Not Match', path: ['confirmPassword']});

 

  const {register, handleSubmit, formState: { errors }} = useForm<FormData>({resolver:zodResolver(schema) })

  const submitData = (data: FormData) => {
    console.log('it worked!',data)
  }


  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(submitData)} action="#" className=" w-1/3 justify-center">
      <h2 className="text-center text-2xl">Sign Up Form</h2>
      <p className="text-center text-xs mb-8">Please fill in All Details Correctly</p>
        <div className="grid grid-cols-2 gap-8">
         <div className="flex flex-col">
           <label>First Name</label>
        <input {...register('firstName')} className="bg-springBeige text-[black] rounded-xl px-2 py-1" type="text" />{errors.firstName && <span className='text-[red] text-xs '>{errors.firstName.message}</span> }
         </div>
        <div  className="flex flex-col">
          <label>Last Name</label>
        <input  {...register('lastName')} className="bg-springBeige text-[black] rounded-xl px-2 py-1" type="text" />{errors.lastName && <span className='text-[red] text-xs '>{errors.lastName.message}</span> }
        </div>
      
         <div className="flex flex-col">
           <label>Email</label>
        <input  {...register('email')} className="bg-springBeige text-[black] rounded-xl px-2 py-1" type="email" />{errors.email && <span className='text-[red] text-xs '>{errors.email.message}</span> }
         </div>
        <div className="flex flex-col">
          <label>Enter Phone Number</label>
        <input  {...register('contacts')} className="bg-springBeige text-[black] rounded-xl px-2 py-1" type="text" />{errors.contacts && <span className='text-[red] text-xs '>{errors.contacts.message}</span> }
        </div>
      
         <div className="flex flex-col">
           <label>Create Password</label>
        <input  {...register('password')} className="bg-springBeige text-[black] rounded-xl px-2 py-1" type="password" />{errors.password && <span className='text-[red] text-xs '>{errors.password.message}</span> }
         </div>
        <div className="flex flex-col">
          <label>Confirm Password</label>
        <input  {...register('confirmPassword')} className="bg-springBeige text-[black] rounded-xl px-2 py-1" type="password" />{errors.confirmPassword && <span className='text-[red] text-xs '>{errors.confirmPassword.message}</span> }
        </div>
        
        </div>
        <div className="flex justify-center mt-16">
          <button type="submit" className="bg-someBrown px-2 py-1 rounded-xl text-lg font-semibold">Create Account</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
