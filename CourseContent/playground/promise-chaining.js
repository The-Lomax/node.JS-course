require('../../task-manager/src/db/mongoose');
const User = require('../../task-manager/src/models/user');
const Task = require('../../task-manager/src/models/task');

taskId = '6214afdc3b660a47d3206334';

// Task.countDocuments({ completed: false }).then((result) => {
//     console.log('incomplete tasks:', result);
//     return Task.findByIdAndUpdate(taskId, { completed: true });
// }).then((task) => {
//     console.log('task marked complete:', task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log('incomplete tasks:', result);
//     return Task.findByIdAndDelete(taskId);
// }).then((task) => {
//     console.log('task deleted:', task);
//     return Task.countDocuments({ completed: true });
// }).then((result) => {
//     console.log('completed tasks: ', result);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('promise chaining process complete!');
// })

// const updateAgeAndCountUsers = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age });
//     const count = await User.countDocuments({age});
//     return count;
// }

// updateAgeAndCountUsers('6214ae8e66a5fa941db60a3f', 199).then((count) => {
//     console.log(count);
// }).catch((err) => {
//     console.log(err);
// })

// 6214ae8066a5fa941db60a3d

// User.findByIdAndUpdate("6214ae8066a5fa941db60a3d", { age: 199 }).then((user) => { 
//     console.log(user);
//     return User.countDocuments({ age: 199 });
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

const deleteTaskAndCountIncomplete = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCountIncomplete('6214afb73b660a47d320632a').then((count) => {
    console.log(count);
}).catch((err) => {
    console.log(err);
})