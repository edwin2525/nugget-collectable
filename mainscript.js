url = 'https://ipapi.co/json/'

async function get(url)
{
	const response = await fetch(url);
   	const jsonResponse = await response.json();
 	console.log(jsonResponse);
 	document.getElementById("location").innerHTML = 
		'It only appears for people in ' 
		+ jsonResponse.city + ", " 
		+ jsonResponse.regionName + ", " 
		+ jsonResponse.country + 
		". Lucky you! P.S. I've heard the " 
		+ jsonResponse.isp 
		+ " rates aren't so great...";
}

get(url);
