@tripcare
Feature: ExistingUserEmailLogin
    Description: Scenarios for Exiting User Email Login

    Background:
        And tripcare user validates login page

    @TES-0004
    Scenario: Verify successful login for registered users
        And tripcare user enters "emailAddress" on email entry field
        And tripcare user enters "password" on password entry field
        When tripcare user clicks on login button
        Then tripcare user validates dashboard

    @TES-0005 @errorMessage
    Scenario: Verify correct error message is displayed for invalid password entry
        And tripcare user enters "emailAddress" on email entry field
        And tripcare user enters "password" on password entry field
        When tripcare user clicks on login button
        Then tripcare user validates error message of password field with "expectedText1"