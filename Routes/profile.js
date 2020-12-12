function renderProfile(){
    let myProfile= console.log("miperfil")
    root.innerHTML = myProfile
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
export default renderProfile;