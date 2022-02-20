let numbersActive = [0,1,2];
let items = document.querySelectorAll('.slider_item')
document.querySelector('.next').addEventListener('click',() => {
    for(let i = 0; i < numbersActive.length; i++){
        numbersActive[i] = numbersActive[i] + 1;
    }
    CheckNumbersActive()
    removeItems()

    for(let i = 0; i < numbersActive.length; i++){
        document.querySelector('.slider_body').append(sliderItems[numbersActive[i]])
    }
})
document.querySelector('.prev').addEventListener('click',() => {
    for(let i = 0; i < numbersActive.length; i++){
        numbersActive[i] = numbersActive[i] - 1;
    }
    CheckNumbersActive()
    removeItems()

    for(let i = 0; i < numbersActive.length; i++){
        document.querySelector('.slider_body').append(sliderItems[numbersActive[i]])
    }
})

function CheckNumbersActive(){
    for(let i = 0; i < numbersActive.length; i++){
        if(numbersActive[i] == 8){
            numbersActive[i] = 0; 
        }
        if(numbersActive[i] == -1){
            numbersActive[i] = 7; 
        }
    }
}
function removeItems(){
    document.querySelectorAll('.slider_item').forEach(item => {item.remove()})
}

let animals = [
    {src: '/images/animals/1.png', name: 'Katrine', breed: 'Cat - British Shorthair', description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations."},
    {src: '/images/animals/2.png', name: 'Jennifer', breed: 'Dog - Labrador', description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."},
    {src: '/images/animals/3.png', name: 'Woody', breed: 'Dog - Golden Retriever', description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him."},
    {src: '/images/animals/4.png', name: 'Sophia', breed: 'Dog - Shih tzu', description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice."},
    {src: '/images/animals/5.png', name: 'Timmy', breed: 'Cat - British Shorthair', description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with."},
    {src: '/images/animals/6.png', name: 'Charly', breed: 'Dog - Jack Russell Terrier ', description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy."},
    {src: '/images/animals/7.png', name: 'Scarlett', breed: 'Dog - Jack Russell Terrier', description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human."},
    {src: '/images/animals/8.png', name: 'Freddie', breed: 'Cat - British Shorthair', description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home."},
]
let sliderItems = []

for(let i = 0; i < animals.length; i++){
    let item = animals[i];
    let slider_item = document.createElement('div');
    slider_item.classList.add('slider_item');

    let img = document.createElement('img');
    img.setAttribute('src', item.src)

    let p = document.createElement('p');
    p.classList.add(item.name)
    p.innerHTML = item.name;

    let button = document.createElement('button');
    button.innerHTML = 'Learn more';
    button.setAttribute('onclick', `createWindow(${i})`)
    sliderItems.push(slider_item)

    slider_item.append(img)
    slider_item.append(p)
    slider_item.append(button)
}
function createWindow(i){
    let modal = document.querySelector('.modal');
    modal.hidden = false
    document.querySelector('.bacround').hidden = false;
    modal.querySelector('img').src = animals[i].src
    modal.querySelector('.name').innerHTML = animals[i].name
    modal.querySelector('.breed').innerHTML = animals[i].breed
    modal.querySelector('.description').innerHTML = animals[i].description
}

document.querySelector('.close').addEventListener('click', fiddenModal)
document.querySelector('.bacround').addEventListener('click', fiddenModal)
function fiddenModal(){
    document.querySelector('.modal').hidden = true
    document.querySelector('.bacround').hidden = true;
}
