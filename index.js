let checkbox = document.querySelector('input[name=theme]')

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    }else{
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

let pokemonType = document.getElementsByClassName("card");

const plantsType = document.getElementsByClassName("fa-leaf");
const poisonType = document.getElementsByClassName("fa-skull-crossbones");
const waterType = document.getElementsByClassName("fas fa-water");
const fireType = document.getElementsByClassName("fas fa-fire");
const pawType = document.getElementsByClassName("fas fa-paw");
const infoType = document.getElementsByClassName("fas fa-feather-alt");
const insectType = document.getElementsByClassName("fas fa-bug");

pokemonType.addEventListener('onclick', function type() {
    if () {

    };
});
