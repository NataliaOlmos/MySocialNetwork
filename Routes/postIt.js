function renderPost(){
    let postNow = `<div>
   <h3>Actualiza</h3>
   <p>Muéstranos tus ideas!</p>
   </div>
   <div>
   <form>
      <div class="postContainer">
        <div id="img-preview"></div>
        <input type="file" id="choose-file" name="choose-file" accept="image/*"/>
        
     
    </form>
<p>
   <textarea class="card-text" id="textPost" placeholder="Agrega una descripción"></textarea>
   <button id="postBtn" class="btn btn-outline-primary">Add Post</button>
   
  
   </div>
  `
  root.innerHTML = postNow  

  const chooseFile = document.getElementById("choose-file");
  const imgPreview = document.getElementById("img-preview");
    let addBtn = document.querySelector("#postBtn");
    let text = document.querySelector("#textPost");
    let fileInput = document.querySelector("#file");
    let url
    
    function saveUsers(user){
      let usuario = {
        uid:user.uid,
        nombre:user.displayName,
        email:user.email,
        foto:user.photoURL
      }
      firebase.firestore().ref("posts")
      .push(usuario)

    }
    postBtn.onclick = saveUsers, 




chooseFile.addEventListener("change", function () {
  getImgData();
});

function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
    });    
  }
}



           
  }

export default renderPost;