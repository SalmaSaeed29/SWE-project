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

    public static user userData = new user();
    @GetMapping("/signInI")
    public String signIn(@RequestParam long id, @RequestParam String password){
        registrationController x = new registrationController();
        boolean valid = x.validateUserInfo(id, password);
        if (valid){
            DB profile = new DB();
            userData = profile.getUserData(id, password);
            return "True";
        }
        return "False";
    }

    @GetMapping("/signUpI")
    public String signUp(@RequestParam long id,@RequestParam String pass, @RequestParam String name,
                         @RequestParam int age, @RequestParam int weight,@RequestParam String BT,@RequestParam String adrs){
        DB adding = new DB();
        userData.setId(id);
        userData.setPassword(pass);
        userData.setName(name);
        userData.setAge(age);
        userData.setWeight(weight);
        userData.setBloodtype(BT);
        userData.setAddress(adrs);
        adding.addUser(userData);
        return "Done";
    }

    @GetMapping("/gUn")
    public String gUserName(){
        return userData.getName();
    }

    @GetMapping("/gUi")
    public String gUserId(){
        long id = userData.getId();
        return  String.valueOf(id);
    }

    @GetMapping("/gUa")
    public String gUserAddress(){
        return userData.getAddress();
    }

//    @GetMapping("/gUc")
//    public String gUserCity(){
//        return userData.getCity();
//    }

    @GetMapping("/gUw")
    public String gUserWeight(){
        float weight = userData.getWeight();
        return String.valueOf(weight);
    }

    @GetMapping("/gUg")
    public String gUserAge(){
        int age = userData.getAge();
        return String.valueOf(age);
    }

    @GetMapping("/gUt")
    public String gUserType(){
        return userData.getBloodtype();
    }

    public static authority authData = new authority();
    @GetMapping("/signInA")
    public String signIn(@RequestParam String email, @RequestParam String password){
        registrationController x = new registrationController();
        boolean valid = x.validateAuthorityInfo(email, password);
        if (valid){
            DB profile = new DB();
            authData = profile.getAuthData(email, password);
            return "True";
        }
        return "False";
    }

    @GetMapping("/signUpA")
    public String signUp(@RequestParam String email, @RequestParam String pass, @RequestParam String name, @RequestParam String adrs,
                         @RequestParam String city, @RequestParam String region, @RequestParam String tax,
                         @RequestParam String start, @RequestParam String end,@RequestParam String donationF, @RequestParam String donationT){
        DB adding = new DB();
        authData.setEmail(email);
        authData.setPassword(pass);
        authData.setName(name);
        authData.setAddress(adrs);
        authData.setCity(city);
        authData.setRegion(region);
        authData.setTax(tax);
        authData.setStartWork(start);
        authData.setEndWork(end);
        authData.setDonationtimeFrom(donationF);
        authData.setDonationtimeTo(donationT);
        adding.addAuthority(authData);
        return "Done";
    }

    @GetMapping("/gAe")
    public String gAuthEmail(){
        return  authData.getEmail();
    }

    @GetMapping("/gAn")
    public String gAuthName(){
        return  authData.getName();
    }

    @GetMapping("/gAt")
    public String gAuthTax(){
        return authData.getTax();
    }

    @GetMapping("/gAa")
    public String gAuthAddress(){
        return authData.getAddress();
    }

    @GetMapping("/gAc")
    public String gAuthCity(){
        return authData.getCity();
    }

    @GetMapping("/gAr")
    public String gAuthRegion(){
        return authData.getRegion();
    }

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

    public String getUtype() {
        return utype;
    }
}
