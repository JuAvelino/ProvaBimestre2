$(document).ready( function(){

$.ajax({
	type: 'GET',
	url:'http://swapi.co/api/planets/' ,
	dataType:'json',
	data: {get_param: 'value'},
	error: function(erro){
		alert(erro.responseText);
	},
	success: function(data){
		var divPlanet = document.querySelector("#contIDPlanet");
		divPlanet.innerHTML = "";
		$.each(data.results, function(i, obj){
			divPlanet.innerHTML += "<a href=javascript:mostrarPlaneta('"+ obj.url +"');>" + obj.name + "</a><br/>"; 
			});

		}
	});
});

function mostrarPlaneta(Id) {
	$.ajax({
		type: 'GET',
		url: Id,
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPlaneta = document.querySelector("#contPlanet");
			divPlaneta.innerHTML = "";
			divPlaneta.innerHTML += "Planeta: " 			   + data.name            + 
			                        "<br/>Periodo de Rotacao:" + data.rotation_period + 
			                        "<br/>Perioro de Orbita: " + data.orbital_period  +
								    "<br/>Populacao: " 		   + data.population      + 
								    "<br/>";
	}});
}
