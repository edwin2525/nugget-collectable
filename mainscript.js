url = 'https://api.ipregistry.co/?key=pdq7yaeic27q85'

async function get(url)
{
	const response = await fetch(url);
    const text = await response.text();
    const parsedText=JSON.parse(text);
 	console.log(parsedText);
 	document.getElementById("location").innerHTML = 
		'It only appears for people near ' + parsedText.location.city + ". Lucky you!";
}

get(url);
