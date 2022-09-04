let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
		*KERANG AJIB*
		
${usedPrefix}apakah : afakah iya
>${usedPrefix}apakah <teks>? 

${usedPrefix}kapan : when
>${usedPrefix}kapan <text>? 

${usedPrefix}kapankah : whenkah
>${usedPrefix}kapankah <text>? 

${usedPrefix}siapa : who
>${usedPrefix}siapa <teks> 

${usedPrefix}siapakah : who kah
>${usedPrefix}siapakah <text>`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu6|m6)$/i

handler.exp = 3

module.exports = handler