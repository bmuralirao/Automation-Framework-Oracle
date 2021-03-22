package runner;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import utility.ConfigFileReader;

@CucumberOptions(
		         features="src/test/resources",
                 glue= {"stepDefinitions"},
                 tags= {"@Google_Search_02"},
                 format= {"pretty",
                		 "html:target/cucumber-reports/cucumber-pretty",
                		 "json:target/cucumber-reports/Cucumber-TestReport.json"},
                 plugin= {"html:target/cucumber-reports","json:target/cucumber.json","com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/Extentreport.html"},
                 monochrome= true                 
                 
		)
public class TestRunner {
	
	private TestNGCucumberRunner testNGCucumberRunner;
	
	@BeforeClass(alwaysRun = true)
	public void setUpClass() throws Exception {
		ConfigFileReader configFileReader = new ConfigFileReader();
		FileWriter fw = new FileWriter(configFileReader.getFilePath());
		PrintWriter pw = new PrintWriter(fw);
		pw.write("");
		pw.flush(); 
		pw.close();		
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}
	
	@Test(groups="cucumber", description="Run cucumber Feature", dataProvider= "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) throws ClassNotFoundException {
		
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	
	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}
	
	@AfterClass(alwaysRun = true)
	public void tearDownClass() throws Exception {
			
		testNGCucumberRunner.finish();
		
	}
	
	@AfterTest()
	 public void afterScenario() throws IOException{
		 System.out.println("This will run after the Scenario");       
	    }
	
	
	

}



