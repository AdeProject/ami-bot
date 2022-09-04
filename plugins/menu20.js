let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
		*AUDIO*
		
		
${usedPrefix}tomp3
${usedPrefix}tovn
${usedPrefix}bass [vn] (Ⓛ)
${usedPrefix}blown [vn] (Ⓛ)
${usedPrefix}deep [vn] (Ⓛ)
${usedPrefix}earrape [vn] (Ⓛ)
${usedPrefix}fast [vn] (Ⓛ)
${usedPrefix}fat [vn] (Ⓛ)
${usedPrefix}nightcore [vn] (Ⓛ)
${usedPrefix}reverse [vn] (Ⓛ)
${usedPrefix}robot [vn] (Ⓛ)
${usedPrefix}slow [vn] (Ⓛ)
${usedPrefix}smooth [vn] (Ⓛ)
${usedPrefix}tupai [vn] (Ⓛ)
${usedPrefix}vibra [vn] (Ⓛ)`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu20|m20)$/i

handler.exp = 3

module.exports = handler