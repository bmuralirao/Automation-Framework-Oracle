package utility;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileReader {
	private Properties properties;
	private final String propertyFilePath = "configs//Configuration.properties";

	public ConfigFileReader() {
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
		}
	}

	public String getChromeDriverPath() {
		String driverPath = properties.getProperty("chromeDriverPath");
		if (driverPath != null)
			return driverPath;
		else
			throw new RuntimeException("Chrome driver path is not specified in the Configuration.properties file.");
	}

	public String getIEDriverPath() {
		String driverPath = properties.getProperty("internetExplorerPath");
		if (driverPath != null)
			return driverPath;
		else
			throw new RuntimeException(
					"internet Explorer driver path is not specified in the Configuration.properties file.");
	}

	public long getImplicitlyWait() {
		String implicitlyWait = properties.getProperty("implicitlyWait");
		if (implicitlyWait != null)
			return Long.parseLong(implicitlyWait);
		else
			throw new RuntimeException("implicitlyWait not specified in the Configuration.properties file.");
	}

	public String getApplicationUrl() {
		String url = properties.getProperty("applicationURL");
		if (url != null)
			return url;
		else
			throw new RuntimeException("url not specified in the Configuration.properties file.");
	}

	public String getFilePath() {
		String filePath = properties.getProperty("filePath");
		if (filePath != null)
			return filePath;
		else
			throw new RuntimeException("filePath not specified in the Configuration.properties file.");
	}

	public String getBrowserType() {
		String browserType = properties.getProperty("browser");
		if (browserType != null)
			return browserType;
		else
			throw new RuntimeException("browser type not specified in the Configuration.properties file.");
	}
}
