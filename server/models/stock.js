import mongoose from 'mongoose';

const stockSchema = mongoose.Schema({
    title: String,
    price: {
        type: Number,
        default: 0
    },
    unit: String,
    category: String,
    subCategory: String,
    vendor: String,
    recordedBy: String,
    recordedAt:{
        type: Date,
        default: new Date()
    },
});


const stock = mongoose.model('stock', stockSchema);

export default stock;