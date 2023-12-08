
const state1 = ['./imgs/state1-2.gif', './imgs/state1-1.gif'];
const state2 = ['./imgs/state2-2.gif', './imgs/state2-1.gif'];
const state3 = ['./imgs/state3-2.gif', './imgs/state3-1.gif'];

const title = document.getElementById('title');
const gif = document.getElementById('gif');
const btn_wrapper = document.querySelector('.btn-wrapper');
const yes_btn = document.getElementById('yes-btn');
const no_btn = document.getElementById('no-btn');
const radius = 100;
var counter = 0;

const preload_image = (im_url) => {
    let img = new Image();
    img.src = im_url;
};

const get_random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const map_val = (n, start1, stop1, start2, stop2) => {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};

const change_text = (text) => {
    title.innerText = text;
    yes_btn.style.display = 'none';
    no_btn.style.display = 'none';
    btn_wrapper.style.height = '0';
}

yes_btn.addEventListener('click', (e) => {
    gif.src = get_random(state2);
    change_text('Aaaaaww, I like you too');
});

no_btn.addEventListener('click', (e) => {
    if (counter < 2) {
        var rect = no_btn.getBoundingClientRect();
        var x = Math.floor(Math.random() * (window.innerWidth - rect.width))
        var y = Math.floor(Math.random() * (window.innerHeight - rect.height))
        no_btn.style.left = x+'px';
        no_btn.style.top = y+'px';
        counter++;
        return;
    }
    gif.src = get_random(state3);
    change_text('Fuawq youu...');
});

const change_pos = (e) => {
    var rect = no_btn.getBoundingClientRect();
    var marginX = parseInt(getComputedStyle(no_btn).marginLeft);

    var cx = rect.x - marginX + rect.width/2;
    var cy = rect.y + rect.height/2;

    var mx = e.clientX;
    var my = e.clientY;

    var dist = Math.sqrt(((mx-cx)**2 + (my-cy)**2))
    dist = radius - Math.min(dist, radius);
    var coff = map_val(dist, 0, radius, 0, 1);

    var new_x = rect.x - marginX + (cx - mx)*coff;
    new_x = Math.min(Math.max(new_x, 0), window.innerWidth - rect.width - marginX*2);
    var new_y = rect.y + (cy - my)*coff;
    new_y = Math.min(Math.max(new_y, marginX), window.innerHeight - rect.height - marginX);

    no_btn.style.left = new_x + 'px';
    no_btn.style.top = new_y + 'px';
};

[...state1, ...state2, ...state3].forEach((url) => { preload_image(url); });
gif.src = get_random(state1);

document.onmousemove = change_pos;
