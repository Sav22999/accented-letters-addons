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

function setLowerUpperCase(type)
{
	for(var i=0;i<n_letters;i++)
	{
		type == "upper" ? document.getElementsByClassName("letter")[i].value = (document.getElementsByClassName("letter")[i].value).toUpperCase() : document.getElementsByClassName("letter")[i].value = (document.getElementsByClassName("letter")[i].value).toLowerCase();

		//document.getElementsByClassName("letter")[i].onclick = function(e){copyLetter(i);};
	}
	if (type == "upper")
	{
		document.getElementById("lowercase").style.borderTopColor="transparent";
		document.getElementById("lowercase").style.color="black";
		document.getElementById("uppercase").style.borderTopColor="rgb(10, 132, 255)";
		document.getElementById("uppercase").style.color="rgb(10, 132, 255)";
	}
	else if (type == "lower")
	{
		document.getElementById("lowercase").style.borderTopColor="rgb(10, 132, 255)";
		document.getElementById("lowercase").style.color="rgb(10, 132, 255)";
		document.getElementById("uppercase").style.borderTopColor="transparent";
		document.getElementById("uppercase").style.color="black";
	}

}

setLowerUpperCase("lower");

// button click events
document.getElementById("lowercase").onclick = function(e){setLowerUpperCase("lower");};
document.getElementById("uppercase").onclick = function(e){setLowerUpperCase("upper");};

for(var i=0;i<n_letters;i++)
{

	document.getElementsByClassName("letter")[i].onclick = function(e){copyLetter(this.value);};
}