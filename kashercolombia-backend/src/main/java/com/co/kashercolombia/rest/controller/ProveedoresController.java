
package com.co.kashercolombia.rest.controller;

import com.co.kashercolombia.rest.model.Proveedores;
import com.co.kashercolombia.rest.repository.ProveedoresRepositoryInterface;
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
@RequestMapping("/api/proveedores")
public class ProveedoresController {
    //Instancio la interface de repository
    @Autowired
    private ProveedoresRepositoryInterface proveedoresRepository;
    
    @PostMapping("/insertar")
    public Proveedores insertInProveedores(@RequestBody @Validated Proveedores proveedor){
        
        return proveedoresRepository.insert(proveedor);
    }
    
    @GetMapping("/mostrar")
    public List<Proveedores> showProveedores(){
        return proveedoresRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Proveedores> showCategoriaById(@PathVariable String id){
        return proveedoresRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Proveedores updateCategorias(@RequestBody Proveedores proveedor, @PathVariable String id){
	
	Proveedores provToUpdate = proveedoresRepository.findById(id).get();

	provToUpdate.setId_proveedor(proveedor.getId_proveedor());
	provToUpdate.setNombre(proveedor.getNombre());
        provToUpdate.setNit(proveedor.getNit());
	provToUpdate.setDireccion(proveedor.getDireccion());	
        provToUpdate.setCiudad(proveedor.getCiudad());
	provToUpdate.setTelefonos(proveedor.getTelefonos());	

	proveedoresRepository.save(provToUpdate);//Se actualiza el documento consultado en la base de datos
	return proveedor;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteProveedores(@PathVariable (value="id") String id){
        proveedoresRepository.deleteById(id);//Se actualiza el documento consultado en la base de datos
    }
}
