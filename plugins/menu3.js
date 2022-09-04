let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
*STICKER MENU*


${usedPrefix}attp : MAke text sticker with color
>${usedPrefix}attp <teks> 

${usedPrefix}emojimix : sticker emoji mixed with emoji what you choose
>${usedPrefix}emojimix emoji 1+emoji 2 

${usedPrefix}getexif : idk
${usedPrefix}getexif
 
${usedPrefix}semoji : create emoji sticker
>${usedPrefix}semoji <option> <emoji>
 
${usedPrefix}smeme : create sticker with text
>${usedPrefix}smeme text1 | text2 
 
${usedPrefix}stickercry : random crying sticker
>${usedPrefix}stickercry

${usedPrefix}stickerhug : random hug sticker
>${usedPrefix}stickerhug

${usedPrefix}stickerkiss : random kissing sticker
>${usedPrefix}stickerkiss

${usedPrefix}stiker : create sticker using you photo
>${usedPrefix}sticker (caption|reply media) 

${usedPrefix}stiker : create sticker using picture url
>${usedPrefix}stiker <url> 

${usedPrefix}stikergif : create sticker gif using your video/gif what you want
>${usedPrefix}stickergif (caption|reply media) 
	
${usedPrefix}stikergif : create sticker gif using gif/video url
>${usedPrefix}stikergif <url>
 
${usedPrefix}stikertelegram : create sticker using telegram url
>${usedPrefix}stikertelegram <url> 

${usedPrefix}triggered : create triggered sticker
>${usedPrefix}triggered

${usedPrefix}ttp : create text sticker no color
>${usedPrefix}ttp <teks>

${usedPrefix}wanted : create wanted sticker
>${usedPrefix}wanted

${usedPrefix}wm : change watermack or packname/author name stikcer
>${usedPrefix}wm <packname>|<author>`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu3|m3)$/i

handler.exp = 3

module.exports = handler