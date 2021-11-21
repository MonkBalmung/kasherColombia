
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Insumos;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InsumosRepositoryInterface extends MongoRepository<Insumos, String> {
    
}
