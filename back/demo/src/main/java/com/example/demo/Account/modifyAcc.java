package com.example.demo.Account;
import com.example.demo.Registration.*;
import com.example.demo.DataBase.*;
import org.springframework.web.bind.annotation.*;

import java.sql.*;

@RestController
@CrossOrigin
@RequestMapping("/savior")
public class modifyAcc {
    public static user userAcc = new user();

    @GetMapping("/editAccI")
    public String editeProfile(@RequestParam String pass, @RequestParam String name,
                             @RequestParam int age, @RequestParam int weight,@RequestParam String BT,
                             @RequestParam String adrs, @RequestParam String region){

        registration.userData.setPassword(pass);
        registration.userData.setName(name);
        registration.userData.setAge(age);
        registration.userData.setWeight(weight);
        registration.userData.setBloodtype(BT);
        registration.userData.setAddress(adrs);

        modifyDB modification = new modifyDB();
        String response = modification.editUserProfile(registration.userData);
        return response;
    }

    //the user cannot modify tax number
    //done
    public static authority authAcc = new authority();
    @GetMapping("/editAccA")
    public String editeProfileAuthority(@RequestParam String email, @RequestParam String phone, @RequestParam String pass, @RequestParam String name,
                                      @RequestParam String adrs, @RequestParam String region, @RequestParam String start,
                                      @RequestParam String end, @RequestParam String donationF, @RequestParam String donationT,
                                      @RequestParam int EAplus, @RequestParam int NAplus, @RequestParam int EAminus, @RequestParam int NAminus,
                                      @RequestParam int EBplus, @RequestParam int NBplus, @RequestParam int EBminus, @RequestParam int NBminus,
                                      @RequestParam int EABplus, @RequestParam int NABplus, @RequestParam int EABminus, @RequestParam int NABminus,
                                      @RequestParam int EOplus, @RequestParam int NOplus, @RequestParam int EOminus, @RequestParam int NOminus){
//        authority authAcc = new authority();
        registration.authData.setEmail(email);
        registration.authData.setPhone(phone);
        registration.authData.setPassword(pass);registration.authData.setName(name);
        registration.authData.setAddress(adrs);registration.authData.setRegion(region);
        registration.authData.setStartWork(start);registration.authData.setEndWork(end);
        registration.authData.setDonationtimeFrom(donationF);
        registration.authData.setDonationtimeTo(donationT);registration.authData.setE_Aplus(EAplus);
        registration.authData.setN_Aplus(NAplus); registration.authData.setE_Aminus(EAminus);
        registration.authData.setN_Aminus(NAminus);
        registration.authData.setE_Bplus(EBplus);registration.authData.setN_Bplus(NBplus);
        registration.authData.setE_Bminus(EBminus); registration.authData.setN_Bminus(NBminus);
        registration.authData.setE_ABplus(EABplus); registration.authData.setN_ABplus(NABplus);
        registration.authData.setE_ABminus(EABminus); registration.authData.setN_ABminus(NABminus);
        registration.authData.setE_Oplus(EOplus); registration.authData.setN_Oplus(NOplus);
        registration.authData.setE_Ominus(EOminus); registration.authData.setN_Ominus(NOminus);

        modifyDB modification = new modifyDB();
        String response = modification.editAuthProfile(registration.authData);
        return response;
    }
}
