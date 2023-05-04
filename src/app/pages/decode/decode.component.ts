import { Component } from '@angular/core';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css'],
})
export class DecodeComponent {
  textToConvert: string = '';
  textDecoded: string = '';

  decodeBase64ToText() {
    this.textDecoded = atob(this.textToConvert);
    console.log(this.textDecoded);
  }

  clear() {
    this.textDecoded = '';
  }

  copyText() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.textDecoded;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
