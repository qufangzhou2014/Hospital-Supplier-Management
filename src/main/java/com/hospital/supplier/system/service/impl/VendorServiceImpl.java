package com.hospital.supplier.system.service.impl;

import com.hospital.supplier.system.repository.ProductRepository;
import com.hospital.supplier.system.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hospital.supplier.system.model.Vendor;
import com.hospital.supplier.system.service.VendorService;
import com.hospital.supplier.system.model.Product;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.Random;

/**
 * @author Joe
 */

@Service
public class VendorServiceImpl implements VendorService {

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Vendor> findAll() { return vendorRepository.findAll(); }

    @Override
    public Vendor createNewVendor(Vendor vendor) { return vendorRepository.save(vendor); }

    @Override
    public void deleteVendorById(String vendorId) {
         vendorRepository.deleteById(vendorId);
    }

    @Override
    public Vendor findByVendorId(String vendorId) {
        return vendorRepository.findByVendorId(vendorId);
    }

    @Override
    public Product purchaseProduct(String productId, String productName, int unitPrice) {
        if (this.productRepository.findProductById(productId) != null) {
            Product product = productRepository.findProductById(productId);
            if (product.getUnitsRequired() > 0) {
                product.setUnitsRequired(product.getUnitsRequired() - 1);
            }
            product.setUnitsAvailable(product.getUnitsAvailable() + 1);
            return product;
        } else {
            return new Product(productId, productName, 1, 0, unitPrice);
        }
    }

}
