package com.example.demo.Registration;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;



class registrationTest {
    // user sign in
    @Test
    void givenRightidandRightpasswordThenNotNull() {
        registration test = new registration();
        assertNotNull(test.signIn(110756,"shoee45"));
    }
    @Test
    void givenRightidandWrongpasswordThenNull() {
        registration test = new registration();
        assertNull(test.signIn(110756,"she45"));
    }
    @Test
    void givenWrongidandRightpasswordThenNull() {
        registration test = new registration();
        assertNull(test.signIn(1101756,"shoee45"));
    }
    @Test
    void givenWrongidandWrongpasswordThenNull() {
        registration test = new registration();
        assertNull(test.signIn(1107556,"ee45"));
    }



    //authority sign in
    @Test
    void givenRightemailandRightpasswordThenNotNull() {
        registration test = new registration();
        assertNotNull(test.signIn("dar.dar.dar@gmail.com","123456789"));
    }
    @Test
    void givenRightemailandWrongpasswordThenNull() {
        registration test = new registration();
        assertNull(test.signIn("gg@gmail.com","d5ddd"));
    }
    @Test
    void givenWrongemailandRightpasswordThenNull() {
        registration test = new registration();
        assertNull(test.signIn("gg@gmmail.com","d5d"));
    }
    @Test
    void givenWrongemailandWrongpasswordThenNull() {
        registration test = new registration();
        assertNull(test.signIn("gg@gmmail.com","d5dd"));
    }


    //user sign up
/*    @Test

    void givenDataThenSignup() {
        registration test = Mockito.mock(registration.class);
        test.signUp(110756,"shoee45","aly",26,59,"B+","sidi gabed, alexandria, egypt");
        verify(test).signUp(110756,"shoee45","aly",26,59,"B+","sidi gabed, alexandria, egypt");
    }*/


}