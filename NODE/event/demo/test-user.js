const usrMod = require('./user-module');

let user = new usrMod.UserList();

user.on('save', function() {
    console.log('User saved successfully')
});


user.on('error', function(err) {
    console.log(err)
});


user.add({name:'sam', gender:'male'});
user.add({});

user.all();