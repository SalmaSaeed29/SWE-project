package com.example.demo.Account;
import com.example.demo.Registration.*;
import com.example.demo.DataBase.*;
public class modifyAcc {
    public void editeProfile(long id,String pass, String name, int age, int weight,String BT,String adrs){
        user userAcc = new user();
        userAcc.setId(id);userAcc.setPassword(pass);userAcc.setName(name);
        userAcc.setAge(age);userAcc.setWeight(weight);userAcc.setBloodtype(BT);
        userAcc.setAddress(adrs);

        modifyDB modification = new modifyDB();
        modification.editUserProfile(userAcc);
    }

    public void editeProfile(String email,String pass, String name, String adrs, String start, String end,String donation){
        authority authAcc = new authority();
        authAcc.setEmail(email);authAcc.setPassword(pass);authAcc.setName(name);
        authAcc.setStartWork(start);
        authAcc.setEndWork(end);authAcc.setDonationtimeFrom(donation);
        authAcc.setDonationtimeTo(donation);

        modifyDB modification = new modifyDB();
        modification.editAuthProfile(authAcc);
    }
}
