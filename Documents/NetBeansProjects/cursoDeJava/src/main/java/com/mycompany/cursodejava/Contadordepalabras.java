/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cursodejava;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author artur
 */
public class Contadordepalabras {
      public static void main(String[] args) {
        /*
        Contar cuantas palabas tinee una frase y ponerlo en un hshmap
        */
        String txt = "Hola que tal? Que estas haciendo que que hola";
        String[] palabras = txt.split(" ");
        Map<String,Integer> conteoDePalabras = new HashMap<>();
        for(String palabra:palabras){
            String palabraLimpia = StringUtils.LimpiarString(palabra);
           Integer contador = conteoDePalabras.get(palabraLimpia);
           if(contador == null){
               contador = 0;
           }
           contador++;
            conteoDePalabras.put(palabraLimpia,contador);
        }
        System.out.println(conteoDePalabras);
        
     
    }

     
    }
