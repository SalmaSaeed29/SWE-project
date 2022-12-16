package com.example.demo.Registration;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class registrationControllerTest {

    //user
    @Test
    void givenRightidandRightpasswordThenTrue() {
        registrationController test = new registrationController();
        assertTrue(test.validateUserInfo(110756,"shoee45"));
    }
    @Test
    void givenRightidandWrongpasswordThenTrue() {
        registrationController test = new registrationController();
        assertFalse(test.validateUserInfo(110756,"go"));
    }
    @Test
    void givenWrongidandRightpasswordThenTrue() {
        registrationController test = new registrationController();
        assertFalse(test.validateUserInfo(1110756,"shoee45"));
    }
    @Test
    void givenWrongidandWrongpasswordThenTrue() {
        registrationController test = new registrationController();
        assertFalse(test.validateUserInfo(1110756,"go"));
    }

    //authority
    @Test
    void givenRightemailandRightpasswordThenTrue() {
        registrationController test = new registrationController();
        assertTrue(test.validateAuthorityInfo("dar.dar.dar@gmail.com","123456789"));
    }
    @Test
    void givenRightemailandWrongpasswordThenTrue() {
        registrationController test = new registrationController();
        assertFalse(test.validateAuthorityInfo("gg@gmail.com","go"));
    }
    @Test
    void givenWrongemailandRightpasswordThenTrue() {
        registrationController test = new registrationController();
        assertFalse(test.validateAuthorityInfo("hh@gmail.com","d5d"));
    }
    @Test
    void givenWrongemailandWrongpasswordThenTrue() {
        registrationController test = new registrationController();
        assertFalse(test.validateAuthorityInfo("hh@gmail.com","go"));
    }
}