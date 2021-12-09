package com.hospital.supplier.system.dto;

import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;

/**
 * @author Joe
 */

public class ProductDTO {
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

    public ProductDTO() {}


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
}
