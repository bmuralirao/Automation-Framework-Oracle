$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google_Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Google_Search_02"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user enters the search word in the application \"\u003cKeyWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user checks the top 10 results links are working fine",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user serach for the entered keyword \"\u003cKeyWord\u003e\" in the page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user displays the number of occurence of the keyword \"\u003cKeyWord\u003e\" in the page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user closes the application",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;",
  "rows": [
    {
      "cells": [
        "KeyWord"
      ],
      "line": 30,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;1"
    },
    {
      "cells": [
        "Selenium"
      ],
      "line": 31,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Google_Search_02"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user enters the search word in the application \"Selenium\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user checks the top 10 results links are working fine",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user serach for the entered keyword \"Selenium\" in the page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user displays the number of occurence of the keyword \"Selenium\" in the page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user closes the application",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_launches_google_application()"
});
formatter.result({
  "duration": 10410840100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 48
    }
  ],
  "location": "GoogleSearchStepDefinition.user_enters_search_word_in_application(String)"
});
formatter.result({
  "duration": 8466284400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_checks_links_in_page()"
});
formatter.result({
  "duration": 258209164200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 37
    }
  ],
  "location": "GoogleSearchStepDefinition.user_search_occurence_of_keyword_in_page(String)"
});
formatter.result({
  "duration": 372540700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 54
    }
  ],
  "location": "GoogleSearchStepDefinition.user_displays_occurence_of_keyword_in_page(String)"
});
formatter.result({
  "duration": 290454100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_application()"
});
formatter.result({
  "duration": 4427595100,
  "status": "passed"
});
});