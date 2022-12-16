package com.example.demo.DataBase;

import com.example.demo.Registration.registration;
import com.example.demo.Registration.registrationController;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DBTest {

    //test validateID
    @Test
    void givenRightIDThenTrue() {
        DB test = new DB();
        assertTrue(test.validateID(110756));
    }
    @Test
    void givenRightIDThenFalse() {
        DB test = new DB();
        assertFalse(test.validateID(1110756));
    }
    // validate user

    @Test
    void givenRightidandRightpasswordThenTrue() {
        DB test = new DB();
        assertTrue(test.validateUser(110756,"shoee45"));
    }
    @Test
    void givenRightidandWrongpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateUser(110756,"go"));
    }
    @Test
    void givenWrongidandRightpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateUser(1110756,"shoee45"));
    }
    @Test
    void givenWrongidandWrongpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateUser(1110756,"go"));
    }

    //get my data

    @Test
    void givenRightidandRightpasswordThenNotNull() {
        DB test = new DB();
        assertNotNull(test.getmMyData(110756,"shoee45"));
    }
    @Test
    void givenRightidandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getmMyData(110756,"she45"));
    }
    @Test
    void givenWrongidandRightpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getmMyData(1101756,"shoee45"));
    }
    @Test
    void givenWrongidandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getmMyData(1107556,"ee45"));
    }


    //validate auth
    @Test
    void givenRightemailandRightpasswordThenTrue() {
        DB test = new DB();
        assertTrue(test.validateAuthority("dar.dar.dar@gmail.com","123456789"));
    }
    @Test
    void givenRightemailandWrongpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateAuthority("gg@gmail.com","go"));
    }
    @Test
    void givenWrongemailandRightpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateAuthority("hh@gmail.com","d5d"));
    }
    @Test
    void givenWrongemailandWrongpasswordThenTrue() {
        DB test = new DB();
        assertFalse(test.validateAuthority("hh@gmail.com","go"));
    }

    //get authority data
    @Test
    void givenRightemailandRightpasswordThenNotNull() {
        DB test = new DB();
        assertNotNull(test.getAuthData("dar.dar.dar@gmail.com","123456789"));
    }
    @Test
    void givenRightemailandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getAuthData("gg@gmail.com","d5ddd"));
    }
    @Test
    void givenWrongemailandRightpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getAuthData("gg@gmmail.com","d5d"));
    }
    @Test
    void givenWrongemailandWrongpasswordThenNull() {
        DB test = new DB();
        assertNull(test.getAuthData("gg@gmmail.com","d5dd"));
    }
}