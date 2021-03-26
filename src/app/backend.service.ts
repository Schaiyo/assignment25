import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  getProducts() {
    return [
      {
        name: 'ส้มโอ',
        price: 111
      },
      {
        name: 'แตงโอ',
        price: 222
      },
      {
        name: 'มะพร้าวน้ำหอม',
        price: 333
      }
    ];
  };

  constructor() { }
}
