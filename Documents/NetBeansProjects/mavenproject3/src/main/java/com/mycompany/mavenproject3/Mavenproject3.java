/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.mavenproject3;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 *
 * @author artur
 */
public class Mavenproject3 {
    /**
     * 
     * @param args
     * @throws IOException 
     */
    public static void main(String[] args) throws IOException {
        
         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("ingrese un numero: ");
        String strNUmber_a = br.readLine();
        Integer number_a = Integer.parseInt(strNUmber_a);
        
        if(number_a % 2 == 0){
            System.out.println("es par");
        }else {
        System.out.println("es inpar");
        }
            
    
            
    
    }
    
}
