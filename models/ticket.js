const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
 GuildID: String,
 AuthorId: String,
 CreatedAt: Date,
 ClosedAt: Date,
 MembersID: [String],
 TicketID: String,
 ChannelID: String,
 Closed:Boolean,
 Locked:Boolean,
 Claimed: Boolean,
 ClaimedBy: String,
});

module.exports = mongoose.model("tickets", ticketSchema);