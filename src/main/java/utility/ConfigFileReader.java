package utility;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

/**
 * @author Murali Rao
 *
 */
public class ConfigFileReader {
	private Properties properties;
	private final String propertyFilePath = "configs//Configuration.properties";
	static final Logger logger = LogManager.getLogger(ConfigFileReader.class.getName());

	/*****************************************************
	 * Method to load the property file contents
	 *****************************************************
	 *****************************************************/
	public ConfigFileReader() {
		PropertyConfigurator.configure("log4j.properties");
		logger.info("loading the Configuration.properties file starts");
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				logger.info("Error in loading the property file starts  " + e.getStackTrace());
				
			}
		} catch (FileNotFoundException e) {
			logger.info("File not found " + e.getStackTrace());
			e.printStackTrace();
			throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
		}
	}

	/****************************************************************
	 * Method to get the chromedriver.exe path from the property file
	 ****************************************************************
	 ***************************************************************/
	public String getChromeDriverPath() {
		PropertyConfigurator.configure("log4j.properties");
		logger.info("loading chrome driver path from the Configuration.properties file starts");
		String driverPath = properties.getProperty("chromeDriverPath");
		if (driverPath != null)
			return driverPath;
		else {
			logger.info("chrome driver path is not specified in the Configuration.properties file");
			throw new RuntimeException("Chrome driver path is not specified in the Configuration.properties file.");
		}
	}

	/****************************************************************
	 * Method to get the IEdriver.exe path from the property file
	 ****************************************************************
	 ***************************************************************/
	public String getIEDriverPath() {
		PropertyConfigurator.configure("log4j.properties");
		logger.info("loading IE driver path from the Configuration.properties file starts");
		String driverPath = properties.getProperty("internetExplorerPath");
		if (driverPath != null)
			return driverPath;
		else {
			logger.info("IE driver path is not specified in the Configuration.properties file");
			throw new RuntimeException(
					"internet Explorer driver path is not specified in the Configuration.properties file.");
		}
	}

	/****************************************************************
	 * Method to get the wait time from the property file
	 ****************************************************************
	 ***************************************************************/
	public long getImplicitlyWait() {
		PropertyConfigurator.configure("log4j.properties");
		logger.info("loading wait time from the Configuration.properties file starts");
		String implicitlyWait = properties.getProperty("implicitlyWait");
		if (implicitlyWait != null)
			return Long.parseLong(implicitlyWait);
		else {
			logger.info("mplicitlyWait not specified in the Configuration.properties file");
			throw new RuntimeException("implicitlyWait not specified in the Configuration.properties file.");
		}
	}

	/****************************************************************
	 * Method to get the application url from the property file
	 ****************************************************************
	 ***************************************************************/
	public String getApplicationUrl() {
		PropertyConfigurator.configure("log4j.properties");
		logger.info("loading application url from the Configuration.properties file starts");
		String url = properties.getProperty("applicationURL");
		if (url != null)
			return url;
		else
		{
			logger.info("url not specified in the Configuration.properties file.");
			throw new RuntimeException("url not specified in the Configuration.properties file.");
		}
	}

	/****************************************************************
	 * Method to get the text file path from the property file
	 ****************************************************************
	 ***************************************************************/
	public String getFilePath() {
		PropertyConfigurator.configure("log4j.properties");
		logger.info("loading text file path from Configuration.properties file starts");
		String filePath = properties.getProperty("filePath");
		if (filePath != null)
			return filePath;
		else {
			logger.info("filePath not specified in the Configuration.properties file.");
			throw new RuntimeException("filePath not specified in the Configuration.properties file.");
		}
	}

	/****************************************************************
	 * Method to get the type of browser from the property file
	 ****************************************************************
	 ***************************************************************/
	public String getBrowserType() {
		PropertyConfigurator.configure("log4j.properties");
		logger.info("loading browser type from the Configuration.properties file starts");
		String browserType = properties.getProperty("browser");
		if (browserType != null)
			return browserType;
		else {
			logger.info("browser type not specified in the Configuration.properties file.");
			throw new RuntimeException("browser type not specified in the Configuration.properties file.");
		}
	}
}
