//PerlaB. 11/12/2017

var numGiven;
var pink;
var diamond;
var purple;
var colorful;
var totalScore=0;
var wins=0;
var losses=0;

generateRandoms();
console.log("numGiven "+ numGiven);
console.log("pink "+ pink);
console.log("diamond "+ diamond);
console.log("purple "+ purple);
console.log("colorful "+ colorful);


//-------------------------------------
function generateRandoms(){
	
	numGiven=Math.floor((Math.random()*120)+19);
	$("#randnum").text(numGiven);
	pink=Math.floor((Math.random()*12)+1);
	diamond=Math.floor((Math.random()*12)+1);
	purple=Math.floor((Math.random()*12)+1);
	colorful=Math.floor((Math.random()*12)+1);
	
}	


//--------------------------------------



$(".imgs").on ("click",function(){

	var clicked=$(this).attr("id");

	console.log("clicked: "+ clicked);

	if(clicked==="pink")
	{
		totalScore+=pink;
		console.log("pink "+ pink);
		$("#totalscore").text(totalScore);
		console.log("totalscore " +totalScore);
	}
	if(clicked==="diamond")
	{
		totalScore+=diamond;
		$("#totalscore").text(totalScore);
		console.log("totalscore " +totalScore);
	}
	if(clicked==="purple")
	{
		totalScore+=purple;
		$("#totalscore").text(totalScore);
		console.log("totalscore " +totalScore);
	}
	if(clicked==="colorful")
	{
		totalScore+=colorful;
		$("#totalscore").text(totalScore);
		console.log("totalscore " +totalScore);
	}
	if(totalScore===numGiven)
	{
		
		wins++;
		$("#winsShow").text("Wins: "+ wins);
		generateRandoms();
		totalScore=0;
		
		$("#totalscore").text(" ");

	}
	if(totalScore>numGiven)
	{
		
		losses++;
		$("#lossesShow").text("Losses: " +losses);
		generateRandoms();
		totalScore=0;
		$("#totalscore").text(" ");
	}

});