let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
	*TEXT MENU*	
		
${usedPrefix}quotesanime  : Quotes ANime
>${usedPrefix}quotesanime

${usedPrefix}bucin : Random gombalan
>${usedPrefix}bucin

${usedPrefix}kata : idk
>${usedPrefix}kata <opsi> 

${usedPrefix}quotes : random quotes [ID]
>${usedPrefix}quotes`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu5|m5)$/i

handler.exp = 3

module.exports = handler