const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All The Notes using: GET "/api/notes/fetchallnotes". Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error!")
    }
});

// ROUTE 2: Add a New Notes using: POST "/api/notes/addnote". Login Required
router.post('/addnote', fetchuser, [
    body('title', "Enter a valid Title").isLength({ min: 3 }),
    body('description', "Description must be atlist 5 character").isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // if there are errors, return Bad request and the errors -------> 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error!")
    }
});



// ROUTE 3: Update an Existing Notes using: PUT "/api/notes/updatenote". Login Required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {

        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be update and update it
        let notes = await Notes.findById(req.params.id);
        if (!notes) { return res.status(404).send("Not Found!") }

        if (notes.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!");
        }

        notes = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ notes })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error!")
    }

});



// ROUTE 4: Delete an Existing Notes using: DELETE "/api/notes/deletenote". Login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        // Find the note to be delete and delete it
        let notes = await Notes.findById(req.params.id);
        if (!notes) { return res.status(404).send("Not Found!") }

        // Allow deletion only if user owns this notes
        if (notes.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!");
        }

        notes = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been Deleted", notes: notes })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error!")
    }
});



module.exports = router 