$('document').ready(function(){
	var foo="";
	var bar="";
	var result="";



//Entrée de la variable 1


	$('.valeur1').click(function(){
		bar=bar + $(this).html();
		console.log(bar);
		console.log(typeof bar);
		$('input').val(bar);
	});



// Entrée de la variable 2

	$('.valeur2').click(function(){
		foo=foo +$(this).html();
		console.log(foo);
		console.log(typeof foo);
		$('input').val(foo);
	});

// Entrée une addition

	$('.valeur3').click(function(){
		result= parseInt(bar)+parseInt(foo);
		console.log(result);
		console.log(typeof result);
		$('input').val(result);
	});






});


/* 
	function addition (a,b ) {
		return(a+b); 
	};

	console.log (addition(2,4)); 



	function substraction(a,b) {
		return(a-b);
	};

	console.log (substraction(6,1));

	function multiplication(a,b) {
		return(a*b);
	};

	console.log (multiplication(9,4));



	function division(a,b) {
		if (b > 0)
			console.log(a/b);
		else
			console.log("Can't divide by 0");}

		division(21,4);

*/


	

