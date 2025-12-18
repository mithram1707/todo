import todoCollection from "../Model/todoModel.js";

export const addTodo = async (req, res) => {
    try {
        const data = new todoCollection(req.body);
        await data.save();
        res.status(201).json({ message: "Todo created" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getTodo = async (req, res) => {
    try {
        const data = await todoCollection.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const data = await todoCollection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ message: "Todo not found" });
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const de = await todoCollection.findByIdAndDelete(req.params.id);
        if (!de) return res.status(404).json({ message: "Todo not found" });
        res.json({ message: "Todo has been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};