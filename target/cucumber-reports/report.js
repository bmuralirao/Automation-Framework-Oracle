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
  "duration": 10242665100,
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
  "duration": 3854530200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 125610600,
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
  "duration": 6756300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 249180800,
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
  "duration": 10930453100,
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
  "duration": 3355373200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 160434400,
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
  "duration": 6648900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 10900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 246827500,
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
  "duration": 11011268700,
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
  "duration": 3195996800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 137560200,
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
  "duration": 6369800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 10900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 310942200,
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
  "duration": 11694996700,
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
  "duration": 3022958900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 2015218800,
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
  "duration": 18118600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 310457500,
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
  "duration": 10958192400,
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
  "duration": 3624202600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_fetches_search_result_in_application()"
});
formatter.result({
  "duration": 136150200,
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
  "duration": 5099100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_displays_result_from_file_to_console()"
});
formatter.result({
  "duration": 9747300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 252575700,
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
  "duration": 10129145000,
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
  "duration": 3927636700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_checks_links_in_page()"
});
formatter.result({
  "duration": 177444621800,
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
  "duration": 339445000,
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
  "duration": 303167900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_close_application()"
});
formatter.result({
  "duration": 365291000,
  "status": "passed"
});
});