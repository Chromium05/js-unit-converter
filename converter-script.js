var lang = parseInt(prompt('Pilih Bahasa/Select Language \nIndonesia (1) \nEnglish (2)')),
	ulang = true;
	
switch(lang) {
	case 1:
		while(ulang) {
			var unit1 = prompt('Pilih Satuan yang Ingin Dikonversi/Diubah \n(1) cm | (2) mm \n(3) m | (4) inci \n(5) km | (6) mil \n(7) yard | (8) kaki'),
				unit2 = prompt('Ubah ' + unit1 + ' ke... \n(1) cm | (2) mm \n(3) m | (4) inci \n(5) km | (6) mil \n(7) yard | (8) kaki');
			
			if (unit1 == 'cm' && unit2 == 'cm' || unit1 == 'mm' && unit2 == 'mm' || unit1 == 'm' && unit2 == 'm' || unit1 == 'inci' && unit2 == 'inci' || unit1 == 'km' && unit2 == 'km' || unit1 == 'mil' && unit2 == 'mil' || unit1 == 'yard' && unit2 == 'yard' || unit1 == 'kaki' && unit2 == 'kaki') {
				alert('Satuannya tidak boleh sama!');
			} else if (unit1 == 'cm' && unit2 == 'm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' cm = ' + a/100 + ' m');
			} else if (unit1 == 'm' && unit2 == 'cm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' m = ' + a*100 + ' cm');
			} else if (unit1 == 'cm' && unit2 == 'mm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' cm = ' + a*10 + ' mm');
			} else if (unit1 == 'mm' && unit2 == 'cm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' mm = ' + a/10 + ' cm');
			} else if (unit1 == 'm' && unit2 == 'mm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' m = ' + a*1000 + ' mm');
			} else if (unit1 == 'mm' && unit2 == 'm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' mm = ' + a/1000 + ' m');
			} else if (unit1 == 'cm' && unit2 == 'inci') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' cm = ' + Math.floor(a/2.54)*1 + ' inci');
			} else if (unit1 == 'inci' && unit2 == 'cm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' inci = ' + Math.floor(a*2.54)*1 + ' cm');
			} else if (unit1 == 'm' && unit2 == 'km') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' m = ' + Math.floor(a/1000)*1 + ' km');
			} else if (unit1 == 'km' && unit2 == 'm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' km = ' + Math.floor(a*1000)*1 + ' m');
			} else if (unit1 == 'km' && unit2 == 'mil') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' km = ' + Math.floor(a/1.6)*1 + ' mil');
			} else if (unit1 == 'mil' && unit2 == 'km') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' mil = ' + Math.floor(a*1.6)*1 + ' km');
			}  else if (unit1 == 'm' && unit2 == 'yard') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' m = ' + Math.floor(a*1.094)*1 + ' yard');
			} else if (unit1 == 'yard' && unit2 == 'm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' yard = ' + Math.floor(a/1.094)*1 + ' m');
			} else if (unit1 == 'm' && unit2 == 'kaki') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' m = ' + Math.floor(a*3.281)*1 + ' kaki');
			} else if (unit1 == 'kaki' && unit2 == 'm') {
				var a = parseInt(prompt('Berapa ' + unit1 + '?'));
				
				alert(a + ' kaki = ' + Math.floor(a/3.281)*1 + ' m');
			} else {
				alert('Satuan Tidak Ada di Daftar, Mohon Coba yang Lainnya.');
			}
			
			ulang = confirm('Mau hitung lagi?');
		}
	
	alert('Terima Kasih!');
	break;
	case 2:
		while(ulang) {
			var unit1 = prompt('Select the Unit You Want to Convert \n(1) cm | (2) mm \n(3) m | (4) inch \n(5) km | (6) miles \n(7) yard | (8) feet'),
				unit2 = prompt('Convert ' + unit1 + ' to... \n(1) cm | (2) mm \n(3) m | (4) inch \n(5) km | (6) miles \n(7) yard | (8) feet');
			
			if (unit1 == 'cm' && unit2 == 'cm' || unit1 == 'mm' && unit2 == 'mm' || unit1 == 'm' && unit2 == 'm' || unit1 == 'inch' && unit2 == 'inch' || unit1 == 'km' && unit2 == 'km' || unit1 == 'miles' && unit2 == 'miles' || unit1 == 'yard' && unit2 == 'yard' || unit1 == 'feet' && unit2 == 'feet') {
				alert('Cannot convert the same unit!');
			} else if (unit1 == 'cm' && unit2 == 'm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' cm = ' + a/100 + ' m');
			} else if (unit1 == 'm' && unit2 == 'cm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' m = ' + a*100 + ' cm');
			} else if (unit1 == 'cm' && unit2 == 'mm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' cm = ' + a*10 + ' mm');
			} else if (unit1 == 'mm' && unit2 == 'cm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' mm = ' + a/10 + ' cm');
			} else if (unit1 == 'm' && unit2 == 'mm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' m = ' + a*1000 + ' mm');
			} else if (unit1 == 'mm' && unit2 == 'm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' mm = ' + a/1000 + ' m');
			} else if (unit1 == 'cm' && unit2 == 'inch') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' cm = ' + Math.floor(a/2.54)*1 + ' inch');
			} else if (unit1 == 'inch' && unit2 == 'cm') {
				var a = parseInt(prompt('How many ' + unit1 + 'es?'));
				
				alert(a + ' inch = ' + Math.floor(a*2.54)*1 + ' cm');
			} else if (unit1 == 'm' && unit2 == 'km') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' m = ' + Math.floor(a/1000)*1 + ' km');
			} else if (unit1 == 'km' && unit2 == 'm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' km = ' + Math.floor(a*1000)*1 + ' m');
			} else if (unit1 == 'km' && unit2 == 'miles') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' km = ' + Math.floor(a/1.6)*1 + ' mi');
			} else if (unit1 == 'miles' && unit2 == 'km') {
				var a = parseInt(prompt('How many ' + unit1 + '?'));
				
				alert(a + ' mi = ' + Math.floor(a*1.6)*1 + ' km');
			}  else if (unit1 == 'm' && unit2 == 'yard') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' m = ' + Math.floor(a*1.094)*1 + ' yard');
			} else if (unit1 == 'yard' && unit2 == 'm') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' yard = ' + Math.floor(a/1.094)*1 + ' m');
			} else if (unit1 == 'm' && unit2 == 'feet') {
				var a = parseInt(prompt('How many ' + unit1 + 's?'));
				
				alert(a + ' m = ' + Math.floor(a*3.281)*1 + ' ft');
			} else if (unit1 == 'feet' && unit2 == 'm') {
				var a = parseInt(prompt('How many ' + unit1 + '?'));
				
				alert(a + ' ft = ' + Math.floor(a/3.281)*1 + ' m');
			} else {
				alert("Unit(s) Aren't Available on the List, Please Try Something Else.");
			}
			
			ulang = confirm('Wanna do it again?');
		}
	
	alert('Thank You!');
	break;
	default:
		alert('Input Salah! / Wrong Input!');
	break;
}
