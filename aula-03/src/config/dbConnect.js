import mongoose from "mongoose";

const URL = "mongodb+srv://arthurcaaldas:88327636@cluster0.n9htmf5.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
mongoose.connect(URL);
return mongoose.connection;
}

export default connectDB