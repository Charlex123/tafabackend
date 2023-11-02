const mongoose = require("mongoose");
const Schema = require("mongoose");
const referralSchema = new mongoose.Schema(
  {
    sponsorId: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    activated: {
      type: Boolean,
      default: false
    },
    refBonus: {
      type: Number,
      required: true
    },
    totalrefBonus: {
      type: Number,
      required: true
    },
    withdrawnRefBonus: {
      type: Number,
      required: true
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
  },
  {
    timestamps: true,
  }
);

const Referral = mongoose.model("referrals", referralSchema);

module.exports = Referral;
