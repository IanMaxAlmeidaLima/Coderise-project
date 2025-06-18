Feature: Website's login and registration functionality testing

Scenario: Logging in with correct credentials
Given the user has an existing account
And the user is on the Log In page
When the user enters both valid email and password
Then the user is redirected to the home page

Scenario: Logging in with incorrect password
Given the user has an existing account
And the user is on the Log In page
When the user enters a valid email
But the user enters a invalid passowrd
Then the user sees an error message

Scenario: Logging in with incorrect email
Given the user has an existing account
And the user is on the Log In page
When the user enters a valid password
But the user enters a invalid email
Then the user sees an error message


Scenario: SingingUp with valid credentials
Given the user is on the home page
And the user acess the sing up page
When the user enters valid name, email and passowrd
Then the user has created a new account

Scenario: SingingUp with invalid email
Given the user is on the home page
And the user acess the sing up page
When the user enters name and valid passowrd
But the user enters an already used email
Then the user sees an error alert

Scenario: SingingUp with invalid password
Given the user is on the home page
And the user acess the sing up page
When the user enters name and valid email
But the user enters an invalid password
Then the user sees an error alert

Scenario: Searching for accessibilities
Given the user is on the home page
And the user clicks on list button
When the user sees the accessibilities button
And the user clicks on it
And the user clicks on the accessibilities API button
Then the user must see the accessibilities page

Scenario: Searching for suport number
Given the user is on the home page
And the user clicks on list button
When the user sees the support button
And the user clicks on it
Then an alert with the number must be visible for the user

Scenario: Searching for privacy and politics
Given the user is on the home page
And the user clicks on list button
When the user sees the Privacy and Polits button
And the user clicks on it
Then the user must see the Privacy and Politics page

Scenario: Opening website social medias
Given the user i on the home page
And scrolls down to the website bottom
When the user sees the social medias logo
And the users click in at leats one o they
Then the user must see Coderise's social media page