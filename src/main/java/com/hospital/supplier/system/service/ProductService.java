package com.hospital.supplier.system.service;
import com.hospital.supplier.system.model.Product;
import java.util.List;

/**
 * @author regcrix
 */

public interface ProductService {

    List<Product> findAll();

    Product findByProductId(String productId);

    Product saveOrUpdateProduct(Product product);

    void deleteProductById(String productId);

    Product createNewProduct(Product product);

}
