package com.abaduna.gestorClientes.controllers;


import com.abaduna.gestorClientes.models.Cliente;
import com.abaduna.gestorClientes.services.ClienteServiceImp;
import com.abaduna.gestorClientes.services.ClienteServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClienteControllers {

    @Autowired
    ClienteServiceImp services;


    @GetMapping("api/cliente/{id}")
    public Cliente getByID(@PathVariable("id") Long id){
        return  services.getByID(id);
    }

    @DeleteMapping("api/cliente/{id}")
    public void  delete(@PathVariable("id") Long id){
          services.delete(id);
    }

    @GetMapping("api/cliente/{id}")
    public Cliente getAll(@PathVariable("id") Long id){
        return  services.getByID(id);
    }

    @PostMapping("api/cliente/")
    public void  post(@RequestBody Cliente clinete){
          services.save(clinete);
    }
}
