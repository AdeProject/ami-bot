let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
        *Tools*
 
 
${usedPrefix}calc <expression>
${usedPrefix}carigrup <pencarian>
${usedPrefix}del 
${usedPrefix}delete 
${usedPrefix}githubsearch <pencarian> 
${usedPrefix}kalkulator <soal> 
${usedPrefix}mycontact 
${usedPrefix}ocr
${usedPrefix}totext 
${usedPrefix}qr <teks> 
${usedPrefix}qrcode <teks> 
${usedPrefix}readmore <teks>|<teks> 
${usedPrefix}q 
${usedPrefix}spamcall <nomor> 
${usedPrefix}tinyurl <link> 
${usedPrefix}totalfitur (
${usedPrefix}tourl
${usedPrefix}tts <lang> <teks> 
${usedPrefix}upload (caption|reply media) 
${usedPrefix}yts <pencarian> 
${usedPrefix}ytsearch <pencarian> `
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu11|m11)$/i

handler.exp = 3

module.exports = handler