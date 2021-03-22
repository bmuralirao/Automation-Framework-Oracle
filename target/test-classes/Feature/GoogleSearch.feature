Feature: Google_Search

@Google_Search_01
Scenario Outline: Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window
Given user launches the google application
When user enters the search word in the application "<KeyWords>"
Then user fetches the top 10 results
Then user stores the results in a file "5"
Then user displays the values from the file to the console
And user closes the browser and other instances

Examples:
|KeyWords|
|Java|
|Selenium|
|QA|
|Automation|
|Software|

@Google_Search_02
Scenario Outline: Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window
Given user launches the google application
When user enters the search word in the application "<KeyWord>"
Then user checks the top 10 results links are working fine
Then user serach for the entered keyword "<KeyWord>" in the page
Then user displays the number of occurence of the keyword "<KeyWord>" in the page
And user closes the application

Examples:
|KeyWord|
|Selenium|


