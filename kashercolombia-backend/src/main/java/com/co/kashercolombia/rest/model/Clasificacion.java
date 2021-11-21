
package com.co.kashercolombia.rest.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="clasificacion")
public class Clasificacion {
    
    
    @Id
    private String _id;
    private String id_clasificacion;
    private String clasificacion;

    public String getId() {
        return _id;
    }

    public void setId(String _id) {
        this._id = _id;
    }

    public String getId_clasificacion() {
        return id_clasificacion;
    }

    public void setId_clasificacion(String id_clasificacion) {
        this.id_clasificacion = id_clasificacion;
    }

    public String getClasificacion() {
        return clasificacion;
    }

    public void setClasificacion(String clasificacion) {
        this.clasificacion = clasificacion;
    }

      
    
    
}
