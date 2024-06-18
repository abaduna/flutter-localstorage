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
public class teoriaHashMap {
    public static void main(String[] args) {
        
        
        
       Map<String,String> diccionario = new HashMap<>();
       diccionario.put("SMS","un mensaje de txt");
       diccionario.put("LOL","reirse");
       
       System.out.println(diccionario.get("LOL"));
    }
}
