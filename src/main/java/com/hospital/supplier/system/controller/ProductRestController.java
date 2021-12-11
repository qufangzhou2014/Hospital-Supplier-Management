package com.hospital.supplier.system.controller;
import com.hospital.supplier.system.dto.ProductDTO;
import com.hospital.supplier.system.model.Product;
import com.hospital.supplier.system.model.User;
import com.hospital.supplier.system.service.ProductService;
import com.hospital.supplier.system.util.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Joe
 */

@RestController
@RequestMapping("/inventory")
public class ProductRestController {

    @Autowired
    private ProductService productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/")
    public List<ProductDTO> getAllProducts() {
        return ObjectMapperUtils.mapAll(productService.findAll(), ProductDTO.class);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/byProductId/{productId}")
    public ProductDTO getProductById(@PathVariable("productId") String productId) {
        return ObjectMapperUtils.map(productService.findByProductId(productId), ProductDTO.class);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/save")
    public ResponseEntity<?> saveProduct(@RequestBody ProductDTO productDTO) {
        productService.createNewProduct(ObjectMapperUtils.map(productDTO, Product.class));
        return new ResponseEntity("Inventory added successfully", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value = "/delete/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable String productId) {
        productService.deleteProductById(productId);
        return new ResponseEntity("Inventory deleted successfully", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/update/{id}")
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO, @PathVariable("id") String id) {
        productDTO.setId(id);
        productService.saveOrUpdateProduct(ObjectMapperUtils.map(productDTO, Product.class));
        return new ResponseEntity("Inventory updated successfully", HttpStatus.OK);
    }
}
