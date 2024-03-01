import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: true},
  nacionalidade: {type: String, required: true},
  idade: {type: Number},
}, {versionKey: false});

const autorModel = mongoose.model("livros", autorSchema);

export default autorModel;