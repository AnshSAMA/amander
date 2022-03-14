import React from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";

export default function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const onError = (error) => {
        console.log("error", error);
    };
    return (
        <div className="contact" id="contact">
            <div className="left"></div>
            <div className="right">
                <h1>Contact</h1>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <input type="text" placeholder="Email" {...register("email", { required: "Please enter an email address." })}></input>
                    <textarea placeholder="Message" {...register("message")}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
