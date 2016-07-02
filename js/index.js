var Champs = [
	"Darius",
	"Riven",
	"Kindred",
	"Hecarim",
	"Twisted Fate",
	"Viktor",
	"Lucian",
	"Ashe",
	"Thresh",
	"Bard"];

function pickChamp(){
	var champ1 = Math.floor(Math.random()*Champs.length);
	var champ2 = Math.floor(Math.random()*Champs.length);
	var champ3 = Math.floor(Math.random()*Champs.length);
	var champ4 = Math.floor(Math.random()*Champs.length);
	var champ5 = Math.floor(Math.random()*Champs.length);

	document.getElementById('mixchamps').innerHTML = "<h1>Top: "+Champs[champ1]+", Jungle: "+Champs[champ2]+", Mid: "+Champs[champ3]+", Adc: "+Champs[champ4]+", Support: "+Champs[champ5]+"</h1>";
}