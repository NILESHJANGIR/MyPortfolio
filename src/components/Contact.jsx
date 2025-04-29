import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

// ✅ Environment variables directly fetch kiye
const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Debugging ke liye values check karo
  console.log("Service ID:", EMAIL_JS_SERVICE_ID);
  console.log("Template ID:", EMAIL_JS_TEMPLATE_ID);
  console.log("Public Key:", EMAIL_JS_PUBLIC_KEY);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (!username || !user_email || !user_message) {
      setLoading(false);
      toast.error("Please fill all the fields.", {
        position: "bottom-right",
      });
      return;
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: "Nilesh Jangir",
          reply_to: user_email,
          to_email: "nileshjangir571@gmail.com",
          message: user_message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully!", {
          position: "bottom-right",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending email:", error);
        toast.error("Uh, oh! Something went wrong. Please try again later.", {
          position: "bottom-right",
        });
      });
  };

  return (
	<div className="relative z-0 bg-black w-screen min-h-screen mt-12">
	<div className="text-white contact overflow-x-hidden pt-12 mt-8" id="contact">
	  <div className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl bg-gray-800">
		<p className="font-light">REACH OUT TO ME</p>
		<h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
		  Contact.
		</h2>
		<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
		  <label className="flex flex-col">
			<span className="font-medium mb-4">Your Name</span>
			<input
			  type="text"
			  name="name"
			  value={form.name}
			  onChange={handleChange}
			  placeholder="Enter your name"
			  className="py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-gray-700 text-white"
			  required
			/>
		  </label>
		  <label className="flex flex-col">
			<span className="font-medium mb-4">Your email</span>
			<input
			  type="email"
			  name="email"
			  value={form.email}
			  onChange={handleChange}
			  placeholder="Ex:abc@gmail.com"
			  className="py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-gray-700 text-white"
			  required
			/>
		  </label>
		  <label className="flex flex-col">
			<span className="font-medium mb-4">Your Message</span>
			<textarea
			  rows={7}
			  name="message"
			  value={form.message}
			  onChange={handleChange}
			  placeholder="Do you have anything to say?"
			  className="py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-gray-700 text-white"
			  required
			/>
		  </label>
  
		  <button
			type="submit"
			className="pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-pink-500 text-white hover:bg-pink-600 transition"
		  >
			{loading ? "Sending..." : "Send"}
		  </button>
		</form>
	  </div>
	  <ToastContainer />
	</div>
	<Footer />
  </div>
  
        
  );
};

export default Contact;
