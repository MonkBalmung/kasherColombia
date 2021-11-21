
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Sellos;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellosRepositoryInterface extends MongoRepository<Sellos, String> {
    
}
