const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
let fs = require('fs')

let handler = async (m, { conn, text, usedPrefix }) => {
let fs = require('fs')
  let nama = conn.getName(m.sender)
 // let [teks, teks2] = text.split('|')
 let teks = 'SAMA SAMA'
 let teks2 = `${nama}`
 // let q = 'https://telegra.ph/file/06a27a93b66f63a5a067e.jpg'// m.quoted ? m.quoted : m
//  let mime = (q.msg || q).mimetype || ''
  //if (!mime) throw 'Tidak ada foto'
 // if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = fs.readFileSync('./sama2.jpg') 
  let url = await uploadImage(img)
  let wasted = `https://api.memegen.link/images/custom/${teks}/${teks2}.png?background=${url}`
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let stiker = await sticker(null, wasted, `Made with 💖 by`, `${nama}`)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
 
}
handler.customPrefix = /(makasih)/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
