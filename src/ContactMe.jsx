import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
const ContactMe = () => {
  const [userMessage, setUserMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [subject, setSubject] = useState("");
  const sendEmail = (e) => {
    console.log(e);
    const tempaletParams = {
      from_name: userName,
      reply_to: userEmail,
      message: userMessage,
      to_name: "jamal",
    };

    e.preventDefault();

    emailjs
      .send(
        "service_zvjr7y7",
        "template_3p9zs6a",
        tempaletParams,
        "xY5xcP233WtAN09ew"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setUserMessage("");
          setUserEmail("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(error);
        }
      );
  };
  return (
    <div className="" id="Contact">
      <hr />
      <div className="my-10 text-2xl md:text-5xl font-bold text-purple-800">
        Contact Me
      </div>

      <div className="flex flex-col md:flex-row  gap-56 ">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          className="flex flex-col items-center justify-center gap-4 w-[70%]"
        >
          <h1 className="text-light-blue-800 text-xl">
            I am eager to discuss how my skills and experience can contribute to
            your organization's success. Please feel free to contact me to
            discuss potential opportunities.
          </h1>
          <Input
            label="Full Name"
            color="deep-orange"
            className="dark:text-gray-300 "
            name="from_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            labelProps={{ className: "text-orange-600" }}
          />
          <Input
            label="Email"
            color="deep-orange"
            className="dark:text-gray-300"
            name="reply_to"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            labelProps={{ className: "text-orange-600" }}
          />
          <Input
            label="Subject"
            color="deep-orange"
            className="dark:text-gray-300"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            labelProps={{ className: "text-orange-600" }}
          />
          <Textarea
            label="Message"
            color="deep-orange"
            className="dark:text-gray-300"
            name="message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            labelProps={{ className: "text-orange-600" }}
          />
          <Button
            value={"send"}
            onClick={sendEmail}
            className="w-full md:w-1/3"
            color="deep-orange"
          >
            send
          </Button>
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          className=" flex flex-col me-10 gap-10 items-start my-6"
        >
          <div className="text-xl md:text-3xl text-pink-900">
            Or Visit My Profiles On Social Media
          </div>
          <div className="flex justify-evenly items-center gap-8 mt-2 text-xl md:text-3xl">
            <a
              href="https://www.linkedin.com/in/jamal-nabaa-01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-blue-900"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/jamaln02"
              className="hover:text-orange-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/message/HORH4QDTU52VG1"
              className="hover:text-green-900"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/jamal.na.75?mibextid=ZbWKwL"
              className="hover:text-blue-900"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
