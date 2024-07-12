const todoModel = require('../model/todoModel');

// module.exports = {
//     getTodos: async (req, res) => {
//         try {
//             const todos = await todoModel.find();
//             res.status(200).send(todos);
//         } catch (error) {
//             console.error('Error fetching todos:', error);
//             res.status(500).send({ error: 'Internal Server Error' });
//         }
//     },
//     saveTodos: async (req, res) => {
//         try {
//             const { todo } = req.body;
//             const newTodo = await todoModel.create({ todo });
//             console.log('Saved successfully');
//             res.status(201).send(newTodo);
//         } catch (error) {
//             console.error('Error saving todo:', error);
//             res.status(500).send({ error: 'Internal Server Error' });
//         }
//     },
//     updateTodos: async (req, res) => {
//         try {
//             const { id } = req.params;
//             const { todo } = req.body;
//             await todoModel.findByIdAndUpdate(id, { todo });
//             res.status(200).send('Updated successfully');
//         } catch (error) {
//             console.error('Error updating todo:', error);
//             res.status(500).send({ error: 'Internal Server Error' });
//         }
//     },
//     deleteTodos: async (req, res) => {
//         try {
//             const { id } = req.params;
//             await todoModel.findByIdAndDelete(id);
//             res.status(200).send('Deleted successfully');
//         } catch (error) {
//             console.error('Error deleting todo:', error);
//             res.status(500).send({ error: 'Internal Server Error', msg: 'Something went wrong' });
//         }
//     }
// };

module.exports = {
    getTodos: async (req, res) => {
        try {
            const todos = await todoModel.find();
            res.status(200).send(todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    saveTodos: async (req, res) => {
        try {
            // Ensure that req.body contains the 'toDo' field
            const { toDo } = req.body; // Correct field name to match schema
            if (!toDo) {
                return res.status(400).send({ error: 'toDo field is required' });
            }
            const newTodo = await todoModel.create({ toDo });
            console.log('Saved successfully');
            res.status(201).send(newTodo);
        } catch (error) {
            console.error('Error saving todo:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    updateTodos: async (req, res) => {
        try {
            const { id } = req.params;
            const { toDo } = req.body; // Correct field name to match schema
            if (!toDo) {
                return res.status(400).send({ error: 'toDo field is required' });
            }
            await todoModel.findByIdAndUpdate(id, { toDo });
            res.status(200).send('Updated successfully');
        } catch (error) {
            console.error('Error updating todo:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    deleteTodos: async (req, res) => {
        try {
            const { id } = req.params;
            await todoModel.findByIdAndDelete(id);
            res.status(200).send('Deleted successfully');
        } catch (error) {
            console.error('Error deleting todo:', error);
            res.status(500).send({ error: 'Internal Server Error', msg: 'Something went wrong' });
        }
    }
};
