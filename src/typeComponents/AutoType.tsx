import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TypeEffectTypes } from "../Types";

const AutoType = ({
  text,
  typingSpeed = 100,
  stylesText,
  showCursorItem
}: TypeEffectTypes) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [index, text, typingSpeed]);

  useEffect(() => {
    if (index < text.length) {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorTimer);
    } else {
      setShowCursor(false); // Ensure the cursor is hidden when typing is done
    }
  }, [index, text.length]);

  return (
    <Text style={stylesText}>
      {displayText}
      {showCursorItem && showCursor && <Text style={styles.cursor}>|</Text>}
    </Text>
  );
};

const styles = StyleSheet.create({
  cursor: {
    fontSize: 20,
    color: "#000"
  }
});

export default AutoType;
