const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Dennis²²¹-Alone" 


global.devs = "2347026496844" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026496844";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347026496844";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347026496844,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_20_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTksXG4gICAgICAgIDAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpaVDh2YklrYXRpQUtsVVoyZ3pJZkxUY0FlTFh0Rko4MUVMMXhteEk0WVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVkTGt4am1lUXEtaGttUU1YQUdyX0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjdkMzExNjctMmRjZi00M2JiLTk2ZWItOTdjNGNhNGE3NTdjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgNzIsXG4gICAgICAyMTMsXG4gICAgICA1OCxcbiAgICAgIDE2MyxcbiAgICAgIDIwMCxcbiAgICAgIDMzLFxuICAgICAgMTEyLFxuICAgICAgMTA1LFxuICAgICAgNjEsXG4gICAgICAxMTYsXG4gICAgICAxLFxuICAgICAgMjAxLFxuICAgICAgNTcsXG4gICAgICAyMDksXG4gICAgICAyLFxuICAgICAgMjIsXG4gICAgICA2LFxuICAgICAgNDAsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAyMjAsXG4gICAgICAyNTQsXG4gICAgICA1OSxcbiAgICAgIDE5OCxcbiAgICAgIDEzNCxcbiAgICAgIDI0MixcbiAgICAgIDI1NSxcbiAgICAgIDExMSxcbiAgICAgIDEyMSxcbiAgICAgIDE0NCxcbiAgICAgIDE2LFxuICAgICAgMjE0LFxuICAgICAgMTk0LFxuICAgICAgMTEwLFxuICAgICAgMzYsXG4gICAgICAyNDIsXG4gICAgICAxMzUsXG4gICAgICAxMzksXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOekduYm9DRVB1aXc3VUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVRY1Q5T2lnTWwvOG8weVFUc0RrVlpUenhHSy9scTBNWU1lNVpRSWIybms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0o1RjdwVkIyd3dIYUt3UHZBTXVxbFFYc1lyRjJyWWpyVkpSUk8vQXVyOFRDN3crVnlXcGZJWlI3Z1R0ekNWdlFzcCtlTktmTFFBelhRdlh0MVRrQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkpQVlRxZ05rbXcrSlZHR0F0MTdqM01QTy8zSXZncGZtWmNGYXFLMUtXZHNWZXVkbkhLWnYrSzRkTnhXc09WN0NqK2ZZYVBBVXl2M2t4cW5aWTlPQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2NDk2ODQ0OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE0NTAzNTk3MjczMzoxN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjY0OTY4NDQ6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODYzOTk5XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DENNIS²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DENNIS-BOT",
  ownername:process.env.OWNER_NAME|| "ALONE",


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
