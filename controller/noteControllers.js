const notetModel = require('../model/noteModel');

// Create a new note
const createNote = async (req, res) => {
    console.log(req.body);
    const { title, proprities, notes } = req.body;

    // Validation
    if (!title || !proprities || !notes) {
        return res.status(400).json({
            "success": false,
            "message": "Please provide all required fields"
        });
    }

    try {
        // Save to the database
        const newNote = new notetModel({
            title,
            proprities,
            notes
        });
        const note = await newNote.save();
        res.status(201).json({
            "success": true,
            "message": "Note created successfully",
            "data": note
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            "success": false,
            "message": "Internal Server Error",
            "error": error.message
        });
    }
};

// Fetch all notes
const getAllNotes = async (req, res) => {
    try {
        const allNotes = await notetModel.find({});
        res.status(200).json({
            "success": true,
            "message": "Notes fetched successfully",
            "notes": allNotes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "success": false,
            "message": "Internal Server Error",
            "error": error.message
        });
    }
};

// Fetch a single note by ID
const getSingleNote = async (req, res) => {
    const noteId = req.params.id;

    try {
        const note = await notetModel.findById(noteId);
        if (!note) {
            return res.status(404).json({
                "success": false,
                "message": "Note not found"
            });
        }
        res.status(200).json({
            "success": true,
            "message": "Note fetched successfully",
            "note": note
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "success": false,
            "message": "Internal Server Error",
            "error": error.message
        });
    }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
    try {
        const note = await notetModel.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({
                "success": false,
                "message": "Note not found"
            });
        }
        res.status(200).json({
            "success": true,
            "message": "Note deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "success": false,
            "message": "Internal Server Error",
            "error": error.message
        });
    }
};

// Update a note by ID
const updateNote = async (req, res) => {
    try {
        const updatedNote = await notetModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedNote) {
            return res.status(404).json({
                "success": false,
                "message": "Note not found"
            });
        }
        res.status(200).json({
            "success": true,
            "message": "Note updated successfully",
            "data": updatedNote
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "success": false,
            "message": "Internal Server Error",
            "error": error.message
        });
    }
};

module.exports = {
    createNote,
    getAllNotes,
    getSingleNote,
    deleteNote,
    updateNote
};
