setInterval(function() {
    if (hero.hp > 1) {
        window.location.reload();
    }
}, Math.floor(Math.random() * 360000) + 420000)
