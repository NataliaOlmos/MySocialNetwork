let root = document.querySelector('#root')

function renderBlog(){
 
    let blogView=`<div>
    <h5>Blog</h5>
    <div class="album"><img src="https://cdn.vox-cdn.com/thumbor/Q1FQM9-tHfIFOV7n0O6bzbKr20s=/0x0:4560x3300/1400x1050/filters:focal(1916x1286:2644x2014):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/60077225/House_Calls_Brooklyn_Zames_Williams_living_room_2_Matthew_Williams.0.jpg"><div>    
    <a href="url">¡Dale vida a tu espacio con plantas!</a><br>
    <div><img src=https://super.homelane.com/products/13june19/10_main-image.jpg></div>
    <a href="url">Optimiza los espacios en tu cocina</a><br>
    <div><img src="https://d4qwptktddc5f.cloudfront.net/easy_thumbnails/thumbs_IDPHOTO-DesignTV-Delta.jpg.500x0_q85_crop-smart.jpg">
    <a href="url">Tips para el cuarto de baño perfecto</a><br>
    </div>
    <div><img src="https://i.insider.com/5de8081f79d75729251eee84?width=1200&format=jpeg"></div>
    <a href="url">Errores más comunes al decorar tu cocina</a><br>
    <div><img src="https://www.thespruce.com/thmb/4-VOfg3EDWfGxNKyncpXeKyYBt0=/400x300/filters:no_upscale():max_bytes(150000):strip_icc()/Basic-Interior-Design-Principles-1-a2141ef720f344b39e82f79b3c9c46ba.jpg">
    <a href="url">Básicos de organización</a><br>
    </div>
    </div>`
    root.innerHTML = blogView
}
export default renderBlog;