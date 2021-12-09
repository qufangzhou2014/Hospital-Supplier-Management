package com.hospital.supplier.system.repository;

import com.hospital.supplier.system.model.Product;
import com.hospital.supplier.system.model.Vendor;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.List;

/**
 * @author Joe
 */


public interface VendorRepository extends MongoRepository<Vendor, String> {
    Vendor findByVendorId(String id);

    List<Vendor> findAll();

    Vendor findByVendorIdAndProductId(String vendorId, String productId);

}
