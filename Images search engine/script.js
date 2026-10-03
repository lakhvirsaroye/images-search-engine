



// first of All, add your unsplash api key in (-------YOUR_UNSPLASH_ACCESS_KEY --------) space  








let input = document.querySelector('.input');
let search = document.querySelector('.btn');
let result = document.getElementById('results');
// let more = document.getElementById('more');
// let a = 1;
let load_more = document.getElementById('load_more');
let page = 1;

let searchimages = async() =>{
    result.innerHTML = "";
    page = 1 ;
    const response = await fetch( 
        `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&page=${page}&client_id=-------YOUR_UNSPLASH_ACCESS_KEY --------`
    );
    
    const data = await response.json();
    
    console.log(data.results);

     data.results.forEach(photo=> {
        let url = photo.urls.small;
        
        let img = document.createElement('img');
        img.src = url;
        
        result.appendChild(img);
    });
    
}


search.addEventListener('click', async ()=>{
   await searchimages();
        load_more.style.display = 'block';

})

load_more.addEventListener('click',()=>{
    page ++;
    let more = async() =>{
        const response = await fetch( 
            `https://api.unsplash.com/search/photos?query=${input.value}&per_page=15&page=${page}&client_id="-------YOUR_UNSPLASH_ACCESS_KEY --------"`
    );
    
    const data = await response.json();
    
    console.log(data.results);

    data.results.forEach(photo=> {
        let url = photo.urls.small;
        
        let img = document.createElement('img');
        img.src = url;
        
        result.append(img);
    });
}
more();
})