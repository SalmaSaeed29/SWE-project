package com.example.demo.DataBase;
import com.example.demo.Registration.*;
import java.sql.*;

public class DB{
    static final String DB_URL = "jdbc:mysql://localhost:3306";
    static final String USER = "root";
    static final String PASS = "2972001333";

    public void addUser(user newuser){
        boolean valid = validateID(newuser.getId());
        if (valid) {
            final String QUERY = "insert into userprofile values(" + newuser.getId() + ",\"" +
                    newuser.getPassword() + "\",\"" + newuser.getName() + "\"," + newuser.getAge()
                    + "," + newuser.getWeight() + ",\"" + newuser.getBloodtype() + "\",\"" +
                    newuser.getAddress() + "\",\"" + newuser.getCity() + "\",\"" + newuser.getRegion() + "\");";
            System.out.println(QUERY);
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
            ) {
                String sql = "USE systemdb";
                stmt.executeUpdate(sql);
                stmt.executeUpdate(QUERY);
                System.out.println("User profile created successfully...");
            } catch (SQLException e) {
                e.printStackTrace();
            }

        }
        else {
            System.out.println("please enter correct info");
        }
    }

    public boolean validateID(long id) {

        final String QUERY = "SELECT EXISTS(SELECT * from civilregistry WHERE id=" + id + ");";
        // Open a connection
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement();

        ) {
            String sql = "USE systemdb";
            stmt.executeUpdate(sql);
            ResultSet rs = stmt.executeQuery(QUERY);

            int valid = -1;
            while (rs.next()) {
                //Display values
                valid = rs.getInt("EXISTS(SELECT * from civilregistry WHERE id=" + id + ")");
            }
            if (valid == 1) {
                System.out.println("valid id");
                return true;
            } else if (valid == 0) {
                System.out.println("invalid id");
                return false;
            }
        } catch (SQLException e) {

            e.printStackTrace();
        }
    return false;
    }

    public void addAuthority(authority newAuth){

            final String QUERY = "insert into authority values(\""+newAuth.getEmail()
                    +"\",\""+newAuth.getPassword()
                    +"\",\""+newAuth.getName()+"\",\""+newAuth.getAddress()
                    +"\",\""+newAuth.getCity()+"\",\""+newAuth.getRegion()
                    +"\",\""+newAuth.getStartWork()
                    +"\",\""+newAuth.getEndWork()+"\",\""+newAuth.getDonationtimeFrom()
                    +"\",\""+newAuth.getDonationtimeTo()+"\",\""+newAuth.getTax()+"\");\n";
            System.out.println(QUERY);
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
            ) {
                String sql = "USE systemdb";
                stmt.executeUpdate(sql);
                stmt.executeUpdate(QUERY);
                System.out.println("authority profile created successfully...");
            } catch (SQLException e) {
                e.printStackTrace();
            }

    }

    ///signing in
    public boolean validateUser(long id, String pass){
        String QUERY = "SELECT EXISTS(SELECT * from userprofile WHERE id=" + id + ");";
        String QUERY2 = "SELECT userpassword from userprofile WHERE id=" + id + ";";
        // Open a connection
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement();

        ) {
            String sql = "USE systemdb";
            stmt.executeUpdate(sql);
            ResultSet rs = stmt.executeQuery(QUERY);

            int valid = -1;
            while (rs.next()) {
                //Display values
                valid = rs.getInt("EXISTS(SELECT * from userprofile WHERE id=" + id + ")");
            }
            if (valid == 1) {
                rs = stmt.executeQuery(QUERY2);
                while (rs.next()) {
                    //Display values
                    String x = rs.getString("userpassword");
                    if(x.equals(pass)){
                        valid = 1;
                    }else {
                        valid = 0;
                    }
                }
                if (valid == 1){
                    return true;
                }else {
                    System.out.println("incorrect password");
                return false;
                }
            } else if (valid == 0) {
                System.out.println("invalid id");
                return false;
            }
        } catch (SQLException e) {

            e.printStackTrace();
        }
        return false;

    }

    public user getUserData(long id, String pass){
        user urData = new user();
        boolean ok = validateUser(id,pass);
        String QUERY = "SELECT * FROM systemdb.userprofile where id = "+id+";";
        if (ok){
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();

            ) {
                String sql = "USE systemdb";
                stmt.executeUpdate(sql);
                ResultSet rs = stmt.executeQuery(QUERY);

                while(rs.next()){
                    //Display values
                    urData.setId(rs.getLong("id"));urData.setName(rs.getString("userName"));
                    urData.setAge(rs.getInt("age"));urData.setWeight(rs.getInt("weight"));
                    urData.setBloodtype(rs.getString("bloodtype"));urData.setAddress(rs.getString("address"));
                    System.out.print("ID: " + rs.getLong("id"));
                    System.out.print(", Name: " + rs.getString("userName"));
                    System.out.print(", age: " + rs.getInt("age"));
                    System.out.println(", weight: " + rs.getInt("weight"));
                    System.out.println(", blood type: " + rs.getString("bloodtype"));
                    System.out.println(", address: " + rs.getString("address"));
                }
                return urData;
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }else {
            System.out.println("Invalid data");
            return null;
        }
        return null;

    }




    ///authority
    public boolean validateAuthority(String email, String pass){
        String QUERY = "SELECT EXISTS(SELECT * from authority WHERE email='" +email + "');";
        String QUERY2 = "SELECT authpassword from authority WHERE email='" + email + "';";
        // Open a connection
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement();

        ) {
            String sql = "USE systemdb";
            stmt.executeUpdate(sql);
            ResultSet rs = stmt.executeQuery(QUERY);

            int valid = -1;
            while (rs.next()) {
                //Display values
                valid = rs.getInt("EXISTS(SELECT * from authority WHERE email='" + email + "')");
            }
            if (valid == 1) {
                rs = stmt.executeQuery(QUERY2);
                while (rs.next()) {
                    //Display values
                    String x = rs.getString("authpassword");
                    if(x.equals(pass)){
                        valid = 1;
                    }else {
                        valid = 0;
                    }
                }
                if (valid == 1){
                    return true;
                }else {
                    System.out.println("incorrect password");
                    return false;
                }
            } else if (valid == 0) {
                System.out.println("incorrect email");
                return false;
            }
        } catch (SQLException e) {

            e.printStackTrace();
        }
        return false;

    }

    public authority getAuthData(String email, String pass){
        authority urData = registration.authData;       //from registration class
        boolean ok = validateAuthority(email,pass);
        String QUERY = "SELECT * FROM systemdb.authority where email = '"+email+"';";
        if (ok){
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();

            ) {
                String sql = "USE systemdb";
                stmt.executeUpdate(sql);
                ResultSet rs = stmt.executeQuery(QUERY);

                while(rs.next()){
                    //Display values

                    urData.setEmail(rs.getString("email"));
                    urData.setName(rs.getString("authName"));
                    urData.setAddress(rs.getString("address"));
                    urData.setCity(rs.getString("city"));
                    urData.setRegion(rs.getString("region"));
                    urData.setTax(rs.getString("tax"));
                    urData.setStartWork(rs.getString("workinghours_start"));
                    urData.setEndWork(rs.getString("workinghours_close"));
                    urData.setDonationtimeFrom(rs.getString("donationtimeFrom"));
                    urData.setDonationtimeTo(rs.getString("donationtimeTo"));
                    System.out.print("email: " + rs.getString("email"));
                    System.out.print(", name: " + rs.getString("authName"));
                    System.out.print(", address: " + rs.getString("address"));
                    System.out.print(", city: " + rs.getString("city"));
                    System.out.print(", region: " + rs.getString("region"));
                    System.out.println(", start working at: " + rs.getString("workinghours_start"));
                    System.out.println(", close at: " + rs.getString("workinghours_close"));
                    System.out.println(", donation time from: " + rs.getString("donationtimeFrom"));
                    System.out.println(", donation time to: " + rs.getString("donationtimeTo"));

                }
                return urData;
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return null;

    }

}
