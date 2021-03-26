namespace SpriteKind {
    export const Boss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    level += 1
    if (level == 2) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            myEnemy = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            myEnemy.follow(mySprite, 30)
            myEnemy.ay = 500
            tiles.placeOnTile(myEnemy, value)
        }
    }
    if (level == 3) {
        tiles.setTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 26))
        for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
            myEnemy = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            myEnemy.follow(mySprite, 30)
            myEnemy.ay = 500
            tiles.placeOnTile(myEnemy, value2)
        }
    }
    if (level == 4) {
        tiles.setTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
        for (let value3 of tiles.getTilesByType(assets.tile`myTile4`)) {
            myboss = sprites.create(assets.image`skylar`, SpriteKind.Boss)
            myboss.ay = 500
            tiles.placeOnTile(myboss, value3)
        }
        for (let index = 0; index < 1; index++) {
            pause(100)
            myEnemy.destroy()
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(100, 100))
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 1) {
        mySprite.setImage(img`
            . . . f f f f f . . . . . . . . 
            . f f 7 7 7 7 7 f f e f . . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 7 7 7 7 7 7 f . f f . . 
            f f 7 7 7 7 7 7 7 7 f . f f . . 
            f 7 7 7 7 f f f f f f . e f . . 
            f 7 7 7 f f f f f f . . e e . . 
            f f 7 7 f f f f f f . . e . . . 
            . f 7 7 f d d d d d . . f . . . 
            . f f 7 f d d d d . f f e f . . 
            . . f 7 f f d d . . f 7 e e . . 
            . . f 7 7 f f f f f 7 7 e f . . 
            . . f 7 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 7 f f f f f f f f . . 
            . . f 7 7 7 f . . . . f f . . . 
            . . f f f f f . . . e f . . . . 
            `)
        fire = 1
    }
    if (direction == 2) {
        mySprite.setImage(img`
            . . . . . . . . f f f f f . . . 
            . . . . f e f f 7 7 7 7 7 f f . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . f f . f 7 7 7 7 7 7 7 7 f . 
            . . f f . f 7 7 7 7 7 7 7 7 f f 
            . . f e . f f f f f f 7 7 7 7 f 
            . . e e . . f f f f f f 7 7 7 f 
            . . . e . . f f f f f f 7 7 f f 
            . . . f . . d d d d d f 7 7 f . 
            . . f e f f . d d d d f 7 f f . 
            . . e e 7 f . . d d f f 7 f . . 
            . . f e 7 7 f f f f f 7 7 f . . 
            . . f f 7 7 7 7 7 7 7 7 7 f . . 
            . . f f f f f f f f 7 7 7 f . . 
            . . . f f . . . . f 7 7 7 f . . 
            . . . . f e . . . f f f f f . . 
            `)
        fire = 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == 0) {
        mySprite.vy += -100
        pause(100)
        jump += 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (fire == 0) {
        mySprite.setImage(img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f 7 7 7 7 7 f f . 
            . . . . . f f 7 7 7 7 7 7 7 f . 
            . . . . . f 7 7 7 7 7 7 7 7 f . 
            . . . . . f 7 7 7 7 7 7 7 7 f f 
            . . . . . f f f f f f 7 7 7 7 f 
            . . . . . . f f f f f f 7 7 7 f 
            . . . . . . f f f f f f 7 7 f f 
            . . . . . . d d d d d f 7 7 f . 
            . . . . . . . d d d d f 7 f f . 
            . . . . . . . . d d f f 7 f . . 
            . e . . . . . . . f f 7 7 f . e 
            . f f . . . . . . f 7 7 7 f f f 
            . . f f f e e e f e e e f f f . 
            . . . f f f e . . f e f f f . . 
            . . . . . . . . . f f f f f . . 
            `)
        direction = 2
    }
    if (fire == 1) {
        mySprite.setImage(img`
            . . . . . . . . f f f f f . . . 
            . . . . f e f f 7 7 7 7 7 f f . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . f f . f 7 7 7 7 7 7 7 7 f . 
            . . f f . f 7 7 7 7 7 7 7 7 f f 
            . . f e . f f f f f f 7 7 7 7 f 
            . . e e . . f f f f f f 7 7 7 f 
            . . . e . . f f f f f f 7 7 f f 
            . . . f . . d d d d d f 7 7 f . 
            . . f e f f . d d d d f 7 f f . 
            . . e e 7 f . . d d f f 7 f . . 
            . . f e 7 7 f f f f f 7 7 f . . 
            . . f f 7 7 7 7 7 7 7 7 7 f . . 
            . . f f f f f f f f 7 7 7 f . . 
            . . . f f . . . . f 7 7 7 f . . 
            . . . . f e . . . f f f f f . . 
            `)
        direction = 2
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (fire == 0) {
        mySprite.setImage(img`
            . . . f f f f f . . . . . . . . 
            . f f 7 7 7 7 7 f f . . . . . . 
            . f 7 7 7 7 7 7 7 f f . . . . . 
            . f 7 7 7 7 7 7 7 7 f . . . . . 
            f f 7 7 7 7 7 7 7 7 f . . . . . 
            f 7 7 7 7 f f f f f f . . . . . 
            f 7 7 7 f f f f f f . . . . . . 
            f f 7 7 f f f f f f . . . . . . 
            . f 7 7 f d d d d d . . . . . . 
            . f f 7 f d d d d . . . . . . . 
            . . f 7 f f d d . . . . . . . . 
            e . f 7 7 f f . . . . . . . e . 
            f f f 7 7 7 f . . . . . . f f . 
            . f f f e e e f e e e f f f . . 
            . . f f f e f . . e f f f . . . 
            . . f f f f f . . . . . . . . . 
            `)
        direction = 1
    }
    if (fire == 1) {
        mySprite.setImage(img`
            . . . f f f f f . . . . . . . . 
            . f f 7 7 7 7 7 f f e f . . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 7 7 7 7 7 7 f . f f . . 
            f f 7 7 7 7 7 7 7 7 f . f f . . 
            f 7 7 7 7 f f f f f f . e f . . 
            f 7 7 7 f f f f f f . . e e . . 
            f f 7 7 f f f f f f . . e . . . 
            . f 7 7 f d d d d d . . f . . . 
            . f f 7 f d d d d . f f e f . . 
            . . f 7 f f d d . . f 7 e e . . 
            . . f 7 7 f f f f f 7 7 e f . . 
            . . f 7 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 7 f f f f f f f f . . 
            . . f 7 7 7 f . . . . f f . . . 
            . . f f f f f . . . e f . . . . 
            `)
        direction = 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (direction == 1) {
        mySprite.setImage(img`
            . . . f f f f f . . . . . . . . 
            . f f 7 7 7 7 7 f f . . . . . . 
            . f 7 7 7 7 7 7 7 f f . . . . . 
            . f 7 7 7 7 7 7 7 7 f . . . . . 
            f f 7 7 7 7 7 7 7 7 f . . . . . 
            f 7 7 7 7 f f f f f f . . . . . 
            f 7 7 7 f f f f f f . . . . . . 
            f f 7 7 f f f f f f . . . . . . 
            . f 7 7 f d d d d d . . . . . . 
            . f f 7 f d d d d . . . . . . . 
            . . f 7 f f d d . . . . . . . . 
            e . f 7 7 f f . . . . . . . e . 
            f f f 7 7 7 f . . . . . . f f . 
            . f f f e e e f e e e f f f . . 
            . . f f f e f . . e f f f . . . 
            . . f f f f f . . . . . . . . . 
            `)
        fire = 0
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d d . . . . . . . . . . . . . . 
            d d d . . . . . . . . 7 7 7 7 . 
            e e e e e e e e e e e 6 6 7 7 7 
            d d d . . . . . . . . 7 7 7 7 . 
            d d . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, 0)
        projectile.ay = 200
        sling = 1
    }
    if (direction == 2) {
        mySprite.setImage(img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f 7 7 7 7 7 f f . 
            . . . . . f f 7 7 7 7 7 7 7 f . 
            . . . . . f 7 7 7 7 7 7 7 7 f . 
            . . . . . f 7 7 7 7 7 7 7 7 f f 
            . . . . . f f f f f f 7 7 7 7 f 
            . . . . . . f f f f f f 7 7 7 f 
            . . . . . . f f f f f f 7 7 f f 
            . . . . . . d d d d d f 7 7 f . 
            . . . . . . . d d d d f 7 f f . 
            . . . . . . . . d d f f 7 f . . 
            . e . . . . . . . f f 7 7 f . e 
            . f f . . . . . . f 7 7 7 f f f 
            . . f f f e e e f e e e f f f . 
            . . . f f f e . . f e f f f . . 
            . . . . . . . . . f f f f f . . 
            `)
        fire = 0
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . d d 
            . 7 7 7 7 . . . . . . . . d d d 
            7 7 7 6 6 e e e e e e e e e e e 
            . 7 7 7 7 . . . . . . . . d d d 
            . . . . . . . . . . . . . . d d 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -200, 0)
        projectile.ay = 500
        sling = 1
    }
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    sling = 0
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (level < 4) {
        otherSprite.destroy()
        sprite.destroy()
        pause(1000)
        myEnemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        myEnemy.follow(mySprite, 30)
        myEnemy.ay = 500
        tiles.placeOnRandomTile(myEnemy, assets.tile`myTile2`)
    }
})
let skylar = 0
let bossjump = 0
let fire = 0
let myEnemy: Sprite = null
let level = 0
let direction = 0
let jump = 0
let sling = 0
let projectile: Sprite = null
let myboss: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . f f f f f . . . . . . . . 
    . f f 7 7 7 7 7 f f . . . . . . 
    . f 7 7 7 7 7 7 7 f f . . . . . 
    . f 7 7 7 7 7 7 7 7 f . . . . . 
    f f 7 7 7 7 7 7 7 7 f . . . . . 
    f 7 7 7 7 f f f f f f . . . . . 
    f 7 7 7 f f f f f f . . . . . . 
    f f 7 7 f f f f f f . . . . . . 
    . f 7 7 f d d d d d . . . . . . 
    . f f 7 f d d d d . . . . . . . 
    . . f 7 f f d d . . . . . . . . 
    e . f 7 7 f f . . . . . . . e . 
    f f f 7 7 7 f . . . . . . f f . 
    . f f f e e e f e e e f f f . . 
    . . f f f e f . . e f f f . . . 
    . . f f f f f . . . . . . . . . 
    `, SpriteKind.Player)
myboss = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
projectile = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let projectile2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(myboss, tiles.getTileLocation(100, 100))
tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
tiles.placeOnTile(projectile2, tiles.getTileLocation(100, 100))
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 250
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
info.setLife(10)
sling = 0
jump = 0
direction = 1
level = 1
let boss_health = 10
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
for (let value4 of tiles.getTilesByType(assets.tile`myTile2`)) {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 30)
    myEnemy.ay = 500
    tiles.placeOnTile(myEnemy, value4)
}
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        jump = 0
    }
})
game.onUpdate(function () {
    for (let value5 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value5.isHittingTile(CollisionDirection.Bottom)) {
            if (value5.vx < 0.1 && value5.tileKindAt(TileDirection.Left, assets.tile`myTile`)) {
                value5.vy = -175
            }
            if (value5.vx > 0.1 && value5.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
                value5.vy = -175
            }
        }
    }
})
game.onUpdate(function () {
    for (let value6 of sprites.allOfKind(SpriteKind.Boss)) {
        if (sling == 1) {
            if (bossjump == 0) {
                bossjump = 1
                value6.vy = -200
            }
        }
    }
})
forever(function () {
    music.playMelody("- - - - - - - - ", 450)
    pause(100)
    music.playMelody("G - F G F G A - ", 450)
    pause(100)
    music.playMelody("E - D E F E F G ", 400)
    for (let index = 0; index < 2; index++) {
        music.playMelody("G G A A G F G A ", 200)
        music.playMelody("F F E E F G F E ", 200)
        music.playMelody("A G A B A B G A ", 200)
        music.playMelody("A A G B A G A B ", 200)
        music.playMelody("E E D D E F E D ", 200)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("D C E D E D C D ", 150)
        music.playMelody("- - - - - - - - ", 200)
    }
})
forever(function () {
    music.playMelody("- - - - - - - - ", 450)
    pause(100)
    music.playMelody("- - - - - - - - ", 450)
    pause(100)
    music.playMelody("B - A B C5 B C5 - ", 400)
    for (let index = 0; index < 2; index++) {
        music.playMelody("B B C5 C5 B A B C5 ", 200)
        music.playMelody("B B A A B C5 B A ", 200)
        music.playMelody("D C D E D E C D ", 200)
        music.playMelody("F F E G F E F G ", 200)
        music.playMelody("B B A A B C5 B A ", 200)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("B A C5 B C5 B A B ", 150)
        music.playMelody("- - - - - - - - ", 200)
    }
})
forever(function () {
    music.playMelody("E - D E D E F - ", 450)
    pause(100)
    music.playMelody("E - D E D E F - ", 450)
    pause(100)
    music.playMelody("G - F G A G A B ", 400)
    for (let index = 0; index < 2; index++) {
        music.playMelody("E E F F E D E F ", 200)
        music.playMelody("D D C C D E D C ", 200)
        music.playMelody("F E F G F G E F ", 200)
        music.playMelody("D D C E D C D E ", 200)
        music.playMelody("G G F F G A G F ", 200)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("- - - - - - - - ", 150)
        music.playMelody("B A C5 B C5 B A B ", 200)
    }
})
forever(function () {
    if (mySprite.overlapsWith(myEnemy)) {
        tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
        info.changeLifeBy(-1)
        pause(1000)
    }
    if (mySprite.overlapsWith(projectile2)) {
        tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
        info.changeLifeBy(-1)
        pause(1000)
    }
    if (mySprite.overlapsWith(myEnemy)) {
        tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
        info.changeLifeBy(-1)
        pause(1000)
    }
})
forever(function () {
    if (myboss.overlapsWith(projectile)) {
        tiles.placeOnTile(projectile2, tiles.getTileLocation(100, 100))
        boss_health += -1
        pause(1000)
    }
})
forever(function () {
    if (skylar >= 1) {
        if (skylar <= 7) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . 8 . . . . 
                . . 1 1 1 1 1 1 1 1 1 8 e e . . 
                . . . . d d d d d d d 8 e e . . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, myboss, -100, 0)
            pause(200)
        }
    }
})
forever(function () {
    if (myboss.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        bossjump = 0
    }
})
forever(function () {
    if (myboss.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        if (myboss.vy > 1e-27) {
            skylar = Math.round(randint(1, 10))
        }
        if (myboss.vy == 0) {
            skylar = 0
        }
    }
})
forever(function () {
    if (boss_health == 0) {
        game.over(true, effects.confetti)
    }
})
