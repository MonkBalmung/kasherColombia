
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Establecimientos;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstablecimientosRepositoryInterface extends MongoRepository<Establecimientos, String>{
    
}
