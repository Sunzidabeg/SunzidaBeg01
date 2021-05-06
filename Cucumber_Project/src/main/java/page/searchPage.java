package page;

import org.junit.Assert;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;


public class searchPage {

	static WebDriver driver;

	public searchPage(WebDriver driver) {
		this.driver = driver;

	}

	public void search_test() {

		driver.findElement(By.name("q")).sendKeys("ducks");

		driver.findElement(By.name("btnK")).click();
		
	    	
	}
	
	
}
