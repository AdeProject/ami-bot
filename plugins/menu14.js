let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
       *Voting*
 
 
${usedPrefix}cekvote
${usedPrefix}hapusvote
${usedPrefix}mulaivote [alasan] 
${usedPrefix}upvote
${usedPrefix}devote`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu14|m14)$/i

handler.exp = 3

module.exports = handler