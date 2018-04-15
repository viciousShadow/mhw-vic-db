function textswitcher(id,text1,text2)
{
	if(document.getElementById(id).innerHTML==text1)
			document.getElementById(id).innerHTML=text2;
		else
			document.getElementById(id).innerHTML=text1;
}
