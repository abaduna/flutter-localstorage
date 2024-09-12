package com.boliche.mua.models;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name ="tickets")
public class Ticket {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;

    @Column(name = "idEvento")
    private  long idEvento;
    @Column(name ="name")
    private  String name;
    @Column(name = "lastMonthPaid")
    private LocalDate lastMonthPaid;
    @Column(name = "phone")
    private Long phone;
    @Column(name = "email")
    private Long email;

    @Column(name = "Compra")
    private Boolean buy;
}
