const mongoose = require("mongoose");

const ticketSetup = new mongoose.Schema({
 GuildID: String,
 totalTic: Number,
 Channel: String,
 Category: String,
 Transcripts: String,
 Handlers: String,
 Everyone: String,
 Description: String,
 Buttons:[String],
});

module.exports = mongoose.model("ticketSetup", ticketSetup);