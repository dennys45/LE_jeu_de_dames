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
	if ($(this).children("img").attr("src")=="img/blue.png" && tourJ2==false){
		$(this).removeClass("noir").removeClass("blanc").addClass("rouge");
	}
	else if ($(this).children("img").attr("src")=="img/red.png" && tourJ2==true){
		$(this).removeClass("noir").removeClass("blanc").addClass("rouge");
	}
	


}).mouseout(function(){
	$(this).removeClass("rouge").addClass("noir");
});