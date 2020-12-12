function renderPost() {
  let postNow = `<div>
   <h3>Actualiza</h3>
   <p>Muéstranos tus ideas!</p>
   <div class="postContainer">
   <input  class="card-img-top img-fluid" alt="Card image cap" id="file" type="file" accept="image/" multiple>
   <textarea class="textPost" id="textPost" placeholder="Actualiza tu perfil" type="text" cols="30" rows="10"></textarea>
   <button id="postBtn" class="up">Add Post</button>
   <h3>Preview de tu post</h3>
   <div id="results">
   <figure> 
   </figure>
  
   </div>
   </div>
   `
  root.innerHTML = postNow

  let addBtn = document.querySelector("#postBtn");
    let text = document.querySelector("#textPost");
    let fileInput = document.querySelector("#file");
    let resultsContainer = document.getElementById('results');
    const btnDelete = document.querySelector("#deletePost");
    const todayIs = new Date();
    let dateValue;
    dateValue = todayIs;
    let url
    let src
    const user = firebase.auth().currentUser;

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
    user: user,
    date: Date(),
    body: text.value,
}
 
  console.log(posts)
  //UPLOAD TO FIREBASE
  writePost(posts)
  drawResults([posts])
  
})


fileInput.addEventListener('change', function(){
 let fr = new FileReader()
  fr.readAsDataURL(fileInput.files[0])
  fr.onload = function(){
      src = fr.result
      }
})

postsRef.onSnapshot(function(snap){
      snap.forEach(function(doc){
          drawResults([doc.data()])
      })
   })


   

function drawResults(array){
  //resultsContainer.innerHTML = ""
  array.forEach(function(el, index, body, id, dateValue){
        let figure = document.createElement('figure')
        
        figure.innerHTML = `
        
         <div class="resultsWrapper">
            <img id="imgPost" src="${el.link}" alt="${index}">
            <p>Descripción:${el.body}</p>
            <p>Subido el:<span class="minHeight collapse" id="collapseExample">${el.date.slice(0, -32)}</span></p>
         </div>
        <div id="goTo">
         <a href="./Routes/perfil" target="_blank">Ir a Mi Perfil</a>
        </div> 
            `
        resultsContainer.prepend(figure)


      
      
       
      
 
      })
      
      
}





}
export default renderPost;