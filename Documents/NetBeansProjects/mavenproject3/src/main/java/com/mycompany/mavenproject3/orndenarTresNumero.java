/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mavenproject3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 *
 * @author artur
 */
public class orndenarTresNumero {
    public static void main(String[] args) throws IOException {
        
         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("ingrese un numero: ");
        String strNUmber_a = br.readLine();
        Integer number_a = Integer.parseInt(strNUmber_a);
        System.out.print("ingrese un numero 2: ");
        String strNUmber_b = br.readLine();
        Integer number_b = Integer.parseInt(strNUmber_b);
        System.out.print("ingrese un numero 3: ");
        String strNUmber_c = br.readLine();
        Integer number_c = Integer.parseInt(strNUmber_c);
        if(number_a >number_b){
            if(number_a > number_c){
                if(number_c > number_b){
                    System.out.println(number_a +" > " +number_b);
                }else {
                 System.out.println(number_a +" > " +number_c);
                }
            }
            else{ // a > b > c mas grande
                if(number_a > number_b){
                        System.out.println(number_c +" > " +number_b);
                }else {
                     System.out.println(number_c +" > " +number_a);
                    }
            }
                
        }else { // b es mas grande que a
        if(number_b > number_c){ // b es mas grande que c m y que todos
                if(number_c > number_a){ // c es mas grande que a
                    System.out.println(number_b +" > " +number_a);
                }else {
                 System.out.println(number_b +" > " +number_c);
                }
            }
            else{ // c es mas grande que todos
                if(number_a > number_b){
                        System.out.println(number_c +" > " +number_b);
                }else {
                     System.out.println(number_c +" > " +number_a);
                    }
            }
        }
            
    Integer promedio =(  number_a + number_b + number_c) / 3;
    System.out.println(promedio);
    }
}
