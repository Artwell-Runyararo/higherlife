import { motion } from 'framer-motion';
import { textContainer,textVariant2  } from '../utils/motion'; 

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`cloud-gradient text-3xl sm:text-5xl font-bold ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


export const TypingText_Zero = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-bold ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


export const TypingTextNoStyle = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


export const TypingText_Paragraph = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-slate-900 ${textStyles}`}
  >
    {title}
  </motion.h2>
);


export const TitleTextHead = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles}`}
  >
    {title}
  </motion.h2>
);