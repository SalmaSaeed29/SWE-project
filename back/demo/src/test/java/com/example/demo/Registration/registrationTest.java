package com.example.demo.Registration;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class registrationTest {
    @Test
    void givenRightIdAndRightPasswordThenTrue() {
        Registration test = new Registration();
        assertEquals(test.signIn(993336,"5057555048484951"), "True");
    }
    @Test
    void givenRightIdAndWrongPasswordThenFalse() {
        Registration test = new Registration();
        assertEquals(test.signIn(110756,"971"), "False");
    }
    @Test
    void givenWrongIdAndRightPasswordThenFalse() {
        Registration test = new Registration();
        assertEquals(test.signIn(123,"9710910511497505353"), "False");
    }
    @Test
    void givenWrongIdAndWrongPasswordThenFalse() {
        Registration test = new Registration();
        assertEquals(test.signIn(123,"971091"), "False");
    }



    //authority sign in
    @Test
    void givenRightTaxAndRightPasswordThenTrue() {
        Registration test = new Registration();
        assertEquals(test.signIn("233229789","1151041011029711510410110297"), "True");
    }
    @Test
    void givenRightTaxAndWrongPasswordThenFalse() {
        Registration test = new Registration();
        assertEquals(test.signIn(108867201,"115971"), "False");
    }
    @Test
    void givenWrongTaxAndRightPasswordThenFalse() {
        Registration test = new Registration();
        assertEquals(test.signIn(108,"115971089710911697107115971089710911697107"), "False");
    }
    @Test
    void givenWrongTaxAndWrongPasswordThenFalse() {
        Registration test = new Registration();
        assertEquals(test.signIn("108","123"), "False");
    }

}