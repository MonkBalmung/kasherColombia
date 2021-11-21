
package com.co.kashercolombia.rest.repository;

import com.co.kashercolombia.rest.model.Categorias;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriasRepositoryInterface extends MongoRepository<Categorias, String>{
    
}
