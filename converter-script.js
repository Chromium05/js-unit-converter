var lang = parseInt(prompt('Pilih Bahasa/Select Language \nIndonesia (1) \nEnglish (2)')),
	ulang = true;
	
function convert(a) {
	return a / 100;
}
	
switch(lang) {
	case 1:
		while(ulang) {
			var cm = parseInt(prompt('Masukkan Unit cm')),
				m = convert(cm);
				
			alert(cm + ' cm = ' + m + ' m');
			alert('Terima Kasih!');
			
			ulang = confirm('Mau hitung lagi?');
		}
	break;
	case 2:
		while(ulang) {
			var cm = parseInt(prompt('Enter cm Unit')),
				m = convert(cm);
				
			alert(cm + ' cm = ' + m + ' m');
			alert('Thank You!');
			
			ulang = confirm('Wanna do it again?');
		}
	break;
	default:
		alert('Input Salah! / Wrong Input!');
	break;
}