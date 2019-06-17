package com.company;

import java.io.*;
import java.net.Socket;
import java.net.UnknownHostException;

public class TestAsClient {
    public static void main(String[] args) throws InterruptedException{
        try {
            Socket socket = new Socket("localhost", 3345);
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            DataOutputStream oos = new DataOutputStream(socket.getOutputStream());
            DataInputStream ois = new DataInputStream(socket.getInputStream());
            {
                System.out.println("Client connected to socket");
                System.out.println();
                System.out.println("Client writing channel = oos & reading channel = ois in initialized");

                // проверяем живой ли канал и работаем если живой
                while (!socket.isOutputShutdown()){
                    if(br.ready()){
                        System.out.println("Client start writing in channel...");
                        Thread.sleep(1000);
                        String clientCommand = br.readLine();

                        // пишем данные с консоли в канал сокета для сервера
                        oos.writeUTF(clientCommand);
                        oos.flush();
                        System.out.println("Client message " + clientCommand + "to server.");
                        Thread.sleep(1000);
                        // ждём чтобы сервер успел прочесть сообщение из сокета и ответить
                        if(clientCommand.equalsIgnoreCase("quit")){
                            System.out.println("CLient kill connections");
                            Thread.sleep(2000);

                            if(ois.read() > 1){
                                System.out.println("reading...");
                                String in = ois.readUTF();
                                System.out.println(in);
                            }
                            break;
                        }
                        // если условие разъединения не достигнуто продолжаем работу
                        System.out.println("Client sent message & start waiting for data from server...");
                        Thread.sleep(2000);

                        // проверяем, что нам ответит сервер на сообщение(за предоставленное ему время в паузе он должен был успеть ответить)
                        if(ois.read() > -1){
                            // если успел забираем ответ из канала сервера в сокете и сохраняем её в ois переменную,  печатаем на свою клиентскую консоль
                            System.out.println("reading...");
                            String in = ois.readUTF();

                            System.out.println(in);
                        }
                    }
                }
                System.out.println("CLosing connections & channels on clientSide - DONE.");
            }

        }
        catch (UnknownHostException e) {
            e.printStackTrace();
        }
         catch (IOException e) {
            e.printStackTrace();
        }
    }
}
