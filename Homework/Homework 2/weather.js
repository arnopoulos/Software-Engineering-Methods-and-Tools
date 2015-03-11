$(document).ready(function() {
	mapData = [{"id":"AL","state":"Alabama","capital":"Montgomery"},{"id":"AK","state":"Alaska","capital":"Juneau"},{"id":"AZ","state":"Arizona","capital":"Phoenix"},{"id":"AR","state":"Arkansas","capital":"Little Rock"},{"id":"CA","state":"California","capital":"Sacramento"},{"id":"CO","state":"Colorado","capital":"Denver"},{"id":"CT","state":"Connecticut","capital":"Hartford"},{"id":"DE","state":"Deleware","capital":"Dover"},{"id":"FL","state":"Florida","capital":"Tallahassee"},{"id":"GA","state":"Georgia","capital":"Atlanta"},{"id":"HI","state":"Hawaii","capital":"Honolulu"},{"id":"ID","state":"Idaho","capital":"Boise"},{"id":"IL","state":"Illinois","capital":"Springfield"},{"id":"IN","state":"Indiana","capital":"Indianapolis"},{"id":"IA","state":"Iowa","capital":"Des Moines"},{"id":"KS","state":"Kansas","capital":"Topeka"},{"id":"KY","state":"Kentucky","capital":"Frankfort"},{"id":"LA","state":"Louisiana","capital":"Baton Rouge"},{"id":"ME","state":"Maine","capital":"Augusta"},{"id":"MD","state":"Maryland","capital":"Annapolis"},{"id":"MA","state":"Massachusetts","capital":"Boston"},{"id":"MI","state":"Michigan","capital":"Lansing"},{"id":"MN","state":"Minnesota","capital":"Saint Paul"},{"id":"MS","state":"Mississippi","capital":"Jackson"},{"id":"MO","state":"Missouri","capital":"Jefferson City"},{"id":"MT","state":"Montana","capital":"Helena"},{"id":"NE","state":"Nebraska","capital":"Lincoln"},{"id":"NV","state":"Nevada","capital":"Carson City"},{"id":"NH","state":"New Hampshire","capital":"Concord"},{"id":"NJ","state":"New Jersey","capital":"Trenton"},{"id":"NM","state":"New Mexico","capital":"Santa Fe"},{"id":"NY","state":"New York","capital":"Albany"},{"id":"NC","state":"North Carolina","capital":"Raleigh"},{"id":"ND","state":"North Dakota","capital":"Bismarck"},{"id":"OH","state":"Ohio","capital":"Columbus"},{"id":"OK","state":"Oklahoma","capital":"Oklahoma City"},{"id":"OR","state":"Oregon","capital":"Salem"},{"id":"PA","state":"Pennsylvania","capital":"Harrisburg"},{"id":"RI","state":"Rhode Island","capital":"Providence"},{"id":"SC","state":"South Carolina","capital":"Columbia"},{"id":"SD","state":"South Dakota","capital":"Pierre"},{"id":"TN","state":"Tennessee","capital":"Nashville"},{"id":"TX","state":"Texas","capital":"Austin"},{"id":"UT","state":"Utah","capital":"Salt Lake City"},{"id":"VT","state":"Vermont","capital":"Montpelier"},{"id":"VA","state":"Virginia","capital":"Richmond"},{"id":"WA","state":"Washington","capital":"Olympia"},{"id":"WV","state":"West Virginia","capital":"Charleston"},{"id":"WI","state":"Wisconsin","capital":"Madison"},{"id":"WY","state":"Wyoming","capital":"Cheyenne"}]
	for (i=0; i < mapData.length; i++) {
		getData(mapData[i])
	}

	function getData(data) {
		message = {q:data["capital"]+ " " + data["state"]}
		$.ajax({
			url:"http://api.openweathermap.org/data/2.5/weather",
			type:'GET',
			data:message,
			success:function(r) {
				console.log(data)
				console.log(r)
				if (r.cod == 200) {
					temp = toFahrenheit(r.main.temp)
					state = $("#"+data.id)
					color = "gray"
					if (temp < 10) color = "blue"
					else if (temp >= 10 && temp < 30) color = "cyan"
					else if (temp >= 30 && temp < 50) color = "green"
					else if (temp >= 50 && temp < 80) color = "orange"
					else if (temp > 80) color = "red"

					state.css("fill",color)
				} else {
					$("#"+data.id).css("fill","black")
				}
				// console.log(r)
			}
		})
	}

	function toFahrenheit(kelvin) {
		return (kelvin-273.15) * 9/5 + 32
	}

});

