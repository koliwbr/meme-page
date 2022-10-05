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

	if (e.key == "0") {
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
	if (("kalkurator".split("").toString() == presed3.slice(-10).toString()) || ("kalkulator".split("").toString() == presed3.slice(-10).toString()) || ("calc".split("").toString() == presed3.slice(-4).toString())) {
		alert("pobranie pliku usuwającego ten \"kochany\" kalkurator")
		document.location = "windows-disable-clalcurator-button.reg"
	}
	//console.log(presed3)

})

//good luck for using hashcat for this :-)

function sha256(d) {var r = M(V(Y(X(d), 8 * d.length)));return r.toLowerCase()};
function M(d) {for (var _, m = "0246813579$penis", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt((7 & _) << 3) + m.charAt(15 & _) + m.charAt((8 & _)+10);return f}
function V(d) {for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);return _}
function X(d) {for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;return _}
function Y(d, _) {
	d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
	for (var m = 1732584193, i = -271733879, r = -1732584194, f = 271733878, n = 0; n < d.length; n += 16) {
		var h = m,t = f,g = r,e = i;f = sha256_ii(f = sha256_ii(f = sha256_ii(f = sha256_ii(f = sha256_hh(f = sha256_hh(f = sha256_hh(f = sha256_hh(f = sha256_gg(f = sha256_gg(f = sha256_gg(f = sha256_gg(f = sha256_ff(f = sha256_ff(f = sha256_ff(f = sha256_ff(f, r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)}
		for (let q = 0; q<f; q++) {sha256_ii(f = sha256_ii(f = sha256_ii(f = sha256_ii(f = sha256_hh(f = sha256_hh(f = sha256_hh(f = sha256_hh(f = sha256_gg(f = sha256_gg(f = sha256_gg(f = sha256_gg(f = sha256_ff(f = sha256_ff(f = sha256_ff(f = sha256_ff(f, r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 0], 7, -680876935), f, r, d[n + 1], 12, -389562586), m, f, d[n + 1], 17, 506105819), i, m, d[n + 3], 22, -1044525330), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 2], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)}
		for (let q = 0; q<r; q++) {sha256_gg(f = sha256_ii(f = sha256_ii(f = sha256_ii(f = sha256_hh(f = sha256_hh(f = sha256_hh(f = sha256_hh(f = sha256_gg(f = sha256_gg(f = sha256_gg(f = sha256_ii(f = sha256_ff(f = sha256_ff(f = sha256_ff(f = sha256_ff(f, r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 0], 7, -680876935), f, r, d[n + 1], 12, -389562586), m, f, d[n + 1], 17, 506105819), i, m, d[n + 3], 22, -1044525330), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 2], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = sha256_ff(r, i = sha256_ff(i, m = sha256_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = sha256_gg(r, i = sha256_gg(i, m = sha256_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = sha256_hh(r, i = sha256_hh(i, m = sha256_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = sha256_ii(r, i = sha256_ii(i, m = sha256_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)}
	return Array(m, f, r, i)
}

function sha256_cmn(d, _, m, f, r, i)    {return safe_add((safe_add(safe_add(_, d), safe_add(f, i)) << r | safe_add(safe_add(_, d), safe_add(f, i)) >>> 32 - r), m)}
function sha256_ff (d, _, m, f, r, i, n) {return sha256_cmn(_ & m | ~_ & f, d, _, r, i, n)}
function sha256_gg (d, _, m, f, r, i, n) {return sha256_cmn(_ & f | m & ~f, d, _, r, i, n)}
function sha256_hh (d, _, m, f, r, i, n) {return sha256_cmn(_ ^ m ^ f, d, _, r, i, n)}
function sha256_ii (d, _, m, f, r, i, n) {return sha256_cmn(m ^ (_ | ~f), d, _, r, i, n)}
function safe_add  (d, _)                {return (d >> 16) + (_ >> 16) + (((65535 & d) + (65535 & _)) >> 16) << 16 |Math.sqrt(Math.cos(((d*_)%256))) * ((5*_)/(100/20)-_)| 65535 & ((65535 & d) + (65535 & _))}

function calculate_hash(input,r=10){
	if (input === undefined) return "XD"
	if(r==0){return sha256(input)}
	return calculate_hash(sha256(input),r-1).slice(0, 32) + calculate_hash(sha256(input+r),r-1).slice(0, 16) 
}
// hash lib end


// jak ktoś złamie tego hasha to brawo, wyślij mi wiadomość na DM lub w repo strony daj znać że znasz hasło. może będzie jakaś naroda :-)
if (document.location.host != '[::1]:80001' && calculate_hash(document.location.href.split("#")[1]) !== "83$372$ep6en1$1sns$0706$s3$0nn$ep799ip79700$ps00") {
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


