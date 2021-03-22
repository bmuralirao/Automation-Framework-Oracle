package utility;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.os.WindowsUtils;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Selenium {
	ConfigFileReader configFileReader;
	static WebDriver driver;

	public WebDriver driverIntialization() {
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
		return driver;
	}

	public void waitTime() {
	configFileReader = new ConfigFileReader();
	driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);

	}
	
	public void closeBrowser() {
		try {
			WindowsUtils.killByName("chrome.exe");
			WindowsUtils.killByName("chromedriver.exe");
			
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	}