import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedLength = parseInt(target.value);
    if(!isNaN(parsedLength)) {
      this.length = parsedLength;
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  
  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = '';

    if(this.includeNumbers) {
      validChars += numbers;
    }

    if(this.includeLetters) {
      validChars += letters;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
