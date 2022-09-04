let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	/*conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
     *FUN MENU*


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
${usedPrefix}truth`
		
	}
	)*/
	
	m.reply(m.chat, `
	*FUN MENU*


${usedPrefix}alay : text alay
>${usedPrefix}alay <text>

${usedPrefix}artinama : arti of your name
>${usedPrefix}artinama : [name]

${usedPrefix}dare : truth or dare
>${usedPrefix}dare

${usedPrefix}halah : halah
>${usedPrefix}halah <teks>

${usedPrefix}hilih 
>${usedPrefix}hilih <teks>

${usedPrefix}huluh 
>${usedPrefix}huluh <text>

${usedPrefix}heleh
>${usedPrefix}heleh <text)

${usedPrefix}holoh 
>${usedPrefix}holoh <text>

${usedPrefix}jadian : love
>${usedPrefix}jadian

${usedPrefix}namaninja : ninja name
>${usedPrefix}namaninja <teks>

${usedPrefix}rate : rate 
>${usedPrefix}rate <text>

${usedPrefix}reaction : send Reaction 
>${usedPrefix}reaction <reply>

${usedPrefix}truth : truth or dare
>${usedPrefix}truth `)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu4|m4)$/i

handler.exp = 3

module.exports = handler