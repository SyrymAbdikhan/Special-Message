
const state1 = ['./imgs/state1-2.gif', './imgs/state1-1.gif']
const state2 = ['./imgs/state2-2.gif', './imgs/state2-1.gif']

const title = document.getElementById('title');
const gif = document.getElementById('gif');
const yes_btn = document.getElementById('yes-btn');
const no_btn = document.getElementById('no-btn');

const get_random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

gif.src = get_random(state1);

yes_btn.addEventListener('click', e => {
    gif.src = get_random(state2);
    title.innerText = 'Aaaaaww, I like you too';
    yes_btn.style.display = 'none';
    no_btn.style.display = 'none';
})

no_btn.addEventListener('click', e => {
    var rect = no_btn.getBoundingClientRect();
    var x = Math.floor(Math.random() * (window.innerWidth - rect.width))
    var y = Math.floor(Math.random() * (window.innerHeight - rect.height))
    no_btn.style.left = x+'px';
    no_btn.style.top = y+'px';
});
