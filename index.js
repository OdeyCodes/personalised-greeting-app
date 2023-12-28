const userInput = document.getElementById("username");
const greetingDemo = document.getElementById("demo");

    function showPersonalizedMessage(){
        const user = localStorage.getItem('user')
        if(user == null){
            greetingDemo.innerHTML +=
            `Welcome to <span style="color: #0268AF; font-weight: bolder; font-size: px;">RoboRevolution!</span><br>
            <span style="font-weight: lighter; font-size: 16px;">The website for everyone interested
            in the latest advancment in artificial intelligence</span>`;
        }else {
            greetingDemo.innerHTML =
            `<span style="color: #0268AF; font-weight: bolder; font-size: 25px;">Hello ${user}👋</span><br>
            <span style="font-weight: lighter; font-size: 30px;">It's good to have you back!</span>`;
        }
    }
    showPersonalizedMessage()

    function addToStorage(){
        localStorage.setItem('user', userInput.value);
    }

    function clearStorage(){
        localStorage.clear();
    }
