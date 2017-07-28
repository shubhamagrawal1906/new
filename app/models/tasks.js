var mongoose = require("mongoose");
var AutoIncrement = require('mongoose-sequence');
const User = require('./users');
const TaskStage = require('./taskStage');
const async = require('async');
const Task=require('./tasks');

// module.exports = mongoose.model("user_tasks", UserTaskSchema);



var UserTaskSchema = new mongoose.Schema({
    task_name: { type: String },
    description: { type: String },
    due_date: { type: Date },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_tasks'
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    stage_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskStage'
    },
    is_child :{
        type:Boolean,
        default:0
    }
});

// module.exports = mongoose.model("user_tasks", UserTaskSchema)


// UserTaskSchema.post('update', function(task) {
// //   let repository = new Repository();
// //   let query = User.update({ _id: comment.author_id }, {$push: {comment_id: comment._id}});
// //   let update = repository.promisify(query.exec());
// //   update
// //   .then((result) => {
// //     let query = Post.update({ _id: comment.post_id }, {$push: {comment_id: comment._id}});
// //     let update = repository.promisify(query.exec());
// //     update
// //     .then((comment) => {})
// //     .catch((err) => {});
// //   })
// //   .catch((err) => {});
// console.log("hook");
// // console.log(this);
// console.log(task._id);
//       this.find({"_id":"5979ec858e03b03ba2c3a6ed"},function(err,result){
//           if(err){
//               console.log("err ",err);
//           }else{
//               console.log("result ",result);
//           }
//       });

// });



module.exports = mongoose.model("Task", UserTaskSchema);
