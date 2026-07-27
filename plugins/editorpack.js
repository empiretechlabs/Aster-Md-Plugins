/**
 * @project_name : Empire-Md
 * @author : Empire Tech Labs
 * @youtube : https://www.youtube.com/@only_one_empire
 * @description : Empire-Md, A Multi-functional whatsapp user bot.
 * @version 1.2.8
 * Created By Empire Tech Labs.
 * © 2026 Empire-Md.
 */

const fs = require("fs");
const {
  smd,
  prefix,
  Config,
  createUrl,
  photoEditor,
  smdBuffer
} = require("../lib");

// Supported message types for photo editing
let photoTypes = ["imageMessage"];

// Older GFX effects that use photoEditor
let oldEffects = ["ad", "uncover", "clown", "mnm", "pet", "drip", "gun", "colorify"];

// All available GFX effects
let gfxEffects = ['beautiful', 'blur', 'facepalm', 'invert', 'rainbow', 'wanted', 'wasted', 
                  'greyscale', 'sepia', 'rip', 'trash', 'hitler', "jail", "shit", "affect", 
                  ...oldEffects];

// Helper function to send photo editor effects
const sendEditor = async (message, effectName, showError = true, caption = Config.caption?.split("\n")[0] || "") => {
  if (!gfxEffects.includes(effectName)) {
    return;
  }
  
  try {
    let imageMessage = message.image ? message : 
                       message.reply_message && message.reply_message.image ? message.reply_message : false;
    
    if (!imageMessage || !photoTypes.includes(imageMessage.mtype2)) {
      return message.reply(`*_Uhh Dear, Reply To An Image!_*`);
    }
    
    let mediaPath = await message.bot.downloadAndSaveMediaMessage(imageMessage);
    var imageUrl = "";
    
    try {
      imageUrl = (await createUrl(mediaPath, "uguMashi")).url;
      if (!imageUrl) {
        throw new Error("invalid Media!");
      }
    } catch (error) {
      console.log(error);
      try {
        imageUrl = await createUrl(mediaPath);
      } catch (error) {
        imageUrl = false;
      }
    }
    
    try {
      fs.unlink(mediaPath);
    } catch (error) {}
    
    if (!imageUrl) {
      return message.reply("*_Failed To Create Url!_*");
    }
    
    let editedImageBuffer = await smdBuffer(`${global.api_smd}/api/maker/${effectName}?url=${imageUrl}`);
    message.send(editedImageBuffer, { caption: caption }, "img", imageMessage);
  } catch (error) {
    if (showError) {
      console.log(error);
      await message.error(`${error}\n\ncommand ${effectName}`, error, false);
    }
  }
};

// ==================== REGISTER ALL GFX EFFECT COMMANDS ====================
for (let i = 0; i < gfxEffects.length; i++) {
  smd({
    cmdname: gfxEffects[i],
    infocmd: `Edit image with ${gfxEffects[i]} effect!`,
    type: "editor",
    use: "< image >",
    filename: __filename
  }, async (message, text, { smd: effectName }) => {
    try {
      if (oldEffects.includes(effectName)) {
        await photoEditor(message, effectName);
      } else {
        sendEditor(message, effectName);
      }
    } catch (error) {
      await message.error(`${error}\n\ncommand: ${effectName}`, error, "Request Denied!");
    }
  });
}

// ==================== EDITOR COMMAND (All Effects Menu) ====================
smd({
  cmdname: "editor",
  infocmd: "create gfx logo for text",
  type: "editor",
  use: "< image >",
  filename: __filename
}, async (message, text, { smd: commandName }) => {
  try {
    let imageMessage = message.image ? message : 
                       message.reply_message && message.reply_message.image ? message.reply_message : false;
    
    // If no image provided, show the editor menu
    if (!imageMessage) {
      return await message.sendUi(message.chat, {
        caption: `┌───〈 *ᴇᴅɪᴛᴏʀ ᴍᴇɴᴜ*  〉───◆
│╭─────────────···▸
┴│▸
⬡│▸ ${gfxEffects.join(" \n⬡│▸ ")}
┬│▸
│╰────────────···▸▸
└───────────────···▸

\t *USE: _${prefix + commandName}_ by replying image*
_To get All Results with single Cmd!_
`
      });
    }
    
    // Apply all effects to the replied image
    for (let i = 0; i < gfxEffects.length; i++) {
      try {
        if (oldEffects.includes(gfxEffects[i])) {
          await photoEditor(message, gfxEffects[i]);
        } else {
          sendEditor(message, gfxEffects[i], false);
        }
      } catch (error) {}
    }
  } catch (error) {
    message.error(`${error}\n\nCommand: ${commandName}`, error, false);
  }
});
