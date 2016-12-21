const {ObjectID} = require('mongodb');
const {mongoose} = require('./../db/mongoose')
const {Todo} = require('./../models/todos');

var id = '584e9a0f22344319688c92de';
if(ObjectID.isValid(id)){

// Todo.find({
// 	_id :id
// }).then((todos)=>
// {
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id :id
// }).then((todos)=>
// {
// 	console.log('Todo',todos);
// });

Todo.findById(id).then((todos)=>
{
	if(!todos)
		return console.log('Incorrect id')
	console.log('Todo',todos);
});
}
else
{
	console.log('invalid id');
}