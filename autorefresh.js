setInterval(function() {
    if (hero.hp > 1) {
        window.location.reload();
    }
}, Math.floor(Math.random() * 3600) + 4200);
