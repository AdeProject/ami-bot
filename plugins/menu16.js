let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
	 *Catatan*
	 
	 
${usedPrefix}buatcatatan <title|isi>
${usedPrefix}hapuscatatan title
${usedPrefix}lihatcatatan <title>`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu16|m16)$/i

handler.exp = 3

module.exports = handler