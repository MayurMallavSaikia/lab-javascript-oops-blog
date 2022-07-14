/* Fill your code*/
document.getElementById('addBlog').addEventListener('click',function(){
    document.getElementById('popupContact').style.display="block";
})

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('popupContact').style.display="none";
})





class Blog
{
    constructor(title,detail)
    {
        this.title=title;
        this.detail=detail;
    }

    addImage(){

        var image=document.createElement('img');
        image.src="assets/javascript.png";
        document.getElementById("card-text").appendChild(image);
    }



    addTitle()
    {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;

    }
    addDescription()
    {
        var display = document.createElement('p');
        display.setAttribute("id","blog-description");
        document.getElementById('card-text').appendChild(display);
        display.innerHTML += this.detail+"<br><br>";
    }
}

var post=document.getElementById('post');
post.addEventListener('click',function(){
 
    var title=document.getElementById('title').value;
    var detail=document.getElementById('detail').value;

    var add_blog = new Blog(title,detail);
    add_blog.addImage();
    add_blog.addTitle();
    add_blog.addDescription();

})