package com.hospital.supplier.system.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;

@Document(collection = "inventory")
public class Product {
    @Id
    private String id;
    @Field("product_id")
    private String productId;
    @Field("product_name")
    private String productName;
    @Field("units_available")
    private int unitsAvailable;
    @Field("units_required")
    private int unitsRequired;
    @Field("unit_price_dollar")
    private BigDecimal unitPrice;

    public Product() {}

    public Product(String productId, String productName, int unitsAvailable, int unitsRequired, BigDecimal unitPrice) {
        this.productId = productId;
        this.productName = productName;
        this.unitsAvailable = unitsAvailable;
        this.unitsRequired = unitsRequired;
        this.unitPrice = unitPrice;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getUnitsAvailable() {
        return unitsAvailable;
    }

    public void setUnitsAvailable(int unitsAvailable) {
        this.unitsAvailable = unitsAvailable;
    }

    public int getUnitsRequired() {
        return unitsRequired;
    }

    public void setUnitsRequired(int unitsRequired) {
        this.unitsRequired = unitsRequired;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id='" + id + '\'' +
                ", productId='" + productId + '\'' +
                ", productName='" + productName + '\'' +
                ", unitsAvailable=" + unitsAvailable +
                ", unitsRequired=" + unitsRequired +
                ", unitPrice=" + unitPrice +
                '}';
    }
}
