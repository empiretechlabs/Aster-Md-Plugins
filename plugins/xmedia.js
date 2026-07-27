/**
 * @project_name : Empire-Md
 * @author : Empire Tech Labs
 * @youtube : https://www.youtube.com/@only_one_empire
 * @description : Empire-Md, A Multi-functional whatsapp user bot.
 * @version 1.2.8
 * Created By Empire Tech Labs.
 * © 2026 Empire-Md.
 */

const {
  fetchJson,
  smd,
  tlang,
  send,
  getBuffer,
  prefix,
  Config,
  sleep
} = require("../lib");

const { MessageType, Mimetype } = require("@whiskeysockets/baileys");
const fs = require('fs');
const ffmpeg = require("fluent-ffmpeg");
const exec = require('child_process').exec;

// ==================== X4MP4 COMMAND (Resize Video to 25%) ====================
smd({
  pattern: "x4mp4",
  alias: ['tea', "kofi"],
  category: "media",
  desc: "Resize video to 25%",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .withSize('25%')
      .format("mp4")
      .save('./temp/x4mp4.mp4')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/x4mp4.mp4'),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/output.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: x4mp4", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== X2MP4 COMMAND (Resize Video to 50%) ====================
smd({
  pattern: "x2mp4",
  alias: ["tea", 'kofi'],
  category: "media",
  desc: "Resize video to 50%",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .withSize('50%')
      .format("mp4")
      .save('./temp/x2mp4.mp4')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/x2mp4.mp4'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/x2mp4.mp4'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: x2mp4", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4IMAGE COMMAND (Image to MP4) ====================
smd({
  pattern: 'mp4image',
  alias: ['tea', 'kofi'],
  category: 'media',
  desc: "Convert image to mp4 video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.image) {
      return await message.send("*Need image!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .loop(6)
      .fps(19)
      .videoBitrate(400)
      .size('640x480')
      .format('mp4')
      .save("./temp/x2mp4.mp4")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/x2mp4.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/x2mp4.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4image", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4VINTAGE COMMAND ====================
smd({
  pattern: 'mp4vintage',
  alias: ['tea', "kofi"],
  category: "media",
  desc: "Apply vintage effect to video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', '-vf', "curves=vintage,format=yuv420p"])
      .fps(22)
      .save("./temp/mp4vintage.mp4")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4vintage.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4vintage.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4vintage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4REVERSE COMMAND ====================
smd({
  pattern: 'mp4reverse',
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Reverse video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "reverse", "-af", "areverse"])
      .format("mp4")
      .fps(22)
      .save("./temp/mp4reverse.mp4")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4reverse.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4reverse.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4reverse", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4BW COMMAND (Black & White Video) ====================
smd({
  pattern: 'mp4bw',
  alias: ['tea', "kofi"],
  category: 'media',
  desc: "Convert video to black and white",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', '-vf', "hue=s=0"])
      .format("mp4")
      .save('./temp/mp4bw.mp4')
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/mp4bw.mp4'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/mp4bw.mp4'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4bw", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4ENHANCE COMMAND ====================
smd({
  pattern: "mp4enhance",
  alias: ["tea", 'kofi'],
  category: "media",
  desc: "Enhance video sharpness",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "unsharp=3:3:1.5"])
      .format('mp4')
      .save("./temp/mp4enhance.mp4")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4enhance.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4enhance.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4enhance", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4BLUR COMMAND ====================
smd({
  pattern: 'mp4blur',
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Blur video edges",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", 'split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2'])
      .save("./temp/mp4blur.mp4")
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4blur.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4blur.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4blur", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4EDGE COMMAND (Edge Detection) ====================
smd({
  pattern: "mp4edge",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Apply edge detection to video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
      .format("mp4")
      .save('./temp/mp4edge.mp4')
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/mp4edge.mp4'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/mp4edge.mp4'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4edge", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== GIF2 COMMAND (Silent GIF) ====================
smd({
  pattern: "gif2",
  alias: ["tea", 'kofi'],
  category: "media",
  desc: "Convert video to silent GIF",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .noAudio()
      .fps(13)
      .videoBitrate(500)
      .save('./temp/gif.mp4')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/gif.mp4'),
          caption: Config.caption,
          gifplayback: true
        });
        try { fs.unlinkSync('./temp/gif.mp4'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: gif2", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== AGIF COMMAND (Animated GIF with Audio) ====================
smd({
  pattern: "agif",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Convert video to GIF with audio",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .fps(13)
      .videoBitrate(500)
      .save('./temp/agif.mp4')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/agif.mp4'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/agif.mp4'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: agif", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4RAINBOW COMMAND ====================
smd({
  pattern: "mp4rainbow",
  alias: ['tea', "kofi"],
  category: 'media',
  desc: "Apply rainbow effect to video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', '-vf', "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
      .videoFilters("eq=brightness=0.5")
      .save("./temp/mp4rainbow.mp4")
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4rainbow.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4rainbow.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4rainbow", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4NEGATIVE COMMAND ====================
smd({
  pattern: "mp4negative",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Apply negative effect to video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", 'curves=color_negative,format=yuv420p'])
      .format("mp4")
      .save('./temp/mp4negative.mp4')
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/mp4negative.mp4'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/mp4negative.mp4'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4negative", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4ART COMMAND ====================
smd({
  pattern: "mp4art",
  alias: ['tea', "kofi"],
  category: 'media',
  desc: "Apply art effect to video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
      .format('mp4')
      .save('./temp/mp4art.mp4')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync('./temp/mp4art.mp4'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/mp4art.mp4'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4art", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4STAB COMMAND (Video Stabilization) ====================
smd({
  pattern: 'mp4stab',
  alias: ["tea", 'kofi'],
  category: "media",
  desc: "Stabilize video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", 'deshake,format=yuv420p'])
      .format("mp4")
      .save("./temp/mp4stab.mp4")
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4stab.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4stab.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4stab", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4COLOR COMMAND (Color Enhancement) ====================
smd({
  pattern: "mp4color",
  alias: ["tea", "kofi"],
  category: 'media',
  desc: "Enhance video colors",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', '-vf', 'eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p'])
      .format("mp4")
      .save("./temp/mp4color.mp4")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4color.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4color.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4color", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP4SLOWMO COMMAND (Slow Motion) ====================
smd({
  pattern: "mp4slowmo",
  alias: ['tea', "kofi"],
  category: "media",
  desc: "Apply slow motion effect to video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    console.log("checking location : ", mediaPath);
    
    ffmpeg(mediaPath)
      .videoFilters("minterpolate=fps=120")
      .videoFilters("setpts=4*PTS")
      .format("mp4")
      .save("./temp/mp4slowmo.mp4")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/mp4slowmo.mp4"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/mp4slowmo.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp4slowmo", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP3VOLUME COMMAND (Increase Audio Volume) ====================
smd({
  pattern: 'mp3volume',
  alias: ['tea', "kofi"],
  category: 'media',
  desc: "Increase audio volume",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter:a", "volume=5.3"])
      .save("./temp/mp3volume.mp3")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync("./temp/mp3volume.mp3"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/mp3volume.mp3"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp3volume", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP3REVERSE COMMAND ====================
smd({
  pattern: "mp3reverse",
  alias: ["tea", 'kofi'],
  category: "media",
  desc: "Reverse audio",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter_complex", "areverse"])
      .save('./temp/mp3reverse.mp3')
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync('./temp/mp3reverse.mp3'),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync('./temp/mp3reverse.mp3'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp3reverse", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== X2MP3 COMMAND (Speed Up Audio 2x) ====================
smd({
  pattern: "x2mp3",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Speed up audio 2x",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter:a", "atempo=2.0", "-vn"])
      .save("./temp/x2mp3.mp3")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync("./temp/x2mp3.mp3"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/x2mp3.mp3"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: x2mp3", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP3LOW COMMAND (Lower Audio Pitch) ====================
smd({
  pattern: "mp3low",
  alias: ["tea", "kofi"],
  category: 'media',
  desc: "Lower audio pitch",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-af", "asetrate=44100*0.9"])
      .save("./temp/mp3low.mp3")
      .on('end', async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync("./temp/mp3low.mp3"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/mp3low.mp3"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp3low", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP3PITCH COMMAND (Raise Audio Pitch) ====================
smd({
  pattern: "mp3pitch",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Raise audio pitch",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-af", 'asetrate=44100*1.3'])
      .save("./temp/mp3pitch.mp3")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync("./temp/mp3pitch.mp3"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/mp3pitch.mp3"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp3pitch", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP3CRUSHER COMMAND ====================
smd({
  pattern: "mp3crusher",
  alias: ["tea", "kofi"],
  category: 'media',
  desc: "Apply crusher effect to audio",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter_complex", 'acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1'])
      .save('./temp/mp3crusher.mp3')
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync('./temp/mp3crusher.mp3'),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync('./temp/mp3crusher.mp3'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp3crusher", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP3EQ COMMAND (Audio Equalizer) ====================
smd({
  pattern: "mp3eq",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Apply equalizer to audio",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-af", 'superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14', "-ar 48k"])
      .save("./temp/mp3eq.mp3")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync("./temp/mp3eq.mp3"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/mp3eq.mp3"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp3eq", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== MP3BASS COMMAND (Bass Boost) ====================
smd({
  pattern: "mp3bass",
  alias: ["tea", 'kofi'],
  category: 'media',
  desc: "Boost audio bass",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter:a", "bass=g=9:f=110:w=0.6"])
      .save("./temp/mp3bass.mp3")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          audio: fs.readFileSync("./temp/mp3bass.mp3"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/mp3bass.mp3"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: mp3bass", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== WAVES COMMAND (Audio Waveform Visualization) ====================
smd({
  pattern: "waves",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Generate audio waveform video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', '-filter_complex', "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", '-map', "[v]", "-map 0:a"])
      .save("./temp/waves.mp4")
      .on('end', async () => {
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/waves.mp4"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/waves.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: waves", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== FREQUENCY COMMAND (Frequency Visualization) ====================
smd({
  pattern: "frequency",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Generate frequency spectrum video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", '-map', "[v]", "-map 0:a"])
      .save("./temp/frequency.mp4")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/frequency.mp4"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/frequency.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: frequency", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== AVEC COMMAND (Audio Vector Scope) ====================
smd({
  pattern: "avec",
  alias: ['tea', "kofi"],
  category: "media",
  desc: "Generate audio vector scope video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
      .save("./temp/avec.mp4")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/avec.mp4"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/avec.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: avec", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== VOLUMEAUDIO COMMAND (Volume Meter Visualization) ====================
smd({
  pattern: "volumeaudio",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Generate volume meter video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", '-map', "[vid]", "-map 0:a"])
      .save("./temp/volumeaudio.mp4")
      .on("end", async () => {
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/volumeaudio.mp4"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/volumeaudio.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: volumeaudio", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== CQTAUDIO COMMAND (CQT Visualization) ====================
smd({
  pattern: 'cqtaudio',
  alias: ['tea', "kofi"],
  category: "media",
  desc: "Generate CQT visualization video",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.audio) {
      return await message.sendMessage("*Need Audio!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
      .save("./temp/cqtaudio.mp4")
      .on('end', async () => {
        await message.bot.sendMessage(message.jid, {
          video: fs.readFileSync("./temp/cqtaudio.mp4"),
          caption: Config.caption,
          ptt: false
        });
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        try { fs.unlinkSync("./temp/cqtaudio.mp4"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: cqtaudio", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== BWIMAGE COMMAND (Black & White Image) ====================
smd({
  pattern: 'bwimage',
  alias: ["tea", "kofi"],
  category: 'media',
  desc: "Convert video frame to black and white image",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", 'hue=s=0'])
      .save('./temp/bwimage.png')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync('./temp/bwimage.png'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/bwimage.png'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: bwimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== VINTAGEIMAGE COMMAND ====================
smd({
  pattern: "vintageimage",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Apply vintage effect to video frame",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", 'curves=vintage'])
      .save('./temp/vintageimage.png')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync('./temp/vintageimage.png'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/vintageimage.png'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: vintageimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== BLURIMAGE COMMAND ====================
smd({
  pattern: "blurimage",
  alias: ["tea", 'kofi'],
  category: "media",
  desc: "Apply blur effect to video frame",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
      .save("./temp/blurimage.png")
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync("./temp/blurimage.png"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/blurimage.png"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: blurimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== EDGEIMAGE COMMAND ====================
smd({
  pattern: "edgeimage",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Apply edge detection to video frame",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', '-filter:v', "edgedetect=low=0.9:high=0.2"])
      .save('./temp/edgeimage.png')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync('./temp/edgeimage.png'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/edgeimage.png'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: edgeimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== ENHANCEIMAGE COMMAND ====================
smd({
  pattern: "enhanceimage",
  alias: ["tea", "kofi"],
  category: 'media',
  desc: "Enhance video frame sharpness",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "unsharp=3:3:1.5"])
      .save("./temp/enhanceimage.png")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync("./temp/enhanceimage.png"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/enhanceimage.png"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: enhanceimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== GRENIMAGE COMMAND (Noise/Grain Effect) ====================
smd({
  pattern: "grenimage",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Apply grain/noise effect to video frame",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .videoFilters('noise=alls=100:allf=t+u')
      .save('./temp/grenimage.png')
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync('./temp/grenimage.png'),
          caption: Config.caption
        });
        try { fs.unlinkSync('./temp/grenimage.png'); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: grenimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== RAINBOWIMAGE COMMAND ====================
smd({
  pattern: "rainbowimage",
  alias: ['tea', "kofi"],
  category: "media",
  desc: "Apply rainbow effect to video frame",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.video) {
      return await message.send("*Need Video!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
      .videoFilters("eq=brightness=0.6")
      .save("./temp/rainbowimage.png")
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync("./temp/rainbowimage.png"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/rainbowimage.png"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: rainbowimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== NEGATIVEIMAGE COMMAND ====================
smd({
  pattern: "negativeimage",
  alias: ["tea", "kofi"],
  category: 'media',
  desc: "Apply negative effect to image",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.image) {
      return await message.send("*Need image!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "curves=color_negative"])
      .save("./temp/negativeimage.png")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync("./temp/negativeimage.png"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/negativeimage.png"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: negativeimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== ARTIMAGE COMMAND ====================
smd({
  pattern: "artimage",
  alias: ["tea", "kofi"],
  category: "media",
  desc: "Apply art effect to image",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.image) {
      return await message.send("*Need image!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
      .save("./temp/artimage.png")
      .on("end", async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync("./temp/artimage.png"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/artimage.png"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: artimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== COLORIMAGE COMMAND ====================
smd({
  pattern: "colorimage",
  alias: ['tea', 'kofi'],
  category: "media",
  desc: "Enhance image colors",
  filename: __filename
}, async (message) => {
  try {
    if (!message.reply_message.image) {
      return await message.send("*Need image!*");
    }
    
    var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
    
    ffmpeg(mediaPath)
      .outputOptions(['-y', "-vf", 'eq=contrast=1.3:saturation=1.5:brightness=-0.1'])
      .save("./temp/colorimage.png")
      .on('end', async () => {
        try { fs.unlinkSync(mediaPath); } catch (error) {}
        await message.bot.sendMessage(message.jid, {
          image: fs.readFileSync("./temp/colorimage.png"),
          caption: Config.caption
        });
        try { fs.unlinkSync("./temp/colorimage.png"); } catch (error) {}
      });
  } catch (error) {
    return await message.error(error + "\n\n command: colorimage", error, "*_Didn't get any results, Sorry!_*");
  }
});

// ==================== IMTERP COMMAND (Frame Interpolation) ====================
smd({
  pattern: "imterp",
  alias: ["tea", 'kofi'],
  category: 'media',
  desc: "Interpolate video frames for smoother playback",
  filename: __filename
}, async (message, input) => {
  input = input.split(" ");
  input[1] = input[0];
  
  if (!message.reply_message && input[1] === '') {
    return await message.send("*Need Video and FPS Value!*\nEx: ```.interp 100```");
  }
  if (input[1] <= 10) {
    return await message.send("*Low FPS Value ⚠️*\n*Please, type over 10*");
  }
  if (input[1] >= 500) {
    return await message.send("*High FPS Value ⚠️*\n*Please, type under 500*");
  }
  
  await message.send("```Interpolating..```");
  var mediaPath = await message.bot.downloadAndSaveMediaMessage(message.quoted.msg);
  
  exec("ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json " + mediaPath, async (error, stdout, stderr) => {
    var fileInfo = JSON.parse(stdout);
    var qualitySettings = { value: 100 };
    var timeSettings = { time: 1 };
    
    // Quality adjustment based on file size (in MB)
    if (fileInfo.format.size / 1000000 > 0 && fileInfo.format.size / 1000000 < 6) {
      qualitySettings.value = 98; timeSettings.time = 2;
    }
    if (fileInfo.format.size / 1000000 > 5 && fileInfo.format.size / 1000000 < 11) {
      qualitySettings.value = 95; timeSettings.time = 2.4;
    }
    if (fileInfo.format.size / 1000000 > 10 && fileInfo.format.size / 1000000 < 21) {
      qualitySettings.value = 91; timeSettings.time = 3;
    }
    if (fileInfo.format.size / 1000000 > 20 && fileInfo.format.size / 1000000 < 31) {
      qualitySettings.value = 75; timeSettings.time = 3.3;
    }
    if (fileInfo.format.size / 1000000 > 30) {
      qualitySettings.value = 61; timeSettings.time = 10;
    }
    
    // Quality adjustment based on duration
    if (fileInfo.streams[0].duration > 0 && fileInfo.streams[0].duration < 21) {
      qualitySettings.value = 96; timeSettings.time = 2;
    }
    if (fileInfo.streams[0].duration > 20 && fileInfo.streams[0].duration < 41) {
      qualitySettings.value = 91; timeSettings.time = 2.4;
    }
    if (fileInfo.streams[0].duration > 40 && fileInfo.streams[0].duration < 61) {
      qualitySettings.value = 89; timeSettings.time = 3;
    }
    if (fileInfo.streams[0].duration > 60 && fileInfo.streams[0].duration < 81) {
      qualitySettings.value = 85; timeSettings.time = 3.7;
    }
    if (fileInfo.streams[0].duration > 80 && fileInfo.streams[0].duration < 101) {
      qualitySettings.value = 79; timeSettings.time = 4.4;
    }
    if (fileInfo.streams[0].duration > 100 && fileInfo.streams[0].duration < 121) {
      qualitySettings.value = 73; timeSettings.time = 5;
    }
    if (fileInfo.streams[0].duration > 120) {
      qualitySettings.value = 61; timeSettings.time = 10;
    }
    
    // Quality adjustment based on frame rate
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 0 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 11) {
      qualitySettings.value = 101; timeSettings.time = 0.4;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 10 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 21) {
      qualitySettings.value = 97; timeSettings.time = 2;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 20 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 31) {
      qualitySettings.value = 81; timeSettings.time = 3.3;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 30 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 41) {
      qualitySettings.value = 69; timeSettings.time = 5.3;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 40) {
      qualitySettings.value = 60; timeSettings.time = 10;
    }
    
    // Combined FPS and target FPS adjustments
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 9 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 31 && input[1] > 39) {
      timeSettings.time = 4.3;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 30 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 41 && input[1] > 39) {
      timeSettings.time = 6;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 30 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 41 && input[1] > 49) {
      timeSettings.time = 6.4;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 30 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 41 && input[1] > 59) {
      timeSettings.time = 7;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 30 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 41 && input[1] > 69) {
      timeSettings.time = 8.5;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 40 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 61 && input[1] > 59) {
      timeSettings.time = 10;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 40 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 61 && input[1] > 64) {
      timeSettings.time = 10.2;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 40 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 61 && input[1] > 69) {
      timeSettings.time = 10.5;
    }
    if (fileInfo.streams[0].r_frame_rate.split('/')[0] > 40 && fileInfo.streams[0].r_frame_rate.split('/')[0] < 61 && input[1] > 75) {
      timeSettings.time = 11;
    }
    
    await message.send("_This process may take a while._\n_Envisaged Time:_ *1 Minute*\n_Success Rate:_ *100%*");
    
    var progressStage = 10;
    ffmpeg(mediaPath)
      .videoFilters("minterpolate=fps=" + input[1] + ":mi_mode=mci:me_mode=bidir")
      .format("mp4")
      .save("output.mp4")
      .on('progress', async (progress) => {
        var percent = progress.percent;
        while (percent > 10 && progressStage == 10) { progressStage = 1; await message.send("*Completed %10!*"); }
        while (percent > 30 && progressStage == 1)  { progressStage = 2; await message.send("*Completed %30!*"); }
        while (percent > 50 && progressStage == 2)  { progressStage = 3; await message.send("*Completed %50!*"); }
        while (percent > 70 && progressStage == 3)  { progressStage = 4; await message.send("*Completed %70!*"); }
        while (percent > 90 && progressStage == 4)  { progressStage = 5; await message.send("*Preparing Video..*"); }
      })
      .on("end", async () => {
        await message.send(fs.readFileSync('output.mp4'), {
          caption: "Made by Empire Tech Labs\n_Interpolated to " + input[1] + " FPS_"
        }, "video");
      });
  });
});
