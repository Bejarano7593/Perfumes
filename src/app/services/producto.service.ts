import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  async getAll() {
    const res = await fetch('/assets/dataBase.json');
    const resJson = await res.json();
    return resJson;
  }
}
