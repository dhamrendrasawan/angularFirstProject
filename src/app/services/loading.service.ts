import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  showLoader() {
    console.log('Loading shown...........')
  }
  hideLoader() {
    console.log('Hide Loading...........')
  }
}
