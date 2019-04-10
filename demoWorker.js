var i = 0;

function cuenta()
{
	i = i + 1;
	//manda el mensaje a la pagina
	postMessage(i);
	//cada 500 milisegundos ejecuta de nuevo cuenta()
	setTimeout("cuenta()",500);
}

cuenta();