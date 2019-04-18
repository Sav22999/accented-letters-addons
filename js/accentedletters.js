n_letters = 26;

function copyLetter(text)
{
	document.getElementById("text_to_copy").style.display="block";
	document.getElementById("text_to_copy").value = text;
	var copyText=document.getElementById("text_to_copy");
    copyText.select();
	document.execCommand("copy");
	document.getElementById("text_to_copy").style.display="none";
}

function setLowercase()
{
	for(var i=0;i<n_letters;i++)
	{
		document.getElementsByClassName("letter")[i].value = (document.getElementsByClassName("letter")[i].value).toLowerCase();

		//document.getElementsByClassName("letter")[i].onclick = function(e){copyLetter(i);};
	}
	document.getElementById("lowercase").style.borderBottomColor="black";
	document.getElementById("uppercase").style.borderBottomColor="transparent";
}

function setUppercase()
{
	for(var i=0;i<n_letters;i++)
	{
		document.getElementsByClassName("letter")[i].value = (document.getElementsByClassName("letter")[i].value).toUpperCase();

		//document.getElementsByClassName("letter")[i].onclick = function(e){copyLetter(i);};
	}
	document.getElementById("lowercase").style.borderBottomColor="transparent";
	document.getElementById("uppercase").style.borderBottomColor="black";
}

setLowercase();

// button click events
document.getElementById("lowercase").onclick = function(e){setLowercase();};
document.getElementById("uppercase").onclick = function(e){setUppercase();};

for(var i=0;i<n_letters;i++)
{

	document.getElementsByClassName("letter")[i].onclick = function(e){copyLetter(this.value);};
}