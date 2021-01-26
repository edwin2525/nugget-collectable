url = 'https://api.ipregistry.co/?key=pdq7yaeic27q85'

async function get(url)
{
	const response = await fetch(url);
    const text = await response.text();
    const parsedText=JSON.parse(text);
 	console.log(parsedText);
 	document.getElementById("location").innerHTML = 
		'It only appears for people near ' + parsedText.location.city + ". Lucky you!";
	console.log(Object.values(parsedText.security));
	if(Object.values(parsedText.security).every(function (e){return !e;}))
 	{
 		document.getElementById("nugget").innerHTML = 'https://media.discordapp.net/attachments/756226003587825703/803679163332296704/Goodbye_Nugg.gif';
 	}
}

get(url);
