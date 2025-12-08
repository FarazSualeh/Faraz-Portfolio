import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-6 px-5 md:px-0" id="contact">
      {/* Background grid */}
      <div className="absolute inset-x-0 bottom-0 h-48 -z-10 opacity-50 pointer-events-none">
        <Image
          src="/footer-grid.svg"
          alt="footer grid"
          fill
          className="object-cover"
        />
      </div>

      {/* Heading + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* Email Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=farazsualeh75@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </motion.div>

      {/* Footer bottom section */}
      <div className="flex mt-12 md:flex-row flex-col justify-between items-center gap-5">
        <p className="md:text-base text-sm font-light text-center md:text-left">
          © {new Date().getFullYear()} Faraz Sualeh — All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // fallback: if anchor won't navigate for some reason, open via JS
                // this won't break normal anchor behavior
                const href = (e.currentTarget as HTMLAnchorElement).href;
                if (!href) {
                  e.preventDefault();
                  window.open(info.url, "_blank", "noopener,noreferrer");
                }
              }}
              className="w-10 h-10 flex justify-center items-center cursor-pointer
      rounded-lg border border-black-300 transition-all duration-300
      hover:scale-110 hover:bg-black-100
      relative z-50 pointer-events-auto"
              // inline style fallback if Tailwind not applying:
              style={{ zIndex: 9999, position: "relative" }}
              aria-label={info.name}
            >
              <img
                src={info.img}
                alt={info.name}
                className="w-5 h-5 pointer-events-none select-none"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
