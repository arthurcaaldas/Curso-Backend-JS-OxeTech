import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  titulo: {type: String, required: true},
  npaginas: {type: Int32},
  preco: {type: Number},
}, {versionKey: false});

const livroModel = mongoose.model("livros", livroSchema);

export default livroModel;