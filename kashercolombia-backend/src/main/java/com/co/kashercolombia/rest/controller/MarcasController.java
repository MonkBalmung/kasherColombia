
package com.co.kashercolombia.rest.controller;


import com.co.kashercolombia.rest.model.Marcas;
import com.co.kashercolombia.rest.repository.MarcasRepositoryInterface;
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
@RequestMapping("/api/marcas")
public class MarcasController {
    //Instancio la interface de repository
    @Autowired
    private MarcasRepositoryInterface marcasRepository;
    
    @PostMapping("/insertar")
    public Marcas insertInMarcas(@RequestBody @Validated Marcas marca){
        
        return marcasRepository.insert(marca);
    }
    
    @GetMapping("/mostrar")
    public List<Marcas> showMarcas(){
        return marcasRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Marcas> showCategoriaById(@PathVariable String id){
        return marcasRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Marcas updateCategorias(@RequestBody Marcas marca, @PathVariable String id){
	
	Marcas marcToUpdate = marcasRepository.findById(id).get();

	marcToUpdate.setId_marca(marca.getId_marca());
	marcToUpdate.setMarca(marca.getMarca());
	
	marcasRepository.save(marcToUpdate);//Se actualiza el documento consultado en la base de datos
	return marca;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteMarcas(@PathVariable (value="id") String id){
        marcasRepository.deleteById(id);//Se actualiza el documento consultado en la base de datos
    }
}
