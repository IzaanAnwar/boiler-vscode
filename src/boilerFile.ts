import { window } from "vscode";


export default function getBoiler(fileExtension: string, className:string):string {
	let boilerFile:string;
	if (fileExtension === '.java') {
		boilerFile = 
`package com.test;
public class ${className} {
	public static void main(String[] args) {
		System.out.println("Hello World");		
	}
		
}`;			} 
		else if(fileExtension === '.c') {
	    boilerFile = 
`#include <stdio.h>
#include <stdlib.h>


int main(void) {
				
	return 0;
}`;
	} else {
		boilerFile = "";
		window.showInformationMessage('Boiler not found for file type.');

	}
	return boilerFile;
}