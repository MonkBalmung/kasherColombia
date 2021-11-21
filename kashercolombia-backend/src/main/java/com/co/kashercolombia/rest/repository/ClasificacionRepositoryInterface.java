
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Clasificacion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasificacionRepositoryInterface extends MongoRepository<Clasificacion, String>{
    
}
