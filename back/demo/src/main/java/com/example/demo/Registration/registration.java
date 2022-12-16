package com.example.demo.Registration;

import com.example.demo.DataBase.DB;
import com.example.demo.Registration.*;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/savior")

public class registration {

    enum Response {
        DONE, ERROR, NOT_FOUND
    }
    String utype;

    @GetMapping("/signInI")
    public user signIn(@RequestParam long id, @RequestParam String password){
        user userData = new user();
        registrationController x = new registrationController();
        boolean valid = x.validateUserInfo(id,password);
        if (valid){
            DB profile = new DB();
            userData = profile.getmMyData(id, password);
            return userData;
        }
        return null;
    }

    public static authority authData = new authority();
    @GetMapping("/signInA")
    public String signIn(@RequestParam String email, @RequestParam String password){
        registrationController x = new registrationController();
        boolean valid = x.validateAuthorityInfo(email,password);
        if (valid){
            DB profile = new DB();
            authData = profile.getAuthData(email, password);
            return "True";
        }
        return "False";
    }

    @GetMapping("/gAe")
    public String gAuthEmail(){
        return  authData.getEmail();
    }

    @GetMapping("/gAn")
    public String gAuthName(){
        return  authData.getName();
    }

//    @GetMapping("/gAt")
//    public String gAuthTax(){
//        return authData.getTax();
//    }

    @GetMapping("/gAa")
    public String gAuthAddress(){
        return authData.getAddress();
    }

//    @GetMapping("/gAc")
//    public String gAuthCity(){
//        return authData.getCity();
//    }

    @GetMapping("/gAwf")
    public String gAuthWorkingF(){
        return authData.getStartWork();
    }

    @GetMapping("/gAwt")
    public String gAuthWorkingT(){
        return authData.getEndWork();
    }

    @GetMapping("/gAdf")
    public String gAuthDonationF(){
        return authData.getDonationtimeFrom();
    }

    @GetMapping("/gAdt")
    public String gAuthDonationT(){
        return authData.getDonationtimeTo();
    }


    @GetMapping("/signUpI")
    public String signUp(@RequestParam long id,@RequestParam String pass, @RequestParam String name,
                       @RequestParam int age, @RequestParam int weight,@RequestParam String BT,@RequestParam String adrs){
        DB adding = new DB();
        user newUser = new user();
        newUser.setId(id);
        newUser.setPassword(pass);
        newUser.setName(name);
        newUser.setAge(age);
        newUser.setWeight(weight);
        newUser.setBloodtype(BT);
        newUser.setAddress(adrs);
        adding.addUser(newUser);
        return "Done";
    }

    @GetMapping("/signUpA")
    public String signUp(@RequestParam String email,@RequestParam String pass, @RequestParam String name, @RequestParam String adrs,
                         @RequestParam int totalbags, @RequestParam int needed, @RequestParam int avilable,
                         @RequestParam String start, @RequestParam String end,@RequestParam String donationF, @RequestParam String donationT){
        DB adding = new DB();
        authority newAuth = new authority();
        newAuth.setEmail(email);
        newAuth.setPassword(pass);
        newAuth.setName(name);
        newAuth.setAddress(adrs);
        newAuth.setTotalbags(totalbags);
        newAuth.setNeededbags(needed);
        newAuth.setAvailablebags(avilable);
        newAuth.setStartWork(start);
        newAuth.setEndWork(end);
        newAuth.setDonationtimeFrom(donationF);
        newAuth.setDonationtimeTo(donationT);
        adding.addAuthority(newAuth);
        return "Done";
    }

    public String getUtype() {
        return utype;
    }
}
