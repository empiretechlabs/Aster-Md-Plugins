//  global.api_smd = "https://api-smd-1-8fa7ac87f6b1.herokuapp.com" || "https://api-smd.onrender.com" // || "https://api-smd-1.vercel.app" EXPIRED VERCEL                           
/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．3．5                                                   // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.3.5 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2024 Suhail-Md ✭ ⛥.
   * plugin date : 07/may/2024
***/

global.pinging = class _Ping {
   constructor() { this._before = new Date().getTime(); this._after = new Date().getTime(); }
   before(){ this._before = new Date().getTime(); }
   start(){ this._before = new Date().getTime(); }
   after(){ this._after = new Date().getTime(); }
   end(){ this._after = new Date().getTime(); }
   ping() { return this._after - this._before; }
}

process.env.name = "smd"
process.env.BUTTONS = "true"
global.BUTTONS = "true"

const { 
   smd, 
   botpic,
   send,
   Config, 
   tlang, 
   sleep,
   smdBuffer,
   prefix,
   bot_
} = require('../lib')
const axios = require('axios')
let EmpireTechInfo = "Owner";
global.Package_ = {}
let counter_name = {name: "empire-md-1.0.0"}
try { global.Package_ = require(__dirname+ '/../package.json') || counter_name } catch { global.Package_ = counter_name }

smd({  
   pattern: "ssave",
   alias: ["ssaver","#"],         
   desc: "Save whatsapp status",
   category: "whatsapp",         
   filename: __filename,
   use: "< status >",
}, async(message) => {
   try {
      let mm = message.reply_message && message.reply_message.status ? message.reply_message : false;
      if(mm) { 
         message.bot.forwardOrBroadCast(message.user, mm, { quoted: {key: mm.key, message: mm.message} }) 
      } else {
         message.send("*reply to whatsapp status*")
      }
   } catch(e) {
      await message.error(`${e}\n\ncommand : #(Status Saver)`, e, false)
   }
})

//========================= [ SMD USERS ] =========================\\

smd(
   {
      cmdname: "smd",         
      desc: "total Users Currently using suhail MD",
   },
   async(message, text, { smd }) => {
      try {
         let check = new pinging() 
         let { data } = await axios.get(`${api_smd}/bot/getUser?id=${global.Package_.name}`)
         check.after()
         
         if(data && data.success) {
            let str = `*Currently "${data.total || data.length || "-INFINITY-"}" Users have installed Empire MD!*`.trim()
            let fullCaption = `${str}\n*Id:* ${global.Package_.name}_bot \n*Status:* ${data.status || "Success"}! \n*Ping*: ${check.ping()}'ms \n*Requester:* ${message.senderName} \n`

            if(/1|buttons|btn|true/gi.test(global.BUTTONS) && message.device !== "web") {
               await sendButtons(message, { 
                  caption: fullCaption, 
                  footer: global.caption,
                  buttons: `
                  #button:quick_reply | display_text : SMD 🫂 | id:${prefix + smd} /#
                  #button:cta_url | display_text : Channel 📢 | id:${gurl} /#
                  #button:quick_reply | display_text : Ping 🏓 | id:${prefix}ping /#
                  `
               })
            } else {
               await message.reply(fullCaption)
            }
         } else {
            message.reply(`*No Data Found!*`)
         }
      } catch (e) {
         console.error("Error:", e);
         message.reply(`*ERROR!*`)
      }
})

let checkUser = false;
smd(
   { on: "text" },
   async(message, text, { icmd }) => {
      try {
         if(!checkUser) {
            try {
               let { data } = await axios.get(`${api_smd}/bot/addUser?id=HRKU_${global.Package_.name}&number=${message.user.split("@")[0]}`)
               checkUser = true
            } catch (e) { /*console.log(e)*/ }
         }
         if(message.isEmpire && !message.fromMe && !message.text.startsWith("$")) message.react("👑")
      } catch(e) {
         console.log(e)
      }
})

global.YT_PROMOTE = "https://youtube.com/shorts/xupJQLsUpyU !" || "https://youtube.com/only_one_empire"

global.config_dir = require("path").join(__dirname, '../', './config')

global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VbBpPLa4yltGWSKWlC1L";

try {
   return

   global.auto_send_status = process.env.AUTO_SEND_STATUS || 'true';

   const regexSend = new RegExp(`\\b(?:${["send", "share", "snd", "give", "save", "sendme", "forward", "fwd"].join('|')})\\b`, 'i');
   
   smd(
      { on: "quoted" },
      async(message, text) => {
         try {
            let mm = message.reply_message.status ? message.reply_message : false;
            if(mm && regexSend.test(text.toLowerCase())) {
               if(global.auto_send_status == "true") message.bot.forwardOrBroadCast(message.fromMe ? message.user : message.from, mm, { quoted: {key: mm.key, message: mm.message} })
            }
         } catch(e) {
            console.log(e)
         }
   })

   let status = false, times = 0;
   smd(
      { on: "main" },
      async(message, text, { icmd }) => {
         try {
            if(!status) {
               try {
                  status = true
               } catch (e) { /*console.log(e)*/ }
            }
            
            if(message.status) return
            if(`${global.readmessagefrom}`.includes(message.senderNum) || ["yes","true","ok","sure"].includes(global.readmessage) || (icmd && ["yes","true","ok","sure"].includes(global.readcmds))) message.bot.readMessages([message.key]) 
         } catch(e) {
            console.log(e)
         }
   })

   smd(
      { on: "text" },
      async(message, text, { icmd }) => {
         try {
            if(['unavailable', 'available', 'composing', 'recording', 'paused'].includes(waPresence)) message.bot.sendPresenceUpdate(waPresence, message.from) 
         } catch(e) {
            console.log(e)
         }
   })

   smd(
      { on: "status" },
      async(message, text) => {
         try {
            if(`${global.read_status_from}`.split(",").includes(message.key.participant.split("@")[0]) || ["yes","true","ok","sure"].includes(global.read_status) || message.fromMe || message.isEmpire) { 
               await message.bot.readMessages([{...message.key, fromMe: false}]) 
            }
            if((`${global.save_status_from}`.split(",").includes(message.key.participant.split("@")[0]) || ["yes","true","ok","sure"].includes(global.save_status)) && !message.fromMe) {
               await message.bot.forwardOrBroadCast(message.user, message, { quoted: {key: message.key, message: message.message} })
            }
         } catch(e) {
            console.log(e)
         }
   })

} catch(e) {}
