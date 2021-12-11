package com.hospital.supplier.system.controller;

import com.hospital.supplier.system.dto.VendorDTO;
import com.hospital.supplier.system.model.Vendor;
import com.hospital.supplier.system.model.Product;
import com.hospital.supplier.system.service.ProductService;
import com.hospital.supplier.system.service.VendorService;
import com.hospital.supplier.system.util.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

/**
 * @author Joe
 */
@RestController
@RequestMapping("/vendors")
public class VendorRestController {

    @Autowired
    private  VendorService vendorService;

    @Autowired
    private ProductService productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/")
    public List<VendorDTO> getAllVendors() {
        return ObjectMapperUtils.mapAll(vendorService.findAll(), VendorDTO.class);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/byVendorId/{vendorId}")
    public VendorDTO getVendorByVendorId(@PathVariable("vendorId") String vendorId) {
        return ObjectMapperUtils.map(vendorService.findByVendorId(vendorId), VendorDTO.class);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/save")
    public ResponseEntity<?> saveOrUpdateVendor(@RequestBody VendorDTO vendorDTO) {
        vendorService.createNewVendor(ObjectMapperUtils.map(vendorDTO,Vendor.class));
        return new ResponseEntity("Vendor added successfully!", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/update/{id}")
    public ResponseEntity<?> updateVendor(@RequestBody VendorDTO vendorDTO, @PathVariable("id") String id) {
        vendorDTO.setId(id);
        vendorService.createNewVendor(ObjectMapperUtils.map(vendorDTO,Vendor.class));
        return new ResponseEntity("Vendor updated successfully!", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value = "/delete/{vendorId}")
    public ResponseEntity<?> deleteVendor(@PathVariable String vendorId) {
        vendorService.deleteVendorById(vendorId);
        return new ResponseEntity("Vendor deleted successfully", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/purchase/{productId}/{productName}/{unitPrice}/")
    public ResponseEntity<?> purchaseProduct(@PathVariable String productId, @PathVariable String productName,
                                             @PathVariable String unitPrice) {
       Product product = vendorService.purchaseProduct(productId,productName, BigDecimal.valueOf(Double.valueOf(unitPrice)).intValue() );
//        System.out.println(product);
        productService.saveOrUpdateProduct(product);
        return new ResponseEntity("Purchase Successfully", HttpStatus.OK);
    }

}
