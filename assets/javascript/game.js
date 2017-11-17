//PerlaB. 11/12/2017

var numGiven;
var pink;
var diamond;
var purple;
var colorful;
var totalScore=0;
var wins=0;
var losses=0;
var timer;

generateRandoms();
//console.log("numGiven "+ numGiven);
//console.log("pink "+ pink);
//console.log("diamond "+ diamond);
//console.log("purple "+ purple);
//console.log("colorful "+ colorful);


//-------------------------------------
function generateRandoms(){
	
	numGiven=Math.floor((Math.random()*121)+19);
	$("#randnum").text(numGiven);
	pink=Math.floor((Math.random()*13)+1);
	diamond=Math.floor((Math.random()*13)+1);
	purple=Math.floor((Math.random()*13)+1);
	colorful=Math.floor((Math.random()*13)+1);

	
}

function blanks(){
	$("#msg").text(" ");
	$("#totalscore").text(" ");
}

//--------------------------------------


$(".imgs").on ("click",function(){

	var clicked=$(this).attr("id");

	//console.log("clicked: "+ clicked);
	
	blanks();

	if(clicked==="pink")
	{
		totalScore+=pink;
		//console.log("pink "+ pink);
		$("#totalscore").text(totalScore);
		//console.log("totalscore " +totalScore);
	}
	if(clicked==="diamond")
	{
		totalScore+=diamond;
		$("#totalscore").text(totalScore);
		//console.log("totalscore " +totalScore);
	}
	if(clicked==="purple")
	{
		totalScore+=purple;
		$("#totalscore").text(totalScore);
		//console.log("totalscore " +totalScore);
	}
	if(clicked==="colorful")
	{
		totalScore+=colorful;
		$("#totalscore").text(totalScore);
		//console.log("totalscore " +totalScore);
	}
	if(totalScore===numGiven)
	{
		wins++;
		$("#msg").text("You Won!");
		$("#winsShow").text("Wins: "+ wins);
		generateRandoms();
		totalScore=0;
		

		

	}
	if(totalScore>numGiven)

	{
		losses++;
		$("#msg").text("Keep Trying!");
		$("#lossesShow").text("Losses: " +losses);
		generateRandoms();
		totalScore=0;
		
		
		

		
		
	}

	



});
