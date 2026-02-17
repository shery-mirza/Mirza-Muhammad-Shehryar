"use client";

import {
  WhatsAppOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20 px-4
        sm:py-24 sm:px-6
        max-w-3xl mx-auto text-center
      "
    >
      {/* Heading */}
      <h3
        className="
          text-2xl
          sm:text-3xl
          font-bold mb-4 sm:mb-6
        "
      >
        Contact Me
      </h3>

      {/* Subtitle */}
      <p
        className="
          text-gray-400
          text-sm sm:text-base
          mb-6 sm:mb-8
        "
      >
        Have a project in mind? Let’s work together.
      </p>

      {/* Icons */}
      <div
        className="
          flex justify-center items-center
          gap-6 sm:gap-8
          text-3xl sm:text-4xl
        "
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/+923065340366"
          target="_blank"
          className="
            text-gray-400
            hover:text-green-500
            transition duration-300
            hover:scale-110
          "
        >
          <WhatsAppOutlined />
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sherymirzashuja10@gmail.com"
          target="_blank"
          className="
            text-gray-400
            hover:text-red-500
            transition duration-300
            hover:scale-110
            "
        >
          <MailOutlined />
        </a>


        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mirza-muhammad-shehryar"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-gray-400
            hover:text-blue-600
            transition duration-300
            hover:scale-110
            "
        >
          <LinkedinOutlined />
        </a>

      </div>
    </section>
  );
}
