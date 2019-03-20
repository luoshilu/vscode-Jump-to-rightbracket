# vscode-Jump-to-rightbracket

[![Version](https://vsmarketplacebadge.apphb.com/version/luoshilu.jump-to-rightbacket.svg)](https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/luoshilu.jump-to-rightbacket.svg)](https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/luoshilu.jump-to-rightbacket.svg)](https://vsmarketplacebadge.apphb.com/rating/luoshilu.jump-to-rightbacket.svg)

## Jump to rightbracket when you are coding!

GitHub: [https://github.com/luoshilu/vscode-Jump-to-rightbracket](https://github.com/luoshilu/vscode-Jump-to-rightbracket)

Vscode Market: [https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket](https://marketplace.visualstudio.com/items?itemName=luoshilu.jump-to-rightbacket)

![jumprightbracket](https://user-images.githubusercontent.com/16523045/44298243-162ab000-a2a5-11e8-83cc-2c1c0f0869ec.gif)

在执行跳转到右括号命令后，光标会跳转到当前光标后的第一个右括号，如果右括号后还有其它右括号，则会跳到其它右括号后。

After executing the command of "jumpRightBracket", the cursor will jump to the first hit of parenthesis.If the brackets are adjacent to each other, then the cursor will jump to the last.

## Use

首先，打开 keybingings.json 文件，为 extension.jumpRightBracket 命令添加绑定的按键组合。插件默认有 shift+enter。

first, open keybingings.json in vscode, and bind the key combination for command of "extension.jumpRightBracket", this default is "shift+enter".

```
  {
    "key": "shift+enter",
    "command": "extension.jumpRightBracket",
    "when": "editorTextFocus"
  }
```

## config

在用户配置文件中，你可以自定义一些匹配字符，比如 ")}"，插件默认有 ")}]>"。

In the "user settings.json"， you can customize some characters, such as ")}", the default is ")}]>".

> "jumpRightBrackets.rightBrackets": ")}"

是否跳过相邻的括号? 默认不跳过.

does skip the adjacent brackets? the default is false;

> "jumpRightBrackets.adjoin": "false"

**Enjoy it!**
