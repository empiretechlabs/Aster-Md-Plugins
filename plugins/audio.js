/**
 * @project_name : Empire-Md
 * @author : Empire Tech Labs
 * @youtube : https://www.youtube.com/@only_one_empire
 * @description : Empire-Md, A Multi-functional whatsapp user bot.
 * @version 1.2.8
 * Created By Empire Tech Labs.
 * © 2026 Empire-Md.
 */

const { tlang, smd, audioEditor } = require('../lib');

// ==================== BASS COMMAND ====================
smd({
  cmdname: "bass",
  info: "adds bass in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== BLOWN COMMAND ====================
smd({
  cmdname: 'blown',
  info: "adds blown in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== DEEP COMMAND ====================
smd({
  cmdname: "deep",
  info: "adds deep in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== EARRAPE COMMAND ====================
smd({
  cmdname: "earrape",
  info: "adds earrape in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== FAST COMMAND ====================
smd({
  cmdname: "fast",
  info: "adds fast in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== FAT COMMAND ====================
smd({
  cmdname: "fat",
  info: "adds fat in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== NIGHTCORE COMMAND ====================
smd({
  cmdname: "nightcore",
  info: "adds nightcore in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== REVERSE COMMAND ====================
smd({
  cmdname: "reverse",
  info: "adds reverse in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== ROBOT COMMAND ====================
smd({
  cmdname: "robot",
  info: "adds robot in given sound",
  type: 'audio',
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== SLOW COMMAND ====================
smd({
  cmdname: 'slow',
  info: "adds slow in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== SMOOTH COMMAND ====================
smd({
  cmdname: "smooth",
  info: "adds smooth in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});

// ==================== TUPAI COMMAND ====================
smd({
  cmdname: "tupai",
  info: "adds tupai in given sound",
  type: "audio",
  use: "<reply to any audio>"
}, async (message, input, { smd: commandName }) => {
  try {
    return await audioEditor(message, commandName, message);
  } catch (error) {
    return await message.error(error + " \n\nCommand: " + commandName, error);
  }
});
