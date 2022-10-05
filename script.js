const boo = () => {
	const el = document.getElementById('boo');
	if (!el) {
		document.body.classList.add("lepszyfont");
		const uwu = document.getElementById('uwu_znaczek')
		const znaczki = ["*", "❉", "⚹", "✺", "﹡", "⁕", "✷"]
		let mirror = 0
		uwu.setAttribute('href', "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
		setInterval(() => {
			uwu.innerText = znaczki[Math.floor(Math.random() * znaczki.length)];
			if (mirror > 0) {
				mirror--;
				document.body.classList.add("mirrorme");
			} else {
				document.body.classList.remove("mirrorme");
			}
			if (Math.random() > 0.99) {
				mirror += 20;
			}
		}, 40)
		return;
	}
	el.innerHTML = "znajdź <a id=\"uwu_znaczek\"href=\"javascript:boo()\" style=\"text-decoration: none; color:black; font-family: SF Gushing Meadow;\">*</a>"
	el.removeAttribute('id');
	el.removeAttribute('onclick')
}



let presed = []

document.addEventListener("keydown", e => {
	if (e.key == "!") {
		let title = ""
		for (var i = 0; i < 8; i++) title += "1!" [Math.random() > 0.65 ? 0 : 1]
		document.getElementById('title-wykrz').innerText = title
	}

	if(e.key == "0"){
		let zero_o = document.getElementById("welcome-o")
		zero_o.innerText = "0"
		zero_o.style = "font-family: Inconsolata;	"
	}


	const conamicode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
	if (!conamicode.includes(e.code)) {
		presed = []
		return
	}
	presed.push(e.code)
	if (presed.length == 11) presed.shift()

	if (conamicode.toString() == presed.toString()) {
		document.getElementById('fotakota').src = "img/krasny-kot.png"
	}

})

document.addEventListener('keydown', e => {
	if (e.code == "LaunchApp2") {
		alert("pobranie pliku usuwającego ten \"kochany\" kalkurator")
		document.location = "windows-disable-clalcurator-button.reg"
	}
})

let presed3 = Array.from({
	length: 13
}, () => {
	return ""
})
document.addEventListener("keydown", e => {
	const code = "koszernekotki".split("")
	presed3.push(e.key)
	if (presed3.length == code.length + 1) presed3.shift()

	if (code.toString() == presed3.toString()) {
		document.title = "Jeszcze bardziej koszerne kotki!!!"
	}
	if (("kalkurator".split("").toString() == presed3.slice(-10).toString()) || ("kalkulator".split("").toString() == presed3.slice(-10).toString())|| ("calc".split("").toString() == presed3.slice(-4).toString())) {
		alert("pobranie pliku usuwającego ten \"kochany\" kalkurator")
		document.location = "windows-disable-clalcurator-button.reg"
	}
	//console.log(presed3)

})


if (document.location.host != '[::1]:8000') {
	setInterval(() => {
		const opierdol = "Super, brawo, znalazłeś Wielkanocne Jajko a teraz zamknij konsolę i szukaj bez podpowiedzi!";
		console.clear();
		console.log(opierdol);
		console.error(opierdol);
		eval("debugger\n//" + opierdol)
	}, 300)
	document.addEventListener("contextmenu", e => {
		e.preventDefault();
		return false;
	})
	document.addEventListener("keydown", e => {
		if (e.ctrlKey && e.shiftKey && (e.key == "I" || e.key == "J")) {
			e.preventDefault();
			return false;
		}
		if (e.ctrlKey && (e.key == "s" || e.key == "u")) {
			e.preventDefault();
			return false;
		}
		if (e.key == "F12") {
			e.preventDefault();
			return false;
		}
	});

}


const pokazczas = () => {
	document.getElementById("header-clock").innerHTML = "<iframe src=\"https://rscom.pl/zegarbinarny/clock3.php\" frameBorder=\"0\"></iframe>"
}