# react-native-auto-type

hi every one this is a library for auto typewriting text titles array of text
and lots of stuff hope you enjoy it

## Deployment

To deploy this library

```bash
   npm i react-native-auto-type
```

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://huabb.ir)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hussain-asadi-1157221b9/)

## Usage/Examples

```javascript
import { AutoType } from "react-native-auto-type";

function App() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis magni, a officiis ipsum harum natus reiciendis veniam quaerat dolores!";
  return (
    <AutoType
      stylesText={styles.robotext}
      text={text}
      typingSpeed={10}
      showCursorItem
    />
  );
}
```

## Usage/Examples Multiple

```javascript
import { MultyText } from "react-native-auto-type";

function App() {
  return (
    <MultyText
      texts={[
        "Hello, this is the first sentence.",
        "And here comes the second sentence.",
        "Finally, this is the third sentence!"
      ]}
      typingSpeed={100}
    />
  );
}
```

## API Reference

#### noraml typewriter api

| Parameter        | Type         | Description                |
| :--------------- | :----------- | :------------------------- |
| `text`           | `string`     | **Required**. your text    |
| `typingSpeed`    | `number`     | **Required**. tpying speed |
| `stylesText`     | `StypeProps` | style of your text         |
| `showCursorItem` | `boolean`    | showing cursor item        |

#### multiple typewriter api

| Parameter        | Type         | Description                |
| :--------------- | :----------- | :------------------------- |
| `text`           | `array`      | **Required**. your text    |
| `typingSpeed`    | `number`     | **Required**. tpying speed |
| `stylesText`     | `StypeProps` | style of your text         |
| `showCursorItem` | `boolean`    | showing cursor item        |

## Authors

- [@hussein asadi](https://github.com/husseinpenart)

## 🚀 About Me

Hi 👋, I'm Hussein Asadi

I'am a fullstack developer from iran

contact me : artistpenman1515@gmail.com

## 🛠 Skills

Javascript, HTML, CSS

typescript,nodejs,mongodb,

mysql,redux,react-native,react,

nextjs,tailwindcss,bootstrap,electron....
