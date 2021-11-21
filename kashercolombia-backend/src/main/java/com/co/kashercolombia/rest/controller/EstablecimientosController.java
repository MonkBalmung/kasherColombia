
package com.co.kashercolombia.rest.controller;


import com.co.kashercolombia.rest.model.Establecimientos;
import com.co.kashercolombia.rest.repository.EstablecimientosRepositoryInterface;
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
@RequestMapping("/api/establecimientos")
public class EstablecimientosController {
    //Instancio la interface de repository
    @Autowired
    private EstablecimientosRepositoryInterface establecimientosRepository;
    
    @PostMapping("/insertar")
    public Establecimientos insertInEstablecimientos(@RequestBody @Validated Establecimientos establecimiento){
        
        return establecimientosRepository.insert(establecimiento);
    }
    
    @GetMapping("/mostrar")
    public List<Establecimientos> showEstablecimientos(){
        return establecimientosRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Establecimientos> showCategoriaById(@PathVariable String id){
        return establecimientosRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Establecimientos updateCategorias(@RequestBody Establecimientos establecimiento, @PathVariable String id){
	
	Establecimientos estToUpdate = establecimientosRepository.findById(id).get();

	estToUpdate.setId_establecimiento(establecimiento.getId_establecimiento());
	estToUpdate.setActividad(establecimiento.getActividad());
        estToUpdate.setNombre(establecimiento.getNombre());
	estToUpdate.setDireccion(establecimiento.getDireccion());	
        estToUpdate.setCiudad(establecimiento.getCiudad());
	estToUpdate.setTelefonos(establecimiento.getTelefonos());	

	establecimientosRepository.save(estToUpdate);//Se actualiza el documento consultado en la base de datos
	return establecimiento;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteEstablecimientos(@PathVariable (value="id") String id){
        establecimientosRepository.deleteById(id);//Se actualiza el documento consultado en la base de datos
    }
}
