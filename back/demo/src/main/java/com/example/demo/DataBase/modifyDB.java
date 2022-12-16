package com.example.demo.DataBase;
import com.example.demo.Registration.*;
import java.sql.*;

public class modifyDB {
    static final String DB_URL = "jdbc:mysql://@localhost:3306";
    static final String USER = "root";
    static final String PASS = "2972001333";

    public void editUserProfile(user acc){
//            System.out.println(QUERY);
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
            ) {
                String sql = "USE systemdb";
                stmt.executeUpdate(sql);
                if(acc.getPassword() != null){
                    String QUERY = "UPDATE userprofile SET userpassword = '"+ acc.getPassword() +"' WHERE id = "+acc.getId()+";";
                    stmt.executeUpdate(QUERY);
                    System.out.println("password updated successfully...");
                }
                if(acc.getName() != null){
                    final String QUERY = "UPDATE userprofile SET userpassword = '"+ acc.getName() +"' WHERE id = "+acc.getId()+";";
                    stmt.executeUpdate(QUERY);
                    System.out.println("name updated successfully...");
                }
                if(acc.getAge() != 0){
                    final String QUERY = "UPDATE userprofile SET userpassword = "+ acc.getAge() +" WHERE id = "+acc.getId()+";";
                    stmt.executeUpdate(QUERY);
                    System.out.println("age updated successfully...");
                }
                if(acc.getWeight() != 0){
                    final String QUERY = "UPDATE userprofile SET userpassword = "+ acc.getWeight() +" WHERE id = "+acc.getId()+";";
                    stmt.executeUpdate(QUERY);
                    System.out.println("weight updated successfully...");
                }
                if(acc.getBloodtype() != null){
                    final String QUERY = "UPDATE userprofile SET userpassword = '"+ acc.getBloodtype() +"' WHERE id = "+acc.getId()+";";
                    stmt.executeUpdate(QUERY);
                    System.out.println("blood type updated successfully...");
                }
                if(acc.getAddress() != null){
                    final String QUERY = "UPDATE userprofile SET userpassword = '"+ acc.getAddress() +"' WHERE id = "+acc.getId()+";";
                    stmt.executeUpdate(QUERY);
                    System.out.println("address updated successfully...");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }


    }



    public void editAuthProfile(authority acc){


//            System.out.println(QUERY);
        try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
        ) {
            String sql = "USE systemdb";
            stmt.executeUpdate(sql);
            if(acc.getPassword() != null){
                String QUERY = "UPDATE authority SET authpassword = '"+ acc.getPassword() +"' WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("password updated successfully...");
            }
            if(acc.getName() != null){
                final String QUERY = "UPDATE authority SET authName = '"+ acc.getName() +"' WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("name updated successfully...");
            }
            if(acc.getAddress() != null){
                String QUERY = "UPDATE authority SET address = '"+ acc.getAddress() +"' WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("address updated successfully...");
            }
            if(acc.getTotalbags() != 0){
                String QUERY = "UPDATE authority SET totalbags = "+ acc.getTotalbags() +" WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("total bags updated successfully...");
            }
            if(acc.getAvailablebags() != 0){
                String QUERY = "UPDATE authority SET availablebags = "+ acc.getAvailablebags() +" WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("number of available bags updated successfully...");
            }
            if(acc.getNeededbags() != 0){
                String QUERY = "UPDATE authority SET neededbags = "+ acc.getNeededbags() +" WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("number of needed bags updated successfully...");
            }
            if(acc.getStartWork() != null){
                String QUERY = "UPDATE authority SET workinghours_start = '"+ acc.getStartWork() +"' WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("working hours updated successfully...");
            }
            if(acc.getEndWork() != null){
                String QUERY = "UPDATE authority SET workinghours_close = '"+ acc.getEndWork() +"' WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("working hours updated successfully...");
            }
            if(acc.getDonationtimeFrom() != null){
                String QUERY = "UPDATE authority SET donationtime = '"+ acc.getDonationtimeFrom() +"' WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("donation time from updated successfully...");
            }
            if(acc.getDonationtimeTo() != null){
                String QUERY = "UPDATE authority SET donationtime = '"+ acc.getDonationtimeTo() +"' WHERE email = '"+acc.getEmail()+"';";
                stmt.executeUpdate(QUERY);
                System.out.println("donation time to updated successfully...");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }


    }
}
