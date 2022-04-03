package com.airbus.assignment.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="Product_ID", nullable = false, updatable = false)
    private int productId;

    @Column(name="Product_Category")
    private String productCategory;

    @Column(name="Product_Name")
    private String productName;

    @Column(name="Product_Description")
    private String productDescription;

    @Column(name="Units")
    private Number units;

    public Product() {
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Number getUnits() {
        return units;
    }

    public void setUnits(Number units) {
        this.units = units;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId='" + productId + '\'' +
                ", productCategory='" + productCategory + '\'' +
                ", productName='" + productName + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", units=" + units +
                '}';
    }
}
