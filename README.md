# Jump-to-right-bracket

[![Version](https://vsmarketplacebadge.apphb.com/version/luoshilu.jump-to-rightbacket.svg)](https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/luoshilu.jump-to-rightbacket.svg)](https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/luoshilu.jump-to-rightbacket.svg)](https://vsmarketplacebadge.apphb.com/rating/luoshilu.jump-to-rightbacket.svg)

## Jump to right bracket when you are coding!

GitHub: [https://github.com/luoshilu/vscode-Jump-to-right-bracket](https://github.com/luoshilu/vscode-Jump-to-right-bracket)

Vscode Market: [https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket](https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket)

![jumprightbracket](https://user-images.githubusercontent.com/16523045/44298243-162ab000-a2a5-11e8-83cc-2c1c0f0869ec.gif)

After executing the command of "jumpRightBracket", the cursor will jump to the first hit of parenthesis.If the brackets are adjacent to each other, then the cursor will jump to the last.

## Use

first, you need to open keybingings. json in the vscode, and bind the key combination for command of "extension.jumpRightBracket".

```
  {
    "key": "shift+enter",
    "command": "extension.jumpRightBracket",
    "when": "editorTextFocus"
  }
```

## config

In the "user settings"， you can customize some characters, such as ")}", the default is ")}]>".

> "jumpRightBrackets.rightBrackets": ")}"

**Enjoy it!**
