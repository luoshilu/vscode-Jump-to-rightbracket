"use strict";
import * as vscode from "vscode";
import foundedRightBracket from "./foundedRightBracket";
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.jumpRightBracket",
    () => {
      let editor = vscode.window.activeTextEditor;
      if (!editor) {
        return; // No open text editor
      }
      let position = editor.selection.active;
      var found = new foundedRightBracket(position);
      var foundResPosition = found.foundNext();
      if (foundResPosition) {
        editor.selection = new vscode.Selection(
          foundResPosition,
          foundResPosition
        );
        // vscode.window.showInformationMessage('now position: ' + foundResPosition.line + ',' + foundResPosition.character);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
