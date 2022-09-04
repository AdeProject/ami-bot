let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
		*DATABASE*
		
${usedPrefix}delcmd <teks>  
${usedPrefix}infocmd <text>
${usedPrefix}listcmd
${usedPrefix}unlockcmd
${usedPrefix}lockcmd
${usedPrefix}setcmd <teks> 

`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu13|m13)$/i

handler.exp = 3

module.exports = handler