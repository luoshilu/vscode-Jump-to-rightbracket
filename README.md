# Jump-to-right-bracket

## Jump to right bracket when you are coding!

![jumprightbracket](https://user-images.githubusercontent.com/16523045/44298243-162ab000-a2a5-11e8-83cc-2c1c0f0869ec.gif)

The plug-in defaults to ")}]>".After executing the command of "jumpRightBracket", the cursor will jump to the first hit of parenthesis.If the brackets are adjacent to each other, then the cursor will jump to the last.

## Use

first, you need to open keybingings.json in the vscode,and bind the key combination for command of "extension.jumpRightBracket".

```
  {
    "key": "shift+enter",
    "command": "extension.jumpRightBracket",
    "when": "editorTextFocus"
  }
```

## config

In the "user settings"，you can customize some characters, such as ")}".

> "jumpRightBrackets.rightBrackets": ")}"

**Enjoy it!**
