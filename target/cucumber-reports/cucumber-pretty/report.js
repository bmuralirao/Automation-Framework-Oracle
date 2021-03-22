$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google_Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Google_Search_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the search word in the application \"\u003cKeyWords\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fetches the top 10 results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user stores the results in a file \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user displays the values from the file to the console",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes the browser and other instances",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;",
  "rows": [
    {
      "cells": [
        "KeyWords"
      ],
      "line": 13,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;1"
    },
    {
      "cells": [
        "Java"
      ],
      "line": 14,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;2"
    },
    {
      "cells": [
        "Selenium"
      ],
      "line": 15,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;3"
    },
    {
      "cells": [
        "QA"
      ],
      "line": 16,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;4"
    },
    {
      "cells": [
        "Automation"
      ],
      "line": 17,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;5"
    },
    {
      "cells": [
        "Software"
      ],
      "line": 18,
      "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Google_Search_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the search word in the application \"Java\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fetches the top 10 results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user stores the results in a file \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user displays the values from the file to the console",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes the browser and other instances",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_launches_google_application()"
});
formatter.result({
  "duration": 10298393500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 48
    }
  ],
  "location": "GoogleSearchStepDefinition.user_enters_search_word_in_application(String)"
});
formatter.result({
  "duration": 3050398500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 140505200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "GoogleSearchStepDefinition.user_stores_search_result_in_file(String)"
});
formatter.result({
  "duration": 1019400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 499986700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Google_Search_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the search word in the application \"Selenium\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fetches the top 10 results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user stores the results in a file \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user displays the values from the file to the console",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes the browser and other instances",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_launches_google_application()"
});
formatter.result({
  "duration": 10406738300,
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
  "duration": 3444407400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 141427900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "GoogleSearchStepDefinition.user_stores_search_result_in_file(String)"
});
formatter.result({
  "duration": 1346700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 304828600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Google_Search_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the search word in the application \"QA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fetches the top 10 results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user stores the results in a file \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user displays the values from the file to the console",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes the browser and other instances",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_launches_google_application()"
});
formatter.result({
  "duration": 11529424100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 48
    }
  ],
  "location": "GoogleSearchStepDefinition.user_enters_search_word_in_application(String)"
});
formatter.result({
  "duration": 4031772900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 127675000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "GoogleSearchStepDefinition.user_stores_search_result_in_file(String)"
});
formatter.result({
  "duration": 905700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 11400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 306505700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Google_Search_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the search word in the application \"Automation\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fetches the top 10 results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user stores the results in a file \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user displays the values from the file to the console",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes the browser and other instances",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_launches_google_application()"
});
formatter.result({
  "duration": 10978758200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 48
    }
  ],
  "location": "GoogleSearchStepDefinition.user_enters_search_word_in_application(String)"
});
formatter.result({
  "duration": 3506285100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 109654700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "GoogleSearchStepDefinition.user_stores_search_result_in_file(String)"
});
formatter.result({
  "duration": 896400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 14400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 305209500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Google search with a specific keyword retrieving the first 10 results displayed storing the results in a file and displaying the content to the console window",
  "description": "",
  "id": "google-search;google-search-with-a-specific-keyword-retrieving-the-first-10-results-displayed-storing-the-results-in-a-file-and-displaying-the-content-to-the-console-window;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Google_Search_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the google application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the search word in the application \"Software\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user fetches the top 10 results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user stores the results in a file \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user displays the values from the file to the console",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes the browser and other instances",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_launches_google_application()"
});
formatter.result({
  "duration": 11013721700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 48
    }
  ],
  "location": "GoogleSearchStepDefinition.user_enters_search_word_in_application(String)"
});
formatter.result({
  "duration": 2588031100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 121554800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "GoogleSearchStepDefinition.user_stores_search_result_in_file(String)"
});
formatter.result({
  "duration": 872200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 5863000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 255770900,
  "status": "passed"
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
  "duration": 9769047600,
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
  "duration": 4865058800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_checks_links_in_page()"
});
