import mongoose from "mongoose";

const screeningSchema = new mongoose.Schema({
    date: Date,
    room: String,
    movie: {
        id: String,
        title: String,
    },
});

const Screening = mongoose.model("Screening", screeningSchema);
export {
    Screening
}