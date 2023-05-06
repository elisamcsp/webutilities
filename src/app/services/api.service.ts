import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_WebUtilities = 'https://petstore3.swagger.io/api/v3'; // TODO: Add this value in the environment variables

  constructor(public http: HttpClient) {}

  // TODO: change to axios
  encodeToBase64(value: any): any {
    const url = this.API_WebUtilities + '/text/base64/encode';
    return this.http.post(url, { text: value });
  }

  decodeBase64ToString(value: any) {
    const url = this.API_WebUtilities + '/text/base64/decode';
    return this.http.post(url, { text: value });
  }
}
