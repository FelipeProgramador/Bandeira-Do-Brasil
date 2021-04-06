var tela = document.querySelector('canvas'); // variavel que pega a tag canvas do html
			var pincel = tela.getContext('2d'); // cria um variavel como pincel

			pincel.fillStyle = 'green'; // cor do pincel verde
			pincel.fillRect(0,0,600,400); // cordenadas para preencher de verde

			pincel.fillStyle = 'yellow'; // cor do pincel amarelo
		    pincel.beginPath(); // cordenadas para preencher de amarelo
		    pincel.moveTo(300, 50);
		    pincel.lineTo(50, 200);
		    pincel.lineTo(550, 200);
		    pincel.fill();

		    pincel.beginPath();
		    pincel.moveTo(300, 350);
		    pincel.lineTo(50, 200);
		    pincel.lineTo(550, 200);
		    pincel.fill();
			
			pincel.fillStyle = 'darkblue'; // cor do pincel azul escuro
		    pincel.beginPath(); // cordenadas para preencher de azul escuro
			pincel.arc(300, 200, 100, 0, 2*3.14);
			pincel.fill();
