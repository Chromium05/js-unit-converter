var unit = parseInt(prompt('Pilih Unit \n1. Panjang \n2. Massa')),
	ulang = true;
	
switch(unit) {
	case 1: //panjang
		while(ulang) {
			var satuan1 = parseInt(prompt('Pilih Satuan yang Ingin Dikonversi/Diubah \n1. cm | 2. mm \n3. m | 4. inci \n5. km | 6. mil \n7. yard | 8. kaki')),
				satuan2 = parseInt(prompt('Ubah satuan tadi ke... \n1. cm | 2. mm \n3. m | 4. inci \n5. km | 6. mil \n7. yard | 8. kaki'));
			
			if (satuan1 == 1 && satuan2 == 1 || satuan1 == 2 && satuan2 == 2 || satuan1 == 3 && satuan2 == 3 || satuan1 == 4 && satuan2 == 4 || satuan1 == 5 && satuan2 == 5 || satuan1 == 6 && satuan2 == 6 || satuan1 == 7 && satuan2 == 7 || satuan1 == 8 && satuan2 == 8) {
				alert('Satuannya tidak boleh sama!');
			} else if (satuan1 == 1 && satuan2 == 3) {
				var a = parseInt(prompt('Berapa cm?'));
				
				alert(a + ' cm = ' + a/100 + ' m');
			} else if (satuan1 == 3 && satuan2 == 1) {
				var a = parseInt(prompt('Berapa m?'));
				
				alert(a + ' m = ' + a*100 + ' cm');
			} else if (satuan1 == 1 && satuan2 == 2) {
				var a = parseInt(prompt('Berapa cm?'));
				
				alert(a + ' cm = ' + a*10 + ' mm');
			} else if (satuan1 == 2 && satuan2 == 1) {
				var a = parseInt(prompt('Berapa mm?'));
				
				alert(a + ' mm = ' + a/10 + ' cm');
			} else if (satuan1 == 3 && satuan2 == 2) {
				var a = parseInt(prompt('Berapa m?'));
				
				alert(a + ' m = ' + a*1000 + ' mm');
			} else if (satuan1 == 2 && satuan2 == 3) {
				var a = parseInt(prompt('Berapa mm?'));
				
				alert(a + ' mm = ' + a/1000 + ' m');
			} else if (satuan1 == 1 && satuan2 == 4) {
				var a = parseInt(prompt('Berapa cm?'));
				
				alert(a + ' cm = ' + Math.floor(a/2.54)*1 + ' inci');
			} else if (satuan1 == 4 && satuan2 == 1) {
				var a = parseInt(prompt('Berapa inci?'));
				
				alert(a + ' inci = ' + Math.floor(a*2.54)*1 + ' cm');
			} else if (satuan1 == 3 && satuan2 == 5) {
				var a = parseInt(prompt('Berapa m?'));
				
				alert(a + ' m = ' + Math.floor(a/1000)*1 + ' km');
			} else if (satuan1 == 5 && satuan2 == 3) {
				var a = parseInt(prompt('Berapa km?'));
				
				alert(a + ' km = ' + Math.floor(a*1000)*1 + ' m');
			} else if (satuan1 == 5 && satuan2 == 6) {
				var a = parseInt(prompt('Berapa km?'));
				
				alert(a + ' km = ' + Math.floor(a/1.6)*1 + ' mil');
			} else if (satuan1 == 6 && satuan2 == 5) {
				var a = parseInt(prompt('Berapa mil?'));
				
				alert(a + ' mil = ' + Math.floor(a*1.6)*1 + ' km');
			}  else if (satuan1 == 3 && satuan2 == 7) {
				var a = parseInt(prompt('Berapa m?'));
				
				alert(a + ' m = ' + Math.floor(a*1.094)*1 + ' yard');
			} else if (satuan1 == 7 && satuan2 == 3) {
				var a = parseInt(prompt('Berapa yard?'));
				
				alert(a + ' yard = ' + Math.floor(a/1.094)*1 + ' m');
			} else if (satuan1 == 3 && satuan2 == 8) {
				var a = parseInt(prompt('Berapa m?'));
				
				alert(a + ' m = ' + Math.floor(a*3.281)*1 + ' kaki');
			} else if (satuan1 == 8 && satuan2 == 3) {
				var a = parseInt(prompt('Berapa kaki?'));
				
				alert(a + ' kaki = ' + Math.floor(a/3.281)*1 + ' m');
			} else {
				alert('Satuan Tidak Ada di Daftar, Mohon Coba yang Lainnya.');
			}
			
			ulang = confirm('Mau hitung lagi?');
		}
	
	alert('Terima Kasih!');
	break;
	case 2: //massa
		while(ulang) {
			var satuan1 = parseInt(prompt('Pilih Satuan yang Ingin Dikonversi/Diubah \n1. kg | 2. gram \n3. mg | 4. pon \n5. ons')),
				satuan2 = parseInt(prompt('Ubah satuan tadi ke... \n1. kg | 2. gram \n3. mg | 4. pon \n5. ons'));
			
			if (satuan1 == 1 && satuan2 == 1 || satuan1 == 2 && satuan2 == 2 || satuan1 == 3 && satuan2 == 3 || satuan1 == 4 && satuan2 == 4) {
				alert('Satuannya tidak boleh sama!');
			} else if (satuan1 == 1 && satuan2 == 4) {
				var a = parseInt(prompt('Berapa kg?'));
				
				alert(a + ' kg = ' + Math.floor(a*2.205)*1 + ' pon');
			} else if (satuan1 == 4 && satuan2 == 1) {
				var a = parseInt(prompt('Berapa pon?'));
				
				alert(a + ' pon = ' + Math.floor(a/2.205)*1 + ' kg');
			} else if (satuan1 == 2 && satuan2 == 5) {
				var a = parseInt(prompt('Berapa gram?'));
				
				alert(a + ' gram = ' + Math.floor(a/28.35)*1 + ' ons');
			} else if (satuan1 == 5 && satuan2 == 2) {
				var a = parseInt(prompt('Berapa ons?'));
				
				alert(a + ' ons = ' + Math.floor(a*28.35)*1 + ' gram');
			} else if (satuan1 == 1 && satuan2 == 4) {
				var a = parseInt(prompt('Berapa kg?'));
				
				alert(a + ' kg = ' + Math.floor(a*2.205)*1 + ' pon');
			} else if (satuan1 == 1 && satuan2 == 2) {
				var a = parseInt(prompt('Berapa kg?'));
				
				alert(a + ' kg = ' + Math.floor(a*1000)*1 + ' gram');
			} else if (satuan1 == 2 && satuan2 == 1) {
				var a = parseInt(prompt('Berapa gram?'));
				
				alert(a + ' gram = ' + Math.floor(a/1000)*1 + ' kg');
			} else if (satuan1 == 2 && satuan2 == 3) {
				var a = parseInt(prompt('Berapa gram?'));
				
				alert(a + ' gram = ' + Math.floor(a*1000)*1 + ' mg');
			} else if (satuan1 == 3 && satuan2 == 2) {
				var a = parseInt(prompt('Berapa mg?'));
				
				alert(a + ' mg = ' + Math.floor(a/1000)*1 + ' gram');
			} else {
				alert('Satuan Tidak Ada di Daftar, Mohon Coba yang Lainnya.');
			}
			
			ulang = confirm('Mau hitung lagi?');
		}
		
	alert('Terima Kasih!');
	break;
	default:
		alert('Input salah, mohon coba lagi.');
	break;
}
