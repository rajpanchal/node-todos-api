var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number
//   }
// });
//
// var newTodo = Todo({
//   text: "123"
// });
//
// newTodo.save().then((doc) => {
//   console.log("Success ",doc)
// }, (err) => {
//   console.log("Unable to save it to the db.")
// });

// var otherTodo = Todo({
//   text: "Eat dinner",
//   completed: true,
//   completedAt: 10
// });
//
// otherTodo.save().then((doc) => {
//   console.log("Success ",JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log("Unable to save it to the db.")
// });

var Users = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = Users({
  email: "   "
});

newUser.save().then((doc) => {
  console.log("Success ",doc)
}, (err) => {
  console.log("Unable to save it to the db.")
});
