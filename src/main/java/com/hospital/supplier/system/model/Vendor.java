package com.hospital.supplier.system.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

/**
 * @author Joe
 */
@Document(collection = "vendor")
public class Vendor {
    @Id
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
    private String email;
    private String address;
    @Field("service_type")
    private String serviceType;
    private List<Product> products;

    public Vendor() {}


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

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "Vendor{" +
                "id='" + id + '\'' +
                ", vendorId='" + vendorId + '\'' +
                ", vendorName='" + vendorName + '\'' +
                ", url='" + url + '\'' +
                ", contactFirstName='" + contactFirstName + '\'' +
                ", contactLastname='" + contactLastname + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                ", contactTitle='" + contactTitle + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", serviceType='" + serviceType + '\'' +
                ", products=" + products +
                '}';
    }
}
