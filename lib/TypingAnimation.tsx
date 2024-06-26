import React, { useState, useEffect, FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number;
}

const TypingText: FC<TypingTextProps> = ({ text, speed = 75 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setCharIndex(0);
    setIsTyping(true);
  }, [text]);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex(charIndex + 1);
        setIsTyping(true);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, text, speed]);
  return (
    <motion.div>
      &#8220;
      {displayedText}
      {isTyping && <span className="text-ag-neon-green">|</span>}
      &#8221;
    </motion.div>
  );
};

export default TypingText;
