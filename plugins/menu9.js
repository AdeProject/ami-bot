let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	let gambar = fs.readFileSync('./ade.png')
	let nama = conn.getName(m.sender)
	
	conn.sendMessage(
    m.chat, 
    { 
        image: gambar,
        caption: `
    *Downloader*
 
 
${usedPrefix}fb <url> 
${usedPrefix}fb2 <url> 
${usedPrefix}gitclone <url> 
${usedPrefix}ig <url> 
${usedPrefix}igstory <username> 
${usedPrefix}joox <judul> 
${usedPrefix}lirplay 
${usedPrefix}lirplay2 
${usedPrefix}mediafire <url> 
${usedPrefix}play <search> 
${usedPrefix}play2 <search> 
${usedPrefix}tiktok <url> 
${usedPrefix}twitter <url> 
${usedPrefix}ytmp3 <url> [server: id4, en60, en61, en68] 
${usedPrefix}yta <url> [server: id4, en60, en61, en68] 
${usedPrefix}ytmp4 <url> [server: id4, en60, en61, en68] 
${usedPrefix}ytv <url> [server: id4, en60, en61, en68] 
${usedPrefix}yt <url> [server: id4, en60, en61, en68] 
${usedPrefix}zippyshare <url>
`
		
	}
	)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu9|m9)$/i

handler.exp = 3

module.exports = handler