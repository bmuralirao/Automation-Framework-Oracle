package stepDefinitions;

import java.io.IOException;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.GoogleSearchPage;
import utility.ConfigFileReader;
import utility.PageObjectManager;
import utility.Selenium;

public class GoogleSearchStepDefinition {
	public static WebDriver driver;
	GoogleSearchPage googleSearchPage;
	ConfigFileReader configFileReader;
	PageObjectManager pageObjectManager;
	Selenium sel;
	static int keyCounts = 0;
	static int testCount = 0;
	
	@Given("^user launches the google application$")
	public void user_launches_google_application() {
		configFileReader = new ConfigFileReader();
		sel = new Selenium();
		driver = sel.driverIntialization();
		sel.waitTime();
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		googleSearchPage.openApplication();
	}

	@When("^user enters the search word in the application \"([^\"]*)\"$")
	public void user_enters_search_word_in_application(String keyWord) throws InterruptedException {
		configFileReader = new ConfigFileReader();
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		googleSearchPage.perform_Search(keyWord);
	}

	@Then("^user fetches the top 10 results$")
	public void user_fetches_search_result_in_application() {
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		googleSearchPage.fetchSearchResults();
		}

	@Then("^user stores the results in a file \"([^\"]*)\"$")
	public void user_stores_search_result_in_file(String keyWordCount) throws IOException {
		testCount = Integer.parseInt(keyWordCount);
		keyCounts++;
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		googleSearchPage.storeSearchResultsInFile();
	}

	@Then("^user displays the values from the file to the console$")
	public void user_displays_result_from_file_to_console() throws IOException {
		if (keyCounts == testCount) {
			pageObjectManager = new PageObjectManager(driver);
			googleSearchPage = pageObjectManager.getGoogleSearchPage();
			googleSearchPage.displayFileContentToConsole();
		}
	}

	@And("^user closes the browser and other instances$")
	public void user_close_browser() throws IOException {
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		googleSearchPage.close();
		sel = new Selenium();
		sel.closeBrowser();
	}

	@And("^user closes the application$")
	public void user_close_application() throws IOException {
		sel = new Selenium();
		sel.closeBrowser();
	}

	@Then("^user checks the top 10 results links are working fine$")
	public void user_checks_links_in_page() throws IOException {
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		googleSearchPage.checkLinks();

	}

	@Then("^user displays the number of occurence of the keyword \"([^\"]*)\" in the page$")
	public void user_displays_occurence_of_keyword_in_page(String keyWord) {
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		String bodyText = googleSearchPage.getTextByBody();
		int counter = 0;
		while (bodyText.contains(keyWord)) {
			counter++;
			bodyText = bodyText.substring(bodyText.indexOf(keyWord) + keyWord.length());
		}
		System.out.println("The number of occurence of the keyword " + keyWord + " in the page is" + counter);
	}

	@Then("^user serach for the entered keyword \"([^\"]*)\" in the page$")
	public void user_search_occurence_of_keyword_in_page(String keyWord) {
		pageObjectManager = new PageObjectManager(driver);
		googleSearchPage = pageObjectManager.getGoogleSearchPage();
		String bodyText = googleSearchPage.getTextByBody();
		if (bodyText.contains(keyWord))
			System.out.println("The entered keyword " + keyWord + " is present in the page");
	}
}
