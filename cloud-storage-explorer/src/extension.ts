import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('cloud-storage-explorer.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from Cloud Storage Explorer!');
		}));

	// Register Goodbye World command
	context.subscriptions.push(
		vscode.commands.registerCommand('cloud-storage-explorer.goodbyeWorld', () => {
			vscode.window.showInformationMessage('Goodbye World from Cloud Storage Explorer!');
		}));
}

// This method is called when your extension is deactivated
export function deactivate() { }
