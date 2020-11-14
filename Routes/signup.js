let root = document.querySelector('#root')

function renderSignup(){
     
    let signupView =`<div class="container" >
    <h4>Regístrate con tu email </h4>

    <input id="txtEmail" type="email" placeholder="Email"><br>
    <input id="txtPassword"type="password" placeholder="Password"><br>
    <input id="txtName" type="name" placeholder="Nombre de usuario"><br>
    
    <button id="btnSignUp" class="btn btn-action">Registrarse</button>
    <button id="btnLogout" class="btn btn-action hide">Salir</button>

    </div>`
    root.innerHTML = signupView

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");

    //Add SignUp event
    btnSignUp.addEventListener("click", e => {
        //Get email and pass
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        //Sign In
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("Estás registrado");
            btnLogout.classList.add("hide");
            console.log("Existe un usuario activo")
        } else {
            // User is signed out.
            console.log("No existe un usuario activo")
            // ...
        }
    });

    btnLogout.addEventListener("click", e => {
        firebase.auth().signOut();
        console.log("Cerrando sesión")
    });

    
      
    }

export default renderSignup;