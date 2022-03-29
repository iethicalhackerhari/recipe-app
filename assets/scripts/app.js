
const randomC=document.getElementById('random-card')
const mainC=document.getElementById('main-card-row')
const favUl=document.getElementById('fav-ul');
const sBtn=document.getElementById('submit-btn');
const rDiv=document.getElementById('r');
const mDiv=document.getElementById('m');
const searchDiv=document.getElementById('search');

async function seachByName(name) {
    console.log(name);
    const req= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const resp= await req.json();
        // randomData=resp.meals[0];
        console.log(resp);

resp.meals.forEach(meal => {
    addData(meal);
});

        function addData(meal){
            const search=document.createElement('div');
           
            searchDiv.classList.add('search')
            search.innerHTML=`
            <div class="col-xs-12 r-card">
                
                <img src="${meal.strMealThumb}" alt="">
                <div class="r-bottom">
                <h4 class="r-text text-limit-random">${meal.strMeal}</h4>
                <i class="fas fa-add"></i>
            </div>
            </div>`
            searchDiv.appendChild(search)
        }
        
        
        



}

sBtn.addEventListener('click',()=>{
    
    const sText= document.getElementById('s-text').value;
    if(sText)
    {
   
    rDiv.classList.add('hidden');
    mDiv.classList.add('hidden');

    seachByName(sText);
    

    



    }
})








async function favGenerator(params) {
    for(k=0;k<7;k++){
        const req= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const resp= await req.json();
        randomData=resp.meals[0];
        console.log(resp.meals[0]);
     
    
    function addData(){
        const favLi=document.createElement('LI');
       
        favUl.classList.add('favLi')
        favLi.innerHTML=`
        <li class="fav ">
        <img src="${randomData.strMealThumb}" alt="" class="fav-img p-1">
        <p class="fav-name text-limit">${randomData.strMeal}</p>
    </li>`
        favUl.appendChild(favLi)
    }
    
    
    addData();
    }
}

async function randomCard(params) {
    for(i=0;i<3;i++){
        const req= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const resp= await req.json();
        randomData=resp.meals[0];
        console.log(resp.meals[0]);
     
    
    function addData(){
        const random=document.createElement('div');
       
        randomC.classList.add('random')
        random.innerHTML=`
        <div class="col-xs-12 r-card">
            <p class="r-on-text">Random Recipes</p>
            <img src="${randomData.strMealThumb}" alt="">
            <div class="r-bottom">
            <h4 class="r-text text-limit-random">${randomData.strMeal}</h4>
            <i class="fas fa-add"></i>
        </div>
        </div>`
        randomC.appendChild(random)
    }
    
    
    addData();
    }

}



async function mainCard(params) {
    for(j=0;j<5;j++){
        const req= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const resp= await req.json();
        randomData=resp.meals[0];
        console.log(resp.meals[0]);
     
    
    function addData(){
        const main=document.createElement('div');
        main.classList.add('main-card-row')
        main.classList.add('p-2')
        mainC.classList.add('main')
        main.innerHTML=`
        <div class="col-xs-4 col-md-6 main-card">
        <div class="img-fav-btn">    
        <img src=" ${randomData.strMealThumb}" alt="" class="main-card-img">
        <i class="fas fa-heart fav-btn" id="fav-btn"></i>
    </div>
        <h3 class="main-card-title"> ${randomData.strMeal}</h3>
            <p class="main-card-text">
                ${randomData.strInstructions}
            </p>
        </div>`
        mainC.appendChild(main)
        
    }
    
    
    addData();
    
    }
    
       
    
    
    const favBtn= document.getElementById('fav-btn');
    favBtn.addEventListener('click',()=>{
        favBtn.classList.toggle('fav-btn-clicked');
        console.log("clicked");
    })
    
    
}

randomCard();
mainCard();
favGenerator();

