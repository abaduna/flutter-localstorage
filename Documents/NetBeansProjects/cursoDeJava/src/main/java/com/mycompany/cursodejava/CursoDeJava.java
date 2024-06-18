/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.cursodejava;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 *
 * @author artur
 */
public class CursoDeJava {

    public static void main(String[] args) {
       Map<String,String> Agenda = new HashMap<>();
        Scanner teclado = new Scanner(System.in);
       
       for(int i =0; i< 3; i++){
        
    
       
       System.out.println("Ingresa un nombre");
       String name = teclado.nextLine();
       
       System.out.println("Ingresa un telefono");
       String telefono = teclado.nextLine();
       
       Agenda.put(name, telefono);
    }
       System.out.println("Ingresa un nombre a buscar");
       String buscar = teclado.nextLine();
       
       System.out.println(Agenda.get(buscar) );
    }
    
    
}
