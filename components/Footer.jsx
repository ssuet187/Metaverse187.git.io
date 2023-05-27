'use client';
import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex justify-between items-center flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        Enter the Metaverse
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b]
         rounded-[32px] gap-[12px]">
          <img
          src="/headset.svg"
          alt="headset"
          className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
          Enter Metaverse
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px]  bg-white opacity-50">
        <div className="flex items-center flex-wrap gap-4 justify-between">
        <h4 className="font-extrabold text-[24px] text-white">
        Metaverse
        </h4>
        <p className="font-normal text-[16px] text-white opacity-90">
        | UI/UX Dev <br/>
          Nextjs,Reactjs,TailwindCSS,MaterialUI,Bootstrap,HTML,CSS,JS<br/>
          Contact me (tahashareef98@gmail.com)
        </p>
        <div className="flex gap-4">
        {socials.map((socials)=>(
          <img
          key={socials.name}
          src={socials.url}
          alt={socials.name}
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          
          />
        ))}
        </div>
        </div>
        </div>

      </div>
    </div>
  </motion.footer>
);

export default Footer;
