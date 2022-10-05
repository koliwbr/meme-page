let presed = []

document.addEventListener("keydown",e => {
	let title = "Witamy na Koszernych Kotkach"
	for (var i = 0; i < 8; i++) title+="1!"[Math.random()>0.65?0:1]

	if(e.key=="!") document.getElementById('welcome-text').innerText = title

	const conamicode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
	if(!conamicode.includes(e.code)){
		presed = []
		return
	}
	presed.push(e.code)
	if(presed.length == 11) presed.shift()

	if(conamicode.toString()==presed.toString()){
		document.getElementById('fotakota').src="img/krasny-kot.png"
	}

})

document.addEventListener('keydown',e => {
	if(e.code=="LaunchApp2") {
		alert("pobranie pliku usuwającego ten \"kochany\" kalkurator")
		document.location = "windows-disable-clalcurator-button.reg"
	}
})

let presed3 = Array.from({ length: 13 },()=>{return ""})
document.addEventListener("keydown",e => {
	const code = "koszernekotki".split("")
	presed3.push(e.key)
	if(presed3.length == code.length+1) presed3.shift()

	if(code.toString()==presed3.toString()){
		document.title="Jeszcze bardziej koszerne kotki!!!"
	}
	if(("kalkurator".split("").toString()==presed3.slice(-10).toString()) || ("kalkulator".split("").toString()==presed3.slice(-10).toString())){
		alert("pobranie pliku usuwającego ten \"kochany\" kalkurator")
		document.location = "windows-disable-clalcurator-button.reg"
	}
	//console.log(presed3)

})

if(document.location.host!='[::1]:8000')
setInterval(()=>{
	const opierdol = "Super, brawo, znalazłeś Wielkanocne Jajko a teraz zamknij konsolę i szukaj bez podpowiedzi!"
	console.clear()
	console.log(opierdol)
	console.error(opierdol)
	eval("debugger\n//"+opierdol)
},300)


