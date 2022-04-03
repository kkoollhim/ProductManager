import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8080";
  private updateData = new BehaviorSubject<any>('');
  private type = new BehaviorSubject<string>('Add');

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(`${this.url}/product/all`);
  }

  addProduct(product: any) {
    console.log("Product", product)
    return this.http.post<any>(`${this.url}/product/add`, product)
  }

  updateProduct(product: any) {
    return this.http.put<any>(`${this.url}/product/update`, product)
  }

  setEditValue(nextValue){
    this.updateData.next(nextValue);
  }

  getEditValue(){
    return this.updateData;
  }

  setTypeValue(nextValue){
    this.type.next(nextValue);
  }

  getTypeValue(){
    return this.type;
  }



}
