
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Proveedores;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedoresRepositoryInterface extends MongoRepository<Proveedores, String> {
    
}
