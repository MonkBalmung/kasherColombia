
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Marcas;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarcasRepositoryInterface extends MongoRepository<Marcas, String> {
    
}
