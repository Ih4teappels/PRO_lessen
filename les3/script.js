window.addEventListener("load", function(){

    var user = {
        name:"Harrie",
        lastName:"Potter",
        age: 16,
        family: [
            {name:"Bert"},
            {name:"Kees"}
        ],
        delete: function(){
            console.log('gooi mij weg');
        },
        makeOlder: function(extraYears){
            this.age += extraYears;
        }
    };

    var user2 = {name:'md'};

    var users = [user];

    console.log(users);


    function isTheSame(number1, number2){
        return number1 == number2;
    }


    function createUser(){
        var newUser = {
            name:"geen naam",
            age:0,
            delete: function(){
                return 45;
            }
        };
        return newUser;
    }

    createUser().delete();

	Array.prototype.clearArray = function clearArray() {
	    	this.splice(0, this.length);
	    }

	
    var users = ["users"];
    var teachers = ["teachers"];
    var schools = ["schools"];

    users.clearArray();

	console.log(users);
	console.log(teachers);
	console.log(schools);

});