import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className="container mt-5">
           <h2 className="text-center">Contact</h2>
           <div className="row">
                <div className="col-md-6 border p-5">
                    <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                    <div className="row">
                        <div className="col-md-3 text-right">
                        <FontAwesomeIcon icon={faDownload} />
                        </div>
                        <div className="col-md-9">
                            <h6>Call Me</h6>
                            <h4>+1234 5678 9000</h4>
                            <h6>Email</h6>
                            <h5>jewelbarua101@gmail.com</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 border p-5">
                        <h4>Please Fill Up The Necessary Information</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input defaultValue="test" {...register("example")} />
                            <br /> <br />
                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("exampleRequired", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br /> <br />
                            <input type="submit" />
                        </form>
                </div>
           </div>
        </div>
    );
};

export default Contact;