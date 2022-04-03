package com.airbus.assignment.service;

import com.airbus.assignment.exception.ProductNotFoundException;
import com.airbus.assignment.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.airbus.assignment.repo.ProductRepo;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<Product> findProductByCategory(String productCategory){
        return productRepo.findProductByproductCategory(productCategory)
                .orElseThrow(() -> new ProductNotFoundException("Product with category " + " was not found"));
    }

    public List<Product> findAllProduct(){
        return productRepo.findAll();
    }

    public Product addProduct(Product product){
        return productRepo.save(product);
    }

    public Product updateProduct(Product product){
        return productRepo.save(product);
    }

}
