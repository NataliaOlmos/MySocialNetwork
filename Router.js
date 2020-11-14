import renderPost from './Routes/postIt.js';
import renderHome from './Routes/home.js';
import renderLogin from './Routes/login.js';
import renderAbout from './Routes/profile.js';
import renderFriends from './Routes/friends.js';
import renderBlog from './Routes/blog.js';
import renderSignup from './Routes/signup.js';


let currentRoute = "/"
    // main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

// router

function router(route){
    console.log(route)
    switch(route){
      case '/blog':
        renderBlog()
        break;
      case '/amigos':
        renderFriends()
        break;
      case '/postea':
        renderPost();
        break;
      case '/about':
        renderAbout()
        break;
        case '/signup':
       renderSignup();
        break;
      case '/login':
       renderLogin();
        break;
      default:
          case '/home':
        renderHome()
        break;
           }
  }
  
  // btn listener
  btns.forEach(btn=>btn.onclick=e=>router(e.target.id))
  
  
  // init
  router()