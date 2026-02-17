import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className='container'>

        <form action=" " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input placeholder='username'{...register("username", { required: { value: true, message: 'This is required' }, minLength: 3, maxLength: 8 })} type='text' />
          {/* Yeh wali chez use hoti hai ka message ko screen pa show karana ka liya */}
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input placeholder='password'{...register("password", { required: true })} type='password' />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
