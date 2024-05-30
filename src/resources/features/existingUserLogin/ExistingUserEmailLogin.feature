@automated @existingUserLogin @smoke
Feature: ExistingUserEmailLogin
  Description: Scenarios for Exiting User Email Login

  Background:
    And user validates login page

  @TES-0001
  Scenario: Verify successful login for registered users
    Given user registers a new user with different profile values from api with "userRegisterWithDifferentProfileValues" body and "newEmail" email
      | firstName | Custom |
      | lastName  | User   |
    And user enters "newEmail" on email entry field
    And user enters "password" on password entry field
    When user clicks on login button
    Then user validates dashboard

  @TES-0002 @errorMessage
  Scenario: Verify correct error message is displayed for invalid password entry
    Given user registers a new user from api with "maleUserRegister" body and "existingUser2" email
    And user enters "existingUser2" on email entry field
    And user enters "password" on password entry field
    When user clicks on login button
    Then user validates error message of password field with "expectedText1"


    And user sends GET request with "none" body, "someHeader" headers and "/user/{u_id}/profile/{another_value}/demo" endpoint