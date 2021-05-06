$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/search.feature");
formatter.feature({
  "line": 1,
  "name": "Go to the Google search page and search for ducks",
  "description": "",
  "id": "go-to-the-google-search-page-and-search-for-ducks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5585526300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "go-to-the-google-search-page-and-search-for-ducks;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "that I have gone to the Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I add ducks to the search box",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click the Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "ducks should be shown in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.that_I_have_gone_to_the_Google_page()"
});
formatter.result({
  "duration": 186260700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_add_ducks_to_the_search_box()"
});
formatter.result({
  "duration": 178794300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_the_Search_Button()"
});
formatter.result({
  "duration": 3669523200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.ducks_should_be_shown_in_the_results()"
});
formatter.result({
  "duration": 5232304200,
  "status": "passed"
});
});