package utility;

import java.util.concurrent.TimeUnit;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.os.WindowsUtils;
import org.openqa.selenium.remote.DesiredCapabilities;

/**
 * @author Murali Rao
 *
 */
public class Selenium {
	ConfigFileReader configFileReader;
	static WebDriver driver;
	static final Logger logger = LogManager.getLogger(Selenium.class.getName());

	/*****************************************************
	 * Method for browser and driver initialization
	 * 
	 * @return WebDriver
	 *****************************************************
	 *****************************************************/
	public WebDriver driverIntialization() {
		try {
			logger.info("Driver initialization starts");
			configFileReader = new ConfigFileReader();
			if (configFileReader.getBrowserType().equalsIgnoreCase("Chrome")) {
				System.setProperty("webdriver.chrome.driver", configFileReader.getChromeDriverPath());
				driver = new ChromeDriver();
			} else if (configFileReader.getBrowserType().equalsIgnoreCase("Internet Explorer")) {
				System.setProperty("webdriver.chrome.driver", configFileReader.getIEDriverPath());
				DesiredCapabilities capab = DesiredCapabilities.internetExplorer();
				capab.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
				capab.setCapability(InternetExplorerDriver.IGNORE_ZOOM_SETTING, true);
				driver = new InternetExplorerDriver(capab);
				driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
				driver.manage().window().maximize();
			}
			driver.manage().window().maximize();
			logger.info("Driver initialization ends");
		} catch (Exception e) {
			logger.info("Error during the driver initialization " + e.getStackTrace());
		}
		return driver;
	}

	/*****************************************************
	 * Method for waiting
	 *****************************************************
	 *****************************************************/
	public void waitTime() {
		try {
			logger.info("Waiting starts");
			configFileReader = new ConfigFileReader();
			driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
			logger.info("Waiting ends");
		} catch (Exception e) {
			logger.info("Error during the wait " + e.getStackTrace());
		}

	}

	/*****************************************************
	 * Method to close the chrome.exe and chromeDriver.exe
	 *****************************************************
	 *****************************************************/
	public void closeBrowser() {
		try {
			logger.info("Closing browser starts");
			WindowsUtils.killByName("chrome.exe");
			WindowsUtils.killByName("chromedriver.exe");
			logger.info("Closing browser ends");

		} catch (Exception e) {
			logger.info("Error while closing the browser " + e.getStackTrace());
		}
	}
}