import { StyleProp } from "react-native"

export interface TypeEffectTypes {
    text?: string | any
    typingSpeed?: number
    stylesText?: StyleProp
    showCursorItem?: boolean
}

export interface TypewriterTextProps {
    texts: string[];
    typingSpeed?: number;
    showCursorItem?: boolean
    stylesText?: StyleProp
}
