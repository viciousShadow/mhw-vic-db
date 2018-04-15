function csssw(editselector,editproperty,valuea,valueb)

	{
		var cssrules;
		if(document.all)
				{
					cssrules='rules';
				}
			else
				if(document.getElementById)
					{
						cssrules='cssRules';
					}
		var edited=false;
		for(var s=0;s<document.styleSheets.length;s++)
			{//cycle stylesheets
				for(var r=0;r<document.styleSheets[s][cssrules].length;r++)
					{//cycle selector entries
						if(document.styleSheets[s][cssrules][r].selectorText==editselector)
							{//compare selector to editselector
								if(document.styleSheets[s][cssrules][r].style[editproperty])
									{//compare property to editproperty
										if(document.styleSheets[s][cssrules][r].style[editproperty]==valuea)
												{//compare value to valuea
													document.styleSheets[s][cssrules][r].style[editproperty]=valueb
												}
											else
												//{
													document.styleSheets[s][cssrules][r].style[editproperty]=valuea
												//}
										edited=true;
										break;
									}
							}
					}
				if(!edited)
					{
						if(document.styleSheets[s].insertRule)
								{
									document.styleSheets[s].insertRule(editselector+' { '+editproperty+': '+valuea+'; }',document.styleSheets[s][cssrules].length);
								}
							else
								//{
									if(document.styleSheets[s].addRule)
										{
											document.styleSheets[s].addRule(editselector,editproperty+': '+valuea+';');
										}
								//}
					}
			}
	}
//####################################################################################################################################################
