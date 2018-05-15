const {mongoose} = require("./../server/db/mongoose.js");

                            const {Todo} = require("./../server/models/todo.js");

                            var id = "5af9d8237d1437d8332c1a5e";

                            Todo.find({_id: id}).then((result) => {
                              console.log(result);
                            });

                            Todo.findOne({_id: id}).then((result) => {
                              if(!result){
                                console.log("Invalid id")
                              }
                              console.log(result);
                            });

                            Todo.findById(id).then((result) => {
                              console.log(result);
                            });


            const{} = require("./../server/models/user.js");
            //SIMILARLY FOR USERS COLLECTION INSIDE TO-DO APP DB
