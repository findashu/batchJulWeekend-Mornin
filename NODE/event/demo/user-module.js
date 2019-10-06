const EventEmitter = require('events');
const util = require('util');


let db = [
    {name:'Ashu', gender:'Male'},
]

function UserList() {

   EventEmitter.call(this);

};
// inherits all prototype properties
util.inherits(UserList, EventEmitter);

UserList.prototype.add = function(obj) {
    // console.log(obj)
    
    if(Object.keys(obj).length == 0){

        this.emit('error', new Error('Pass user obj'));

    }else {
        db.push(obj);
        this.emit('save');
    }
}


UserList.prototype.all = function() {
    console.log(db);
}

module.exports.UserList = UserList;