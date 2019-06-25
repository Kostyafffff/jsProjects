package com.company;

import java.util.*;

public class SimpleMain {
    public static void main(String[] args) {
        List<String> array1 = new LinkedList<String>(Arrays.asList("en", "ar", "ru", "pl", "de"));
        Iterator<String> it = array1.iterator();

        List<String> array2 = new LinkedList<String>(Arrays.asList("en", "ar", "ru"));
        Iterator<String> it2 = array2.iterator();


        System.out.println(array1);



    }
}
