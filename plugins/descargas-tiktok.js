import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}πΏππ½π πππππππΌπ ππ ππππΌπΎπ πΏπ ππππππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`
//if (command == 'tiktokaudio') {
//conn.reply(m.chat, `${eg}PRONTO TENDRA EL VIDEO DE TIKTOK π°*`, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: 'The Lolibot-MF',
//body: 'Super Bot WhatsApp',         
//previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `https://github.com/GataNina-Li/GataBot-MD`}}})
           
//let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
//let json = await res.json()
//conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'mp3/mp4' })}

conn.reply(m.chat, `${eg}*ESPERE UNOS SEGUNDOS EL QUE MANDO SUS πππΏππ πΏπ ππππππ π°*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'The Lolibot-MD',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
await conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${wm}`, m)

let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*
  `.trim()
  let vn = './media/descarga.mp3'
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)   
conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
           
}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
handler.limit = 2
handler.exp = 60
export default handler
