package com.example.demo.Registration;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class registrationControllerTest {

    //user
    @Test
    void givenRightIdAndRightPasswordThenTrue() {
        RegistrationController test = new RegistrationController();
        assertTrue(test.validateUserInfo(102398,"5057555048484951"));
    }
    @Test
    void givenRightIdAndWrongPasswordThenFalse() {
        RegistrationController test = new RegistrationController();
        assertFalse(test.validateUserInfo(102398,"123"));
    }
    @Test
    void givenWrongIdAndRightPasswordThenFalse() {
        RegistrationController test = new RegistrationController();
        assertFalse(test.validateUserInfo(1110756,"5057555048484951"));
    }
    @Test
    void givenWrongIdAndWrongPasswordThenFalse() {
        RegistrationController test = new RegistrationController();
        assertFalse(test.validateUserInfo(1110756,"go"));
    }

    //authority
    @Test
    void givenRightTaxAndRightPasswordThenTrue() {
        RegistrationController test = new RegistrationController();
        assertTrue(test.validateAuthorityInfo("233229789","1151041011029711510410110297"));
    }
    @Test
    void givenRightTaxAndWrongPasswordThenFalse() {
        RegistrationController test = new RegistrationController();
        assertFalse(test.validateAuthorityInfo("103232676","go"));
    }
    @Test
    void givenWrongTaxAndRightPasswordThenFalse() {
        RegistrationController test = new RegistrationController();
        assertFalse(test.validateAuthorityInfo("123","1151041011029711510410110297"));
    }
    @Test
    void givenWrongTaxAndWrongPasswordThenFalse() {
        RegistrationController test = new RegistrationController();
        assertFalse(test.validateAuthorityInfo("123","go"));
    }
}