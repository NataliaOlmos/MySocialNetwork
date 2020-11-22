function renderPost() {
  let postNow = `<div>
   <h3>Actualiza</h3>
   <p>Muéstranos tus ideas!</p>
   <div class="postContainer">
   <input  class="card-img-top img-fluid" alt="Card image cap" id="file" type="file" accept="image/" multiple>
  
   <textarea class="card-text" id="textPost" id="" cols="30" rows="10"></textarea>
  
   
   <button id="postBtn" class="up">Add Post</button>
   <img id="preview">
  <figure></figure>
   </div>
   </div>
  
  `
  root.innerHTML = postNow

  let addBtn = document.querySelector("#postBtn");
    let text = document.querySelector("#textPost");
    let fileInput = document.querySelector("#file");
    let image = document.getElementById('preview')

    let url
    let src
    //const user = firebase.auth().currentUser;

    let db = firebase.firestore()
    const postsRef = db.collection("posts")

  console.log("Firebase Active", firebase)

  function writePost(object){
    let id = postsRef.doc().id
    object.id = id
    postsRef.doc(id).set(object)
}

addBtn.addEventListener('click', function(){
  let posts = {
    contentType:file.type,
    link:src,
    ///user: user,
    date: Date.now(),
  }
 
  console.log(posts)
  //UPLOAD TO FIREBASE
  writePost(posts)
  //

  //after upload
  //FIREBASE
  //drawResults([posts])
  
})

//al dar click a crear
// document.querySelector('.up')
// .addEventListener('click', function(){
//   //FIREBASE
//   //if(!user) return alert("Inicia Sesión")
  
//   fileInput.click()
// })
//al seleccionar la imagen
fileInput.addEventListener('change', function(){
 
  let fr = new FileReader()
  fr.readAsDataURL(fileInput.files[0])
  fr.onload = function(){
      src = fr.result
      image.src = src
  }
})



}
  

  export default renderPost;