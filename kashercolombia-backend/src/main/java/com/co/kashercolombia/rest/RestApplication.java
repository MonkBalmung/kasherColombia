package com.co.kashercolombia.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class RestApplication {
        //Conexión a API Swagger
        @Bean
        public Docket kashercolombiaApi() {
        return new Docket(DocumentationType.SPRING_WEB.SWAGGER_2)
        .select() 
        .apis(RequestHandlerSelectors.any()) 
        .paths(PathSelectors.any()) 
        .build(); 
        }
        
	public static void main(String[] args) {
		SpringApplication.run(RestApplication.class, args);
	}

}
