
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
		$('input').val(foo);
	});

// Entrée de la variable 3

	$('.valeur3').click(function(){
		result=result+$(this).html();
		console.log(result);
		$('input').val(result);
	});

// Entrée une addition

	$('.addition').click(function(){
		result= parseInt(bar)+parseInt(foo);
		console.log(result);
	});

// Entrée d'une soustraction

	$('.soustraction').click(function(){
		result= parseInt(bar)-parseInt(foo);
		console.log(result);
	});

// Entrée d'une multiplication


	$('.multiplication').click(function(){
		result= parseInt(bar)*parseInt(foo);
		console.log(result);
	});

// Entrée de division

	$('.division').click(function(){
		result= parseInt(bar)/parseInt(foo);
		console.log(result);
	});

// Entrée de égale

	$('.egale').click(function(){
			$('input').val(result);
	});

	//Reset

	$('.reset').click(function(){
		bar="";
		foo="";
		result="";
		$('input').val("Entrer un chiffre");
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


	

