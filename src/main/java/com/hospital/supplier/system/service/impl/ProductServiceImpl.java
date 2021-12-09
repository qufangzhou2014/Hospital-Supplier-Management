package com.hospital.supplier.system.service.impl;
import com.hospital.supplier.system.model.Product;
import com.hospital.supplier.system.service.ProductService;
import com.hospital.supplier.system.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ragcrix
 */


@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() { return productRepository.findAll(); }

    @Override
    public Product findByProductId(String productId) {
        return productRepository.findProductById(productId);
    }

    @Override
    public Product saveOrUpdateProduct(Product product) {
        if (this.findByProductId(product.getProductId()) != null) {
            Product foundProduct = this.findByProductId(product.getProductId());
            if (foundProduct.getUnitsRequired() > 0) {
                foundProduct.setUnitsRequired(foundProduct.getUnitsRequired() - 1);
            }
            foundProduct.setUnitsAvailable(foundProduct.getUnitsAvailable() + 1);
        }
        return  productRepository.save(product);
    }

    @Override
    public void deleteProductById(String productId) {
        productRepository.deleteById(productId);
    }
}
