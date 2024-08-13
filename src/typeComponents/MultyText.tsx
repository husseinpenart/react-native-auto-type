import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated, Easing } from "react-native";
import { TypewriterTextProps } from "../Types";
import { styles } from "../styles/TypeWriter";

const MultyText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  stylesText,
  showCursorItem
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const cursorAnim = new Animated.Value(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const text = texts[currentIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index += 1;
      } else {
        clearInterval(typingInterval);

        // Move to the next text after a delay
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setDisplayedText("");
        }, 1000); // Delay before switching to the next text
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentIndex, texts, typingSpeed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor blink interval

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cursorAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(cursorAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={stylesText}>{displayedText}</Text>
      {showCursorItem && cursorVisible && (
        <Text style={styles.cursorSymbol}>|</Text>
      )}
    </View>
  );
};

export default MultyText;
