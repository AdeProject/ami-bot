let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
		*MAKER*
		
		
${usedPrefix}tahta <teks> (Ⓛ)
${usedPrefix}lolice
${usedPrefix}nulis <teks> (Ⓛ)
${usedPrefix}togif (reply)
${usedPrefix}toimg (reply) (Ⓛ)`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu21|m21)$/i

handler.exp = 3

module.exports = handler