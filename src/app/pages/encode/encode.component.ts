import { Component } from '@angular/core';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css'],
})
export class EncodeComponent {
  textToConvert: string = '';
  textConverted: string = '';

  encodeToBase64() {
    this.textConverted = btoa(this.textToConvert);
    console.log(this.textConverted);
  }

  clear() {
    this.textConverted = '';
  }

  copyText() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.textConverted;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
