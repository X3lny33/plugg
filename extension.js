const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand(
      'caps-plug.convertToUppercase', function() {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
          const document = editor.document;
          const selection = editor.selection;
          const text = document.getText(selection);

          if (text) {
            editor.edit(function(editBuilder) {
              editBuilder.replace(selection, text.toUpperCase());
            });
          }
        }
      });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};