import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;
  type;
  productID;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required],
      units: ['', Validators.required],
    });
    this.productService.getEditValue().subscribe(
      result => {
        if (result) {
          console.log(result);
          this.productID = result.id
          this.productForm.setValue({
            productName: result.name, productCategory: result.category,
            productDescription: result.description, units: result.units
          });
        }
      }
    )
    // this.router.snapshot.paramMap()
  }
  get f() { return this.productForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }
    console.log(this.productForm.value);
    this.productService.getTypeValue().subscribe(result => {
      if (result) {
        this.type = result;
      }
    })

    if (this.type == 'Add') {
      //send data to api
      this.productService.addProduct(this.productForm.value).subscribe(
        response => {
          console.log("Post Response = ", response);
          // this.toastService.success('Successfully added product');
          window.location.href = '/dashboard';
        }, error => {
          console.log("Post Error = ", error);
          // this.toastService.error('Error in adding product');
        });
    }
    else {
      //update data to api
      this.productForm.value['productId'] = this.productID;
      console.log("product", this.productForm.value)
      this.productService.updateProduct(this.productForm.value).subscribe(
        response => {
          console.log("Update Response = ", response);
          // this.toastService.success('Successfully added product');
          window.location.href = '/dashboard';
        }, error => {
          console.log("Update Error = ", error);
          // this.toastService.error('Error in adding product');
        });
    }
  }

  onReset() {
    this.submitted = false;
    this.productForm.reset();
    window.location.href = '/dashboard';
  }

}
