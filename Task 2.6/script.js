let resTemplate=document.querySelector("#video-template").content;


let sbutton=document.querySelector("#sbutton");

sbutton.addEventListener("click",()=>{
    const value=document.querySelector("#search").value;
    document.querySelector(".container").innerHTML="";
    let link=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAIUX2Nwyvw1W015ZmVaaOeNAaRwoo6UKA&type=video&part=snippet&maxResults=15&q=${value}`;
    fetch(link).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res.items);
        renderVideos(res.items);
    })
})

function renderVideos(details){
    let i=1;
    for(let vid of details){
        buildtable(vid,i++);
    }
    display(1);
}

function buildtable(details,i){
    let video=document.importNode(resTemplate, true);
    console.log(details);
    video.querySelector(".video-container").setAttribute("id", "video" + i);
    video.querySelector(".title").textContent = details.snippet.title;
    video.querySelector(".title").setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details.id.videoId + "')");
    video.querySelector(".channel").textContent = details.snippet.channelTitle;
    video.querySelector(".channel").setAttribute("onclick", "window.open('https://www.youtube.com/channel/" + details.snippet.channelId + "')");
    video.querySelector(".description").textContent = details.snippet.description;
    video.querySelector(".thumbnail").src = details.snippet.thumbnails.medium.url;
    video.querySelector(".thumbnail").setAttribute("onclick", "window.open('https://www.youtube.com/watch?v=" + details.id.videoId + "')");
    document.querySelector(".container").appendChild(video);

}

function display(id){
    for (let i = 1; i <= 15; i++)
        document.querySelector("#video" + i).style.display = "none";
    let count=vidcount();
    while (Math.ceil(15 / count) < id)
        id--;
    for (let i = (count * (id - 1)) + 1; i <= (id * count) && i <= 15; i++)
        document.querySelector("#video" + i).style.display = "block";
    pagination(Math.ceil(15 / count));
    document.querySelector("#page" + id).classList.add("active");


}

function vidcount() {
    let divWidth = document.querySelectorAll(".container")[0].offsetWidth;
    let videoCount = (divWidth < 450) ? 1 : (divWidth < 700) ? 2 : (divWidth < 1100) ? 3 : (divWidth < 1500) ? 4 : 5;
    document.querySelectorAll(".container")[0].style.setProperty('grid-template-columns', 'repeat(' + videoCount + ', 1fr)')
    return videoCount;
}

function pagination(count){
    let pages=document.querySelector(".pagination");
    pages.textContent="";
    for (let i = 1; i <= count; i++) {
        let page = document.createElement("div");
        page.setAttribute("class", "page");
        let btn = document.createElement("button");
        btn.setAttribute("id", "page" + i);
        let pageId = i;
        btn.setAttribute("pageId", pageId)
        btn.setAttribute("onclick", "display(" + pageId + ")");
        btn.textContent = i;
        page.appendChild(btn);
        pages.appendChild(page);
    }

}

window.onresize = function () {
    display(document.querySelectorAll(".active")[0].getAttribute("id").substring(4));
}