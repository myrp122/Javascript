	var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
			var nro_DNI = prompt("introduce tu número de DNI (sin letras)");
			var letra = prompt("introduce la letra de tu DNI");
			letra = letra.toUpperCase();
			if(nro_DNI<=0 || nro_DNI>=99999999){
			alert("el número proporcionado no es válido");
			}
			else{
				var letra_calculada = letras[nro_DNI % 23];
				if(letra_calculada == letra){
					alert("BIEN AHI!, el número y letra son CORRECTOS :P ");
					}
				else{
				alert("El número y letra proporcionados no son válidos");
				}
			}


