
function imss(mensual){
	var salarioBase = parseFloat(document.getElementById('salarioBase').value);
	var salarioBaseCotizacion = parseFloat(document.getElementById('sbc').value);
	var infonavit = parseFloat(document.getElementById('infonavit').value);
	var dias =  parseFloat(document.getElementById('dias').value);
	var sueldo = salarioBase * 15;
	var mensual = salarioBase*30;
	var sxd = salarioBaseCotizacion*dias;
	var prestacionesDinero = sxd * .0025;
	var gastosMedicos = sxd * .00375;
	var invalidezVida = sxd * .006250;
	var cesantiaVejez = sxd *  .01125;
	var imssEmpleado = prestacionesDinero + gastosMedicos + invalidezVida + cesantiaVejez;
	
	var liminf = new Array(.01, 578.53, 4910.19, 8629.21, 10031.08, 12009.95, 24222.32, 38177.70, 72887.51, 97183.34, 291550.01);
	var limsup = new Array(578.52 ,4910.18 ,8629.2 ,10031.07 ,12009.94 ,24222.31 ,38177.69 ,72887.5 ,97183.33 ,291550);
	var porciento = new Array(.0192, .0640, .1088, .16, .1792, .2136, .2352, .30, .32, .34, .35);
	var cuotafija = new Array(0, 11.11, 288.33, 692.96, 917.26, 1271.87, 3880.44, 7162.74, 17575.69, 25350.35, 91435.02);
	
	document.getElementById('imssEmpleado').innerHTML = imssEmpleado.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
	document.getElementById('sueldo').innerHTML = sueldo.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
	


if (mensual <=limsup[0]) {
	var excedente = mensual-liminf[0];
	var tasamarginal = porciento[0]*100 +"%";
	var impmarginal = excedente*porciento[0];
	var resultado = impmarginal+cuotafija[0];
	var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[1]) {
	var excedente = mensual-liminf[1];
	var tasamarginal = porciento[1]*100 +"%";
	var impmarginal = excedente*porciento[1];
	var resultado = impmarginal+cuotafija[1];
	var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[2]) {
	var excedente = mensual-liminf[2];
	var tasamarginal = porciento[2]*100 +"%";
	var impmarginal = excedente*porciento[2];
	var resultado = impmarginal+cuotafija[2];
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[3]) {
	var excedente = mensual-liminf[3];
	var tasamarginal = porciento[3]*100 +"%";
	var impmarginal = excedente*porciento[3];
	var resultado = impmarginal+cuotafija[3];
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[4]) {
	var excedente = mensual-liminf[4];
	var tasamarginal = porciento[4]*100 +"%";
	var impmarginal = excedente*porciento[4];
	var resultado = impmarginal+cuotafija[4];
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[5]) {
	var excedente = mensual-liminf[5];
	var tasamarginal = porciento[5]*100 +"%";
	var impmarginal = excedente*porciento[5];
	var resultado = impmarginal+cuotafija[5];
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[6]) {
	var excedente = mensual-liminf[6];
	var tasamarginal = porciento[6]*100 +"%";
	var impmarginal = excedente*porciento[6];
	var resultado = impmarginal+cuotafija[6];;
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[7]) {
	var excedente = mensual-liminf[7];
	var tasamarginal = porciento[7]*100 +"%";
	var impmarginal = excedente*porciento[7];
	var resultado = impmarginal+cuotafija[7];
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[8]) {
	var excedente = mensual-liminf[8];
	var tasamarginal = porciento[8]*100 +"%";
	var impmarginal = excedente*porciento[8];
	var resultado = impmarginal+cuotafija[8];;
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual <= limsup[9]) {
	var excedente = mensual-liminf[9];
	var tasamarginal = porciento[9]*100 +"%";
	var impmarginal = excedente*porciento[9];
	var resultado = impmarginal+cuotafija[9];
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else if (mensual > limsup[9]) {
	var excedente = mensual-liminf[10];
	var tasamarginal = porciento[10]*100 +"%";
	var impmarginal = excedente*porciento[10];
	var resultado = impmarginal+cuotafija[10];
var total = (resultado/2);
	document.getElementById('isr').innerHTML = total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else {
	alert("Introducir cantidad en numero");
}




	var subsidioInf = new Array(0.01, 1768.97, 2653.39,3472.85,3537.88,4446.16,4717.19,5335.43,6224.68,7113.91,7382.34);
	var subsidioSup = new Array(1768.96, 2653.38, 3472.84, 3537.87, 4446.15, 4717.18, 5335.42, 6224.67, 7113.90, 7382.33);
	var subsidioEmpleo = new Array(407.02, 406.83, 406.62, 392.77, 382.46, 354.23, 324.87, 294.63, 253.54, 217.61, 0);



	if (mensual >= subsidioInf[0] && mensual <=subsidioSup[0]) {
		var subEntregar = subsidioEmpleo[0]/2;
} else if (mensual >= subsidioInf[1] && mensual <=subsidioSup[1]) {
		var subEntregar = subsidioEmpleo[1]/2;
} else if (mensual >= subsidioInf[2] && mensual <=subsidioSup[2]) {
		var subEntregar = subsidioEmpleo[2]/2;
} else if (mensual >= subsidioInf[3] && mensual <=subsidioSup[3]) {
		var subEntregar = subsidioEmpleo[3]/2;				
} else if (mensual >= subsidioInf[4] && mensual <=subsidioSup[4]) {
		var subEntregar = subsidioEmpleo[4]/2;
} else if (mensual >= subsidioInf[5] && mensual <=subsidioSup[5]) {
		var subEntregar = subsidioEmpleo[5]/2;
} else if (mensual >= subsidioInf[6] && mensual <=subsidioSup[6]) {
		var subEntregar = subsidioEmpleo[6]/2;
} else if (mensual >= subsidioInf[7] && mensual <=subsidioSup[7]) {
		var subEntregar = subsidioEmpleo[7]/2;
} else if (mensual >= subsidioInf[8] && mensual <=subsidioSup[8]) {
		var subEntregar = subsidioEmpleo[8]/2;
} else if (mensual >= subsidioInf[9] && mensual <=subsidioSup[9]) {
		var subEntregar = subsidioEmpleo[9]/2;
} else {
		var subEntregar = subsidioEmpleo[10];
	}

document.getElementById('subsidio').innerHTML = subEntregar.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });





if(subEntregar > 0){
	document.getElementById('resultado').innerHTML =(sueldo-imssEmpleado-total+subEntregar-infonavit).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
	document.getElementById('subsidioPagado').innerHTML = (subEntregar-total).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
} else {
	document.getElementById('resultado').innerHTML = (sueldo-imssEmpleado-total-infonavit).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
	document.getElementById('subsidioPagado').innerHTML = subsidioEmpleo[10].toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
}


}


