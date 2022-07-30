document.querySelector('#signin').addEventListener("click",function()
{
    document.querySelector(".loginDiv").style.visibility="visible";
});
document.querySelector(".loginDiv .close-btn").addEventListener("click", function()
    {
        document.querySelector(".loginDiv").style.visibility="hidden"
    });

const cars = ["slavia.jpg", "virtus.jpg", "venue.jpg", "tigor.jpg"];
function next(src)
{
    let curr = document.querySelector("#image").src;
    let modified = curr.replace("http://127.0.0.1:5500/", "");
    let index = cars.indexOf(modified);
    let nextIndex;
    if(index==3)
    {
        nextIndex = 0;
    }
    else{
        nextIndex = index+1;
    }
    
    let path = "http://127.0.0.1:5500/"+cars[nextIndex];
    document.querySelector("#image").setAttribute("src",path);
    
}

function prev(src)
{
    let curr = document.querySelector("#image").src;
    let modified = curr.replace("http://127.0.0.1:5500/", "");
    let index = cars.indexOf(modified);
    let nextIndex;
    if(index==0)
    {
        nextIndex = 0;
    }
    else{
        nextIndex = index-1;
    }
    
    let path = "http://127.0.0.1:5500/"+cars[nextIndex];
    document.querySelector("#image").setAttribute("src",path);
}