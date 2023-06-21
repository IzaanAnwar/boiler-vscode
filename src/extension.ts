// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import getBoiler from './boilerFile';



/**
 * Writes the provided content to the current buffer in the specified active editor.
 * The content is inserted at the current cursor position.
 *
 * @param content - The content to be written to the buffer.
 * @param activeEditor - The active text editor where the content will be written.
 */
function writeToCurrBuffer  (content:string, activeEditor:vscode.TextEditor): void  {
	
	activeEditor.edit((editBuilder: vscode.TextEditorEdit) => {
		const currPosition = activeEditor.selection.active;
		editBuilder.insert(currPosition, content);
	});
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param str - The string to capitalize the first letter of.
 * @returns The string with the first letter capitalized.
 */
function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}  




// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "boiler" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let greet = vscode.commands.registerCommand('boiler.greet', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('AssalamoAlaikum!');
	});

	/**
 	* Registers the 'boiler.boiler' command.
 	* This command inserts boilerplate code based on the file extension into the active text editor.
 	*/
	let boiler = vscode.commands.registerCommand('boiler.boiler', async () => {
		const activeTextEditor = vscode.window.activeTextEditor;
		if (activeTextEditor) {
			const activeFileUri = activeTextEditor.document.uri;
			const activeFilePath = activeFileUri.fsPath;
			const fileExtension = activeFilePath.substring(activeFilePath.lastIndexOf("."));	
			const fileName = activeTextEditor.document.fileName.split('/').pop() as string;
			const className = capitalizeFirstLetter(fileName.replace(fileExtension, ''));
			vscode.window.showInformationMessage(fileName);
			const boilerCode = getBoiler(fileExtension, className);
			if (boilerCode === "") {
			}
			
			writeToCurrBuffer(boilerCode, activeTextEditor);

		} else {
			vscode.window.showInformationMessage('Astagfirullah');
		}
	});

	context.subscriptions.push(greet);
	context.subscriptions.push(boiler);
}

// This method is called when your extension is deactivated
export function deactivate() {}
