import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: String, required: true },
    length: { type: String, required: true },
    genre: { type: String, required: true },
    synopsis: {type: String, required: true },
    userOwner: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },

});

export const MovieModel = mongoose.model("movies", MovieSchema);

