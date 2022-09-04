let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
	  *INTERNET*	

${usedPrefix}anime : anime search
>${usedPrefix}anime <title> 

${usedPrefix}brainly : to get answer about home work from shcool
>${usedPrefix}brainly <question> 

${usedPrefix}cecan : random girl pict
>${usedPrefix}cecan

${usedPrefix}cerpen : short story
>${usedPrefix}cerpen

${usedPrefix}cogan : random boy pict
>${usedPrefix}cogan

${usedPrefix}drakor : drama korea
>${usedPrefix}drakor [tittle] 

${usedPrefix}get : inspect website
>${usedPrefix}get <url>

${usedPrefix}gimage : Search any image on google
>${usedPrefix}gimage <query> 

${usedPrefix}githubstalk : github stalking
>${usedPrefix}githubstalk <profile>

${usedPrefix}google : searching on google
>${usedPrefix}google <search> 

${usedPrefix}igstalk : isntagram stalking
>${usedPrefix}igstlak <username> 

${usedPrefix}kbbi : kamus besar bahasa indonesia
>${usedPrefix}kbbi <kata> 

${usedPrefix}loli : random loli pict
>${usedPrefix}loli

${usedPrefix}lirik : search lyrich of any song
>${usedPrefix}lirik <title> 

${usedPrefix}peta : maps
>${usedPrefix}peta <wilayah>

${usedPrefix}neko : random cat anime pict
>${usedPrefix}neko

${usedPrefix}pinterest : search image on pinterest
>${usedPrefix}pin <query> 

${usedPrefix}playstore : download apk from playstore
>${usedPrefix}playstore <apk name>

${usedPrefix}ppcouple : couple pict
>${usedPrefix}ppcp

${usedPrefix}puisi : idk
>${usedPrefix}puisi

${usedPrefix}ss : screenshot any website
>${usedPrefix}ss <url> 

${usedPrefix}ssf : screenshot any website full
>${usedPrefix}ssf <url> 

${usedPrefix}translate : translate via google api
>${usedPrefix}tr <lang> <teks> 

${usedPrefix}waifu : random anime wife  pict
>${usedPrefix}waifu

${usedPrefix}wikipedia : searching on wikipedoa
>${usedPrefix}wiki <text> `
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu7|m7)$/i

handler.exp = 3

module.exports = handler