
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Productos;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductosRepositoryInterface extends MongoRepository<Productos, String> {
    
}
