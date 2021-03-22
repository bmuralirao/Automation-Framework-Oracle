package stepDefinitions;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.GoogleSearchPage;
import utility.ConfigFileReader;
import utility.PageObjectManager;

public class GoogleSearchStepDefinition {
	 WebDriver driver;
	 GoogleSearchPage googleSearchPage;
	 ConfigFileReader configFileReader;
	 PageObjectManager pageObjectManager;
	 static int keyCounts=0;
	 static int testCount=0;
	 
	 	
	@Given("^user launches the google application$")
	 public void user_launches_google_application(){
	 configFileReader= new ConfigFileReader();
	 System.setProperty("webdriver.chrome.driver", configFileReader.getDriverPath());
	 driver = new ChromeDriver();
	 driver.manage().window().maximize();
	 driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 googleSearchPage.navigateTo_HomePage(); 
	 }
	
	@When("^user enters the search word in the application \"([^\"]*)\"$")
	 public void user_enters_search_word_in_application(String keyWord) throws InterruptedException{
	 configFileReader= new ConfigFileReader();
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 googleSearchPage.perform_Search(keyWord);
	 }
	
	@Then("^user fetches the top 10 results$")
	 public void user_fetches_search_result_in_application(){
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 ArrayList<String> list =googleSearchPage.fetchSearchResults();
	 LinkedHashSet<String> set = new LinkedHashSet<String>(list);	 
	 System.out.println("The content of list"+set);
	 }
	
	@Then("^user stores the results in a file \"([^\"]*)\"$")
	 public void user_stores_search_result_in_file(String keyWordCount) throws IOException{
     testCount= Integer.parseInt(keyWordCount);
     keyCounts++;    
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 googleSearchPage.storeSearchResultsInFile();
	 }
	
	@Then("^user displays the values from the file to the console$")
	 public void user_displays_result_from_file_to_console() throws IOException{		
	if(keyCounts==testCount) {	 
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 googleSearchPage.displayFileContentToConsole();
		} 
	 }
	
	@And("^user closes the browser and other instances$")
	 public void user_close_browser() throws IOException{		
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();	 
	 googleSearchPage.close();
	 driver.close();
	}
	
	 @And("^user closes the application$")
	 public void user_close_application() throws IOException{		
	 driver.close();
	 }
	 
	 @Then("^user checks the top 10 results links are working fine$")
	 public void user_checks_links_in_page() throws IOException{
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 googleSearchPage.checkLinks();
	 
	 }
	 
	 
	 
	 @Then("^user displays the number of occurence of the keyword \"([^\"]*)\" in the page$")
	 public void user_displays_occurence_of_keyword_in_page(String keyWord){
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 String bodyText= googleSearchPage.getTextByBody();
	 int counter=0;	 
	 while (bodyText.contains(keyWord)){
		    counter++;
		    bodyText = bodyText.substring(bodyText.indexOf(keyWord) + keyWord.length());
		    }	     
	    System.out.println("The number of occurence of the keyword "+keyWord+" in the page is"+counter);
	 }
	 
	
	
	@Then("^user serach for the entered keyword \"([^\"]*)\" in the page$")
	 public void user_search_occurence_of_keyword_in_page(String keyWord){
	 pageObjectManager = new PageObjectManager(driver);
	 googleSearchPage = pageObjectManager.getGoogleSearchPage();
	 String bodyText= googleSearchPage.getTextByBody();
	  if(bodyText.contains(keyWord)) 	     
	    System.out.println("The entered keyword "+keyWord+" is present in the page");
	 }
}
