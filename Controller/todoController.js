import todoCollection from "../Model/todoModel.js";


export const addToDo = async (req, res) => {
    try {
        const data = new todoCollection(req.body);
        await data.save()
        res.status(201).json({ mess: "data has been stored" })
    } catch (err) {
        res.satus(400).json({ message: err })
    }
}

export const getToDo = async (req, res) => {
    try {
        const data = await todoCollection.find();
        res.json(data)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export const updateToDo = async (req, res) => {
    try {
        const data = await todoCollection.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
        res.json(data)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

export const deleteToDo = async (req, res) => {
    try {
        await todoCollection.findByIdAndDelete(req.params.id)
        res.json({ message: "data has been deleted" })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}