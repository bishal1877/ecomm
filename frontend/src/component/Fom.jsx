import { useForm} from "react-hook-form"
import axios from "axios";
import React from "react";


export default function Fom() {
  const {
    register,
    isSubmitting,
    handleSubmit,
    formState: { errors },
  } = useForm()


let onSubmit= async (data) => {
    console.log(data);
await axios.post("https://ecomm-3bxr.onrender.com/add/test", data)
        .then((response) => {
            console.log('Response from server:', response.data);
            // Optionally, you can redirect or show a success message here
            window.location.href = "https://ecomm-2-cyzt.onrender.com"; // Redirect to home after adding product
            })
        .catch((error) => { 
            console.error('Error adding product:', error);
            // Optionally, you can show an error message to the user
        })

};

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}  style={{marginTop:"30px", gap:"3rem", display:"flex", justifyContent:"center"}} >
      {/* register your input into the hook by invoking the "register" function */}
<label htmlFor="name">Name:</label>
      <input  {...register("name")} placeholder="name" type="text" />
<br />
<label htmlFor="image">imageURL:</label>
 <input  {...register("image") }placeholder="imageURL" />
<br />
      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="price">price:</label>
      <input {...register("price", { required: true })} placeholder="price" type="text" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
<br />
      <input type="submit" disabled={isSubmitting} value="Submit" style={{backgroundColor:"blue"}}   />
    </form>
  )
}
