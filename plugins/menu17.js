let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
     *Jadian*
${usedPrefix}cekpacar 
${usedPrefix}ikhlasin 
${usedPrefix}putus 
${usedPrefix}tembak @tag 
${usedPrefix}terima @tag 
${usedPrefix}tolak @tag 
`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu17|m17)$/i

handler.exp = 3

module.exports = handler