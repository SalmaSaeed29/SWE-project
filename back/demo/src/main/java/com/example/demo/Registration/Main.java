package com.example.demo.Registration;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

/*
 * Java Program to to connect to MySQL database and
 * fix java.sql.SQLException: No suitable driver found
 * for jdbc:mysql://localhost:3306
 * error which occur if JAR is missing or you fail to register driver.
 */

public class Main {

    public static void main(String[] args) {

        Connection dbConnection = null;

        try {
            String url = "jdbc:mysql://localhost:3306";
            Properties info = new Properties();
            info.put("user", "root");
            info.put("password", "2972001333");

            dbConnection = DriverManager.getConnection(url, info);

            if (dbConnection != null) {
                System.out.println("Successfully connected to MySQL database test ");
            }

        } catch (SQLException ex) {
            System.out.println("An error occurred while connecting MySQL databse");
                    ex.printStackTrace();
        }

    }

}
