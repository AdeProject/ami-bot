let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
     *Absen*
${usedPrefix}absen
${usedPrefix}cekabsen
${usedPrefix}hapusabsen
${usedPrefix}mulaiabsen [teks]`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu15|m15)$/i

handler.exp = 3

module.exports = handler