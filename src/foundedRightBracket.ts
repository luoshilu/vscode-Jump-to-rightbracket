import * as vscode from "vscode";

export default class FoundedRightBracket {
  public readonly rightBrackets: String;
  public foundedNum: number;
  public initPosition: vscode.Position;
  public config: any;
  constructor(initPosition: vscode.Position, rightBrackets?: String) {
    this.config = vscode.workspace.getConfiguration("jumpRightBrackets");
    this.rightBrackets = rightBrackets || this.config.rightBrackets;
    this.foundedNum = 0;
    this.initPosition = initPosition || new vscode.Position(0, 0);
  }

  public foundNext(position?: vscode.Position): vscode.Position {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      return this.initPosition;
    }
    let nowPosition = position || this.initPosition;
    let nextColPosition;

    // totalLine
    var totalLine = editor.document.lineCount;
    if (nowPosition.line === totalLine) {
      return this.initPosition;
    }

    // foundInline
    let nextCharact;
    for (; nextCharact !== ""; ) {
      nextColPosition = nowPosition.with(
        nowPosition.line,
        nowPosition.character + 1
      );
      let rangeNext = new vscode.Range(nowPosition, nextColPosition);
      nextCharact = editor.document.getText(rangeNext);

      if (nextCharact === "") {
        // go next line
        nowPosition = nowPosition.with(nowPosition.line + 1, 0);
        return this.foundNext(nowPosition);
      }

      if (this.rightBrackets.indexOf(nextCharact) === -1) {
        if (this.foundedNum > 0) {
          return this.initPosition;
        }
      } else {
        this.foundedNum++;
        this.initPosition = nextColPosition;
        // founded yet, continue?
        if (!this.config.adjoin) {
          return this.initPosition;
        }
      }
      nowPosition = nextColPosition;
    }
    return this.initPosition;
  }
}
