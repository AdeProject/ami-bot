let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
    *Berita*
 
 
${usedPrefix}cnnnews 
${usedPrefix}kompasnews 
${usedPrefix}liputan6 
${usedPrefix}metronews 
${usedPrefix}tribunnews 
`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu10|m10)$/i

handler.exp = 3

module.exports = handler