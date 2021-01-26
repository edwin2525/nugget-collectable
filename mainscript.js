url = 'http://www.geoplugin.net/json.gp'

async function get(url)
{
	const response = await fetch(url);
    const text = await response.text();
    parsedText=JSON.
    parse(text
    .replace(/^[^(]*\(/, "")
 	.replace(/\)[^(]*$/, "")
 	.split(/\)[^(]*\(/));
 	console.log(parsedText);
 	document.getElementById("location").innerHTML = 'It only appears for people in ' + parsedText.geoplugin_city + ", " + parsedText.geoplugin_regionName + ", " + parsedText.geoplugin_countryName + ". Lucky you!";
}

get(url);
