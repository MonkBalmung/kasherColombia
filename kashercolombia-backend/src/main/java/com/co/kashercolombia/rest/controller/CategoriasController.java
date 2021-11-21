
package com.co.kashercolombia.rest.controller;


import com.co.kashercolombia.rest.model.Categorias;
import com.co.kashercolombia.rest.repository.CategoriasRepositoryInterface;
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
@RequestMapping("/api/categorias")
public class CategoriasController {
    //Instancio la interface de repository
    @Autowired
    private CategoriasRepositoryInterface categoriaRepository;
    
    @PostMapping("/insertar")
    public Categorias insertInCategorias(@RequestBody @Validated Categorias categoria){
        return categoriaRepository.insert(categoria);//Insertar datos para colección Categorias
    }
    
    @GetMapping("/mostrar")
    public List<Categorias> showCategorias(){
        return categoriaRepository.findAll();//Devuelve el documento consultado en la base de datos
    }
    
    @GetMapping("/mostrar/{id}")
    public Optional<Categorias> showCategoriaById(@PathVariable String id){
        return categoriaRepository.findById(id);//Devuelve el documento consultado en la base de datos
    }
    
    @PutMapping("/actualizar/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public Categorias updateCategorias(@RequestBody Categorias categoria, @PathVariable String id){
	
	Categorias catToUpdate = categoriaRepository.findById(id).get();

	catToUpdate.setCategoria(categoria.getCategoria());
	catToUpdate.setId_categoria(categoria.getId_categoria());
	
	categoriaRepository.save(catToUpdate);//Se actualiza el documento consultado en la base de datos
	return categoria;

    }
    
    @DeleteMapping("/remover/{id}")//Se envía un parámetro para encontrar el documento, en éste caso un id
    public void deleteCategorias(@PathVariable (value="id") String id){
        categoriaRepository.deleteById(id);//Remueve el documento consultado en la base de datos
    }
}
