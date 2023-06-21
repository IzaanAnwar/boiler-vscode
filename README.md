# Boiler Extension

The Boiler extension is a Visual Studio Code extension that helps you insert boilerplate code into your files based on their file extensions. It provides two commands: "Hello World" and "Boiler".

## Features

### Hello World

The "Hello World" command displays a message box with the text "Hello World from Boiler!".

To execute the "Hello World" command, you can:

- Use the command palette (Ctrl/Cmd + Shift + P) and search for "Boiler: Hello World".
- Click on the status bar item with the text "Boiler Hello World".

### Boiler

The "Boiler" command inserts boilerplate code into the active text editor based on the file extension of the current file. It supports Java and C file extensions.

To execute the "Boiler" command, you can:

- Use the command palette (Ctrl/Cmd + Shift + P) and search for "Boiler: Boiler".
- Right-click on the active text editor and select "Boiler".

## Usage

1. Open a file with the desired file extension (e.g., `.java`, `.c`).
2. Execute the "Boiler" command as described above.
3. The extension will insert the appropriate boilerplate code into the active text editor based on the file extension.
4. The placeholder `{{className}}` in the boilerplate code will be replaced with the capitalized name of the file (without the extension).
5. Save the file to apply the changes.

# Release Notes

## Version 0.0.1

- Initial release of the Boiler extension.
- Added "Hello World" command to display a message box with the text "Hello World from Boiler!".
- Added "Boiler" command to insert boilerplate code based on the file extension into the active text editor.
- Supports Java and C file extensions.
- Replaces the `{className}` placeholder in the boilerplate code with the capitalized name of the file (without the extension).


## Contributing

Contributions to the Boiler extension are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue on the [GitHub repository](https://github.com/IzaanAnwar/boiler-vscode.git).

## License

The Boiler extension is open-source software.
