function renderPost() {
  let postNow = `<div>
   <h3>Actualiza</h3>
   <p>Muéstranos tus ideas!</p>
   <div class="postContainer">
   <input  class="card-img-top img-fluid" alt="Card image cap" id="file" type="file" accept="image/" multiple>
   <textarea class="textPost" id="textPost" placeholder="Actualiza tu perfil" type="text" cols="30" rows="10"></textarea>
   <button id="postBtn" class="up">Add Post</button>
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
    let image = document.getElementById('preview');
    let resultsContainer = document.getElementById('results');
    const btnDelete = document.querySelector("#deletePost");
    let url
    let src
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
    array.forEach(function(el, index, body, id){
        let figure = document.createElement('figure')
        figure.innerHTML = `
            <img src="${el.link}" alt="${index}">
            <p>${el.body}</p>
            <p>${el.id}</p>
            <button class="prueba" >holi</button>
            `
        resultsContainer.prepend(figure)
    }) 
}
}
export default renderPost;