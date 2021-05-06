package steps;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.searchPage;
import util.OpenBrowser;

public class StepDef {
	
	WebDriver driver;
	searchPage searchpage;
	
	
	
	@Before
	public void Before_run() {
		driver = OpenBrowser.init();
		searchpage = PageFactory.initElements(driver, searchPage.class);
		
	}
	
	
	@Given("^that I have gone to the Google page$")
	public void that_I_have_gone_to_the_Google_page() throws Throwable {
		
	   
	}

	@When("^I add ducks to the search box$")
	public void i_add_ducks_to_the_search_box() throws Throwable {
		
		driver.findElement(By.name("q")).sendKeys("ducks");
			    
	}

	@When("^click the Search Button$")
	public void click_the_Search_Button() throws Throwable {
		
		driver.findElement(By.name("btnK")).click();
	}

	@Then("^ducks should be shown in the results$")
	public void ducks_should_be_shown_in_the_results() throws Throwable {
		
				driver.close();
				driver.quit();
	}


}
	
	
	
	
	
	
	

	


