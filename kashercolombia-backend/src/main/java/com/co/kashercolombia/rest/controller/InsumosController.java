
package com.co.kashercolombia.rest.controller;


import com.co.kashercolombia.rest.model.Insumos;
import com.co.kashercolombia.rest.repository.InsumosRepositoryInterface;
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
@RequestMapping("/api/insumos")
public class InsumosController {
    //Instancio la interface de repository
    @Autowired
    private InsumosRepositoryInterface insumosRepository;
    
    @PostMapping("/insertar")
    public Insumos insertInInsumos(@RequestBody @Validated Insumos insumo){
        
        return insumosRepository.insert(insumo);
    }
    
    @GetMapping("/mostrar")
    public List<Insumos> showInsumos(){
        return insumosRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Insumos> showCategoriaById(@PathVariable String id){
        return insumosRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Insumos updateCategorias(@RequestBody Insumos insumo, @PathVariable String id){
	
	Insumos insToUpdate = insumosRepository.findById(id).get();

	insToUpdate.setId_insumo(insumo.getId_insumo());
	insToUpdate.setClasificacion(insumo.getClasificacion());
        insToUpdate.setCategoria(insumo.getCategoria());
	insToUpdate.setProducto(insumo.getProducto());	
        insToUpdate.setMarca(insumo.getMarca());
	insToUpdate.setProveedor(insumo.getProveedor());
        insToUpdate.setPresentacion(insumo.getPresentacion());
  
	insumosRepository.save(insToUpdate);//Se actualiza el documento consultado en la base de datos
	return insumo;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteInsumos(@PathVariable (value="id") String id){
        insumosRepository.deleteById(id);//Se actualiza el documento consultado en la base de datos
    }
}
