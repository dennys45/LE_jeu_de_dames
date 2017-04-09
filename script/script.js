var tourJ1=true;

html="";
html=html+"<table id=echiquier>";
for (i = 1; i < 11; i++) {
	html=html+"<tr>";
	for (j = 1; j < 11; j++) {
		html+="<td id='cell-c"+j+"-l"+i+"' class=";
		if ((i+j)%2==0){
			html+="noir";
		}
		else{
			html+="blanc";
		}
		html+=">";
		if (i>0 && i<5){
			if((i+j)%2==0){
				html+="<img id=bleu"+i+"-"+j+" src='img/blue.png'></img>";
			}
		}
		if (i>6 && i<11){
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
	var self=$(this);
	var selfImg=$(this).children("img");
	var idCell=$(this).attr("id");
	var col=idCell[6]; 
	var line=idCell[9];
	if ($(this).children("img").attr("src")=="img/blue.png" && tourJ1==false){
		$(this).removeClass("noir").addClass("vert");
		if(line<8){
			if(col>1){
				if ($("td#cell-c"+(col-1)+"-l"+(line-(-1))+" img").length<1){
					$("td#cell-c"+(col-1)+"-l"+(line-(-1))).removeClass("noir").addClass("vert");
				}
				else if (col>2 && $("td#cell-c"+(col-1)+"-l"+(line-(-1))+" img").attr("src")=="img/red.png"){
					if($("td#cell-c"+(col-2)+"-l"+(line-(-2))+" img").length<1){
						$("td#cell-c"+(col-2)+"-l"+(line-(-2))).removeClass("noir").addClass("vert");
					}
				}
			}
			if(col<8){
				if ($("td#cell-c"+(col-(-1))+"-l"+(line-(-1))+" img").length<1){
					$("td#cell-c"+(col-(-1))+"-l"+(line-(-1))).removeClass("noir").addClass("vert");
				}
				else if (col<7 && $("td#cell-c"+(col-(-1))+"-l"+(line-(-1))+" img").attr("src")=="img/red.png"){
					if($("td#cell-c"+(col-(-2))+"-l"+(line-(-2))+" img").length<1){
						$("td#cell-c"+(col-(-2))+"-l"+(line-(-2))).removeClass("noir").addClass("vert");
					}
				}
			}
			$(this).children("img").draggable({
				containment: "#plateau",
				revert: 'invalid'
			});
			$('.vert').droppable({
				drop : function(){
					var img=self.html();
					var idCible=$(this).attr("id");
					self.html("");
					self.mouseout();
					$("td#"+idCible).html(img);
					$("td#"+idCible+" img").attr('style','');
					tourJ1=true;
				}
			});
		}
		
	}
	else if ($(this).children("img").attr("src")=="img/red.png" && tourJ1==true){
		$(this).removeClass("noir").addClass("vert");
		if(line>1){
			if(col<8){
				if ($("td#cell-c"+(col-(-1))+"-l"+(line-1)+" img").length<1){
					$("td#cell-c"+(col-(-1))+"-l"+(line-1)).removeClass("noir").addClass("vert");
				}
				else if (col<7 && $("td#cell-c"+(col-(-1))+"-l"+(line-1)+" img").attr("src")=="img/blue.png"){
					if($("td#cell-c"+(col-(-2))+"-l"+(line-2)+" img").length<1){
						$("td#cell-c"+(col-(-2))+"-l"+(line-2)).removeClass("noir").addClass("vert");
					}
				}
			}
			if(col>1){
				if ($("td#cell-c"+(col-1)+"-l"+(line-1)+" img").length<1){
					$("td#cell-c"+(col-1)+"-l"+(line-1)).removeClass("noir").addClass("vert");
				}
				else if (col>2 && $("td#cell-c"+(col-1)+"-l"+(line-1)+" img").attr("src")=="img/blue.png"){
					if($("td#cell-c"+(col-2)+"-l"+(line-2)+" img").length<1){
						$("td#cell-c"+(col-2)+"-l"+(line-2)+" img").removeClass("noir").addClass("vert");
					}
				}
			}
			$(this).children("img").draggable({
				containment: "#plateau",
				revert: 'invalid'
			});
			$('.vert').droppable({
				drop : function(){
					var img=self.html();
					var idCible=$(this).attr("id");
					self.html("");
					self.mouseout();
					$("td#"+idCible).html(img);
					$("td#"+idCible+" img").attr('style','');
					tourJ1=false;
				}
			});
		}
	}
	


}).mouseout(function(){
	$(this).removeClass("vert").addClass("noir");
	var idCell=$(this).attr("id");
	var col=idCell[6]; 
	var line=idCell[9];
	$("td#cell-c"+(col-1)+"-l"+(line-(-1))).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-2)+"-l"+(line-(-2))).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-(-1))+"-l"+(line-(-1))).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-(-2))+"-l"+(line-(-2))).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-1)+"-l"+(line-1)).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-2)+"-l"+(line-2)).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-(-1))+"-l"+(line-1)).removeClass("vert").addClass("noir");
	$("td#cell-c"+(col-(-2))+"-l"+(line-2)).removeClass("vert").addClass("noir");
});