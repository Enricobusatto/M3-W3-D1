window.onload = function() {
    // document.cookie = "username=John Doe";
    let x = document.cookie;
    let miastringa = x.split('=');
    if (miastringa[0] =="username" && miastringa[1] == "John Doe") {
        document.getElementById('login').classList.add('d-none')
    }else{
        document.getElementById('menuUtente').classList.add('d-none')
    }
} 

 