var lang = parseInt(prompt('Pilih Bahasa/Select Language \nIndonesia (1) \nEnglish (2)')),
	ulang = true;
	
function convertCenti(a) {
	return a / 100; // cm to m
}

function convertInch(b) {
	return b / 2.54; //cm to inch
}

function convertMili(c) {
	return c * 10; //cm to mm 
}

function convertMiles(d) {
	return d / 1.609; //km to mil
}

function convertFeet(e) {
	return e * 3.281; //m to ft
}
	
switch(lang) {
	case 1:
		while(ulang) {
			var choice = parseInt(prompt('Pilih Unit yang Ingin Dikonversi \ncm ke m (1) \ncm ke inci (2) \ncm ke mm (3) \nkm ke mil (4) \nm ke kaki (5)'));
			
			if (choice == 1) {
				var cm1 = parseInt(prompt('Masukkan Unit cm')),
					m1 = convertCenti(cm1);
					
				alert(cm1 + ' cm = ' + m1 + ' m');
			} else if (choice == 2) {
				var cm2 = parseInt(prompt('Masukkan Unit cm')),
					inch = convertInch(cm2);
					
				alert(cm2 + ' cm = ' + Math.floor(inch)*1 + ' inci');
			} else if (choice == 3) {
				var cm3 = parseInt(prompt('Masukkan Unit cm')),
					mm = convertMili(cm3);
					
				alert(cm3 + ' cm = ' + mm + ' mm');
			} else if (choice == 4) {
				var km = parseInt(prompt('Masukkan Unit km')),
					mil = convertMiles(km);
					
				alert(km + ' km = ' + Math.floor(mil)*1 + ' mil');
			} else if (choice == 5) {
				var m2 = parseInt(prompt('Masukkan Unit m')),
					ft = convertFeet(m2);
					
				alert(m2 + ' m = ' + Math.floor(ft)*1 + ' kaki');
			} else {
				alert('Input Salah!');
			}
			
			ulang = confirm('Mau hitung lagi?');
		}
	
	alert('Terima Kasih!');
	break;
	case 2:
		while(ulang) {
			var choice = parseInt(prompt('Select the Unit You Want to Convert \ncm to m (1) \ncm to inch (2) \ncm to mm (3) \nkm to mil (4) \nm to feet (5)'));
			
			if (choice == 1) {
				var cm1 = parseInt(prompt('Enter cm Unit')),
					m1 = convertCenti(cm1);
					
				alert(cm1 + ' cm = ' + m1 + ' m');
			} else if (choice == 2) {
				var cm2 = parseInt(prompt('Enter cm Unit')),
					inch = convertInch(cm2);
					
				alert(cm2 + ' cm = ' + Math.floor(inch)*1 + ' inch');
			} else if (choice == 3) {
				var cm3 = parseInt(prompt('Enter cm Unit')),
					mm = convertMili(cm3);
					
				alert(cm3 + ' cm = ' + mm + ' mm');
			} else if (choice == 4) {
				var km = parseInt(prompt('Enter km Unit')),
					mil = convertMiles(km);
					
				alert(km + ' km = ' + Math.floor(mil)*1 + ' mil');
			} else if (choice == 5) {
				var m2 = parseInt(prompt('Enter m Unit')),
					ft = convertFeet(m2);
					
				alert(m2 + ' m = ' + Math.floor(ft)*1 + ' ft');
			} else {
				alert('Wrong Input!');
			}
			
			ulang = confirm('Wanna do it again?');
		}
	
	alert('Thank You!');
	break;
	default:
		alert('Input Salah! / Wrong Input!');
	break;
}
