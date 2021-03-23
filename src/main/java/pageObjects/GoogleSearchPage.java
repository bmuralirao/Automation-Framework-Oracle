package pageObjects;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utility.ConfigFileReader;
import utility.Selenium;

/**
 * @author Murali Rao
 *
 */
public class GoogleSearchPage {

	WebDriver driver;
	ConfigFileReader configFileReader;
	static ArrayList<String> searchList = new ArrayList<String>();
	static FileWriter writer;

	public GoogleSearchPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.NAME, using = "q")
	private WebElement txt_googleSearch;
	@FindBy(how = How.NAME, using = "btnK")
	private WebElement btn_googleSearch;
	@FindAll(@FindBy(how = How.XPATH, using = "//div[@id='rso']//div[@class='hlcw0c']//div[@class='g']//div[@class='tF2Cxc']//h3"))
	private List<WebElement> txt_SearchList;
	@FindBy(how = How.TAG_NAME, using = "body")
	private WebElement txt_htmlContents;
	@FindAll(@FindBy(how = How.XPATH, using = "//a"))
	private List<WebElement> lnk_pageLinks;
	static final Logger logger = LogManager.getLogger(GoogleSearchPage.class.getName());

	/*****************************************************
	 * Method to perform the search in google
	 *****************************************************
	 *****************************************************/

	public void perform_Search(String inputKey) throws InterruptedException {
		try {
			logger.info("Searching in the google starts");
			Selenium sel = new Selenium();
			txt_googleSearch.sendKeys(inputKey);
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			executor.executeScript("arguments[0].click();", btn_googleSearch);
			sel.waitTime();
		} catch (Exception e) {
			logger.info("Error while doing the searchin in the google " + e.getStackTrace());
		}
	}

	/*****************************************************
	 * Method to open the google application
	 *****************************************************
	 *****************************************************/
	public void openApplication() {
		try {
			logger.info("Openning the google application");
			configFileReader = new ConfigFileReader();
			driver.get(configFileReader.getApplicationUrl());
			logger.info("Openning the google application ends");
		} catch (Exception e) {
			logger.info("Error while openning the application " + e.getStackTrace());
		}
	}

	/*****************************************************
	 * Method to fetch the results from the google application
	 *****************************************************
	 *****************************************************/
	public ArrayList<String> fetchSearchResults() {
		try {
			logger.info("Storing the search result starts");
			for (WebElement element : txt_SearchList) {
				searchList.add(element.getText());
			}
			logger.info("Storing the search result starts");
		} catch (Exception e) {
			logger.info("Error while fetching the reslts from the application " + e.getStackTrace());
		}
		return searchList;
	}

	/*****************************************************
	 * Method to store the search results into the text file
	 *****************************************************
	 *****************************************************/
	public void storeSearchResultsInFile() throws IOException {
		try {
			logger.info("Storing the search result in the text file starts");
			configFileReader = new ConfigFileReader();
			int counter = 0;
			writer = new FileWriter(configFileReader.getFilePath(), true);
			for (int i = 1; i < searchList.size(); i++) {
				if (counter > 10)
					break;
				counter++;
				writer.write(searchList.get(i));
				writer.write("\r\n");

			}
			writer.flush();
			searchList.clear();
			logger.info("Storing the search result in the text file ends");
		} catch (Exception e) {
			logger.info("Error while storing the search results to the text file " + e.getStackTrace());
		}
	}

	/**************************************************************************************
	 * Method to display the search result content from the text file to the console
	 * window
	 **************************************************************************************
	 **************************************************************************************/
	public void displayFileContentToConsole() throws FileNotFoundException {
		logger.info("Displying the file content to the console starts");
		configFileReader = new ConfigFileReader();
		try {
			File file = new File(configFileReader.getFilePath());
			Scanner sc = new Scanner(file);
			System.out.println("Displaying the file contents:");
			while (sc.hasNextLine()) {
				System.out.println(sc.nextLine());
			}
			sc.close();
		} catch (Exception e) {
			logger.info("Error in displying the file content to the console " + e.getStackTrace());
		}
		logger.info("Displying the file content to the console ends");
	}

	/*****************************************************
	 * Method to check links are working fine
	 *****************************************************
	 *****************************************************/
	public void checkLinks() throws IOException {
		try {
			logger.info("Checking all links are working fine starts");
			System.out.println("No of links are " + lnk_pageLinks.size());
			String singleLink = "";
			for (int index = 0; index < lnk_pageLinks.size(); index++) {
				WebElement links = lnk_pageLinks.get(index);
				singleLink = links.getAttribute("href");
				if (singleLink != null) {
					URL url = new URL(singleLink);
					HttpURLConnection httpURLConnect = (HttpURLConnection) url.openConnection();
					httpURLConnect.setConnectTimeout(5000);
					httpURLConnect.connect();
					if (httpURLConnect.getResponseCode() >= 400) {
						System.out.println(links.getAttribute("href") + " - " + httpURLConnect.getResponseMessage()
								+ "is a broken link");
					} else {
						System.out.println(links.getAttribute("href") + " - " + httpURLConnect.getResponseMessage()
								+ " link working fine");
					}
				}
			}

			logger.info("Checking all links are working fine ends");
		} catch (Exception e) {
			logger.info("Error in checking the links are working fine " + e.getStackTrace());
		}
	}

	/*****************************************************
	 * Method to get the html body 
	 * return String
	 *****************************************************
	 *****************************************************/
	public String getTextByBody() {
		try {
			logger.info("Getting the content of html");
		} catch (Exception e) {
			logger.info("Error in getting the contents of html " + e.getStackTrace());
		}
		return txt_htmlContents.getText();
	}

	/*****************************************************
	 * Method to close the file writer object
	 *****************************************************
	 *****************************************************/
	public void close() throws IOException {
		try {
			logger.info("Closing the file");
			writer.close();
		} catch (Exception e) {
			logger.info("Error in closing the file " + e.getStackTrace());
		}
	}

}
