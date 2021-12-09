package com.hospital.supplier.system.dto;


import com.hospital.supplier.system.model.Product;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

/**
 * @author Joe
 */


public class VendorDTO {
    private String id;
    @Field("vendor_id")
    private String vendorId;
    @Field("vendor_name")
    private String vendorName;
    private String url;
    @Field("contact_firstname")
    private String contactFirstName;
    @Field("contact_lastname")
    private String contactLastname;
    @Field("contact_number")
    private String contactNumber;
    @Field("contact_title")
    private String contactTitle;
    @Field("contact_email")
    private String email;
    @Field("contact_address")
    private String address;
    @Field("service_type")
    private String serviceType;
    @Field("product_id")
    private String productId;
    @Field("product_name")
    private String productName;
    @Field("unit_price_dollar")
    private String unitPrice;

    public VendorDTO() {}

    public VendorDTO(String id, String vendorId, String vendorName, String url, String contactFirstName, String contactLastname, String contactNumber, String contactTitle, String email, String address, String serviceType, String productId, String productName, String unitPrice) {
        this.id = id;
        this.vendorId = vendorId;
        this.vendorName = vendorName;
        this.url = url;
        this.contactFirstName = contactFirstName;
        this.contactLastname = contactLastname;
        this.contactNumber = contactNumber;
        this.contactTitle = contactTitle;
        this.email = email;
        this.address = address;
        this.serviceType = serviceType;
        this.productId = productId;
        this.productName = productName;
        this.unitPrice = unitPrice;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVendorId() {
        return vendorId;
    }

    public void setVendorId(String vendorId) {
        this.vendorId = vendorId;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getContactFirstName() {
        return contactFirstName;
    }

    public void setContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
    }

    public String getContactLastname() {
        return contactLastname;
    }

    public void setContactLastname(String contactLastname) {
        this.contactLastname = contactLastname;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getContactTitle() {
        return contactTitle;
    }

    public void setContactTitle(String contactTitle) {
        this.contactTitle = contactTitle;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
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

    public String getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
    }

}
