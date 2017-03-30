
html="";
html=html+"<table id=echiquier>";
for (i = 1; i < 9; i++) {
	html=html+"<tr>";
	for (j = 1; j < 9; j++) {
		html+="<td id='cell-c"+j+"-l"+i+"' class=";
		if ((i+j)%2==0){
			html+="blanc";
		}
		else{
			html+="noir";
		}
		html+=">";
		if(i==2){
			html+="<img id=bp"+j+" src='img/bp.gif'></img>";
		}
		if(i==7){
			html+="<img id=wp"+j+" src='img/wp.gif'></img>";
		}
		if(i==1 || i==8){
			switch(i){
				case 1:
					switch(j){
						case 1:
						case 8:
							html+="<img id=br"+j+" src='img/br.gif'></img>";
							break;
						case 2:
						case 7:
							html+="<img id=bn"+j+" src='img/bn.gif'></img>";
							break;
						case 3:
						case 6:
							html+="<img id=bb"+j+" src='img/bb.gif'></img>";
							break;
						case 4:
							html+="<img id=bq"+j+" src='img/bq.gif'></img>";
							break;
						case 5:
							html+="<img id=bk"+j+" src='img/bk.gif'></img>";
							break;
					}
					break;
				case 8:
					switch(j){
						case 1:
						case 8:
							html+="<img id=wr"+j+" src='img/wr.gif'></img>";
							break;
						case 2:
						case 7:
							html+="<img id=wn"+j+" src='img/wn.gif'></img>";
							break;
						case 3:
						case 6:
							html+="<img id=wb"+j+" src='img/wb.gif'></img>";
							break;
						case 4:
							html+="<img id=wq"+j+" src='img/wq.gif'></img>";
							break;
						case 5:
							html+="<img id=wk"+j+" src='img/wk.gif'></img>";
							break;
					}
					break;
			}
		}
		html+="</td>";
	}
	html=html+"</tr>";
}
html=html+"</table>";
$('#plateau').html(html);

for (i = 1; i < 9; i++) {
	for (j = 1; j < 9; j++) {
		if(i==2 || i==7){
			$("#cell-c"+j+"-l"+i).mouseover(myScript);
			if ((i+j)%2==0){
				$("#cell-c"+j+"-l"+i).mouseout(retourBlanc);
			}
			else{
				$("#cell-c"+j+"-l"+i).mouseout(retourNoir);
			}
		}
		else{
			if(i==1 || i==8){
				if(j==2||j==7){
					$("#cell-c"+j+"-l"+i).mouseover(myScript);
					if ((i+j)%2==0){
						$("#cell-c"+j+"-l"+i).mouseout(retourBlanc);
					}
					else{
						$("#cell-c"+j+"-l"+i).mouseout(retourNoir);
					}
				}
			}
		}
	}
}
	


function myScript(){
	$(this).addClass("rouge");
}

function retourBlanc(){
	$(this).removeClass("rouge").addClass("blanc");
}

function retourNoir(){
	$(this).removeClass("rouge").addClass("noir");
}
