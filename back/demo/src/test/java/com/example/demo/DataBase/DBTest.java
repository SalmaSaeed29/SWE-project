package com.example.demo.DataBase;
import com.example.demo.Registration.*;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DBTest {


    // test addUser
    @Test
    void givenRightUserThenValid(){
        DB test = new DB();
        User myuser = new User();
        myuser.setId(992915);myuser.setPassword("5057555048484951");myuser.setName("Salma");myuser.setAge(21);
        myuser.setWeight(60);myuser.setBloodtype("A+");myuser.setAddress("Mohamed Helmy st.");
        myuser.setCity("Alexandria");myuser.setRegion("Montaza");
        assertEquals(test.addUser(myuser),"valid");
    }
    @Test
    void givenWrongUserTheninValid(){
        DB test = new DB();
        User myuser = new User();
        myuser.setId(108);myuser.setPassword("5057555048484951");myuser.setName("Salma");myuser.setAge(21);
        myuser.setWeight(62);myuser.setBloodtype("A+");myuser.setAddress("Malak Hefny st");
        myuser.setCity("Alexandria");myuser.setRegion("Montaza");
        assertEquals(test.addUser(myuser),"invalid");
    }

    //test validateID
    @Test
    void givenRightIDThenTrue() {
        DB test = new DB();
        assertTrue(test.validateID(110756));
    }
    @Test
    void givenWrongIDThenFalse() {
        DB test = new DB();
        assertFalse(test.validateID(1110756));
    }
    // test validate user

    @Test
    void givenRightidandRightpasswordThenTrue() {
        DB test = new DB();
        assertTrue(test.validateUser(102398,"5057555048484951"));
    }
    @Test
    void givenRightidandWrongpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateUser(110756,"go"));
    }
    @Test
    void givenWrongidandRightpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateUser(1110756,"5057555048484951"));
    }
    @Test
    void givenWrongidandWrongpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateUser(1110756,"go"));
    }

    // test validate tax
    @Test
    void givenRightTaxthenTrue(){
        DB test = new DB();
        assertTrue(test.validateTAX("135443423"));
    }
    @Test
    void  givenWrongTaxthenFalse(){
        DB test = new DB();
        assertFalse(test.validateTAX("02"));
    }
    //test add auth
    @Test
    void givenRightAuthThenValid(){
        DB test = new DB();
        Authority myauth = new Authority();
        myauth.setEmail("Shefaa@gmail.com");myauth.setPassword("1151041011029711510410110297");myauth.setName("Shefaa");
        myauth.setAddress("Malak Hefny st.");myauth.setPhone("04444444444");
        myauth.setCity("null");myauth.setRegion("Bulaq");myauth.setTax("232087200");
        myauth.setStartWork("12:00:00");myauth.setEndWork("00:00:00");
        myauth.setDonationtimeFrom("17:00:00");myauth.setDonationtimeTo("20:30:00");
        myauth.setN_Aplus(4);myauth.setE_Aplus(4);myauth.setN_Aminus(4);myauth.setE_Aminus(4);
        myauth.setN_Bplus(4);myauth.setE_Bplus(4);myauth.setN_Bminus(4);myauth.setE_Bminus(5);
        myauth.setN_ABplus(4);myauth.setE_ABplus(4);myauth.setN_ABminus(4);myauth.setE_ABminus(4);
        myauth.setN_Oplus(4);myauth.setE_Oplus(4);myauth.setN_Ominus(4);myauth.setE_Ominus(4);
        assertEquals(test.addAuthority(myauth),"valid");
    }
    @Test
    void givenWrongauththeninvalid(){
        DB test = new DB();
        Authority myauth = new Authority();
        myauth.setEmail("Shefa@gmail.com");myauth.setPassword("115104101102971151041011022222");myauth.setName("jojo");
        myauth.setAddress("Malak Heifny st.");myauth.setPhone("04444444444");
        myauth.setCity("null");myauth.setRegion("Bulaq");myauth.setTax("24487425322");
        myauth.setStartWork("12:00:00");myauth.setEndWork("00:00:00");
        myauth.setDonationtimeFrom("17:00:00");myauth.setDonationtimeTo("20:30:00");
        myauth.setN_Aplus(4);myauth.setE_Aplus(4);myauth.setN_Aminus(4);myauth.setE_Aminus(4);
        myauth.setN_Bplus(4);myauth.setE_Bplus(4);myauth.setN_Bminus(4);myauth.setE_Bminus(5);
        myauth.setN_ABplus(4);myauth.setE_ABplus(4);myauth.setN_ABminus(4);myauth.setE_ABminus(4);
        myauth.setN_Oplus(4);myauth.setE_Oplus(4);myauth.setN_Ominus(4);myauth.setE_Ominus(4);
        assertEquals(test.addAuthority(myauth),"invalid");
    }
    //test validate auth
    @Test
    void givenRightTaxAndRightPasswordThenTrue() {
        DB test = new DB();
        assertTrue(test.validateAuthority("103232676","1151041011029711510410110297"));
    }
    @Test
    void givenRightTaxAndWrongPasswordThenFalse() {
        DB test = new DB();
        assertFalse(test.validateAuthority("108867201","go"));
    }
    @Test
    void givenWrongTaxandRightpasswordThenFalse() {
        DB test = new DB();
        assertFalse(test.validateAuthority("10886720","115971089710911697107115971089710911697107"));
    }
    @Test
    void givenWrongTaxandWrongpasswordThenFalse() {
        DB test = new DB();
        assertFalse(test.validateAuthority("1088672011","go"));
    }

    //test get authority data
    @Test
    void givenRightTaxandRightpasswordThenNotNull() {
        DB test = new DB();
        assertNotNull(test.getAuthData("115532843","1151011049711611710711510110497116117107"));
    }
    @Test
    void givenRightTaxandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getAuthData("115532843","d5ddd"));
    }
    @Test
    void givenWrongTaxandRightpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getAuthData("121212","1151011049711611710711510110497116117107"));
    }
    @Test
    void givenWrongTaxandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getAuthData("121212","d5dd"));
    }

    // test checkfornoduplicateuserss
    @Test
    void givenDuplicateduserThenTrue(){
        DB test = new DB();
        assertTrue(test.checkForNoduplicateUsers(102398));
    }
    @Test
    void givenNotDuplicateduserThenFalse(){
        DB test = new DB();
        assertFalse(test.checkForNoduplicateUsers(169838));
    }

    // test get user data
//get my data

    @Test
    void givenRightIdAndRightPasswordThenNotNull() {
        DB test = new DB();
        assertNotNull(test.getUserData(102398,"5057555048484951"));
    }
    @Test
    void givenRightidandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getUserData(110756,"she45"));
    }
    @Test
    void givenWrongidandRightpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getUserData(1101756,"9710910511497505353"));
    }
    @Test
    void givenWrongidandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getUserData(1107556,"ee45"));
    }

    //test getcity
    @Test
    void givenRegionthenRightCity(){
        DB test = new DB();
        assertEquals(test.getCity("Montaza"),"Alexandria");
    }
    @Test
    void givenRegionthenWrongCity(){
        DB test = new DB();
        assertNotEquals(test.getCity("Montaza"),"Cairo");
    }
    // test checkfornoduplicateauthorities
    @Test
    void givenDuplicatedAuthThenTrue(){
        DB test = new DB();
        assertTrue(test.checkForNoduplicateAuthorities("115532843"));
    }
    @Test
    void givenNotDuplicatedauthThenFalse(){
        DB test = new DB();
        assertFalse(test.checkForNoduplicateAuthorities("223078837"));
    }

}