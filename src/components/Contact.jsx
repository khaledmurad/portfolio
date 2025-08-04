import React, { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoadin] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadin(true);

    emailjs
      .send(
        "service_su2gxfh",
        "template_ijsyq9f",
        {
          name: form.name,
          to_name: "khaled",
          email: form.email,
          to_email: "khalidmt13@gmail.com",
          message: form.message,
        },
        "p-HRL_OqldiMRi03M"
      )
      .then(() => {
        setLoadin(false);
        alert("Thank you. I will get you back asap");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => {
        setLoadin(false);
        console.log(error);

        alert("Something went wrong. Please try again later");
      };
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row-reverse flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:w-1/2 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 bg-black-200 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Keep in touch</p>
        <h3 className={styles.heroHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-8"
        >
          <label className="flex flex-col">
            <div className="ml-2 text-[20px] font-semibold text-white">
              Name
            </div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="mt-1 bg-tertiary py-3 px-6 rounded-2xl border-none
              placeholder:text-secondary text-white outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <div className="ml-2 text-[20px] font-semibold text-white">
              Email
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="mt-1 bg-tertiary py-3 px-6 rounded-2xl border-none
              placeholder:text-secondary text-white outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <div className="ml-2 text-[20px] font-semibold text-white">
              Message
            </div>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you wanna say?"
              className="mt-1 bg-tertiary py-3 px-6 rounded-2xl border-none
              placeholder:text-secondary text-white outline-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="w-fit bg-tertiary py-2 px-4 rounded-xl shadow-md shadow-primary text-white "
          >
            {loading ? "Sending.. " : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
