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
    public Product purchaseProduct(String vendorId, String productId) {
        Vendor vendor = vendorRepository.findByVendorIdAndProductId(vendorId, productId);
        if (productRepository.findProductById(productId) != null) {
            Product product = productRepository.findProductById(productId);
            return product;
        } else {
            Random ran = new Random();
            int x = ran.nextInt(11) + 5;
            int y = ran.nextInt(6) + 5;
            return new Product(productId, vendor.getProductName(),x, y,
                    BigDecimal.valueOf(Double.valueOf(vendor.getUnitPrice())));
        }
    }

}
