let array = JSON.parse(localStorage.getItem("signin_detail"))||[];
// console.log(array);
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let emaill= document.getElementById("email").value;
    let passwordd = document.getElementById("password").value;

    // console.log(emaill,passwordd);

    // function signInDetails(email,password){
    //     if(email !== 0 && password !==0){
    //         this.name=name;
    //         this.password = password;
    //         window.location.href="https://www.google.com";
    // let x = false;
    //     }
    let flag=0;

    for(let i = 0; i<array.length; i++){
        if(array[i].email===emaill && array[i].password===passwordd){
            // console.log("Adityaboss")
           flag=1;
        }
        
       
    }
    if(flag===1){
        alert("login success")
            window.location.href="/index.html"
    }
    else{
            alert("wrong password")
            // window.location.href="#";
        }
    // if(x===true){
    //     window.Location.href="/login.html"
    // }
    // }

    // let signInData= new signInDetails(email,password)
    // console.log(signInData);
    // array.push(signInData);
    // localStorage.setItem("signin_detail",JSON.stringify(array));

})

document.getElementById("cabtn").addEventListener("click",(elem)=>{
    elem.preventDefault()
    window.location.href="/signUp/signUp.html"

});

 

