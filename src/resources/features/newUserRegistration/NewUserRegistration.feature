@automated @newUserRegister @smoke
Feature: NewUserRegistration
  Description: Scenarios for New User Email Registration

  Background:
    And user validates login page

  @TES-0003
  Scenario: Verify successful registration for new users
    Given user navigates to registration page
    When user signs up with "newUserEmail1" and "password"
    Then user validates profile collection screen