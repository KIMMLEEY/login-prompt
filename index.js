let loggedIn = false;
let username;
let password;

while(!loggedIn){
username = window.prompt(`Enter your username`);
password = window.prompt(`Enter your password`);
    
    if(username === "lee" && password === "myPassword"){
    loggedIn = true;
    console.log(`Welcome ${username}`);
}
else{
    console.log("Incorect credentials");
}
}