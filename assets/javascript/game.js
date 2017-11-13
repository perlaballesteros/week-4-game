var numGiven=Math.floor((Math.random()*120)+19);
var totalScore=0;
var pink=Math.floor((Math.random()*12)+1);
var diamond=Math.floor((Math.random()*12)+1);
var purple=Math.floor((Math.random()*12)+1);
var colorful=Math.floor((Math.random()*12)+1);
console.log("numGiven "+ numGiven);
console.log("pink "+ pink);
console.log("diamond "+ diamond);
console.log("purple "+ purple);
console.log("colorful "+ colorful);


$("#randnum").text(numGiven);

$(".imgs").on ("click",function(){

	var clicked=$(this).attr("id");

	console.log("clicked: "+ clicked);

	if(clicked==="pink")
	{
		totalScore+=pink;
		console.log("totalscore " +totalScore);
	}
	if(clicked==="diamond")
	{
		totalScore+=diamond;
		console.log("totalscore " +totalScore);
	}

	if(clicked==="purple")
	{
		totalScore+=purple;
		console.log("totalscore " +totalScore);
	}


});