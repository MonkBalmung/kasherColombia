
package com.co.kashercolombia.rest.controller;

import com.co.kashercolombia.rest.model.Productos;
import com.co.kashercolombia.rest.repository.ProductosRepositoryInterface;
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
@RequestMapping("/api/productos")
public class ProductosController {
    //Instancio la interface de repository
    @Autowired
    private ProductosRepositoryInterface productosRepository;
    
    @PostMapping("/insertar")
    public Productos insertInProductos(@RequestBody @Validated Productos producto){
        
        return productosRepository.insert(producto);
    }
    
    @GetMapping("/mostrar")
    public List<Productos> showProductos(){
        return productosRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Productos> showCategoriaById(@PathVariable String id){
        return productosRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Productos updateCategorias(@RequestBody Productos producto, @PathVariable String id){
	
	Productos prodToUpdate = productosRepository.findById(id).get();

	prodToUpdate.setId_producto(producto.getId_producto());
	prodToUpdate.setClasificacion(producto.getClasificacion());
        prodToUpdate.setCategoria(producto.getCategoria());
	prodToUpdate.setProducto(producto.getProducto());	
        prodToUpdate.setMarca(producto.getMarca());
	prodToUpdate.setProveedor(producto.getProveedor());
        prodToUpdate.setPresentacion(producto.getPresentacion());
  
	productosRepository.save(prodToUpdate);//Se actualiza el documento consultado en la base de datos
	return producto;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteProductos(@PathVariable (value="id") String id){
        productosRepository.deleteById(id);//Se actualiza el documento consultado en la base de datos
    }
}
