const TODO = require("./../models/Todo")
exports.addTodo = async (req, res) => {
	try {
		const result = await TODO.create(req.body)

		res.json({
			message: "Add Todo Success",
			result
		})
	} catch (error) {
		res.json({
			message: "Somthing went wrong " + error,

		})
	}
}

exports.getTodo = async (req, res) => {
	try {
		const result = await TODO.find() ///find navach function purn ch purn data gheun yeto
		// const result = await TODO.find() // add to db
		// const result = await TODO.create() // get alll records
		// const result = await TODO.findByIdUpdate() // update
		// const result = await TODO.findByIdDelete() // delete
		res.json({
			message: "get Todo Success",
			result
		})
	} catch (error) {
		res.json({
			message: "Somthing went wrong " + error,

		})
	}
}

exports.updateTodo = async (req, res) => {
	try {
		const todoId = req.params.id
		const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true }) // update
		// const result = await TODO.findByIdDelete() // delete
		res.json({
			message: "update Todo Success",
			result
		})
	} catch (error) {
		res.json({
			message: "Somthing went wrong " + error,

		})
	}
}

exports.deleteTodo = async (req, res) => {
	try {
		const todoId = req.params.id
		const result = await TODO.findByIdAndDelete(todoId) // delete
		res.json({
			message: "delete Todo Success",
			result
		})
	} catch (error) {
		res.json({
			message: "Somthing went wrong " + error,

		})
	}
}