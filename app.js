
$(document).ready(function() {  
	//Creating current date with a format
	const currentTime = moment().format('MMMM Do YYYY')
	//Displaying current time in h1 location with jquery
	$("#currentTime").text(currentTime)
	//Adding style to span to not use CSS with jquery
	$("span").attr("style", "width: 75px")
	//Changed all Button text to Submit
	$("button").text("Submit")
	//Creating an array of buisness hours
	const times = [09,10,11,12,13,14,15,16,17,]


	times.forEach(time => {
		//Getting the time to show in local storage
		const timeCheck = window.localStorage.getItem(time)
		//Creating current time in a const 
		const currentHour = moment().hour()

		//Controlling and displaying the availability of time
		//Past schedule display and prevent new text from adding
		if (currentHour > time) {
			$(`#${time}`).addClass("bg-secondary")	
			$(`#${time}`).attr("disabled", true)		
		//Current schedule display yellow
	 	} else if (currentHour === time) {
			$(`#${time}`).addClass("bg-warning")
		//Future schedule display green	 
		} else {
		 	$(`#${time}`).addClass("bg-success")
		}

		//Displaying time as numbers in local storage
		if(timeCheck === null) {  
			 window.localStorage.setItem(time,"")	
		//If time is showing past from current, it will be gray out	 
		} else if(timeCheck.length > 0 ) {
			$(`#${time}`).attr("value", window.localStorage.getItem(time))
		}
	}) 
	
	
	//Create function to enable submit text in each hour
	$("form").on("submit", function (e) { 
		e.preventDefault()
		//Create cont to inut text in to each id to save in place of memory
		const time = e.target.querySelector("input").getAttribute("id")
		const text = e.target.querySelector("input").value
		window.localStorage.setItem(time, text)
	})
})

  
	

	
		
		
		
	