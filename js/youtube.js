window.addEventListener('load',()=>{
    document.querySelector('.submitBtn').addEventListener('click',SaveUsers);
    var UserList = [];


    function SaveUsers(){
        var email = document.querySelector('#email').value;
        var   UserName = document.querySelector('#Username').value;
        var    Password= document.querySelector('#Password1').value;
        var    Password2= document.querySelector('#Password2').value;

        addNewUser(email,UserName,Password,Password2); 
    }

    function addNewUser(email,Username,Password,Password2){
    var User = {
        Email : email,
        Username : Username,
        Password : Password,
        Password2 : Password2
    };
    localStorage.setItem('User',JSON.stringify(User));
    console.log(User);
    UserList.push(User);
    localStorageUserList(UserList);
}
    function getUserList(){
        var storedList = localStorage.getItem('LocalUsersLists');
        if (storedList == null){
            UserList = [];
        }
        else{
            UserList = JSON.parse(storedList);
        }
        return UserList;
        
    }
    function localStorageUserList(listUsers){
        localStorage.setItem('LocalUsersLists',JSON.stringify(listUsers));
    }
});