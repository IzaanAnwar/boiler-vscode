import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
	//incomplete test written
	test('boiler.boiler command inserts boilerplate code', async () => {
		// Open a test file or create a new one
		const document = await vscode.workspace.openTextDocument({
			language: 'plaintext',
			content: '',
		});
		const editor = await vscode.window.showTextDocument(document);

		// Execute the 'boiler.boiler' command
		await vscode.commands.executeCommand('boiler.boiler');

		// Get the updated document content
		const updatedContent = editor.document.getText();

		// Assert that the boilerplate code is inserted
		const className = document.fileName.split('/').pop()?.replace(/\.[^/.]+$/, '');
		const testboilerCode = `import java.lang.*;\nimport java.util.*;\n\npublic class {{className}} {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n`;

		assert.ok(updatedContent.includes(testboilerCode));
	});
});
