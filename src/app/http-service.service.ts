import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class HttpServiceService {
  serviceApiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  public title: string;
  public id: string;

  public getAll() {
    return this.http.get(this.serviceApiUrl);
  }

}
