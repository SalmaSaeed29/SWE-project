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
                         @RequestParam int age, @RequestParam int weight,@RequestParam String BT,
                         @RequestParam String adrs, @RequestParam String region){
        DB adding = new DB();
        userData.setId(id);
        userData.setPassword(pass);
        userData.setName(name);
        userData.setAge(age);
        userData.setWeight(weight);
        userData.setBloodtype(BT);
        userData.setAddress(adrs);
        userData.setRegion(region);

        String response;
        if(adding.checkForNoduplicateUsers(id)==false){
            response = adding.addUser(userData);
        }else{
            response = "invalid";
        }
        return response;
    }

    @GetMapping("/gUn")
    public String gUserName(){
        return userData.getName();
    }
    @GetMapping("/gUi")
    public String gUserId(){ return  String.valueOf(userData.getId()); }
    @GetMapping("/gUa")
    public String gUserAddress(){
        return userData.getAddress();
    }
    @GetMapping("/gUr")
    public String gUserRegion(){ return userData.getRegion(); }

    @GetMapping("/gUc")
    public String gUserCity(){
        DB db = new DB();
        return db.getCity(userData.getRegion()); }

    @GetMapping("/gUw")
    public String gUserWeight(){ return String.valueOf(userData.getWeight()); }
    @GetMapping("/gUg")
    public String gUserAge(){ return String.valueOf(userData.getAge()); }
    @GetMapping("/gUt")
    public String gUserType(){
        return userData.getBloodtype();
    }

    public static authority authData = new authority();
    @GetMapping("/signInA")
    public String signIn(@RequestParam String tax, @RequestParam String password){
        registrationController x = new registrationController();
        boolean valid = x.validateAuthorityInfo(tax, password);
        if (valid){
            DB profile = new DB();
            authData = profile.getAuthData(tax, password);
            return "True";
        }
        return "False";
    }

    @GetMapping("/signUpA")
    public String signUp(@RequestParam String email, @RequestParam String phone, @RequestParam String pass, @RequestParam String name, @RequestParam String adrs,
                         @RequestParam String region, @RequestParam String tax, @RequestParam String start, @RequestParam String end,
                         @RequestParam String donationF, @RequestParam String donationT,
                         @RequestParam int EAplus, @RequestParam int NAplus, @RequestParam int EAminus, @RequestParam int NAminus,
                         @RequestParam int EBplus, @RequestParam int NBplus, @RequestParam int EBminus, @RequestParam int NBminus,
                         @RequestParam int EABplus, @RequestParam int NABplus, @RequestParam int EABminus, @RequestParam int NABminus,
                         @RequestParam int EOplus, @RequestParam int NOplus, @RequestParam int EOminus, @RequestParam int NOminus){
        DB adding = new DB();
        authData.setEmail(email); authData.setPhone(phone); authData.setPassword(pass); authData.setName(name);
        authData.setAddress(adrs); authData.setRegion(region); authData.setTax(tax);
        authData.setStartWork(start); authData.setEndWork(end);authData.setDonationtimeFrom(donationF);authData.setDonationtimeTo(donationT);
        authData.setE_Aplus(EAplus); authData.setN_Aplus(NAplus); authData.setE_Aminus(EAminus); authData.setN_Aminus(NAminus);
        authData.setE_Bplus(EBplus); authData.setN_Bplus(NBplus); authData.setE_Bminus(EBminus); authData.setN_Bminus(NBminus);
        authData.setE_ABplus(EABplus); authData.setN_ABplus(NABplus); authData.setE_ABminus(EABminus); authData.setN_ABminus(NABminus);
        authData.setE_Oplus(EOplus); authData.setN_Oplus(NOplus); authData.setE_Ominus(EOminus); authData.setN_Ominus(NOminus);
        String response;
        if(adding.checkForNoduplicateAuthorities(tax)==false){
            response = adding.addAuthority(authData);
        }else{
            response = "invalid";
        }
        return response;
    }

    @GetMapping("/gAe")
    public String gAuthEmail(){
        return  authData.getEmail();
    }
    @GetMapping("/gAp")
    public String gAuthPhone(){
        return  authData.getPhone();
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
        DB db = new DB();
        return db.getCity(authData.getRegion()); }
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
    @GetMapping("/gEAp")
    public String gExist_Aplus(){ return String.valueOf(authData.getE_Aplus()); }
    @GetMapping("/gNAp")
    public String gNeed_Aplus(){ return String.valueOf(authData.getN_Aplus()); }
    @GetMapping("/gEAm")
    public String gExist_Aminus(){ return String.valueOf(authData.getE_Aminus()); }
    @GetMapping("/gNAm")
    public String gNeed_Aminus(){ return String.valueOf(authData.getN_Aminus()); }
    @GetMapping("/gEBp")
    public String gExist_Bplus(){ return String.valueOf(authData.getE_Bplus()); }
    @GetMapping("/gNBp")
    public String gNeed_Bplus(){ return String.valueOf(authData.getN_Bplus()); }
    @GetMapping("/gEBm")
    public String gExist_Bminus(){ return String.valueOf(authData.getE_Bminus()); }
    @GetMapping("/gNBm")
    public String gNeed_Bminus(){ return String.valueOf(authData.getN_Bminus()); }
    @GetMapping("/gEABp")
    public String gExist_ABplus(){ return String.valueOf(authData.getE_ABplus()); }
    @GetMapping("/gNABp")
    public String gNeed_ABplus(){ return String.valueOf(authData.getN_ABplus()); }
    @GetMapping("/gEABm")
    public String gExist_ABminus(){ return String.valueOf(authData.getE_ABminus()); }
    @GetMapping("/gNABm")
    public String gNeed_ABminus(){ return String.valueOf(authData.getN_ABminus()); }
    @GetMapping("/gEOp")
    public String gExist_Oplus(){ return String.valueOf(authData.getE_Oplus()); }
    @GetMapping("/gNOp")
    public String gNeed_Oplus(){ return String.valueOf(authData.getN_Oplus()); }
    @GetMapping("/gEOm")
    public String gExist_Ominus(){ return String.valueOf(authData.getE_Ominus()); }
    @GetMapping("/gNOm")
    public String gNeed_Ominus(){ return String.valueOf(authData.getN_Ominus()); }
}