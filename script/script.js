var tourJ2=false;

html="";
html=html+"<table id=echiquier>";
for (i = 1; i < 9; i++) {
	html=html+"<tr>";
	for (j = 1; j < 9; j++) {
		html+="<td id='cell-c"+j+"-l"+i+"' class=";
		if ((i+j)%2==0){
			html+="noir";
		}
		else{
			html+="blanc";
		}
		html+=">";
		if (i>0 && i<4){
			if((i+j)%2==0){
				html+="<img id=bleu"+i+"-"+j+" src='img/blue.png'></img>";
			}
		}
		if (i>5 && i<9){
			if((i+j)%2==0){
				html+="<img id=bleu"+i+"-"+j+" src='img/red.png'></img>";
			}
		}
		html+="</td>";
	}
	html=html+"</tr>";
}
html=html+"</table>";
$('#plateau').html(html);


$("#plateau td:not(:empty)").mouseover(function (){
	console.log($(this).children("img").attr("src"));
	console.log($(this).attr("id"));
	var idCell=$(this).attr("id");
	var col=idCell[6]; 
	var line=idCell[9];
	console.log(line+" ; "+col);
	if ($(this).children("img").attr("src")=="img/blue.png" && tourJ2==false){
		$(this).removeClass("noir").addClass("vert");
		if(line<8){
			if(col>1){
				if ($("td#cell-c"+(col-1)+"-l"+(line-(-1))+" img").length<1){
					$("td#cell-c"+(col-1)+"-l"+(line-(-1))).removeClass("noir").addClass("vert");
				}
			}
			if(col<8){
				if ($("td#cell-c"+(col-(-1))+"-l"+(line-(-1))+" img").length<1){
					$("td#cell-c"+(col-(-1))+"-l"+(line-(-1))).removeClass("noir").addClass("vert");
				}
			}
		}
		
	}
	else if ($(this).children("img").attr("src")=="img/red.png" && tourJ2==true){
		$(this).removeClass("noir").addClass("vert");
		if(line>1){
			if(col<8){
				if ($("td#cell-c"+(col-(-1))+"-l"+(line-1)+" img").length<1){
					$("td#cell-c"+(col-(-1))+"-l"+(line-1)).removeClass("noir").addClass("vert");
				}
			}
			if(col>1){
				if ($("td#cell-c"+(col-1)+"-l"+(line-1)+" img").length<1){
					$("td#cell-c"+(col-1)+"-l"+(line-1)).removeClass("noir").addClass("vert");
				}
			}
		}
	}
	


}).mouseout(function(){
	$(this).removeClass("vert").addClass("noir");
	var idCell=$(this).attr("id");
	var col=idCell[6]; 
	var line=idCell[9];
	$("td#cell-c"+(col-1)+"-l"+(line-(-1))).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-(-1))+"-l"+(line-(-1))).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-1)+"-l"+(line-1)).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-(-1))+"-l"+(line-1)).removeClass("vert").addClass("noir");
});