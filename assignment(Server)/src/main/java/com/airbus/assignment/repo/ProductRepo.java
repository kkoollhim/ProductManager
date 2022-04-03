package com.airbus.assignment.repo;

import com.airbus.assignment.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product, String> {
    Optional<List<Product>> findProductByproductCategory(String productCategory);
}
