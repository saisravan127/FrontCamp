// data.items[0].snippet.title for video title
// data.items[0].snippet.thumbnails.default.url for thumbnail
// data.items[0].snippet.channelTitle for channel name
// data.items[0].snippet.description for video description

const resTemplate=document.querySelector("[result-template]");
const resContainer=document.querySelector(".search-res");
const searchBar=document.querySelector("#submitt");

searchBar.addEventListener("click",(e)=>{
    const value=document.querySelector("#search").value.toLowerCase();
    let link=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAIUX2Nwyvw1W015ZmVaaOeNAaRwoo6UKA&type=video&part=snippet&maxResults=50&q=${value}&part=snippet`
    fetch(link).then((response)=>{
        let res=response.json();
        res.then((data)=>{ 
            var DataObj = {
                'items': data, 
                'page':1,
                'rows': data.items.length
              }
            getData(DataObj);
            document.querySelector(".search-res").innerHTML="";
            buildTable();         
        })
    },(error)=>{
        console.log("error is: ",error);
    })
})


document.querySelectorAll('.page').forEach(item => {
    item.addEventListener('click', e => {
        console.log("Clicked");
        console.log(Obj);
        let searchres=document.querySelector(".search-res");
        searchres.innerHTML="";
        Obj.page=item.value; 
        console.log(item.value);
        buildTable();
    })
  })

// initial event listener
// var button=document.querySelector(".page");
// button.addEventListener("click",(e)=>{
    
// });

let Obj={}
function getData(obj){Obj=obj;}

function pagination(json, page, rows){
    var startno=(page-1)*5;
    var endno= startno+5;
    //console.log(items);
    var myArr=json.items.slice(startno,endno);
    //console.log(myArr);
    var pages=10;

    return {
        "items":myArr,
        "pages":pages,
        "rows":5
    }

}


function buildTable(){
    let data=pagination(Obj.items,Obj.page,Obj.rows);
    let myArr=data.items;
    //console.log(myArr);
    for(let i=0;i<myArr.length;i++){
        const resultcard=resTemplate.content.cloneNode(true).children[0]; 
        const title=resultcard.querySelector(".titles");   
        const thumbnail=resultcard.querySelector(".thumbnail img");
        const link=resultcard.querySelector('a');
        const channel=resultcard.querySelector(".channel");
        const desc=resultcard.querySelector(".desc");
        //console.log(myArr[i].snippet.title);
        let source=myArr[i].snippet.thumbnails.default.url;
        //console.log(myArr[i].snippet.channelTitle);
        //console.log(myArr[i].snippet.description);
        link.href=`https:youtube.com/watch?v=${myArr[i].id.videoId}`;
        title.textContent=myArr[i].snippet.title;
        thumbnail.src=source;
        channel.textContent=myArr[i].snippet.channelTitle;
        desc.textContent=myArr[i].snippet.description;
        resContainer.append(resultcard);  
        }  
        //generateButtons(data.pages);
}

