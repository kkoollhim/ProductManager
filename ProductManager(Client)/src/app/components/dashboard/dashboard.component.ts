import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'category', 'description', 'units', 'actions'];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    ELEMENT_DATA = [];
    this.productService.getAllProducts().subscribe(
      response =>{
        console.log("Products = ", response);
        this.products = response;
        response.forEach(element => {
          ELEMENT_DATA.push({
            id: element['productId'],
            name: element['productName'],
            category: element['productCategory'],
            description: element['productDescription'],
            units: element['units']
          })
        });
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      },
      error =>{
        console.log("Error in getting all products!")
      }
    )
  }
  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log('this.datasour', this.dataSource.filter)
  }

  updateProduct(element) {
    console.log(element);
    this.productService.setEditValue(element);
    this.productService.setTypeValue('Update');
    this.router.navigate(['/addProduct']);
  }

  deleteProduct(id){
    console.log(id)
  }

}

export interface PeriodicElement {
  id: string;
  name: string;
  category: number;
  description: string;
  units: string;
}

let ELEMENT_DATA: PeriodicElement[] = [];
