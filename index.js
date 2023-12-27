const userInput = document.getElementById("username");
const userOutput = document.getElementById("addToStorage");

    function showPersonalizedMessage(){
        const user = localStorage.getItem('user')
        if(user == null){
            alert("welcome to Kodek! Please enter your name")
        }else {
            alert(`Hello ${user}👋.It's good to have you back!`)
        }
    }
    showPersonalizedMessage()

    function outPutUserInput(){
        localStorage.setItem('user', userInput.value);
    }

    function clearStorage(){
        localStorage.clear();
    }
