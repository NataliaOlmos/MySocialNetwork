let root = document.querySelector('#root')

function renderFriends(){
 
    let fiendsView=`<div>
    <h5>Amigos</h5>
    <div class="friends"></div>
    </div>`
    root.innerHTML = fiendsView


 
 const friendList = document.querySelector('.friends')
 const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
    .then((res) => res.json())
    .then(function(data) {
        console.log(data.results)
        data.results.forEach((element) => {
          let div = document.createElement('div')
       
        div.innerHTML = `
        <img src="${element.picture.large}"</>
        <p>${element.name.first} ${element.name.last}</p>
         <p>${element.email}</p>
         <p>${element.location.country}</p>
         
        `
        friendList.appendChild(div);

       
          })
})
}


export default renderFriends;