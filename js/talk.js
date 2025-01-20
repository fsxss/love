new TypeIt("#wxfsx", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("WX && FSX")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("我们一起走过的第一个七夕...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();