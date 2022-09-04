let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `		
      *Anonymous Chat*
 
 
${usedPrefix}start,skip,stop,next
${usedPrefix}sendkontak`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu8|m8)$/i

handler.exp = 3

module.exports = handler