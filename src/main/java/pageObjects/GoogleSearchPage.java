package pageObjects;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utility.ConfigFileReader;

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
	 
	 @FindAll(@FindBy(how = How.XPATH, using="//div[@id='rso']//div[@class='hlcw0c']//div[@class='g']//div[@class='tF2Cxc']//h3"))
	 private List<WebElement> txt_SearchList;
	 
	 
	 @FindBy(how = How.TAG_NAME, using = "body") 
	 private WebElement txt_htmlContents;
	 
	 	 
	 @FindAll(@FindBy(how = How.XPATH, using = "//a"))
	 private List<WebElement> lnk_pageLinks; 
	 
	 
	 public void perform_Search(String inputKey) throws InterruptedException {
		 txt_googleSearch.sendKeys(inputKey);
		 JavascriptExecutor executor = (JavascriptExecutor)driver;
		 executor.executeScript("arguments[0].click();", btn_googleSearch);
		 Thread.sleep(5000L);
		 }
		 
		 public void navigateTo_HomePage() {
		 configFileReader = new ConfigFileReader();
		 driver.get(configFileReader.getApplicationUrl());
		 }
		 
		 public ArrayList<String> fetchSearchResults() {			 
			 for(WebElement element:txt_SearchList) {
				 searchList.add(element.getText());		 
			 }
			 return searchList;		 
			 
		 }
		 
		 public void storeSearchResultsInFile() throws IOException{
			  configFileReader= new ConfigFileReader();	
			  int counter=0;
			  writer = new FileWriter(configFileReader.getFilePath(), true);
			  for(int i=1;i<searchList.size();i++) {
				  if(counter>10)
					  break;
				   counter++;
				   writer.write(searchList.get(i));
				   writer.write("\r\n");
				 
			  }	  
			  writer.flush();
			  //writer.close();
			  searchList.clear();
		 }
		 
		 public void displayFileContentToConsole() throws FileNotFoundException {
			 configFileReader= new ConfigFileReader();
			 try {
			 File file = new File(configFileReader.getFilePath());
			 Scanner sc = new Scanner(file);
			 System.out.println("Displaying the file contents:");
		      while(sc.hasNextLine()) {
		        System.out.println(sc.nextLine());
		      }
		      sc.close();
			 }catch(Exception e) {
				 e.getStackTrace();
			 }
			 
		 }
		 
		 public void checkLinks() throws IOException {		 
			 System.out.println("No of links are "+ lnk_pageLinks.size()); 
			 String singleLink="";
			 for(int index=0;index<lnk_pageLinks.size();index++) {				
				 WebElement links = lnk_pageLinks.get(index);
				 singleLink = links.getAttribute("href");
				 if(singleLink!=null) {
				  URL url = new URL(singleLink);
				   HttpURLConnection httpURLConnect=(HttpURLConnection)url.openConnection();
		            httpURLConnect.setConnectTimeout(5000);
		            httpURLConnect.connect();
		            if(httpURLConnect.getResponseCode()>=400)
		            {
		             System.out.println(links.getAttribute("href")+" - "+httpURLConnect.getResponseMessage()+"is a broken link");
		            } 
		            else {
		            System.out.println(links.getAttribute("href")+" - "+httpURLConnect.getResponseMessage()+" link working fine");
		            }
			 }
			 }
				 
			 }
		 
		 
		 
		 public String getTextByBody() {
			 return txt_htmlContents.getText();
			 
		 }
			 public void close() throws IOException {
				writer.close();
							 }
			 
			 

			 
		 
}
