let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
      *Islami*
 
 
${usedPrefix}alquran <114> <1>
${usedPrefix}asmaulhusna [nomor]
${usedPrefix}hadis
${usedPrefix}kisahnabi <name> 
${usedPrefix}jadwalsalat <kota> `
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu18|m18)$/i

handler.exp = 3

module.exports = handler