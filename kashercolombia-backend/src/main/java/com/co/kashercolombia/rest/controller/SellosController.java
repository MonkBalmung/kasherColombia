
package com.co.kashercolombia.rest.controller;

import com.co.kashercolombia.rest.model.Sellos;
import com.co.kashercolombia.rest.repository.SellosRepositoryInterface;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController//Indica que los eventos serán tipo rest a ser usada como API
@CrossOrigin(origins="*", methods= {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE} )//Indicar cómo serán consumidos los datos, con CRUD
//POST para insertar, GET para leer, PUT para actualizar y DELETE para eliminar
@RequestMapping("/api/sellos")
public class SellosController {
    //Instancio la interface de repository
    @Autowired
    private SellosRepositoryInterface sellosRepository;
    
    @PostMapping("/insertar")
    public Sellos insertInSellos(@RequestBody @Validated Sellos sello){
        
        return sellosRepository.insert(sello);
    }
    
    @GetMapping("/mostrar")
    public List<Sellos> showSellos(){
        return sellosRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Sellos> showCategoriaById(@PathVariable String id){
        return sellosRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Sellos updateCategorias(@RequestBody Sellos sello, @PathVariable String id){
	
	Sellos sellToUpdate = sellosRepository.findById(id).get();

	sellToUpdate.setId_sello(sello.getId_sello());
	sellToUpdate.setSello(sello.getSello());
        sellToUpdate.setAbreviatura(sello.getAbreviatura());
	
	sellosRepository.save(sellToUpdate);//Se actualiza el documento consultado en la base de datos
	return sello;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteSellos(@PathVariable (value="id") String id){
        sellosRepository.deleteById(id);//Se actualiza el documento consultado en la base de datos
    }
}
