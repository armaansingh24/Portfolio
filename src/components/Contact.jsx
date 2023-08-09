import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setFrom] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value })
  }

  const [loading, setLoading] = useState(false);
  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(formRef.current);
    setLoading(true);
    emailjs.sendForm('service_iputf9n', 'template_uu396z9', formRef.current, 'T91EFMrT_M4euWwoH')
      .then((result) => {
        toast.success('Email sent successfully!')
      }, (error) => {
        toast.error("Something went wrong!")
      });
    // toast.success('Email sent successfully!');
    setFrom({
      name: "",
      email: "",
      message: "",
    })
    setLoading(false);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"

          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={changeHandler}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email} onChange={changeHandler}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              required  
              name="message"
              value={form.message} onChange={changeHandler}
              placeholder="What do want to say?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
