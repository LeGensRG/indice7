document.addEventListener("DOMContentLoaded",()=> {

	//1. récupérer la réponse
	var dents = document.getElementById("dents");
	var cime = document.getElementById("cime");
	var grange = document.getElementById("grange");


	var valider = document.getElementById("valider");

	//2. action
	var even = function(){

				console.log(dents.value);
				console.log(cime.value);
				console.log(grange.value);
				if(dents.value == "les dents du midi" && cime.value == "la haute cime" && grange.value == "mont de grange"){
					alert("Bravo vous avez tout trouvé ! Maintenant utilisez tout les indices dissimulés avec chaque Qr code pour trouver le dernier endroit. Bonne Chance !")
				}else{
					alert("Dommage ce ne sont pas forcément les bonne réponse. Pensez à mettre toutes les réponses avant de valider et à écrire tout en minuscule.");
				}

					
			}
			
			
		
	

	//3. Appeler la fonction
	
	valider.addEventListener("click", even);
	
});
