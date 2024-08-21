// const mongoose = require('mongoose');

// const NoteSchema = new mongoose.Schema({
//     productName: {
//         type: String,
//         required: true,
//     },
//     productPrice: {
//         type: Number,
//         required: true,
//     },
//     productCategory: {
//         type: String,
//         required: true,
//     },
//     productDescription: {
//         type: String,
//         required: true,
//         maxLength: 500
//     },
//     productImage: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// });

// const Note = mongoose.model('note', NoteSchema)

// module.exports = Note;

const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    proprities: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
        maxLength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Note = mongoose.model('note', NoteSchema)

module.exports = Note;

