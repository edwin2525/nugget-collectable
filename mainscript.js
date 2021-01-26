url = 'http://ip-api.com/json?callback=?'

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
 	document.getElementById("location").innerHTML = 'It only appears for people in ' + parsedText.city + ", " + parsedText.regionName + ", " + parsedText.country + ". Lucky you! P.S. I've heard the " + parsedText.isp + " rates aren't so great...";
}

get(url);