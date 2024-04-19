const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "2347026496844"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="aliuyusuf641@gmail@gmail.com"
global.location="Nigeria,Abuja."


global.mongodb= process.env.MONGODB_URI || "https://youtu.be/zQb1CW8t28E?si=MU7NcZHr2CMTzGsQ"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Abuja";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2347026496844" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2347026496844";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026496844";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,2347026496844";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_32_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICA1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUxLFxuICAgICAgICA5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJDZm1SZjZtbDhMdFdoenE2OUYraStlQ2NQS3lLWVd6QmhHMmJ5bEltSGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlcwdzN4UTg0U2pPSFZ3UW1QR2VOM0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmI0YjMxYzMtMjNiYi00Y2M1LThlM2YtZjI4MWFhODdlY2Q3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTUxLFxuICAgICAgMTYxLFxuICAgICAgMjU0LFxuICAgICAgMTkxLFxuICAgICAgMTYsXG4gICAgICAyNDcsXG4gICAgICAyNixcbiAgICAgIDE4MyxcbiAgICAgIDExOSxcbiAgICAgIDY5LFxuICAgICAgMTAwLFxuICAgICAgNTQsXG4gICAgICAxMzUsXG4gICAgICA2MyxcbiAgICAgIDc3LFxuICAgICAgMTU5LFxuICAgICAgMTU3LFxuICAgICAgMjIyLFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxNjgsXG4gICAgICAxMjcsXG4gICAgICAyMTMsXG4gICAgICA1OCxcbiAgICAgIDMyLFxuICAgICAgMjM3LFxuICAgICAgMTc1LFxuICAgICAgMTMxLFxuICAgICAgMTYzLFxuICAgICAgMTYyLFxuICAgICAgMjksXG4gICAgICAxMTYsXG4gICAgICA2MCxcbiAgICAgIDE0MixcbiAgICAgIDY0LFxuICAgICAgMTk3LFxuICAgICAgMTExLFxuICAgICAgNzIsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOekduYm9DRVAva2liRUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVRY1Q5T2lnTWwvOG8weVFUc0RrVlpUenhHSy9scTBNWU1lNVpRSWIybms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQjJHdmNtTjgzbUdwRHR5QnZBTFFQanhPWmdCay80YmhiVi9JelNISzFJVmtjbXJOTXVXcjI1cVdFcy92SEZwOWUzNDlZKytYOUpVSkVvUzVYUzk2Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMllCMjRjdWtXVWNaWmRrTFdWNDJBTy9BRCs2VERRYjQzOHdIeTVsdFZYVXE0YVVMT1FzSkxPa0tJMjc1U21ORnU5c3BIL0ZBUkF2ZXo0NUg3QStLaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2NDk2ODQ0OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE0NTAzNTk3MjczMzoxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBWzDPgMKj4p2k77iP8J+MhPCfjq5cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjY0OTY4NDQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzEzNTMzNTcxXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Alone²²¹-ᴍBotᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ALON£ BOT",
  packname: process.env.PACK_NAME || "📺",
  botname : process.env.BOT_NAME  || "ALON£-BOT",
  ownername:process.env.OWNER_NAME|| "ALONE(•_•)",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
