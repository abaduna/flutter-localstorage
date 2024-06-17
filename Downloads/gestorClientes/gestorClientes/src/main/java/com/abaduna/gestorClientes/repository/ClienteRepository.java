package com.abaduna.gestorClientes.repository;

import com.abaduna.gestorClientes.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
