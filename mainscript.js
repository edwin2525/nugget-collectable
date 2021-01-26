url = 'https://api.ipgeolocation.io/ipgeo?apiKey=f1227ae10f134b2588b506168fabe5a8'

async function get(url)
{
	const response = await fetch(url);
    const text = await response.text();
    const parsedText=JSON.parse(text);
 	console.log(parsedText);
 	document.getElementById("location").innerHTML = 
		'It only appears for people nearby ' + parsedText.district + ". Lucky you!";
}

get(url);
