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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_14_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICA2NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpTaGVsMEJQTW9RMlB3ZGNXNGcydGU1bDhmRWViZTNCOGhlK0xkK0pTT0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4MTEzNTg3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODhGRjMyNTRGMzVCMUQyNjA2NzM0ODNFNTMxMDM0OTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzY1NjgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4MTEzNTg3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDZFQkIwRkVENTIyODUwRjg3ODY1NjE2MTM5QjQ4MDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzY1NjgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNPNXhaby04UmJhTlZxVWZIZmVGaEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzNmYjRkYWQtOTg5Yy00YjI4LTgwMTUtODlkODlmMmYwZDIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE1MixcbiAgICAgIDc3LFxuICAgICAgOTMsXG4gICAgICA0MCxcbiAgICAgIDIyMSxcbiAgICAgIDE5NyxcbiAgICAgIDg3LFxuICAgICAgOTgsXG4gICAgICAxMzIsXG4gICAgICA5LFxuICAgICAgMTM1LFxuICAgICAgMTk0LFxuICAgICAgNyxcbiAgICAgIDUyLFxuICAgICAgMTI1LFxuICAgICAgMTAxLFxuICAgICAgMjksXG4gICAgICAxMjgsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICA2OCxcbiAgICAgIDIwOCxcbiAgICAgIDczLFxuICAgICAgMjI1LFxuICAgICAgMTkyLFxuICAgICAgMTI2LFxuICAgICAgMjI5LFxuICAgICAgNjQsXG4gICAgICAxNjUsXG4gICAgICAxMDEsXG4gICAgICAyMDIsXG4gICAgICAxMzksXG4gICAgICAyNTQsXG4gICAgICAyMTUsXG4gICAgICA5NixcbiAgICAgIDc2LFxuICAgICAgNzgsXG4gICAgICAyNTMsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVpXOTg3UjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODExMzU4NzA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwOTEwNTI1NTU1OTI2NzoxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKZXJyeSBEQ1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vT2w2a0hFS2FlZ0xVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmIxLy9EMUJhNjVnTklkZ1hEYTF3UVpGTTFrSmRBNlFhSTB2dHdiTll5az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtUXh0SUFvSitBTWVJeEF6bzYvT0VQZzM1b0lkS08vemFONmhYRXI1eklVOHBocjlVZDEzbkNCY3R0d3JuQW1JVWtMOE5TNzl4Z1RBVVBnNUtnd2xDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnbWtKSk4zQmk2WDlEN0RUQldmeDlZejVoUHgrRmpWZVMyY3V2RWZmR24wWitDeEFiSEN5UHZKQkhBUkplVHdDTjhBK0d4M0xiSVROUldiRTV6cHRBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgxMTM1ODcwOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc2NTY3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlOYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU5iLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSkZCeGlOOFV1Y2ZyQVVDTTZ0STFQelJ1Zmpwa291cWNZSEVMOGdmZ1R6OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTY1NDE4MzE5LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE2NzY5OTcyNjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
