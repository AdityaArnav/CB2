let array = JSON.parse(localStorage.getItem("signin_detail")) || [];

    document.getElementById("bbtn").addEventListener("click", (el) => {
        el.preventDefault()
        let Fname = document.getElementById("fname").value;
        let Lname = document.getElementById("lname").value;
        let phone = document.getElementById("Pnumber").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        function CnAdetails(Fname, Lname, phone, email, password) {
            if (Fname.length !== 0 && Lname.length !== 0 && phone.length !== 0 && email.length !== 0 && password.length !== 0) {
                this.Fname = Fname;
                this.Lname = Lname;
                this.phone = phone;
                this.email = email;
                this.password = password;
                    // console.log("aditya arnav")
                    alert("Account Created: You can Login now")
                    window.location.href = "/login/login.html"

                // window.location.href = "/signIn.html"
            }
            else {
                alert("Please fill the inputs")
            }

        }
        let CnAdata = new CnAdetails(Fname, Lname, phone, email, password)
        // console.log(CnAdata);
        array.push(CnAdata);

        localStorage.setItem("signin_detail", JSON.stringify(array));


    })

    // document.getElementById("bbtn").addEventListener("click", (el) => {
    //     el.preventDefault()
    //     window.location.href = "/signIn.html"

    // })