package com.example.demo.Account;
import com.example.demo.Registration.*;
import com.example.demo.DataBase.*;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/savior")
public class ModifyAcc {
    public static User userAcc = new User();

    @GetMapping("/editAccI")
    public String editeProfile(@RequestParam String pass, @RequestParam String name,
                             @RequestParam int age, @RequestParam int weight,@RequestParam String BT,
                             @RequestParam String adrs, @RequestParam String region){

        Registration.userData.setPassword(pass);
        Registration.userData.setName(name);
        Registration.userData.setAge(age);
        Registration.userData.setWeight(weight);
        Registration.userData.setBloodtype(BT);
        Registration.userData.setAddress(adrs);

        ModifyDB modification = new ModifyDB();
        String response = modification.editUserProfile(Registration.userData);
        return response;
    }

    //the user cannot modify tax number
    //done
    public static Authority authAcc = new Authority();
    @GetMapping("/editAccA")
    public String editeProfileAuthority(@RequestParam String email, @RequestParam String phone, @RequestParam String pass, @RequestParam String name,
                                      @RequestParam String adrs, @RequestParam String region, @RequestParam String start,
                                      @RequestParam String end, @RequestParam String donationF, @RequestParam String donationT,
                                      @RequestParam int EAplus, @RequestParam int NAplus, @RequestParam int EAminus, @RequestParam int NAminus,
                                      @RequestParam int EBplus, @RequestParam int NBplus, @RequestParam int EBminus, @RequestParam int NBminus,
                                      @RequestParam int EABplus, @RequestParam int NABplus, @RequestParam int EABminus, @RequestParam int NABminus,
                                      @RequestParam int EOplus, @RequestParam int NOplus, @RequestParam int EOminus, @RequestParam int NOminus){
//        authority authAcc = new authority();
        Registration.authData.setEmail(email);
        Registration.authData.setPhone(phone);
        Registration.authData.setPassword(pass);
        Registration.authData.setName(name);
        Registration.authData.setAddress(adrs);
        Registration.authData.setRegion(region);
        Registration.authData.setStartWork(start);
        Registration.authData.setEndWork(end);
        Registration.authData.setDonationtimeFrom(donationF);
        Registration.authData.setDonationtimeTo(donationT);
        Registration.authData.setE_Aplus(EAplus);
        Registration.authData.setN_Aplus(NAplus); Registration.authData.setE_Aminus(EAminus);
        Registration.authData.setN_Aminus(NAminus);
        Registration.authData.setE_Bplus(EBplus);
        Registration.authData.setN_Bplus(NBplus);
        Registration.authData.setE_Bminus(EBminus); Registration.authData.setN_Bminus(NBminus);
        Registration.authData.setE_ABplus(EABplus); Registration.authData.setN_ABplus(NABplus);
        Registration.authData.setE_ABminus(EABminus); Registration.authData.setN_ABminus(NABminus);
        Registration.authData.setE_Oplus(EOplus); Registration.authData.setN_Oplus(NOplus);
        Registration.authData.setE_Ominus(EOminus); Registration.authData.setN_Ominus(NOminus);

        ModifyDB modification = new ModifyDB();
        String response = modification.editAuthProfile(Registration.authData);
        return response;
    }
}
