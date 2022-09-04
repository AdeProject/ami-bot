let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
        *FUN*


${usedPrefix}alay 
${usedPrefix}artinama [name] 
${usedPrefix}alay 
${usedPrefix}dare 
${usedPrefix}halah <teks> 
${usedPrefix}hilih <teks> 
${usedPrefix}huluh <teks> 
${usedPrefix}heleh <teks>
${usedPrefix}holoh <teks> 
${usedPrefix}jadian 
${usedPrefix}namaninja <teks> 
${usedPrefix}rate 
${usedPrefix}reaction <reply> 
${usedPrefix}truth 
`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu12|m12)$/i

handler.exp = 3

module.exports = handler