
package com.co.kashercolombia.rest.controller;


import com.co.kashercolombia.rest.model.Clasificacion;
import com.co.kashercolombia.rest.repository.ClasificacionRepositoryInterface;
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
@RequestMapping("/api/clasificacion")
public class ClasificacionController {
    //Instancio la interface de repository
    @Autowired
    private ClasificacionRepositoryInterface clasificacionRepository;
    
    @PostMapping("/insertar")
    public Clasificacion insertInClasificacion(@RequestBody @Validated Clasificacion clasificacion){
        
        return clasificacionRepository.insert(clasificacion);
    }
    
    @GetMapping("/mostrar")
    public List<Clasificacion> showClasificacion(){
        return clasificacionRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Clasificacion> showCategoriaById(@PathVariable String id){
        return clasificacionRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Clasificacion updateCategorias(@RequestBody Clasificacion clasificacion, @PathVariable String id){
	
	Clasificacion clasToUpdate = clasificacionRepository.findById(id).get();

	clasToUpdate.setClasificacion(clasificacion.getClasificacion());
	clasToUpdate.setId_clasificacion(clasificacion.getId_clasificacion());	

	clasificacionRepository.save(clasToUpdate);//Se actualiza el documento consultado en la base de datos
	return clasificacion;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteClasificacion(@PathVariable(value="id") String id){
        clasificacionRepository.deleteById(id);//Se actualiza el documento consultado en la base de datos
    }
}
