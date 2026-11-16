import mongoose, { Schema } from "mongoose";

const Magic = new Schema(
  {
    name: { type: String, unique: true, trim: true },
    league: { type: String, trim: true, required: true },
    power: { type: String, trim: true, required: true },
    address: { type: String, trim: true },
    teacher: { type: String, trim: true },
    magicspell: { type: String, trim: true, required: true },
    stickname: { type: String, unique: true, trim: true },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  },
);

const Hogwarts = mongoose.model("WingardiumLaviousa", Magic);
export default Hogwarts;
