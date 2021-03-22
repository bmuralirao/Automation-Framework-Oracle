package utility;

import org.openqa.selenium.WebDriver;
import pageObjects.GoogleSearchPage;

public class PageObjectManager {
	
	private GoogleSearchPage googleSearchPage;
	private WebDriver driver;

	public PageObjectManager(WebDriver driver) {
		this.driver = driver;
	}
	
	public GoogleSearchPage getGoogleSearchPage() {

		return (googleSearchPage == null) ? googleSearchPage = new GoogleSearchPage(driver) : googleSearchPage;

	}
}