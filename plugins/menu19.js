let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
        *Info*
${usedPrefix}allprofile [@user]
${usedPrefix}listbanned
${usedPrefix}infocovid <country>
${usedPrefix}owner
${usedPrefix}creator
${usedPrefix}infocuaca <city> 
${usedPrefix}database 
${usedPrefix}user 
${usedPrefix}donasi
${usedPrefix}infogempa 
${usedPrefix}listpremium 
${usedPrefix}profile [@user] 
${usedPrefix}report <fitur> 
${usedPrefix}ping
${usedPrefix}speed
${usedPrefix}speedtest`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu19|m19)$/i

handler.exp = 3

module.exports = handler