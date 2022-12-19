namespace SpriteKind {
    export const Pila = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const Axe = SpriteKind.create()
    export const Dead = SpriteKind.create()
    export const deadBarbarian = SpriteKind.create()
    export const oracle = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const explosion = SpriteKind.create()
    export const ammo = SpriteKind.create()
    export const axer = SpriteKind.create()
    export const superammo = SpriteKind.create()
    export const fireball = SpriteKind.create()
    export const vendor = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const portalre = SpriteKind.create()
    export const precoin = SpriteKind.create()
    export const blandius = SpriteKind.create()
    export const door = SpriteKind.create()
    export const B2 = SpriteKind.create()
    export const b2project = SpriteKind.create()
    export const jedi = SpriteKind.create()
    export const sith = SpriteKind.create()
    export const armorer = SpriteKind.create()
    export const arrows = SpriteKind.create()
    export const teammate1 = SpriteKind.create()
    export const teammate2 = SpriteKind.create()
    export const teammate3 = SpriteKind.create()
    export const B3 = SpriteKind.create()
    export const B4 = SpriteKind.create()
    export const triggerpoint = SpriteKind.create()
    export const introselection = SpriteKind.create()
    export const stargame = SpriteKind.create()
    export const selector = SpriteKind.create()
}
namespace StatusBarKind {
    export const ammo = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.B3, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.blandius, assets.tile`myTile16`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile80`, function (sprite, location) {
    for (let value6 of sprites.allOfKind(SpriteKind.B3)) {
        value6.follow(super_markie, 50)
    }
})
sprites.onOverlap(SpriteKind.B3, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-2)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (intro_not_done == 1) {
        if (started_game == 1) {
            if (super_markie.vy == 0) {
                if (jetpack == 1) {
                    super_markie.vy = -250
                } else {
                    super_markie.vy = -170
                }
            }
        } else {
            if (loadingsaves == 1 || newgameselected == 1) {
                if (loadfileselect == 0 || fileselection == 0) {
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    if (fileselection == 0) {
                        fileselection = 2
                    } else {
                        loadfileselect = 2
                    }
                } else if (loadfileselect == 1 || fileselection == 1) {
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    if (fileselection == 1) {
                        fileselection = 0
                    } else {
                        loadfileselect = 0
                    }
                } else if (loadfileselect == 2 || fileselection == 2) {
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    if (fileselection == 2) {
                        fileselection = 1
                    } else {
                        loadfileselect = 1
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.B4, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.jedi, SpriteKind.Player, function (sprite, otherSprite) {
    if (jedi_animation == 0) {
        jedi_animation = 1
        animation.runImageAnimation(
        jedi,
        [img`
            ..........7....bbbbbbb..........
            ..........7...bbfbbbfbb.........
            ..........7...bbbbbbbbb.........
            ..........7....bfffffb..........
            ..........7.....fffff...........
            ..........7.....e44e............
            ..........7....ee44ee...........
            ..........7...e444444e..........
            ..........7...e4e44e4e..........
            ..........7..e44e44e4e..........
            ..........b.e44eeee44e..........
            ..........eee4e44444e...........
            ..........eeeeeeeeee............
            ..........b.....e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...........7...bbbbbbb..........
            ...........7..bbfbbbfbb.........
            ...........7..bbbbbbbbb.........
            ...........7...bfffffb..........
            ...........7....fffff...........
            ...........7....e44e............
            ...........7...ee44ee...........
            ...........7..e444444e..........
            ...........7..e4e44e4e..........
            ...........7..e4e44e4e..........
            ...........b.e4eeee44e..........
            ...........eee444444e...........
            ...........eeeeeeeee............
            ...........b....e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ............7..bbbbbbb..........
            ............7.bbfbbbfbb.........
            ............7.bbbbbbbbb.........
            ............7..bfffffb..........
            ............7...fffff...........
            ............7...e44e............
            ............7..ee44ee...........
            ............7.e444444e..........
            ............7.e4e44e4e..........
            ............7.e4e44e4e..........
            ............be4eeee44e..........
            ............ee444444e...........
            ............eeeeeeee............
            ............b...e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            .............7.bbbbbbb..........
            .............7bbfbbbfbb.........
            .............7bbbbbbbbb.........
            .............7.bfffffb..........
            .............7..fffff...........
            .............7..e44e............
            .............7.ee44ee...........
            .............7e444444e..........
            .............7e4e44e4e..........
            .............7e4e44e4e..........
            .............beeeee44e..........
            .............ee44444e...........
            .............eeeeeee............
            .............b..e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ..............7bbbbbbb..........
            ..............7bfbbbfbb.........
            ..............7bbbbbbbb.........
            ..............7bfffffb..........
            ..............7.fffff...........
            ..............7.e44e............
            ..............7ee44ee...........
            ..............7444444e..........
            ..............74e44e4e..........
            ..............74e44e4e..........
            ..............beeee44e..........
            ..............e44444e...........
            ..............eeeeee............
            ..............b.e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...............7bbbbbb..........
            ..............b7fbbbfbb.........
            ..............b7bbbbbbb.........
            ...............7fffffb..........
            ...............7fffff...........
            ...............7e44e............
            ...............7e44ee...........
            ...............744444e..........
            ...............7e44e4e..........
            ...............7e44e4e..........
            ...............beee44e..........
            ...............e4444e...........
            ...............eeeee............
            ...............be44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...............bbbbbbb..........
            ..............bbfbbbfbb.........
            ..............bbbbbbbbb.........
            ...............bfffffb.7........
            ................fffff.7.........
            ................e44e.7..........
            ..............ee444e7...........
            .............e4444474e..........
            .............e4e447e4e..........
            .............e4e474e4e..........
            .............e44bee44e..........
            .............e4ee444e...........
            ..............eeeeee............
            .............b..e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...............bbbbbbb..........
            ..............bbfbbbfbb.........
            ..............bbbbbbbbb.........
            ...............bfffffb..........
            ................fffff...........
            ................e44e............
            ............eeee444ee...........
            ...........e444444444e..........
            ...........e44.e444e4e..........
            ............ee4e444e4e..........
            .............beeb77777777777....
            .............e44e444e...........
            ..............eeeeee............
            ................b44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...............bbbbbbb..........
            ..............bbfbbbfbb.........
            ..............bbbbbbbbb.........
            ...............bfffffb..........
            ................fffff...........
            ................e44e............
            ............eeee444ee...........
            ...........e444444444e..........
            ...........e44.e444e4e..........
            ............ee4e444e4e..........
            .............beeb7777e..........
            .............e44e444e...........
            ..............eeeeee............
            ................b44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...............bbbbbbb..........
            ..............bbfbbbfbb.........
            ..............bbbbbbbbb.........
            ...............bfffffb..........
            ................fffff...........
            ................e44e............
            ............eeee444ee...........
            ...........e444444444e..........
            ...........e44.e444e4e..........
            ............ee4e444e4e..........
            .............e7ee44e4e..........
            .............e44e444e...........
            ..............eeeeee............
            ................e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...............bbbbbbb..........
            ..............bbfbbbfbb.........
            ..............bbbbbbbbb.........
            ...............bfffffb..........
            ................fffff...........
            ................e44e............
            ............eeee444ee...........
            ...........e444444444e..........
            ...........e44.e444e4e..........
            ............ee4e444e4e..........
            ..........777beeb44e4e..........
            .............e44e444e...........
            ..............eeeeee............
            ................e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `,img`
            ...............bbbbbbb..........
            ..............bbfbbbfbb.........
            ..............bbbbbbbbb.........
            ...............bfffffb..........
            ................fffff...........
            ................e44e............
            ............eeee444ee...........
            ...........e444444444e..........
            ...........e44.e444e4e..........
            ............ee4e444e4e..........
            ..77777777777beeb44e4e..........
            .............e44e444e...........
            ..............eeeeee............
            ................e44e............
            ................e44e............
            ................e44e............
            ................e44e............
            ..............eee44eee..........
            .............e44444444e.........
            .............e444ee444e.........
            ............ee44eeee44ee........
            ............e444e..e444e........
            ............e44ee..ee44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            ............e44e....e44e........
            `],
        50,
        false
        )
        info.changeLifeBy(-1)
        pause(1000)
        jedi_animation = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    arrows = sprites.create(img`
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . 2 . . 2 . . 2 . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . 2 . . . 2 . . . . . 2 . . 
        . . . . 2 . . . . . . . 2 . . . 
        2 2 2 2 2 2 . . 2 . . 2 2 2 2 2 
        . . . . 2 . . . . . . . 2 . . . 
        . . . 2 . . . . 2 . . . . 2 . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 2 . 2 . 2 . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        `, SpriteKind.arrows)
    tiles.placeOnTile(arrows, location)
    arrows.say("press A to start the level on this planet")
    question = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    if (usingfileN == 0) {
        fileN1 += 1
        fileN1_function()
    } else if (usingfileN == 1) {
        fileN2 += 1
        fileN2_function()
    } else if (usingfileN == 2) {
        fileN3 += 1
        fileN3_function()
    }
    if (current_level == 7) {
        info.stopCountdown()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (intro_not_done == 1) {
        if (hidden_egg_true == 1) {
            if (walking_side == 0) {
                music.pewPew.play()
                if (tutorial_done == 0) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . 8 8 8 8 8 . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, 1001, 2)
                } else {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . 8 8 8 8 8 8 8 8 9 . . . . 
                        . 8 8 8 8 8 8 8 8 8 8 8 9 . . . 
                        . . . . . . 9 9 9 9 9 9 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, 1001, 2)
                }
            } else {
                music.pewPew.play()
                if (tutorial_done == 0) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . 8 8 8 8 8 . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, -1001, 2)
                } else {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . 8 8 8 8 8 8 8 8 9 . . . . 
                        . 8 8 8 8 8 8 8 8 8 8 8 9 . . . 
                        . . . . . . 9 9 9 9 9 9 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, -1001, 2)
                }
            }
        }
        if (ammo2 > 0) {
            if (walking_side == 0) {
                music.pewPew.play()
                if (tutorial_done == 0) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . 8 8 8 8 8 . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, 1001, 2)
                } else {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . 8 8 8 8 8 8 8 8 9 . . . . 
                        . 8 8 8 8 8 8 8 8 8 8 8 9 . . . 
                        . . . . . . 9 9 9 9 9 9 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, 1001, 2)
                }
                pause(1000)
            } else {
                music.pewPew.play()
                if (tutorial_done == 0) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . 8 8 8 8 8 . . . . . . . 
                        . . . . . 9 9 9 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, -1001, 2)
                } else {
                    projectile2 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . 8 8 8 8 8 8 8 8 9 . . . . 
                        . 8 8 8 8 8 8 8 8 8 8 8 9 . . . 
                        . . . . . . 9 9 9 9 9 9 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, super_markie, -1001, 2)
                }
                pause(1000)
            }
            ammo2 += -10
            statusbar.value += -10
        } else {
            if (hidden_egg_true == 0) {
                game.splash("no ammo")
            }
        }
    }
})
function functionfunction () {
    destroy_all()
    selector_side = 0
    newgameselected = 0
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1f5ffffff555fffff5ffff5555fffff5555ffffff5ffff5fffff5f55555f1ffffffff
        ffffffffffffffff1ff555555555ff5ffff555fff55555ffff5fff5f555f5fffffffff5ffff1fffffffffffffff1f5fffff5fff5fff5f5fff5fff5fff5ffff5ffff5f5fff55fff55f5fffff1ffffffff
        ffffffffffffffff1f5fffff5ffff5f5fff5ff5ffff5ffffff5fff5f5fff5fffffffff5ffff1fffffffffffffff1f5fffff5fff5fff5f5fff5fff5fff5fffffffff5f5fff5f5f5f5f5fffff1ffffffff
        ffffffffffffffff1f5fffff5ffff5f5fff5ff5ffff5ffffff55ff5f5fff5fffffffff5ffff1fffffffffffffff1f5fffff5fff5ff5fff5ff5fff5fff5ffffffff5fff5ff5ff5ff5f5fffff1ffffffff
        ffffffffffffffff1ff55fff5fff5fff5ff555fffff5ffffff5f5f5f55fff5fffffff5fffff1fffffffffffffff1f5fffff5fff5ff5fff5ff5fff5fff5ffffffff5fff5ff5fffff5f555fff1ffffffff
        ffffffffffffffff1ffff5ff5fff55555ff55ffffff5ffffff5ff55f5fffff5fffff5ffffff1fffffffffffffff1f5fffff5fff5f5fffff5f5fff5fff5fffffff5fffff5f5fffff5f5fffff1ffffffff
        ffffffffffffffff1ffff5ff5ff5fffff5f5f5fffff5ffffff5fff5f5ffffff5f5f5fffffff1fffffffffffffff1f5fffff5fff5f5555555f5fff5fff5fff555f5555555f5fffff5f5fffff1ffffffff
        ffffffffffffffff1f555fff5ff5fffff5f5ff5ffff5ffffff5fff5f555fffff5f5ffffffff1fffffffffffffff1f5fffff5fff5f5fffff5f5fff5fff5ffff5ff5fffff5f5fffff5f5fffff1ffffffff
        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1ff5555ff555ff5fffff5f5555fffff5555fff5fffff5f5fffff5f55555f1ffffffff
        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1ffff5555fffff5fffff5fff5f555ffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1fff5ffffffff5f5ffff55f55f5ffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1fff5ffffffff5f5ffff5f5f5f5ffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1fff5fffffff5fff5fff5fff5f55fffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1fff5ffff5ff55555fff5fff5f5ffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1fff5ffff5f5fffff5ff5fff5f5ffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1ffff5555ff5fffff5ff5fff5f555ffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setTilemap(tilemap`level20`)
    if (statuson == 1) {
        statuson = 0
        statusbar.setColor(15, 15)
    }
}
sprites.onOverlap(SpriteKind.B2, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-2)
})
function fileN2_function () {
    fileselection = 4
    if (fileN2 == 0) {
        current_level = 0
    } else if (fileN2 == 1) {
        current_level = 1
    } else if (fileN2 == 2) {
        current_level = 2
    } else if (fileN2 == 3) {
        current_level = 3
    } else if (fileN2 == 4) {
        current_level = 4
    } else if (fileN2 == 5) {
        current_level = 5
    } else if (fileN2 == 6) {
        current_level = 6
    } else {
        current_level = 7
    }
    if (current_level == 7) {
        planetary_level = 1
        current_level = 5
        info.stopCountdown()
    }
    startlevel()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ammo, function (sprite, otherSprite) {
    otherSprite.destroy()
    ammo2 += 30
    statusbar.value += 30
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`EI`, function (sprite, location) {
    if (hidden_egg_true == 0) {
        hidden_egg_true += 1
        super_markie.say("power!!!!!! unlimited powwweeeerrr!!!!!", 5000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.precoin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (intro_not_done == 1) {
        if (started_game == 1) {
            if (current_level <= 5 || current_level == 7) {
                if (super_markie.vy == 0) {
                    if (jetpack == 1) {
                        super_markie.vy = -250
                    } else {
                        super_markie.vy = -170
                    }
                }
            } else {
                if (question == 1) {
                    current_level = 7
                    startlevel()
                    question = 0
                }
            }
        } else if (selector_side == 1 && newgameselected == 0) {
            if (savefileused1 == 0 && (savefileused2 == 0 && savefileused3 == 0)) {
                game.splash("there are no savefiles you can load in")
            } else {
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                newgameselected = 1
                loadingsaves = 1
                loadfileselect = 0
            }
        } else if (0 == save_question) {
            if (askingN1 == 1) {
                usingfileN = 0
                fileN1 = 0
                question_activated = 0
                BASICS()
                fileN1_function()
                askingN1 = 0
                save_question = 2
                savefileused1 = 1
            } else if (askingN2 == 1) {
                usingfileN = 1
                fileN2 = 0
                question_activated = 0
                BASICS()
                fileN2_function()
                askingN2 = 0
                save_question = 2
                savefileused2 = 1
            } else if (askingN3 == 1) {
                usingfileN = 2
                fileN3 = 0
                question_activated = 0
                BASICS()
                fileN3_function()
                askingN3 = 0
                save_question = 2
                savefileused3 = 1
            }
        } else if (newgameselected == 0) {
            if (selector_side == 0) {
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                newgameselected = 1
                selector_side = 0
                fileselection = 0
            }
        } else {
            if (fileselection == 0) {
                if (savefileused1 == 0) {
                    savefileused1 = 1
                    usingfileN = 0
                    fileselection = 3
                    BASICS()
                    fileN1_function()
                } else if (savefileused1 == 1) {
                    askingN1 = 1
                    save_question = 1
                    question_activated = 1
                    fileselection = 3
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5ffff5ff5555fff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5ffff5ff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff55ff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fffff5ff5fff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5f5f5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fffff5ff5fff55fffff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5ff55f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5555ff55555fffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    game.splash("this save file is already used, would you like to overwrite this save file?")
                }
            } else if (fileselection == 1) {
                if (savefileused2 == 0) {
                    savefileused2 = 1
                    usingfileN = 1
                    fileselection = 3
                    BASICS()
                    fileN2_function()
                } else if (savefileused2 == 1) {
                    askingN2 = 1
                    save_question = 1
                    question_activated = 1
                    fileselection = 3
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5ffff5ff5555fff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5ffff5ff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff55ff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fffff5ff5fff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5f5f5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fffff5ff5fff55fffff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5ff55f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5555ff55555fffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    game.splash("this save file is already used, would you like to overwrite this save file?")
                }
            } else if (fileselection == 2) {
                if (savefileused3 == 0) {
                    savefileused3 = 1
                    usingfileN = 2
                    fileselection = 3
                    BASICS()
                    fileN3_function()
                } else if (savefileused3 == 1) {
                    askingN3 = 1
                    save_question = 1
                    question_activated = 1
                    fileselection = 3
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5ffff5ff5555fff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5ffff5ff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff55ff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fffff5ff5fff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5f5f5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fffff5ff5fff55fffff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5ff55f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffff55ffff5555ff55555fffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    game.splash("this save file is already used, would you like to overwrite this save file?")
                }
            } else if (1 == save_question) {
                fileselection = 0
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                askingN1 = 0
                askingN2 = 0
                askingN3 = 0
                save_question = 2
            } else {
                if (loadfileselect == 0 && savefileused1 == 1) {
                    loading_screen = 1
                    usingfileN = 0
                    fileN1_function()
                    BASICS()
                    super_markie.destroy()
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5555fff5fffff5555fffff5ffffff5555ffff5555fffffffffffffffffffffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5fffffff5f5ffff5ffffffff5ffffffff5fffffffffffff5ffff5ffffff55555ffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5ffffff5fff5fff5ffffffff5fffffffff5fffffffffff5ffff5f5fffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5ffffff5fff5fff5ffffffff5ffffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5555fff5fffff5ffffff5fff5ffff5555ffff5ffffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff555ffff5fff5ffffffff5fff555ffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5ffffff55555ffffffff5fff5fffffffffff5fffffff5fffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5ffffff5fff5ffffffff5fff5ffffffffffff5fffff5ffffff55555ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5ffffffffffff5fffff5ffffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5fffffffffffff5f5f5ffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5ffffffffffffff5f5fffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fffffff5555f5555ff5fffff5ff55555ffff5555fffffffffff5f5fffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff5fff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    pause(2000)
                    loading_screen = 0
                    fileN1_function()
                    BASICS()
                } else if (loadfileselect == 1 && savefileused2 == 1) {
                    loading_screen = 1
                    usingfileN = 1
                    fileN2_function()
                    BASICS()
                    super_markie.destroy()
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5555fff5fffff5555fffff5ffffff5555ffff5555fffffffffffffffffffffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5fffffff5f5ffff5ffffffff5ffffffff5fffffffffffff5ffff5ffffff55555ffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5ffffff5fff5fff5ffffffff5fffffffff5fffffffffff5ffff5f5fffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5ffffff5fff5fff5ffffffff5ffffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5555fff5fffff5ffffff5fff5ffff5555ffff5ffffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff555ffff5fff5ffffffff5fff555ffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5ffffff55555ffffffff5fff5fffffffffff5fffffff5fffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5ffffff5fff5ffffffff5fff5ffffffffffff5fffff5ffffff55555ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5ffffffffffff5fffff5ffffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5fffffffffffff5f5f5ffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5ffffffffffffff5f5fffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fffffff5555f5555ff5fffff5ff55555ffff5555fffffffffff5f5fffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff5fff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    pause(2000)
                    loading_screen = 0
                    fileN2_function()
                    BASICS()
                } else if (loadfileselect == 2 && savefileused3 == 1) {
                    loading_screen = 1
                    usingfileN = 2
                    fileN3_function()
                    BASICS()
                    super_markie.destroy()
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5555fff5fffff5555fffff5ffffff5555ffff5555fffffffffffffffffffffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5fffffff5f5ffff5ffffffff5ffffffff5fffffffffffff5ffff5ffffff55555ffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5ffffff5fff5fff5ffffffff5fffffffff5fffffffffff5ffff5f5fffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fff5ff5fffff5ffffff5fff5fff5ffffffff5ffffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5555fff5fffff5ffffff5fff5ffff5555ffff5ffffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff555ffff5fff5ffffffff5fff555ffffffff5fffffffff5ffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5ffffff55555ffffffff5fff5fffffffffff5fffffff5fffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5ffffff5fff5ffffffff5fff5ffffffffffff5fffff5ffffff55555ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5ffffffffffff5fffff5ffffff5fff5ffffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5fffffffffffff5f5f5ffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5ffffff5fffff5fffff5fffff5fffffff5fff5ffffffffffffff5f5fffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffff5fffffff5555f5555ff5fffff5ff55555ffff5555fffffffffff5f5fffffff5fffff5fffff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff5fff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    pause(2000)
                    loading_screen = 0
                    fileN3_function()
                    BASICS()
                }
            }
        }
    }
})
function destroy_all () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.armorer)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Axe)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.coin)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.precoin)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.portal)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.ammo)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.fireball)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.oracle)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.teammate3)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.teammate2)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.teammate1)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.blandius)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.triggerpoint)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.oracle)) {
        value2.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.jedi)) {
        value2.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.axer, function (sprite, otherSprite) {
    otherSprite.destroy()
    barbarian = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . e . e . . . . . . . . 
        . . f f . . . e . . . . . . . . 
        . . f 5 . . e e e . . . . . . . 
        . . f . 5 . 4 e 4 . . . . . . . 
        . . . . 5 4 e 4 e . . . . . . . 
        . . . . 5 4 4 e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e . e . . . . . . . . 
        `, SpriteKind.Enemy)
    barbarian.setPosition(spawn.x + 0, spawn.x + -10)
    barbarian.follow(super_markie, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.fireball, function (sprite, otherSprite) {
    if (alldestruction == 1) {
        otherSprite.destroy()
        sprite.destroy()
        info.changeScoreBy(1)
    }
})
function BASICS () {
    super_markie = sprites.create(assets.image`CT_0545894 nickname super marcus`, SpriteKind.Player)
    controller.moveSprite(super_markie, 100, 0)
    if (loading_screen == 0) {
        scene.cameraFollowSprite(super_markie)
    }
    info.setLife(2)
    super_markie.setBounceOnWall(false)
    ammobar()
}
function intro () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(1500)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff9ffffffffffffff9ffffffffff9999999fffffffff9ffffffff9ffffff9999999999ffffffff9999999999999fffffffffffffffff9fffff9ffffffff99999999ffffffffffff
        fffffffffffffffffff9ffffffffffffff9fffffffff9fffffff9fffffff99fffffff9ffffff9ffffffffff9fffffffffffff9fffffffffffffffffffffff9fffff9ffffffff9fffffffffffffffffff
        fffffffffffffffffff9ffffffffffffff9fffffffff9fffffff9fffffff99fffffff9ffffff9ffffffffffffffffffffffff9ffffff999999999ffffffff9fffff9ffffffff9fffffffffffffffffff
        ffffffffffffffffff9f9fffffffffffff9fffffffff9fffffff9fffffff9f9ffffff9ffffff9ffffffffffffffffffffffff9ffffffffff9fffffffffff99fffff99fffffff9fffffffffffffffffff
        ffffffffffffffffff9f9fffffffffffff9fffffffff9fffffff9fffffff9f9ffffff9ffffff9ffffffffffffffffffffffff9ffffffffff9fffffffffff9f9fff9f9fffffff9fffffffffffffffffff
        ffffffffffffffffff9f9fffffffffffff9fffffffff9fffffff9ffffff9ff9ffffff9ffffff9ffffffffffffffffffffffff9ffffffffff9ffffffffff9ff9fff9ff9ffffff9fffffffffffffffffff
        fffffffffffffffff9fff9ffffffffffff9fffffffff9fffffff9ffffff9fff9ffff9fffffff9ffffffffffffffffffffffff9ffffffffff9ffffffffff9fff9f9fff9ffffff9fffffffffffffffffff
        fffffffffffffffff9fff9ffffffffffff9fffffffff9fffffff9ffffff9fff9ffff9fffffff9ffffffffffffffffffffffff9ffffffffff9ffffffffff9fff9f9fff9ffffff99999fffffffffffffff
        fffffffffffffffff9fff9ffffffffffff9fffffffff9fffffff9fffff9ffff9ffff9fffffff9ffffffffffffffffffffffff9ffffffffff9fffffffff9ffff9f9ffff9fffff9fffffffffffffffffff
        ffffffffffffffff9fffff9fffffffffff9fffffffff9fffffff9fffff9fffff9fff9fffffff9ffffffff99999fffffffffff9ffffffffff9fffffffff9fffff9fffff9fffff9fffffffffffffffffff
        ffffffffffffffff9999999fffffffffff9fffffffff9fffffff9fffff9fffff9fff9fffffff9ffffffffff9fffffffffffff9ffffffffff9fffffffff9fffffffffff9fffff9fffffffffffffffffff
        fffffffffffffff9fffffff9ffffffffff9fffffffff9fffffff9fffff9fffff9ff9ffffffff9ffffffffff9fffffffffffff9ffffffffff9ffffffff9fffffffffffff9ffff9fffffffffffffffffff
        fffffffffffffff9fffffff9ffffffffff9fffffffff9fffffff9ffff9fffffff9f9ffffffff9ffffffffff9fffffffffffff9ffffffffff9ffffffff9fffffffffffff9ffff9fffffffffffffffffff
        fffffffffffffff9fffffff9ffffffffff9fffffffff9fffffff9ffff9fffffff9f9ffffffff9ffffffffff9fffffffffffff9ffffffffff9fffffff9fffffffffffffff9fff9fffffffffffffffffff
        ffffffffffffff9fffffffff9fffffffff9fffffffff9fffffff9ffff9fffffff9f9ffffffff9ffffffffff9fffffffffffff9ffffffffff9fffffff9fffffffffffffff9fff9fffffffffffffffffff
        ffffffffffffff9fffffffff9ffffffffff999999ffff9999999fffff9ffffffff99fffffffff9999999999ffffffffffffff9ffffff999999999fff9fffffffffffffff9fff99999999ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff9ffffffffffff9999999999fffffffffff9999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff9fffffffffff9ffffffffff9fffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff9f9ffffffffff9ffffffffffffffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff9f9ffffffffff9ffffffffffffffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff9f9ffffffffff9ffffffffffffffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9fff9fffffffff9ffffffffffffffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9fff9fffffffff9ffffffffffffffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff9fff9fffffffff9ffffffffffffffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff9fffff9ffffffff9ffffffffffffffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff9999999ffffffff9ffffffff99999fffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff9fffffff9fffffff9ffffffffff9fffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff9fffffff9fffffff9ffffffffff9fffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff9fffffff9fffffff9ffffffffff9fffffffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff9fffffffff9ffffff9ffffffffff9fffffffff9fffffff9ffffff999fff999fff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff9fffffffff9ffffff9ffffffffff9fffffffff9fffffff9ffffff9f9fff9f9fff9f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff9999999999fffffffffff9999999fffffff999fff999fff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(1500)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff9ffffffff9ffffffffffff9ffffffffffff9999999999ffffffff9fffffff9fffffffffff9ffffff9fffffffffffffff9ff9ffffffffff9fffffffffffffffffffffff
        fffffffffffffffffffffffff99fffffff9fffffffffffff9fffffffffff9ffffffffff9fffffff9fffffff9fffffffffff9fffffff9fffffffffffff9ffff9ffffffff9ffffffffffffffffffffffff
        fffffffffff999999999fffff99fffffff9fffffffffffff9fffffffffff9ffffffffffffffffff9fffffff9fffffffffff9ffffffff9fffffffffff9fffff9ffffffff9ffffffffffffffffffffffff
        fffffffffffffff9fffffffff9f9ffffff9ffffffffffff9f9ffffffffff9fffffffffffffffff9f9ffffff9ffffffffff9f9ffffffff9fffffffff9fffffff9ffffff9fffffffffffffffffffffffff
        fffffffffffffff9fffffffff9f9ffffff9ffffffffffff9f9ffffffffff9fffffffffffffffff9f9ffffff9ffffffffff9f9fffffffff9fffffff9fffffffff9ffff9ffffffffffffffffffffffffff
        fffffffffffffff9ffffffff9ff9ffffff9ffffffffffff9f9ffffffffff9fffffffffffffffff9f9ffffff9ffffffffff9f9ffffffffff9fffff9ffffffffff9ffff9ffffffffffffffffffffffffff
        fffffffffffffff9ffffffff9fff9ffff9ffffffffffff9fff9fffffffff9ffffffffffffffff9fff9fffff9fffffffff9fff9ffffffffff9fff9ffffffffffff9ff9fffffffffffffffffffffffffff
        fffffffffffffff9ffffffff9fff9ffff9ffffffffffff9fff9fffffffff9ffffffffffffffff9fff9fffff9fffffffff9fff9fffffffffff9f9ffffffffffffff99ffffffffffffffffffffffffffff
        fffffffffffffff9fffffff9ffff9ffff9ffffffffffff9fff9fffffffff9ffffffffffffffff9fff9fffff9fffffffff9fff9ffffffffffff9ffffffffffffffff9ffffffffffffffffffffffffffff
        fffffffffffffff9fffffff9fffff9fff9fffffffffff9fffff9ffffffff9ffffffff99999ff9fffff9ffff9ffffffff9fffff9ffffffffff9f9ffffffffffffff9fffffffffffffffffffffffffffff
        fffffffffffffff9fffffff9fffff9fff9fffffffffff9999999ffffffff9ffffffffff9ffff9999999ffff9ffffffff9999999fffffffff9fff9ffffffffffff9ffffffffffffffffffffffffffffff
        fffffffffffffff9fffffff9fffff9ff9fffffffffff9fffffff9fffffff9ffffffffff9fff9fffffff9fff9fffffff9fffffff9fffffff9fffff9fffffffffff9ffffffffffffffffffffffffffffff
        fffffffffffffff9ffffff9fffffff9f9fffffffffff9fffffff9fffffff9ffffffffff9fff9fffffff9fff9fffffff9fffffff9ffffff9fffffff9fffffffff9fffffffffffffffffffffffffffffff
        fffffffffffffff9ffffff9fffffff9f9fffffffffff9fffffff9fffffff9ffffffffff9fff9fffffff9fff9fffffff9fffffff9fffff9fffffffff9fffffff9ffffffffffffffffffffffffffffffff
        fffffffffffffff9ffffff9fffffff9f9ffffffffff9fffffffff9ffffff9ffffffffff9ff9fffffffff9ff9ffffff9fffffffff9fff9fffffffffff9ffffff9ffffffffffffffffffffffffffffffff
        fffffffffff999999999ff9ffffffff99ffffffffff9fffffffff9fffffff9999999999fff9fffffffff9fff9999999fffffffff9ff9fffffffffffff9ffff9fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9999999999ffffff9ffffffffff999999ffffffffffffff9999999999ffffff9ffffffffff999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffffffff9fffffffff9ffffff9fffffffffffff9fffffffffffffff9fffffffff9ffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffffffff9fffffffff9ffffff9fffffffffffff9fffffffffffffff9fffffffff9ffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9ffffffffffffff9f9ffffffff9ffffff9fffffffffffff9ffffffffffffff9f9ffffffff9ffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9ffffffffffffff9f9ffffffff9ffffff9fffffffffffff9ffffffffffffff9f9ffffffff9ffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff99999ffffffffff9f9ffffffff9999999ffffffffffffff99999ffffffffff9f9ffffffff9999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffffff9fff9fffffff99fffffffffffffffffff9fffffffffffff9fff9fffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffffff9fff9fffffff9f9ffffffffffffffffff9fffffffffffff9fff9fffffff9f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffffff9fff9fffffff9ff9fffffffffffffffff9fffffffffffff9fff9fffffff9ff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9ffffffffffff9fffff9ffffff9fff9ffffffffffffffff9ffffffffffff9fffff9ffffff9fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9ffffffffffff9999999ffffff9fff9ffffffffffffffff9ffffffffffff9999999ffffff9fff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffff9fffffff9fffff9ffff9fffffffffffffff9fffffffffff9fffffff9fffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffff9fffffff9fffff9fffff9ffffffffffffff9fffffffffff9fffffff9fffff9fffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffffff9fffffff9fffff9ffffff9fffffffffffff9fffffffffff9fffffff9fffff9ffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9ffffffffff9fffffffff9ffff9fffffff9ffffffffffff9ffffffffff9fffffffff9ffff9fffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9ffffffffff9fffffffff9ffff9ffffffff9fffffffffff9ffffffffff9fffffffff9ffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff9fffffff9ffffffffffffff9ffffffffff9ffffffffff9ffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff9fffffff9ffffffffffffff9ffffffffff9fffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff9fffffff9ffffffffffffff9ffffffffff9fffffffffff9ffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff9f9ffffff9ffffffffffffff9fffffffff9f9fffffffffff9ffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff9f9ffffff9ffffffffffffff9fffffffff9f9ffffffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff9f9fffffff9ffffffffffff9ffffffffff9f9ffffffffffff9ffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff9fff9ffffff9ffffffffffff9fffffffff9fff9ffffffffffff9ff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff9fff9ffffff9ffffffffffff9fffffffff9fff9fffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff9fff9ffffff9ffffffffffff9fffffffff9fff9ffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff9fffff9fffff9ffffffffffff9ffffffff9fffff9ffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff9999999ffffff9ffffffffff9fffffffff9999999fffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff9fffffff9fffff9ffff99ffff9ffffffff9fffffff9ffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff9fffffff9fffff9fff9ff9fff9ffffffff9fffffff9fffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff9fffffff9fffff9ff9ffff9ff9ffffffff9fffffff9ffffffff9ffffffff999ffff999ffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffff9ffff9f9ffffff9f9fffffff9fffffffff9fffffff9ffffffff9f9ffff9f9ffff9f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff9fffffffff9fffff9ffffffff9ffffffff9fffffffff9ffffff9fffffffff999ffff999ffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(1500)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1fffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555fffffffffffffff5ffffffffffffffffffffff555555555555fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff5ffffffffffffff5f5ffffffffffffffffffff5ffffffffffff5ffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5f55555555555555555555555555555f555555555555fffffffffffff5fff5ffffffffffffffffff5f555555555555f5fffff1fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5f5fffffffffffffffffffffffffff5f5ffffffffffffffffffffffff5fff5ffffffffffffffffff5f5fffffffffff5f5ffffffffffffffffffffffffff
        fffffffffffffffffffffffff1fffffffffff5f5fffffffffffffffffffffffffff5f5fffffffffffffffffffffff5ff5ff5fffffffffffffffff5f5fffffffffff5f5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5f5fffffffffffffffffffffffffff5f5fffffffffffffffffffffff5ff5ff5fffffffffffffffff5f5fffffffffff5f5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5f5fffffffffffffffffffffffffff5f5ffffffffffffffffffffff5ff5f5ff5ffffffffffffffff5f5fffffffffff5f5ffffffffffffffffffffffffff
        ffffffffff1ffffffffffffffffffffffffff5f5fffffffffffffffffffffffffff5f5ffffffffffffffffffffff5ff5f5ff5ffffffffffffffff5f5fff1fffffff5f5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5f5ffffffffffff1ffffffffffffff5f5fffffffffffffffffffff5ff5fff5ff5fffffffffffffff5f5fffffffffff5f5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5f5fffffffffffffffffffffffffff5f5ffffffffffffffffffff5ff5fffff5ff5ffffffffffffff5f5fffffffffff5f5ffffffffffffffffffffffffff
        ffffffffffffffffffff1ffffffffffffffff5f5fffffffffffffffffffffffffff5f5ffffffffffffffffffff5ff5fffff5ff5ffffffffffffff5f5fffffffffff5f5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5f5fffffffffffffffffffffffffff5f5ffffff1ffffffffffff5ff5fffffff5ff5fffffffffffff5f555555555555f55ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5f555555555ffffffffffffffffff5f5fffffffffffffffffff5ff5fffffff5ff5fffffffffffff5fffffffffffff55fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5ffffffffff5fffffffffffffffff5f5ffffffffffffffffff5ff5fffffffff5ff5ffffffffffff5ffff5555555555ffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff555555555f5fffffffffffffffff5f5fffffffffffffffff5ff5fffffffffff5ff5fffffffffff5ffff5fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff5f5fffffffffffffffff5f5fffffffffffffffff5ff5555555555555ff5fffffffffff5f55ff5ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff1ffffffff1fffffffffffffffff5f5fffffffffffffffff5f5ffffffffffffffff5fffffffffffffffffff5ffffffffff5f5f5ff5fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff5f5fffffffffffffffff5f5ffffffffffffffff5fffffffffffffffffff5ffffffffff5f5ff5ff5ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff5f5fffffffffffffffff5f5fffffffffffffff5ff55555555555555555ff5fffffffff5f5fff5ff5fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff5f5fffffffffffffffff5f5fffffffffffffff5ff5fffffffffffffff5ff5fffffffff5f5ffff5ff5ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff5f5fffffff1fffffffff5f5ffffffffffffff5ff5fffffffffffffffff5ff5ffffffff5f5fffff5ff5fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff5f5fffffffffffffffff5f5fffffffffffff5ff5fffffffffffffffffff5ff5fffffff5f5ffffff5ff5fffffffffffffff1ffffffffffffff
        ffffffffffffffffffffffffffffff55555555555555555f5ffffffffffffffffff5f5fffffffffffff5ff5fffffffffffffffffff5ff5fffffff5f5fffffff5ff5fffffffffffffffffffffffffffff
        fffffffff1ffffffffffffffffffff5ffffffffffffffff55ffffffffffffffffff5f5ffffffffffff5ff5fffffffffffffffffffff5ff5ffffff5f5ffffffff5ff5ffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff555555555555555555fffffffffffffffffff555ffffffffffff5555fffffffffffffffffffff5555ffffff555fffffffff5555fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5555ffffffffffffffffff1ffffff5555ffffffffffffff5ffffffffffffffffff555555555555fffffffff55555555555555555ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5ff5fffffffffffffffffffffffff5ff5fffffffffffff5f5ffffffffffffffff5ffffffffffff5fffffff5ffffffffffffffff5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff5ff5fffffffffffffffffffffff5ff5fffffffffffff5fff5ffffffffffffff5f555555555555f5fffff5f55555555555555555ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff5ff5fffffffffffffffffffffff5ff5fffffffffffff5fff5ffffffffffffff5f5fffffffffff5f5ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff5ff5ffffffffff1ffffffffff5ff5fffffffffffff5ff5ff5fffffffff1fff5f5fffffffffff5f5ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff5ff5fffffffffffffffffffff5ff5fffffffffffff5ff5ff5fffffffffffff5f5fffffffffff5f5ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1fffffffffffffffffffff5ff5fffffffffffffffffffff5ff5ffffffffffff5ff5f5ff5ffffffffffff5f5fffffffffff5f5ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff5ff5fffffffffffffffffff5ff5fffffffffffff5ff5f5ff5ffffffffffff5f5fffffffffff5f5ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff5ff5fffffffffffffffffff5ff5fffff1ffffff5ff5fff5ff5fffffffffff5f5fffffffffff5f5ffff5f5ffffffffffff1fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff5ff5fffffffffffffffff5ff5ffffffffffff5ff5fffff5ff5ffffffffff5f5fffffffffff5f5ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff5ff5fffffffffffffffff5ff5ffffffffffff5ff5fffff5ff5ffffffffff5f5fffffffffff5f5ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1fffffffffffffffff5ff5fffffffffffffff5ff5ffffffffffff5ff5fffffff5ff5fffffffff5f555555555555f55ffff5f5ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff5ff5fffffffffffffff5ff5ffffffffffff5ff5fffffff5ff5fffffffff5fffffffffffff55ffffff5f555555555fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff5ff5ffffff5ffffff5ff5ffffffffffff5ff5fffffffff5ff5ffffffff5ffff5555555555fffffff5fffffffff55ffffffffffffffffffffff1fffffffff
        ffffffffffffffffffffffffffffffffffff5ff5fffff5f5fffff5ff5fffffffffff5ff5fffffffffff5ff5fffffff5ffff5fffffffffffffffff555555555f5ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5ff5fff5fff5fff5ff5ffffffffffff5ff5555555555555ff5fffffff5f55ff5ffffffffffffffffffffffff5f5ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff15ff5ff5fffff5ff5ff5fffffffffff5fffffffffffffffffff5ffffff5f5f5ff5fffffffffffffffffffffff5f5ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff5ff5f5fffffff5f5ff5fffffffffff5fffffffffffffffffff5ffffff5f5ff5ff5ffffffffffffffffffffff5f5ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5ff5ffff5ffff5ff5fffffffffff5ff55555555555555555ff5fffff5f5fff5ff5fffffffffffffffffffff5f5ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5ff5fff5f5fff5ff5fffffff1fff5ff5fffffffffffffff5ff5fffff5f5ffff5ff5ffffffffffffffffffff5f5ffffffff1fffffffffffffffffffffff
        ffffff1ffffffffffffffffffffffffffffffff5ffff5fff5ffff5fffffffffff5ff5fffffffffffffffff5ff5ffff5f5fffff5ff5fffffffffffffffffff5f5ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff5fff5fffff5fff5ffffffffff5ff5fffffffffffffffffff5ff5fff5f5ffffff5ff5ffffffffffffffffff5f5ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff5f5fffffff5f5fffffffffff5ff5fffffffffffffffffff5ff5fff5f5fffffff5ff555555555555555555f5fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff5fffffffff5fffffffffff5ff5fffffffffffffffffffff5ff5ff5f5ffffffff5fffffffffffffffffff55ffffffffffffffffffffffff1ffffffff
        fffffffffffffffffffffffffffffffffffffffff5fffffffff5fffffffffff5555fffffffffffffffffffff5555ff555fffffffff55555555555555555555ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1fffffffffffffffffffffff1ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1fffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff555555fff5ffffff5ffff55555fff555555ffff555ffffffffffff5fff5ffffffff5ffffff555fffff5555f5ffffff5fff55555fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5ffffffff5ffffff5ffff5fff5fff5ffffffff5fff5ffffffffff5f5f5f5ffffff5f5ffff5fff5fff5fffff5ffffff5ff5ffffffffffffffffffffffffffffffff
        ffffffffffff1fffffffffffffffff5ffffffff5ffffff5ffff5fff5fff5ffffffff5fff5ffffffffff5ff5ff5ffffff5f5ffff5fff5fff5fffff5ffffff5ff5ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5ffffffff5ffffff5ffff5fff5fff5ffffffff5fff5ffffffffff5ff5ff5fffff5fff5fff5fff5fff5fffff5ffffff5ff5ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5ffffffff5ffffff5ffff55555fff5ffffffff5fff5fffffffff5fff5fff5ffff5fff5fff5fff5fff5fffff5ffffff5fff55555fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff555555fff5ffffff5ffff5fffffff5555fffff5555ffffffffff5fffffff5fff5fffff5ff5555ffff5fffff5ffffff5ffffffff5ffffffffffffffffff1fffffff
        fffffffffffffffffffffffffffffffffff5fff5ffffff5ffff5fffffff5ffffffff5f5ffffffffff5fffffffff5ff5555555ff5f5fffff5fffff5ffffff5ffffffff5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff5fff5ffffff5ffff5fffffff5ffffffff5ff5fffffffff5fffffffff5ff5fffff5ff5ff5ffff5fffff5ffffff5ffffffff5ffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff5fff5ffffff5ffff5fffffff5ffffffff5fff5ffffffff5fffffffff5ff5fffff5ff5fff5fff5fffff5ffffff5ffffffff5ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff555555fff55555555ffff5fffffff555555fff5fff5ffffffff5fffffffff5ff5fffff5ff5fff5ffff5555f55555555fff55555fffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff1ffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    intro_not_done = 1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.blandius, function (sprite, otherSprite) {
    if (current_level == 3) {
        if (blandius_saved == 0) {
            super_markie.say("")
            game.showLongText("blandius: Marcus haha, my good friend, thanks for saving me", DialogLayout.Bottom)
            game.showLongText("blandius: i just knew you were going to come", DialogLayout.Bottom)
            blandius.setImage(img`
                ....................
                ....................
                ....................
                ...........88888....
                .........11118......
                .........ff18.......
                .........f118.......
                .........f118.......
                ..........11........
                ........81118.......
                .....b.81118f.......
                .....fffffff1.......
                ......88.1111.......
                .........ffff.......
                .........8181.......
                .........8181.......
                .........8181.......
                .........8181.......
                .........8181.......
                ........8181........
                `)
            blandius.image.flipX()
            game.showLongText("blandius: ok, let's get to the LAAT", DialogLayout.Bottom)
            blandius.setVelocity(50, 0)
            blandius_saved = 1
            B2.follow(super_markie, 10)
        }
    } else {
        if (LAAT_done == 0) {
            super_markie.say("")
            game.showLongText("blandius: have you heard the order of the supreme leader?", DialogLayout.Bottom)
            game.showLongText("blandius: order 66 is executed", DialogLayout.Bottom)
            game.showLongText("blandius: there's a jedi nearby, he is called... euh", DialogLayout.Bottom)
            game.showLongText("blandius: küss orimet nogool truiar", DialogLayout.Bottom)
            game.showLongText("blandius: or kont for the ones who know him", DialogLayout.Bottom)
            game.showLongText("blandius: anyway, let's get the traitor", DialogLayout.Bottom)
            LAAT_done = 1
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (question_activated == 0) {
        if (intro_not_done == 1) {
            if (newgameselected == 0) {
                if (started_game == 0) {
                    selector_side = 0
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffff5555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffff5111111111111111111111111111111111111111111111111111111111111115ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffff5155555555555555555555555555555555555555555555555555555555555515fffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
                        ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1f5ffffff555fffff5ffff5555fffff5555ffffff5ffff5fffff5f55555f1ffffffff
                        ffffffffffffff515ff555555555ff5ffff555fff55555ffff5fff5f555f5fffffffff5ffff515fffffffffffff1f5fffff5fff5fff5f5fff5fff5fff5ffff5ffff5f5fff55fff55f5fffff1ffffffff
                        ffffffffffffff515f5fffff5ffff5f5fff5ff5ffff5ffffff5fff5f5fff5fffffffff5ffff515fffffffffffff1f5fffff5fff5fff5f5fff5fff5fff5fffffffff5f5fff5f5f5f5f5fffff1ffffffff
                        ffffffffffffff515f5fffff5ffff5f5fff5ff5ffff5ffffff55ff5f5fff5fffffffff5ffff515fffffffffffff1f5fffff5fff5ff5fff5ff5fff5fff5ffffffff5fff5ff5ff5ff5f5fffff1ffffffff
                        ffffffffffffff515ff55fff5fff5fff5ff555fffff5ffffff5f5f5f55fff5fffffff5fffff515fffffffffffff1f5fffff5fff5ff5fff5ff5fff5fff5ffffffff5fff5ff5fffff5f555fff1ffffffff
                        ffffffffffffff515ffff5ff5fff55555ff55ffffff5ffffff5ff55f5fffff5fffff5ffffff515fffffffffffff1f5fffff5fff5f5fffff5f5fff5fff5fffffff5fffff5f5fffff5f5fffff1ffffffff
                        ffffffffffffff515ffff5ff5ff5fffff5f5f5fffff5ffffff5fff5f5ffffff5f5f5fffffff515fffffffffffff1f5fffff5fff5f5555555f5fff5fff5fff555f5555555f5fffff5f5fffff1ffffffff
                        ffffffffffffff515f555fff5ff5fffff5f5ff5ffff5ffffff5fff5f555fffff5f5ffffffff515fffffffffffff1f5fffff5fff5f5fffff5f5fff5fff5ffff5ff5fffff5f5fffff5f5fffff1ffffffff
                        ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1ff5555ff555ff5fffff5f5555fffff5555fff5fffff5f5fffff5f55555f1ffffffff
                        ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515ffff5555fffff5fffff5fff5f555ffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515fff5ffffffff5f5ffff55f55f5ffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515fff5ffffffff5f5ffff5f5f5f5ffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515fff5fffffff5fff5fff5fff5f55fffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515fff5ffff5ff55555fff5fff5f5ffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515fff5ffff5f5fffff5ff5fff5f5ffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515ffff5555ff5fffff5ff5fff5f555ffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                        ffffffffffffff5155555555555555555555555555555555555555555555555555555555555515fffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
                        ffffffffffffff5111111111111111111111111111111111111111111111111111111111111115ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffff5555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                }
            }
        }
    } else {
        if (started_game == 0) {
            if (1 == save_question) {
                save_question = 0
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5111111111111111111111111111111111111111111111111111111111111115ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5155555555555555555555555555555555555555555555555555555555555515fffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffff5ffff5ff5555fff5555fffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffff5ffff5ff5fffff5fffffffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff55ff5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515fffff5ff5fff5fffff5fffffffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5f5f5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515fffff5ff5fff55fffff5555fffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5ff55f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5555ff55555fffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff5155555555555555555555555555555555555555555555555555555555555515fffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
                    ffffffffffffff5111111111111111111111111111111111111111111111111111111111111115ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
            } else if (0 == save_question) {
                save_question = 1
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                    ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffff5ffff5ff5555fff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffff5ffff5ff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff55ff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1fffff5ff5fff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5f5f5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1fffff5ff5fff55fffff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5ff55f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5555ff55555fffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
            }
        } else {
            save_question = 0
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    jetpack = 1
    info.changeScoreBy(-100)
    startlevel()
    scene.setBackgroundImage(img`
        99999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999111999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999991111999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999911199999999999999999999999999999999999999999999999
        9999999999999999999999999111111911111111111119999999999999999999999999999999999999999999999999911999999999991111199999999999999999999999999999999999999999999999
        9999999999999999999111999111111111111111111111999999999999999999999999999999999999999999999999111111999999111111119999999999999999999999999999999999999999999999
        9999999999999999991111991111111111111111111111999999999999999999999999999999999999999999999999111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111119999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999
        9999999999991f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999
        9111111999911f11999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999
        9999999999911f11111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111191111111111111111999999999
        9999999999911f11111f29999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999
        9999999999991f11111f11229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111999999999
        999999999999f111111f11111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999
        911111199999f111111f11119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111119999999
        99999999999f119991f111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        99999999999f119191f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        99999999999f119991f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        9999999999f111111f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        99999999999ffffff99999999999999999999999999999999999999999999999999999999997779999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9991111119999999999999999999999999999999999999999999999999999999999999999966777999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999666777799999999999999999999999999999999999667999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999666667777799999999999999999999999999999999666.779999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999966666677777799999999999999999999999999999966666777999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999666666677777777999999999999999999999999999966666777779999999999999999999999999999999999999
        9999999999999999999999999996677799999999999999999999999999999999999996666666667777777799999999999999999999999999666666677777799999999999999999999999999999999999
        9999999999999999999999999666667779999999999999999999999999999999999966666666666777777779999999999999999999999996666666667777777999999999999999999999999999999999
        9999999999999999999999996666667777999999999999999999999999999999999666666666666777777777799999999999999999999966666666667777777999999999999999999999999999999999
        9999999999999999999999996666666777799999999999999999999999999999996666666666666777777777779999999999999999999666666666667777777779999999999999999999999999999999
        9999999999999999999999666666666777779999999999999999999999999999996666666666666677777777777999999999999999966666666666666777777777999999999999999999999999999999
        9999999999999999999996666666666677777999999999999999999999999999966666666666666677777777777779999999999999666666666666666777777777799999999999999999999999999999
        9999999999999999999966666666666667777779999999999999999999999999666666666666666667777777777777999999999996666666666666666777777777779999999999999999999999999999
        9999999999999999999666666666666666777779999999999999999999999996666666666666666666777777777777779999999666666666666666666777777777779999999999999999999999999999
        9999999999999999996666666666666666677777999999999999999999999996666666666666666666777777777777777799966666666666666666666677777777777799999999999999999999999999
        9999999999999999966666666666666666667777799999999999999999999966666666666666666666777777777777777777766666666666666666666667777777777779999999999999999999999999
        9999999999999999666666666666666666666777777999999999999999999666666666666666666666677777777777777777666666666666666666666667777777777779999999999999999999999999
        9999999999999966666666666666666666666677777779999999999999996666666666666666666666677777777777777766666666666666666666666666777777777777999999999999999999999999
        9999999999999666666666666666666666666677777777799999999999966666666666666666666666667777777777777666666666666666666666666666666777777777799999999999999999999999
        9999999999999666666666666666666666666667777777777999999999666666666666666666666666666777777777776666666666666666666666666666666777777777777999999999999999999999
        9999999999996666666666666666666666666666777777777777999999666666666666666666666666666677777777766666666666666666666666666666666677777777777799999999999999999999
        9999999999966666666666666666666666666666666667777777777796666666666666666666666666666667777777666666666666666666666666666666666667777777777779999999999999999999
        9999999999666666666666666666666666666666666666677777777776666666666666666666666666666666777776666666666666666666666666666666666666777777777777779999999999999999
        9999999996666666666666666666666666666666666666666777777766666666666666666666666666666666667766666666666666666666666666666666666666777777777777777799999999999999
        9999999666666666666666666666666666666666666666666677777666666666666666666666666666666666666766666666666666666666666666666666666666667777777777777777799999999999
        9999996666666666666666666666666666666666666666666666777666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777799999999
        9999966666666666666666666666666666666666666666666666776666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777777
        9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777777
        9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777
        9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777777777777
        9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777
        9966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777
        9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    for (let value2 of sprites.allOfKind(SpriteKind.precoin)) {
        value2.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.oracle, function (sprite, otherSprite) {
    if (current_level == 1) {
        super_markie.say("")
        game.showLongText("marcus: are you the legendary Anakin Skywalker?", DialogLayout.Top)
        game.showLongText(" mysterious figure: my name doesn't matter, i have come to give you advice", DialogLayout.Top)
        game.showLongText(" mysterious figure: CT_0545894, nickname super marcus your goal is ...", DialogLayout.Top)
        game.showLongText(" mysterious figure: to get to the sky, but watch out... the path up is very dangerous", DialogLayout.Top)
        game.showLongText(" mysterious figure: i'll see you again later", DialogLayout.Top)
    } else if (current_level == 2) {
        super_markie.say("")
        game.showLongText("marcus: god, you again", DialogLayout.Top)
        game.showLongText(" mysterious figure: the venator is waiting for you, go up", DialogLayout.Top)
    } else {
        super_markie.say("")
        game.showLongText("marcus: can i know your name now?", DialogLayout.Top)
        game.showLongText(" mysterious figure: no, i will tell it to you on the venator", DialogLayout.Top)
        game.showLongText(" mysterious figure: we're on the last part of our adventure", DialogLayout.Top)
        game.showLongText(" mysterious figure: prepare!", DialogLayout.Top)
    }
    otherSprite.destroy(effects.spray, 700)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    if (portalused == 0) {
        game.showLongText("the closer you get the harder the portal pulls", DialogLayout.Top)
        game.showLongText("you get sucked into the hole", DialogLayout.Top)
        tiles.setTilemap(tilemap`level7`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        otherSprite.destroy()
        for (let value2 of sprites.allOfKind(SpriteKind.precoin)) {
            value2.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.destroy()
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Axe)) {
            value2.destroy()
        }
        for (let value2 of sprites.allOfKind(SpriteKind.coin)) {
            value2.destroy()
        }
        for (let value2 of sprites.allOfKind(SpriteKind.fireball)) {
            value2.destroy()
        }
        for (let value2 of sprites.allOfKind(SpriteKind.ammo)) {
            value2.destroy()
        }
        for (let value2 of sprites.allOfKind(SpriteKind.portal)) {
            value2.destroy()
        }
        tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        for (let value3 of tiles.getTilesByType(assets.tile`tile9`)) {
            tiles.setTileAt(value3, assets.tile`transparency16`)
        }
        for (let value6 of tiles.getTilesByType(assets.tile`myTile5`)) {
            vendor = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f f . . . . . . 
                . . . 1 . . . f f f f . . . . . 
                . . . f . . . f 3 3 f f . . . . 
                . . . c . . . f 3 3 f f . . . . 
                . . . c . . f f 1 1 f f . . . . 
                . . . e e e e e 1 1 e f . . . . 
                . . . c . f f e e 1 e f . . . . 
                . . . c . f e e e e e f . . . . 
                . . . c . f e e e e e e f . . . 
                `, SpriteKind.vendor)
            tiles.placeOnTile(vendor, value6)
            tiles.setTileAt(value6, assets.tile`transparency16`)
        }
        game.showLongText("vendor with stylish hoodie: to your left is the most powerfull weapon", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: to your right is the jetpack", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: you need 100 coins to buy a weapon", DialogLayout.Top)
        portalused = 1
    }
})
function fileN3_function () {
    fileselection = 4
    if (fileN3 == 0) {
        current_level = 0
    } else if (fileN3 == 1) {
        current_level = 1
    } else if (fileN3 == 2) {
        current_level = 2
    } else if (fileN3 == 3) {
        current_level = 3
    } else if (fileN3 == 4) {
        current_level = 4
    } else if (fileN3 == 5) {
        current_level = 5
    } else if (fileN3 == 6) {
        current_level = 6
    } else {
        current_level = 7
    }
    if (current_level == 7) {
        planetary_level = 1
        current_level = 5
        info.stopCountdown()
    }
    startlevel()
}
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    startlevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    if (cantouchlava == 1) {
        pause(100)
        info.changeLifeBy(-2)
        cantouchlava = 0
        startlevel()
    }
})
function herbevolken () {
    for (let value3 of tiles.getTilesByType(assets.tile`tile9`)) {
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`tile7`)) {
        coin2 = sprites.create(img`
            . . . . f f f f f f f f f . . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 b b b b b b b b b 5 f . . 
            . f 5 b 5 5 5 5 5 5 5 5 5 b 5 f . 
            f 5 b 5 f f f f f 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f f f f f 5 5 5 5 5 b 5 f 
            . f 5 b 5 5 5 5 5 5 5 5 5 b 5 f . 
            . . f 5 b b b b b b b b b 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . . f f f f f f f f f . . . . 
            `, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        [img`
            . . . . f f f f f f f f f . . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . . f f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . f f f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f f f . . . . . 
            `,img`
            . . . . . . f f f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f f f . . . . . . 
            `,img`
            . . . . . . . f f f . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . f f f . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . f f f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f f f . . . . . . 
            `,img`
            . . . . . f f f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f f f . . . . . 
            `,img`
            . . . . f f f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f f . . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . . f f f f f f f f f . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin2, value4)
        if (current_level == 7) {
            if (grouptalk == 4) {
                tiles.setTileAt(value4, assets.tile`myTile89`)
            } else {
                tiles.setTileAt(value4, assets.tile`transparency16`)
            }
        } else {
            tiles.setTileAt(value4, assets.tile`transparency16`)
        }
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile12`)) {
        precoin = sprites.create(img`
            . . . . f f f f f f f f f . . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 b b b b b b b b b 5 f . . 
            . f 5 b 5 5 5 5 5 5 5 5 5 b 5 f . 
            f 5 b 5 f f f f f 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f 5 5 5 5 5 5 5 5 5 b 5 f 
            f 5 b 5 f f f f f 5 5 5 5 5 b 5 f 
            . f 5 b 5 5 5 5 5 5 5 5 5 b 5 f . 
            . . f 5 b b b b b b b b b 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . . f f f f f f f f f . . . . 
            `, SpriteKind.precoin)
        animation.runImageAnimation(
        precoin,
        [img`
            . . . . f f f f f f f f f . . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . . f f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . f f f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f f f . . . . . 
            `,img`
            . . . . . . f f f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f f f . . . . . . 
            `,img`
            . . . . . . . f f f . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            . . . . . . . . f . . . . . . . . 
            `,img`
            . . . . . . . f f f . . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . f 5 3 5 f 5 3 5 f . . . . 
            . . . . . f 5 3 5 3 5 f . . . . . 
            . . . . . . f 5 3 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . . 
            . . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . f f f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . f 5 3 5 f f 5 5 3 5 f . . . 
            . . . . f 5 3 5 5 5 3 5 f . . . . 
            . . . . . f 5 3 3 3 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f f f . . . . . . 
            `,img`
            . . . . . f f f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . f 5 3 5 f f f 5 5 5 3 5 f . . 
            . . . f 5 3 5 5 5 5 5 3 5 f . . . 
            . . . . f 5 3 3 3 3 3 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f f f . . . . . 
            `,img`
            . . . . f f f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . f 5 3 5 f f f f 5 5 5 5 3 5 f . 
            . . f 5 3 5 5 5 5 5 5 5 3 5 f . . 
            . . . f 5 3 3 3 3 3 3 3 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f f . . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f 5 5 5 5 5 5 5 5 5 3 5 f 
            f 5 3 5 f f f f f 5 5 5 5 5 3 5 f 
            . f 5 3 5 5 5 5 5 5 5 5 5 3 5 f . 
            . . f 5 3 3 3 3 3 3 3 3 3 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . . f f f f f f f f f . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(precoin, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile8`)) {
        spawn = sprites.create(img`
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
            . . . . . . . . e e . . . . . . 
            . . . . . . . e e e . . . . . . 
            . . . . . . e . . 4 . . . . . . 
            . . . . . . . . . 4 . . . . . . 
            `, SpriteKind.Axe)
        tiles.placeOnTile(spawn, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile`)) {
        ammo_sprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . f f f f f f f f . . . . 
            . . b f f b . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ammo)
        animation.runImageAnimation(
        ammo_sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . f f f f f f f f . . . . 
            . . b f f b . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . b f f b . . b b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . b f f b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . b f b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . b f b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . b f f b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . b f f b . . b b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . f f f f f f f f . . . . 
            . . b f f b . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(ammo_sprite, value6)
        if (current_level == 7) {
            tiles.setTileAt(value6, assets.tile`myTile89`)
        } else {
            tiles.setTileAt(value6, assets.tile`transparency16`)
        }
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile10`)) {
        orakel = sprites.create(img`
            . . . . . . 9 . . . . . . . . . 
            . . . . . . 9 e e . . . . . . . 
            . . . . . . 9 d d e . . . . . . 
            . . . . . . 9 d d e . . . . . . 
            . . . . . . 9 c c f . . . . . . 
            . . . . . e 9 c c e f f . . . . 
            . . . . e c b c c c e b f . . . 
            . . . . . e d e e e b b b f . . 
            . . . . . c c c c c b b b b f . 
            . . . . . c c c c c b b b f f . 
            . . . . . f f f f f b f f . . . 
            . . . . . c c c c c f . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . e e . . e e . . . . . . 
            `, SpriteKind.oracle)
        tiles.placeOnTile(orakel, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile38`)) {
        sith_sprite = sprites.create(img`
            ........2...............
            ........2...............
            ........2...fff.........
            ........2...bfff........
            ........2...fbfff.......
            ........2...bbfff.......
            ........2...fbfff.......
            ........2....ffff.......
            ........2...ffff........
            ........2...fffff.......
            ........2...fbfbff......
            ........f...bffbbff.....
            ........cbbbfffbbbff....
            ........cffffffbbbbff...
            ........f...fffbbbbbff..
            ............cccbbbbbbff.
            ............cccbbbbbbbf.
            ............cbcbbbbbbbff
            ............cbcbbbbbbbbf
            ............cbcbbbbbbfff
            ............cbcbbbbfff..
            ............cbcbbbff....
            ............cbcffff.....
            ..........fcfcc.........
            `, SpriteKind.sith)
        tiles.placeOnTile(sith_sprite, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile0`)) {
        super_ammo_sprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . f f f f f f f f . . . . 
            . . b f f b . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.superammo)
        animation.runImageAnimation(
        ammo_sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . f f f f f f f f . . . . 
            . . b f f b . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . b f f b . . b b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . b f f b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . b f b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f b . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . b f b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . b f f b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . b f f b . . b b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . f f f f f f f f . . . . 
            . . b f f b . . . . b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(super_ammo_sprite, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile1`)) {
        fireball = sprites.create(img`
            . . . . . . . . . . . 5 . . . . 
            . . . . 5 . . . . . . . 5 . . . 
            . . . . . . . . . 5 5 5 5 . . . 
            . . 4 . . . . 5 5 5 5 5 5 . 5 . 
            . . . . . . 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 5 . . . 
            . 4 . . . 5 5 5 5 5 5 5 5 . . 4 
            2 . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            2 . 4 4 5 5 4 5 5 5 5 5 5 . . . 
            . 4 4 5 5 4 4 5 4 5 5 5 . . . . 
            . 4 5 5 5 4 5 4 4 5 5 5 . . 4 . 
            . 4 5 5 4 4 5 4 5 5 4 4 . . . . 
            . 4 5 4 4 5 4 4 5 5 4 4 . 2 . . 
            . 4 4 4 5 4 4 5 5 4 4 . . . . . 
            . . . 4 4 4 4 4 4 4 . 2 . . . . 
            `, SpriteKind.fireball)
        tiles.placeOnTile(fireball, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        fireball.startEffect(effects.fire)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile41`)) {
        armorer = sprites.create(img`
            . 1 1 1 1 . . . . . . . . . . . 
            . 1 1 1 f . . . . . . . . . . . 
            . 1 1 1 1 . . . . . . . . . . . 
            . 1 1 1 f . . . . . . . . . . . 
            . 1 1 f 1 . . . . . . . . . . . 
            . . 1 1 . . . . . . . . . . . . 
            . . f 1 f f . d . . e . . . . . 
            . 1 1 f . . f f . e . . . . . . 
            . 1 1 f f . . d e . . . . . . . 
            . 1 1 1 f f f e f . . . . . . . 
            . 1 1 1 1 . f f f . . . . . . . 
            . f 1 1 f . . . . . . . . . . . 
            . f 1 1 f . . . . . . . . . . . 
            . f 1 1 f . . . . . . . . . . . 
            . f 1 1 f . . . . . . . . . . . 
            . f 1 1 f . . . . . . . . . . . 
            `, SpriteKind.armorer)
        tiles.placeOnTile(armorer, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile5`)) {
        vendor = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . 1 . . . f f f f . . . . . 
            . . . f . . . f 3 3 f f . . . . 
            . . . c . . . f 3 3 f f . . . . 
            . . . c . . f f 1 1 f f . . . . 
            . . . e e e e e 1 1 e f . . . . 
            . . . c . f f e e 1 e f . . . . 
            . . . c . f e e e e e f . . . . 
            . . . c . f e e e e e e f . . . 
            `, SpriteKind.vendor)
        tiles.placeOnTile(vendor, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile7`)) {
        portal = sprites.create(img`
            f f f f f 9 f f f f 9 f f f f f 
            9 f f f f 9 f f f f 9 f f f f f 
            9 f f f f 9 f f f f 9 f f f f f 
            9 f f f f 9 f f f 9 9 f 9 9 f f 
            f 9 9 f f f 9 f 9 9 9 9 9 f f f 
            f f f 9 9 f 9 9 9 9 9 f f f f f 
            f f f f 9 9 6 6 6 9 f f f f f f 
            f f f f f f 6 9 6 9 9 9 9 9 f f 
            9 9 9 9 9 9 6 6 6 f f f f f f f 
            f f f f f 9 f 9 f 9 f f f f f f 
            f f f f 9 9 f 9 f f 9 9 f f f f 
            f f f 9 f f f 9 9 f f 9 9 f f f 
            f f 9 f f f f f 9 f f f 9 9 f f 
            f 9 9 f f f f f 9 f f f f 9 9 f 
            f 9 f f f f f f 9 f f f f f 9 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.portal)
        tiles.placeOnTile(portal, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile18`)) {
        blandius = sprites.create(img`
            ....................
            ....................
            ....................
            ...........88888....
            .........11118......
            .....18..ff18..81...
            .....18..f118..81...
            .....18..f118..81...
            ......18..11..81....
            .......18111181.....
            .........1111.......
            .........1111.......
            .........1111.......
            .........ffff.......
            .........8181.......
            .........8181.......
            .........8181.......
            .........8181.......
            .........8181.......
            ........8181........
            `, SpriteKind.blandius)
        tiles.placeOnTile(blandius, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile21`)) {
        B2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f b b . . . 
            . . . . . . . . . f b b b . . . 
            . . . . . . . . . f b b b . . . 
            . . . . . . . . . b b f b . . . 
            . . . f f f f . . b b f b . . . 
            . . . 2 2 2 2 f f f f f b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b . . b . . . 
            . . . . . . . . . b . . b . . . 
            . . . . . . . . . b . . b . . . 
            `, SpriteKind.B2)
        tiles.placeOnTile(B2, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
        B2.ay = 350
        if (current_level == 7) {
            B2.image.flipX()
            tiles.setTileAt(value6, assets.tile`myTile89`)
        }
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile23`)) {
        B3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f b b . . . 
            . . . . . . . . . f b b b . . . 
            . . . . . . . . . f b b b . . . 
            . . . . . . . . . b b f b . . . 
            . . . f f f f . . b b f b . . . 
            . . . 2 2 2 2 f f f f f b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b . . b . . . 
            . . . . . . . . . b . . b . . . 
            . . . . . . . . . b . . b . . . 
            `, SpriteKind.B3)
        tiles.placeOnTile(B3, value6)
        tiles.setTileAt(value6, assets.tile`myTile89`)
        B3.ay = 350
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile25`)) {
        B4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f b b . . . 
            . . . . . . . . . f b b b . . . 
            . . . . . . . . . f b b b . . . 
            . . . . . . . . . b b f b . . . 
            . . . f f f f . . b b f b . . . 
            . . . 2 2 2 2 f f f f f b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b b b b . . . 
            . . . . . . . . . b . . b . . . 
            . . . . . . . . . b . . b . . . 
            . . . . . . . . . b . . b . . . 
            `, SpriteKind.B4)
        tiles.placeOnTile(B4, value6)
        tiles.setTileAt(value6, assets.tile`myTile89`)
        B4.ay = 350
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile13`)) {
        jedi = sprites.create(assets.image`blandius`, SpriteKind.jedi)
        tiles.placeOnTile(jedi, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
        jedi.ay = 350
        jedi.follow(super_markie, 70)
        bosslives = 5
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile74`)) {
        teammates = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .......7777c............
            ........7cccc7..........
            .........7c699..........
            .........7c669..........
            .........7c66f..........
            .........7cccc7.........
            ..........666c..........
            .........c667...........
            ........7666b7.ff..b....
            ........7b66ffffffff....
            ........b7bbffb77f......
            ........6b77776bb.......
            ........6666666.........
            ........6666666.........
            ........fc....fc........
            ........fc....fc........
            ........fc....fc........
            ........fc....fc........
            ........fc....fc........
            ........cff...cff.......
            `, SpriteKind.teammate1)
        tiles.placeOnTile(teammates, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile76`)) {
        teammates = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .......bbbbb............
            ........bcbccb..........
            .........bb199..........
            .........bb119..........
            .........bb11f..........
            .........bccccb.........
            ..........111c..........
            .........ccc5...........
            ........5111b5.ff..b....
            ........5b11ffffffff....
            ........b5bbffb55f......
            ........cb5555cbb.......
            ........c11111c.........
            ........ccccccc.........
            ........fc....fc........
            ........fc....fc........
            ........fc....fc........
            ........fc....fc........
            ........fc....fc........
            ........cff...cff.......
            `, SpriteKind.teammate2)
        tiles.placeOnTile(teammates, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile77`)) {
        teammates = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .......aaaac............
            ........acccca..........
            .........ac199..........
            .........ac119..........
            .........ac11f..........
            .........acccca.........
            ..........111c..........
            .........c11a...........
            ........a111ba.ff..b....
            ........ab11ffffffff....
            ........babbffbaaf......
            ........1baaaa1bb.......
            ........1111111.........
            ........1111111.........
            ........fa....fa........
            ........fa....fa........
            ........fa....fa........
            ........fa....fa........
            ........fa....fa........
            ........aff...aff.......
            `, SpriteKind.teammate3)
        tiles.placeOnTile(teammates, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile106`)) {
        spawn = sprites.create(img`
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
            . . . . . . . . e e . . . . . . 
            . . . . . . . e e e . . . . . . 
            . . . . . . e . . 4 . . . . . . 
            . . . . . . . . . 4 . . . . . . 
            `, SpriteKind.Axe)
        tiles.placeOnTile(spawn, value5)
        tiles.setTileAt(value5, assets.tile`myTile89`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile17`)) {
        triggerpoint = sprites.create(img`
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
            . f . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.triggerpoint)
        tiles.placeOnTile(triggerpoint, value5)
        tiles.setTileAt(value5, assets.tile`myTile89`)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.B2, function (sprite, otherSprite) {
    if (current_level == 3) {
        if (B2baractivated == 0) {
            b2_statusbar()
            statusbar_3.attachToSprite(B2)
            B2baractivated = 1
        }
        sprite.destroy()
        statusbar_3.value += -30
        healthB2 += -30
        if (healthB2 <= 0) {
            otherSprite.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sith, function (sprite, otherSprite) {
    if (planetary_level == 0) {
        if (talkwithvada == 0) {
            super_markie.say("")
            game.showLongText("mysterious figure: welcome back super marcus", DialogLayout.Top)
            game.showLongText("mysterious figure: i will promote you to clone arc trooper", DialogLayout.Top)
            game.showLongText("mysterious figure: everything you need will be available in the store above", DialogLayout.Top)
            game.showLongText("marcus: thanks sir", DialogLayout.Top)
            game.showLongText("mysterious figure: Vader", DialogLayout.Top)
            game.showLongText("vader: darth vader", DialogLayout.Top)
            game.showLongText("vader: up here is you peronal room", DialogLayout.Top)
            game.showLongText("marcus: it is an honor to serve, Darth Vader", DialogLayout.Top)
            talkwithvada = 1
        }
    } else {
        if (talkwithvada == 1) {
            super_markie.say("")
            game.showLongText("vader: your team is dead", DialogLayout.Top)
            game.showLongText("vader: get the intel alone or you will be demoted", DialogLayout.Top)
            talkwithvada = 2
        }
    }
    otherSprite.destroy(effects.halo, 500)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (started_game == 1) {
        if (hidden_egg_true == 1) {
            if (walking_side == 0) {
                music.pewPew.play()
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 9 9 9 . . . . . . . . 
                    . . . . 8 8 8 8 8 . . . . . . . 
                    . . . . . 9 9 9 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, super_markie, 1001, 2)
                pause(80)
            } else {
                music.pewPew.play()
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 9 9 9 . . . . . . . . 
                    . . . . 8 8 8 8 8 . . . . . . . 
                    . . . . . 9 9 9 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, super_markie, -1001, 2)
                pause(80)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile81`, function (sprite, location) {
    for (let value6 of sprites.allOfKind(SpriteKind.B4)) {
        value6.follow(super_markie, 50)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    if (cantouchlava == 1) {
        pause(100)
        info.changeLifeBy(-2)
        cantouchlava = 0
        startlevel()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    current_level = 6
    startlevel()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (question_activated == 0) {
        if (intro_not_done == 1) {
            if (newgameselected == 0) {
                if (started_game == 0) {
                    selector_side = 1
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515f5ffffff555fffff5ffff5555fffff5555ffffff5ffff5fffff5f55555f515ffffff
                        ffffffffffffffff1ff555555555ff5ffff555fff55555ffff5fff5f555f5fffffffff5ffff1fffffffffffff515f5fffff5fff5fff5f5fff5fff5fff5ffff5ffff5f5fff55fff55f5fffff515ffffff
                        ffffffffffffffff1f5fffff5ffff5f5fff5ff5ffff5ffffff5fff5f5fff5fffffffff5ffff1fffffffffffff515f5fffff5fff5fff5f5fff5fff5fff5fffffffff5f5fff5f5f5f5f5fffff515ffffff
                        ffffffffffffffff1f5fffff5ffff5f5fff5ff5ffff5ffffff55ff5f5fff5fffffffff5ffff1fffffffffffff515f5fffff5fff5ff5fff5ff5fff5fff5ffffffff5fff5ff5ff5ff5f5fffff515ffffff
                        ffffffffffffffff1ff55fff5fff5fff5ff555fffff5ffffff5f5f5f55fff5fffffff5fffff1fffffffffffff515f5fffff5fff5ff5fff5ff5fff5fff5ffffffff5fff5ff5fffff5f555fff515ffffff
                        ffffffffffffffff1ffff5ff5fff55555ff55ffffff5ffffff5ff55f5fffff5fffff5ffffff1fffffffffffff515f5fffff5fff5f5fffff5f5fff5fff5fffffff5fffff5f5fffff5f5fffff515ffffff
                        ffffffffffffffff1ffff5ff5ff5fffff5f5f5fffff5ffffff5fff5f5ffffff5f5f5fffffff1fffffffffffff515f5fffff5fff5f5555555f5fff5fff5fff555f5555555f5fffff5f5fffff515ffffff
                        ffffffffffffffff1f555fff5ff5fffff5f5ff5ffff5ffffff5fff5f555fffff5f5ffffffff1fffffffffffff515f5fffff5fff5f5fffff5f5fff5fff5ffff5ff5fffff5f5fffff5f5fffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515ff5555ff555ff5fffff5f5555fffff5555fff5fffff5f5fffff5f55555f515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5555fffff5fffff5fff5f555ffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fff5ffffffff5f5ffff55f55f5ffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fff5ffffffff5f5ffff5f5f5f5ffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fff5fffffff5fff5fff5fff5f55fffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fff5ffff5ff55555fff5fff5f5ffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1fff5ffff5f5fffff5ff5fff5f5ffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffff5555ff5fffff5ff5fff5f555ffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                        ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                }
            }
        }
    } else {
        if (started_game == 0) {
            if (0 == save_question) {
                save_question = 1
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                    ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffff5ffff5ff5555fff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffff5ffff5ff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff55ff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1fffff5ff5fff5fffff5fffffffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5f5f5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1fffff5ff5fff55fffff5555fffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5ff55f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff1fffffffffffff515ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffff55ffff5555ff55555fffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff515fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515ffffff
                    ffffffffffffffff111111111111111111111111111111111111111111111111111111111111fffffffffffff51555555555555555555555555555555555555555555555555555555555555515ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111115ffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555ffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
            } else if (0 == save_question) {
                save_question = 1
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5111111111111111111111111111111111111111111111111111111111111115ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5155555555555555555555555555555555555555555555555555555555555515fffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffff5ffff5ff5555fff5555fffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffff5ffff5ff5fffff5fffffffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff55ff5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515fffff5ff5fff5fffff5fffffffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5f5f5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515fffff5ff5fff55fffff5555fffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5ff55f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5f5fff5ffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5ffffffffff5ffffffffffffffffffffffffffffffffff515fffffffffffff1ffffff5fff5ff555fffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffff55ffff5555ff55555fffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                    ffffffffffffff5155555555555555555555555555555555555555555555555555555555555515fffffffffffff1111111111111111111111111111111111111111111111111111111111111ffffffff
                    ffffffffffffff5111111111111111111111111111111111111111111111111111111111111115ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffff5555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
            }
        } else {
            save_question = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Axe, function (sprite, otherSprite) {
    otherSprite.destroy()
    barbarian = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . e . e . . . . . . . . 
        . . f f . . . e . . . . . . . . 
        . . f 5 . . e e e . . . . . . . 
        . . f . 5 . 4 e 4 . . . . . . . 
        . . . . 5 4 e 4 e . . . . . . . 
        . . . . 5 4 4 e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e . e . . . . . . . . 
        `, SpriteKind.Enemy)
    barbarian.setPosition(otherSprite.x + 75, otherSprite.y + -25)
    if (current_level == 7) {
        barbarian.follow(super_markie, 110)
    } else {
        barbarian.follow(super_markie, 100)
    }
    barbarian.ay = 400
    barbarian.vy = 400
    if (barbarian.vy == -10) {
        barbarian.ay = -100
        barbarian.vy = -100
        pause(100)
    }
    if (barbarian.vx == 10) {
        barbarian.ay = 50
        barbarian.vy = 50
        pause(100)
    }
    if (barbarian.vx == -10) {
        barbarian.ay = -50
        barbarian.vy = -50
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Axe, function (sprite, otherSprite) {
    if (alldestruction == 1) {
        otherSprite.destroy()
        info.changeScoreBy(1)
    }
})
function BOSSLIVES () {
    if (firsthit == 0) {
        statusbarboss = statusbars.create(20, 4, StatusBarKind.Health)
        statusbarboss.attachToSprite(jedi)
        firsthit = 1
        statusbarboss.value = 100
        statusbarboss.value += -20
    } else {
        statusbarboss.value += -20
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
function startlevel () {
    started_game = 1
    info.changeLifeBy(1)
    if (loading_screen == 0) {
        scene.setBackgroundImage(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeee5eeeeeeeeeeeeeeeeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff5fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeee55eeeeeeeeeeeee5eeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff55fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeee55eeeeeeeeeee555eeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff55fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeee5eeeeeeeeee5555eeeee5eeeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff55fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee55555eeeee5eeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff5fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ee5eeeeeeeeeeeeeeeefffff55eeeeeeeee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff5fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eee55eeeeeeeeeeeeefffffff5eeeeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff5ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeee555eeeeeeeeeefffffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff5ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeee555eeeeeeefffffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff55ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefffffff555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff55ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefffffff5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff55ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefffffff5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff55fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefffffffff5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff55fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefffffffff5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffff55ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefffffffffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffff55ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeefffffffffffffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff55fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeffffffffffffffffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffff55ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeffffffffffffffffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffff55fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeefffffffffffffffffff55feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffff55ffffffeeeeeeeeeeeeeeeeeeeeeeeeeee55555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeffffffffffffffffffff55feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffff55fffffffffeeeeeeeeeeeeeeeeeeeeeeee55ff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeffffffffffffffffffff555feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffff55fffffffffffeeeeeeeeeeeeeeeeeeeeee55fff5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeffffffffffffffffffffff55feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffff5fffffffffffffeeeeeeeeeeeeeeeeeeeee5ffff5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeefffffffffffffffffffffff5555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffff5ffffffffffffffeeeeeeeeeeeeeeeeeee55ffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeefffffffffffffffffffffffff555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff5ffffffffffffffeeeeeeeeeeeeeeee5555ffffff5eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeffffffffffffffffffffffffffff5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffff5fffffffffffffffeeeeeeeeeeeee555555ffffff5eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeffffffffffffffffffffffffffff5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffff55fffffffffffffffeeeeeeeeeeee555555ffffffff5eeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeffffffffffffffffffffffffffff55eeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffff55ffffffffffffffffeeeeeeeeee5555555ffffffff5eeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeffffffffffffffffffffffffffff555eeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffff555ffffffffffffffffffeeeeeeee5555ffffffffffff5eeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeefffffffffffffffffffffffffffff555eeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffff55ffffffffffffffffffffeeeeee55555ffffffffffff555eeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeefffffffffffffffffffffffffffff5555eeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff5ffffffffffffffffffffffeeee5555ffffffffffffffff5555eeeeeeeeeeeeeeeeeeeeeee
            eeeeeeffffffffffffffffffffffffffffff555eeeeeeeeeeeeeeeffffffffffffffffffffffffffffffff5fffffffffffffffffffffffee5555ffffffffffffffffff55555eeeeeeeeeeeeeeeeeeeee
            eeeeeefffffffffffffffffffffffffffffff555eeeeeeeeeeffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffff555fffffffffffffffffffffff555eeeeeeeeeeeeeeeeeeee
            eeeeeefffffffffffffffffffffffffffffff555eeeeeeeffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffff5555fffffffffffffffffffffffff555eeeeeeeeeeeeeeeeeee
            eefffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffff5555fffffffffffffffffff5555555ffffffffffffffffffffffffff55eeeeeeeeeeeeeeeeeee
            fffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffff5fffffffffff555fffffffffffffffffff555555fffffffffffffffffffffffffffffff5555eeeeeeeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffff55555fffffffffff55fffffffffffffffff555555fffffffffffffffffffffffffffffffffffff555555555eeeeeee
            fffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555fffffffff55fffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffff55555555555
            ffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555fffffff55fffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff55555555555555555ffffffff555ffffff55ffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ff5555fffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555f5555fffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555f55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffff55555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffeeeeebffffffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffeeeeeebbbffffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffeeeeeebbbbfffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffeeeeeeeebbbbbfffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffeeeeeeeeebb9bbbffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffeeeeeeeeeebbbbbbbbffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffeeeeeeeeeeebbbbb9bbbbfffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeebbbbbbbbbfffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeebbbbbbbbbfffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffeeeeeeeeefffffeeeeeefffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffeeeeeeeeefffffeeeeeeefffffffffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeeffffffeeeeeeefffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffeeeeeeeeffffffffeeeeeefffffffffffffffffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffeeeeeeeeeffffffffeeeeeefffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffeeeeeeeefffffffffeeeeeeeffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeefffffffffffeeeeeeeffffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeefffffffffffeeeeeeeffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeffffffffffffeeeeeeeffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeffffffffffffeeeeeeeffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeffffffffffffeeeeeeeffffffffffffffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeffffffffffffeeeeeeeffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeffffffffffffeeeeeeeefffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffeeeeeeffffeeeeefffeeeeeeeeffffffffffffffffffffffffffff555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffeeeeeefffffeeeeeffffeeeeeeeeffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffeeeeeeffffeeeeeeffffeeeeeeeefffffffffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffeeeeeefffffeeeeeefffffeeeeeeeffffffffffffffffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffeeeeeeeffffeeeeeeefffffeeeeeeeefffffffffffffffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffeeeeeeefffffeeeeeeefffffeeeeeeeeffffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffeeeeeeeefffffeeeeeeeefffffeeeeeeeefffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffeeeeeeeeffffeeeeeeeeefffffeeeeeeeefffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffeeeeeeeeeffffeeeeeeeeefffffeeeeeeeeffffffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeffffffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeeeeeefffffeeeeeeeeeeeffffeeeeeeeeeeffffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeeeeeefffffeeeeeeeeeeeeffffeeeeeeeeeefffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeeeeeffffffeeeeeeeeeeeeffffeeeeeeeeeefffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeeeeffffffeeeeeeeeeeeeeeffffeeeeeeeeefffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeeeffffffeeeeeeefeeeeeeeeffffeeeeeeeefffffffffffffffffffffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeefffffffeeeeeeeffeeeeeeeffffeeeeeeeefffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeefffffffeeeeeeeffeeeeeeeffffeeeeeeeefffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffeeeeefffffffeeeeeeffffeeeeeeffffeeeeeeeefffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        if (current_level == 0) {
            tiles.setTilemap(tilemap`level1`)
            tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        } else if (current_level == 1) {
            tiles.setTilemap(tilemap`level4`)
            tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        } else if (current_level == 2) {
            tiles.setTilemap(tilemap`level5`)
            tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        } else if (current_level == 3) {
            tiles.setTilemap(tilemap`level0`)
            tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        } else if (current_level == 4) {
            if (bossbattle == 0) {
                tiles.setTilemap(tilemap`level11`)
                scene.setBackgroundImage(img`
                    111111111111111111111111111111111fffffff11111111111111111111111111111111ffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111fffffff11111111111111111111111111111111fffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
                    ffff11111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111
                    fffff1111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111
                    fffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111
                    ffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111111111111111111111111111
                    fffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111111111111111111111111111111
                    ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111
                    fffffffff1111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111
                    1ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111
                    11ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111
                    111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111111111
                    1111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111111111111111111111
                    1111fffffffff1111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111
                    11111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111
                    111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111
                    1111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111
                    11111111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111111111111111111111
                    11111111ffffffff11111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111
                    111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111
                    1111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111
                    11111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111
                    11111111111fffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111
                    111111111111ffffffff11111111111111111111111111111111111fffffffff111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111111111111
                    1111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111
                    11111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111
                    111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111
                    111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111
                    1111111111111111ffffffff11111111111111111111111111111111111fffffffff111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111111111111
                    11111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111fffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111
                    11111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111
                    111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111
                    1111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111
                    1111111111111111111111fffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111
                    11111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111
                    111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111
                    1111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111
                    11111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111
                    111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111
                    1111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111111111111111111
                    11111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111111111111111
                    11111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff111111111111111111111111111111111111111
                    111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111
                    1111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111
                    11111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff11111111111111111111111111111111111
                    1111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff1111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111
                    111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111111111
                    111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111111111
                    1111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111111
                    11111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff111111111111111111111111111111
                    111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111fffffffff11111111111111111111111111111
                    1111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111111
                    1111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111
                    11111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111
                    111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111
                    1111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111fffffffff1111111111111111111111111
                    11111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111
                    11111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111
                    111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111
                    1111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111fffffffff111111111111111111111
                    11111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff11111111111111111111
                    111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff11111111111111111
                    111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff1111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111
                    111111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff11111111111111
                    111111111111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff1111111111111
                    1111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff111111111111
                    11111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff11111111111
                    111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111
                    1111111111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff1111111111
                    1111111111111111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff111111111
                    11111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff11111111
                    111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff1111111
                    1111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff111111
                    11111111111111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff111111
                    11111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff11111
                    111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff1111
                    1111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff111
                    11111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff11
                    11111111111111111111111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff11
                    111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff1
                    1111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111fffffff
                    111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffff
                    111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffff
                    1111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111fffff
                    11111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111fffffffff1111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111fffffffff111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff1111111111111111111111111111111111111ffffffffff11111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff11111111111111111111111111111111111111fffffffff11111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff11111111111111111111111111111111111111fffffffff11111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff111111111111111111111111111111111111111ffffffff11111111111111111111111111
                    `)
            } else {
                tiles.setTilemap(tilemap`level10`)
                scene.setBackgroundImage(img`
                    99999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    99999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    99999999999999999999999999111999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    99999999999999999999999991111999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999911199999999999999999999999999999999999999999999999
                    9999999999999999999999999111111911111111111119999999999999999999999999999999999999999999999999911999999999991111199999999999999999999999999999999999999999999999
                    9999999999999999999111999111111111111111111111999999999999999999999999999999999999999999999999111111999999111111119999999999999999999999999999999999999999999999
                    9999999999999999991111991111111111111111111111999999999999999999999999999999999999999999999999111111111111111111111999999999999999999999999999999999999999999999
                    9999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111999999999999999999999999999999999999999999999
                    9999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999999
                    9999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111999999999999999999999999999999999999999999999
                    9999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111119999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999
                    9999999999991f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999
                    9111111999911f11999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999
                    9999999999911f11111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111191111111111111111999999999
                    9999999999911f11111f29999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999
                    9999999999991f11111f11229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111999999999
                    999999999999f111111f11111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999
                    911111199999f111111f11119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111119999999
                    99999999999f119991f111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
                    99999999999f119191f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
                    99999999999f119991f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
                    9999999999f111111f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
                    99999999999ffffff99999999999999999999999999999999999999999999999999999999997779999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9991111119999999999999999999999999999999999999999999999999999999999999999966777999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999666777799999999999999999999999999999999999667999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999996666677777999999999999999999999999999999996667779999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999966666677777799999999999999999999999999999966666777999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999666666677777777999999999999999999999999999966666777779999999999999999999999999999999999999
                    9999999999999999999999999996677799999999999999999999999999999999999996666666667777777799999999999999999999999999666666677777799999999999999999999999999999999999
                    9999999999999999999999999666667779999999999999999999999999999999999966666666666777777779999999999999999999999996666666667777777999999999999999999999999999999999
                    9999999999999999999999996666667777999999999999999999999999999999999666666666666777777777799999999999999999999966666666667777777999999999999999999999999999999999
                    9999999999999999999999996666666777799999999999999999999999999999996666666666666777777777779999999999999999999666666666667777777779999999999999999999999999999999
                    9999999999999999999999666666666777779999999999999999999999999999996666666666666677777777777999999999999999966666666666666777777777999999999999999999999999999999
                    9999999999999999999996666666666677777999999999999999999999999999966666666666666677777777777779999999999999666666666666666777777777799999999999999999999999999999
                    9999999999999999999966666666666667777779999999999999999999999999666666666666666667777777777777999999999996666666666666666777777777779999999999999999999999999999
                    9999999999999999999666666666666666777779999999999999999999999996666666666666666666777777777777779999999666666666666666666777777777779999999999999999999999999999
                    9999999999999999996666666666666666677777999999999999999999999996666666666666666666777777777777777799966666666666666666666677777777777799999999999999999999999999
                    9999999999999999966666666666666666667777799999999999999999999966666666666666666666777777777777777777766666666666666666666667777777777779999999999999999999999999
                    9999999999999999666666666666666666666777777999999999999999999666666666666666666666677777777777777777666666666666666666666667777777777779999999999999999999999999
                    9999999999999966666666666666666666666677777779999999999999996666666666666666666666677777777777777766666666666666666666666666777777777777999999999999999999999999
                    9999999999999666666666666666666666666677777777799999999999966666666666666666666666667777777777777666666666666666666666666666666777777777799999999999999999999999
                    9999999999999666666666666666666666666667777777777999999999666666666666666666666666666777777777776666666666666666666666666666666777777777777999999999999999999999
                    9999999999996666666666666666666666666666777777777777999999666666666666666666666666666677777777766666666666666666666666666666666677777777777799999999999999999999
                    9999999999966666666666666666666666666666666667777777777796666666666666666666666666666667777777666666666666666666666666666666666667777777777779999999999999999999
                    9999999999666666666666666666666666666666666666677777777776666666666666666666666666666666777776666666666666666666666666666666666666777777777777779999999999999999
                    9999999996666666666666666666666666666666666666666777777766666666666666666666666666666666667766666666666666666666666666666666666666777777777777777799999999999999
                    9999999666666666666666666666666666666666666666666677777666666666666666666666666666666666666766666666666666666666666666666666666666667777777777777777799999999999
                    9999996666666666666666666666666666666666666666666666777666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777799999999
                    9999966666666666666666666666666666666666666666666666776666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777777
                    9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777777
                    9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777
                    9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777777777777
                    9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777
                    9966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777
                    9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    `)
            }
            tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        } else if (current_level == 5) {
            tiles.setTilemap(tilemap`level14`)
            scene.setBackgroundImage(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfcccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111cccccccccc11111111ccccccccc11111111cccccccc11111111ccccccc11111111ccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfc
                cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
            tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        } else if (current_level == 6) {
            tiles.setTilemap(tilemap`level15`)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff1fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff1fffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                ffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1fffffffffffffffffffffff1ffffffffffff
                fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1fffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffff1ffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            super_markie.destroy()
            navbutton = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 . . . . 2 . . . . 2 . . 
                . . . . 2 . . . 2 . . . 2 . . . 
                . . . . . 2 . . 2 . . 2 . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . . 2 . . . 2 . . . . . 
                . . . 2 2 2 2 . 2 . 2 2 2 2 . . 
                . . . . . . 2 . . . 2 . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 . . 2 . . 2 . . . . 
                . . . . 2 . . . 2 . . . 2 . . . 
                . . . 2 . . . . 2 . . . . 2 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            scene.cameraFollowSprite(navbutton)
            controller.moveSprite(navbutton, 150, 150)
            tiles.placeOnRandomTile(navbutton, assets.tile`tile9`)
        } else if (current_level == 7) {
            if (grouptalk == 4) {
                tiles.setTilemap(tilemap`level18`)
                scene.setBackgroundColor(9)
                scene.setBackgroundImage(img`
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    .....................cccccccc...................................................................................................................................
                    ................ccccccccccccccc.................................................................................................................................
                    ................cccccccccccccccc................................................................................................................................
                    ................ccccccccccccccccc..................bbbbbbbbbbbbbbbbbbbb........................................................ccccccccccc......................
                    ................ccccccccccccccccc...........5555555bbbbbbccccccbcccc999...............ccccccccccccccccccc.....................ccccccccccccccccccccccc...........
                    ................ccccccccccccccccc............555555bbbbbbccccccbcccc999..............cccccccccccccccccccc.....................cccbccbccbccbccbcbcbccc...........
                    ...............cccccccccccccccccc.............55555bbbbbbccccccbcccc999..............cccccccccccccccccccc.....555eeeee........cccbccbccbccbccbcbcbccc...........
                    ...............ccbccbccbccbccbcbc.............55555bbbbbbbcccccbcccc999..............cccccccccccccccccccc....5555eeeeeee......ccccccccccccccccccccccc...........
                    ...............ccbccbccbccbccbcbc.............55555bbbbbbbbbbbbbbbbbbbb..............ccccccccccccccccccccc....555eeeeee.......cccbccbccbccbccbcbcbccc...........
                    ...............ccccccccccccccccccc...................................................cccbccbccbccbccbcbccc...................ccccbccbccbccbccbcbcbccc...........
                    ................cbccbccbccbccbcbcc.......fff.........................................cccbccbccbccbccbcbccc...................cccccccccccccccccccccccc...........
                    ................cbccbccbccbccbcbcc...555fdddf........................................ccccccccccccccccccccc...................cccccccccccccccccccccccc...........
                    ................ccccccccccccccccccc...55fdddf........................................cccbccbccbccbccbcbccc...................cccccccccccccccccccccccc...........
                    ................ccccccccccccccccccc..555fdddf.............................bbbb99.....cccbccbccbccbccbcbccc...................cccbccbccbccbccbcbcbcbcc...........
                    .....bbbb99.....cccbccbccbccbccbcbc......fff................................5bbb.....ccccccccccccccccccccc...................cccbccbccbccbccbcbcbcbccc..........
                    .......5bbb.....cccbccbccbccbccbcbc...............7b7b99.............................ccccccccccccccccccccc...................ccccccccccccccccccccccccc..........
                    ................ccccccccccccccccccc.............577b7b99.............................cccccccccccccccccccccc.......7b7b99.....cccbccbccbccbccbcbcbcbccc..........
                    ................cccbccbccbccbccbcbcc..................................................cccbccbccbccbccbcbccc.....577b7b99......ccbccbccbccbccbcbcbcbccc..........
                    ................cccbccbccbccbccbcbcc..................................................cccbccbccbccbccbcbccc...................cccccccccccccccccccccccc..........
                    ................cccccccccccccccccccc........................cccc......................ccccccccccccccccccccc...................cccccccccccccccccccccccc..........
                    .....5bbbb......cccccccccccccccccccc...55bbbb....5bbbb...cccccccc........5bbbb........cccbccbccbccbccbcbccc...................cccccccccccccccccccccccc..........
                    ....55bbbb......cccbccbccbccbccbcbcc...55bbbb...55bbbb...ccccccccc......55bbbb........cccbccbccbccbccbcbccc...................cccccccccccccccccccccccc..........
                    .................ccbccbccbccbccbcbccc....................cccccccccc...................ccccccccccccccccccccc...................ccbccbcbccbccbccbccbcbcc..........
                    .................cccccccccccccccccccc...................cccccccccccc...................ccccccccccccccccccccc..................ccbccbcbccbccbccbccbcbcc..........
                    .................ccbccbccbccbccbcbccc...................ccccccccccccc..................ccccccccccccccccccccc..................cccccccccccccccccccccccc..........
                    .................ccbccbccbccbccbcbccc...................cccccccccccccc.................cccbccbccbccbccbcbccc..................ccbccbcbccbccbccbccbcbcc..........
                    .................cccccccccccccccccccc...................ccccccccccccccc................cccbccbccbccbccbcbccc..................ccbccbcbccbccbccbccbcbccc.........
                    .................cccccccccccccccccccc..................cccccccccccccccc................ccccccccccccccccccccc..................ccccccccccccccccccccccccc.........
                    .................cccbccbccbccbccbcbcc..................cccccccccccccccccc..............cccbccbccbccbccbcbccc..................ccccccccccccccccccccccccc.........
                    ..................ccbccbccbccbccbcbcc..................ccbccbccbccbccbcbc..............cccbccbccbccbccbcbccc..................ccccccccccccccccccccccccc.........
                    ..................ccccccccccccccccccc..................ccbccbccbccbccbcbccc...........cccccccccccccccccccccc..................cbccbccbccbccbcbcbcbcbcbc.........
                    ..................ccbccbccbccbccbcbccc................ccccccccccccccccccccc...........cccccccccccccccccccccc..................cbccbccbccbccbcbcbcbcbcbc.........
                    ..................ccbccbccbccbccbcbccc..ffffffffffffffcccbccbccbccbccbcbccc...........ccccbccbccbccbccbcbcccccccccccccccccccccccccccccccccccccccccccccc.........
                    ..................cccccccccccccccccccc..ffffffffffffffcccbccbccbccbccbcbccc...........ccccbccbccbccbccbcbccc999999999999999999cbccbccbccbccbcbcbcbcbcbc.........
                    ..................cccccccccccccccccccc..fcfcfcfcfcfcffcccccccccccccccccccccc..........cccccccccccccccccccccc999999999999999999cbccbccbccbccbcbcbcbcbcbc.........
                    ..................cccccccccccccccccccc..fcfcfcfcfcfcffcccccccccccccccccccccc..........ccccbccbccbccbccbcbcccccccccccccccccccccccccccccccccccccccccccccc.........
                    .....5555f99......cccbccbccbccbccbcbcc..ffffffffffffffcccccccccccccccccccccc..........ccccbccbccbccbccbcbccc..................ccccccccccccccccccccccccc.........
                    ......555f99......cccbccbccbccbccbcbcc..fcfcfcfcfcfcffccccbccbccbccbccbcbccc.........ccccccccccccccccccccccc..................ccccccccccccccccccccccccc.........
                    ......ffff........cccccccccccccccccccc..fcfcfcfcfcfcfcccccbccbccbccbccbcbccc.........ccccccccccccccccccccccc..................ccccccccccccccccccccccccc.........
                    ..................cccbccbccbccbccbcbcc..fffffffffffffccccccccccccccccccccccc.........ccccccccccccccccccccccc..................ccbccbccbccbccbccbccbcbccc........
                    ..................cccbccbccbccbccbcbcc..fcfcfcfcfcfcfcccccbccbccbccbccbcbccc.........cccccbccbccbccbccbcbccc..................ccbccbccbccbccbccbccbcbccc........
                    ..................cccccccccccccccccccc..fcfcfcfcfcfcfcccccbccbccbccbccbcbccc.........cccccbccbccbccbccbcbccc..................cccccccccccccccccccccccccc........
                    ..................cccccccccccccccccccc..fffffffffffffccccccccccccccccccccccc.........ccccccccccccccccccccccc...................cbccbccbccbccbccbccbcbccc........
                    .................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.........cccccbccbccbccbccbcbccc...................cbccbccbccbccbccbccbcbccc........
                    .................ccccbccbccbccbccbcbcc9999999999999999cccccccccccccccccccccc.........cccccbccbccbccbccbcbccc...................ccccccccccccccccccccccccc........
                    .................ccccbccbccbccbccbcbcc9999999999999999ccccbccbccbccbccbcbccc.........cccccccccccccccccccccc....................ccccccccccccccccccccccccc........
                    .................cccccccccccccccccccccccccccccccccccccccccbccbccbccbccbcbccc.........cccccccccccccccccccccc....................ccccccccccccccccccccccccc........
                    .................ccccbccbccbccbccbcbcc..fffffffffffffccccccccccccccccccccccc.........cccccccccccccccccccccc....................cccbccbccbccbccbcbcbcbcbc........
                    .................ccccbccbccbccbccbcbcc..fcfcfcfcfcfcfcccccbccbccbccbccbcbccc.........ccccbccbccbccbccbcbccc....................cccbccbccbccbccbcbcbcbcbc........
                    .................ccccccccccccccccccccc..fcfcfcfcfcfcfcccccbccbccbccbccbcbccc.........ccccbccbccbccbccbcbccc...................cccccccccccccccccccccccccc........
                    .................ccccccccccccccccccccc.ffffffffffffffccccccccccccccccccccccc.........cccccccccccccccccccccc...................ccccbccbccbccbccbcbcbcbcbcc.......
                    .................cccccccccccccccccccc..ffcfcfcfcfcfcfccccccccccccccccccccccccccccccccccccbccbccbccbccbcbccc...................ccccbccbccbccbccbcbcbcbcbcc.......
                    .................cccbccbccbccbccbcbcc..ffcfcfcfcfcfcfccccccccccccccccccccccc999999999ccccbccbccbccbccbcbccc...................ccccccccccccccccccccccccccc.......
                    .................cccbccbccbccbccbcbcc.fffffffffffffffccccccccccccccccccccccc999999999cccccccccccccccccccccc...................ccccccccccccccccccccccccccc.......
                    .................cccccccccccccccccccc.fcfcfcfcfcfcfcfccccbccbccbccbccbcbccccccccccccccccccccccccccccccccccc...................ccccccccccccccccccccccccccc.......
                    .................cccbccbccbccbccbcbcc.fcfcfcfcfcfcfcfccccbccbccbccbccbcbcccc........ccccccccccccccccccccccc...................cccccccccccccccccccccccccccc......
                    .................cccbccbccbccbccbcbcc..ffffffffffffffccccccccccccccccccccccc........cccccbccbccbccbccbcbcccc..................cccbccbccbccbccbcbcbcbcbcbcc......
                    .................ccccccccccccccccccc...ffcfcfcfcfcfcfccccbccbccbccbccbcbcccc........cccccbccbccbccbccbcbcccc..................cccbccbccbccbccbcbcbcbcbcbcc......
                    ..................cccccccccccccccccc...ffcfcfcfcfcfcfccccbccbccbccbccbcbcccc........cccccccccccccccccccccccc..................cccccccccccccccccccccccccccc......
                    ..................ccbccbccbccbccbcbc....fffffffffffffccccccccccccccccccccccc........cccccbccbccbccbccbcbcccc.................ccccbccbccbccbccbcbcbcbcbcbcc......
                    ..................ccbccbccbccbccbcbc....fcfcfcfcfcfcfccccccccccccccccccccccc.......ccccccbccbccbccbccbcbcccc.................ccccbccbccbccbccbcbcbcbcbcbcc......
                    ..................cccccccccccccccccc....fcfcfcfcfcfcfccccccccccccccccccccccc.......cccccccccccccccccccccccccc................ccccccccccccccccccccccccccccc......
                    ..................ccbccbccbccbccbcbc....fffffffffffffccccccccccccccccccccccc.......cccccccccccccccccccccccccc.................cccccccccccccccccccccccccccc......
                    ..................ccbccbccbccbccbcbc....fcfcfcfcfcfcfccccccccccccccccccccccc.......cccccccccccccccccccccccccc.................cccccccccccccccccccccccccccc......
                    ..................cccccccccccccccccc....fcfcfcfcfcfcfcccccccccbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.....
                    ......cccccccccc...ccccccccccccccccc....ffffffffffffccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc.
                    ..ccccbbbbbbbbbbcccccccccccccccccccc....ffffffffffccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
                    .cbbbbbbbbbbbbbbbbbccccccccccccccccc....fffffffffccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    cbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    `)
            } else {
                scene.setBackgroundImage(img`
                    111111111111111111111111111111111fffffff11111111111111111111111111111111ffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111fffffff11111111111111111111111111111111fffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
                    ffff11111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111
                    fffff1111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111
                    fffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111
                    ffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111111111111111111111111111
                    fffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111111111111111111111111111111
                    ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111111
                    fffffffff1111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111
                    1ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111
                    11ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111111
                    111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111111111
                    1111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111111111111111111111
                    1111fffffffff1111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111
                    11111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111111
                    111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111
                    1111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111
                    11111111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111111111111111111111
                    11111111ffffffff11111111111111111111111111111111111fffffffff111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111111
                    111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111
                    1111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111
                    11111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111111
                    11111111111fffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111
                    111111111111ffffffff11111111111111111111111111111111111fffffffff111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111111111111
                    1111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111
                    11111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111111
                    111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111
                    111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111
                    1111111111111111ffffffff11111111111111111111111111111111111fffffffff111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111111111111
                    11111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111fffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111111
                    11111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111
                    111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111111
                    1111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111
                    1111111111111111111111fffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111111
                    11111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111
                    111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111
                    1111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111
                    11111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111111111
                    111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111111
                    1111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111111111111111111
                    11111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111111111111111
                    11111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff111111111111111111111111111111111111111
                    111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111ffffffff111111111111111111111111111111111111111
                    1111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff11111111111111111111111111111111111111
                    11111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff11111111111111111111111111111111111
                    1111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff1111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111ffffffff1111111111111111111111111111111111
                    111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111111111
                    111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111111111
                    1111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111111
                    11111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111fffffffff111111111111111111111111111111
                    111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111fffffffff11111111111111111111111111111
                    1111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111111
                    1111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111111
                    11111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111111
                    111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111111
                    1111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111fffffffff1111111111111111111111111
                    11111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111111
                    11111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111111111
                    111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111111
                    1111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff1111111111111111111111111111111fffffffff111111111111111111111
                    11111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff11111111111111111111
                    111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff11111111111111111
                    111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff1111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff1111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff111111111111111
                    111111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff11111111111111
                    111111111111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff1111111111111
                    1111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff111111111111
                    11111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff11111111111
                    111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111ffffffff11111111111
                    1111111111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff1111111111
                    1111111111111111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff111111111
                    11111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff11111111
                    111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff1111111
                    1111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff111111
                    11111111111111111111111111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff111111
                    11111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff11111
                    111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff1111
                    1111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff111
                    11111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffffff11
                    11111111111111111111111111111111111111111111111111111111111111111fffffffff11111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffffff11
                    111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff1
                    1111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111ffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111fffffff
                    111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111fffffff
                    111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111fffffffff11111111111111111111111111111111ffffff
                    1111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111fffff
                    11111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111fffffffff1111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111111111111111111111111111111ffffffff1111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111fffffffff111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111ffffffff11111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff1111111111111111111111111111111111111ffffffffff11111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff11111111111111111111111111111111111111fffffffff11111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff11111111111111111111111111111111111111fffffffff11111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff111111111111111111111111111111111111111ffffffff11111111111111111111111111
                    `)
                tiles.setTilemap(tilemap`level17`)
                super_markie = sprites.create(img`
                    ........................
                    ........................
                    ........................
                    ........................
                    ......2222c.............
                    .......2cccc2...........
                    ........2c199...........
                    ........2c119...........
                    ........2c11f...........
                    ........2cccc2..........
                    .........111c...........
                    ........c115............
                    .......5111b5.ff..b.....
                    .......5b11ffffffff.....
                    .......b5bbffb55f.......
                    .......1b55551bb........
                    .......1111111..........
                    .......1111111..........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......cff...cff........
                    `, SpriteKind.Player)
                controller.moveSprite(super_markie, 100, 0)
                ammobar()
            }
            tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
        } else {
            game.over(true)
        }
    } else {
        tiles.setTilemap(tilemap`level21`)
    }
    destroy_all()
    herbevolken()
    if (current_level == 4) {
        blandius.setImage(img`
            ....................
            ....................
            ....................
            ...........88888....
            .........11118......
            .........ff18.......
            .........f118.......
            .........f118.......
            ..........11........
            ........81118.......
            .....b.81118f.......
            .....fffffff1.......
            ......88.1111.......
            .........ffff.......
            .........8181.......
            .........8181.......
            .........8181.......
            .........8181.......
            .........8181.......
            ........8181........
            `)
        if (bossbattle == 0) {
            super_markie.setImage(assets.image`order 66`)
            pause(200)
            game.showLongText("the chancellor: execute order 66", DialogLayout.Bottom)
            game.showLongText("marcus: yes supreme chancellor", DialogLayout.Bottom)
            pause(500)
        }
        if (jetpack == 0) {
            super_markie.setImage(assets.image`CT_0545894 nickname super marcus`)
        } else {
            super_markie.setImage(img`
                ........................
                ........................
                ........................
                ........................
                .......22221............
                ........211112..........
                .........211ff..........
                .........2111f..........
                .........2111f..........
                .........211112.........
                .......b..1111..........
                ......b1b1112...........
                ......b12111b2...b......
                ......b12b11ffffff......
                ......b1b2bbffb22.......
                ......b1bb22221bb.......
                ......b1b111111.........
                ......bbb111111.........
                .......bf1....f1........
                ........f1....f1........
                ........f1....f1........
                ........f1....f1........
                ........f1....f1........
                ........1ff...1ff.......
                `)
        }
        if (bossbattle == 1) {
            game.showLongText("K.O.N.T: super marcus, it was a mistake to challenge a jedi master", DialogLayout.Bottom)
            game.showLongText("K.O.N.T: you will die", DialogLayout.Bottom)
        }
    }
    pause(50)
    tiles.placeOnRandomTile(super_markie, assets.tile`tile9`)
    cantouchlava = 1
}
function ammobar () {
    if (current_level <= 4 || current_level == 7) {
        statusbar = statusbars.create(100, 4, StatusBarKind.ammo)
        statusbar.positionDirection(CollisionDirection.Top)
        statusbar.setLabel("kogels")
        statuson = 1
        statusbar.setColor(7, 2)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loadingsaves == 1 || newgameselected == 1) {
        if (intro_not_done == 1) {
            if (started_game == 0) {
                if (loadfileselect == 0 || fileselection == 0) {
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    if (loadfileselect == 0) {
                        fileselection = 1
                    } else {
                        loadfileselect = 1
                    }
                } else if (loadfileselect == 1 || fileselection == 1) {
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    if (loadfileselect == 1) {
                        fileselection = 2
                    } else {
                        loadfileselect = 2
                    }
                } else if (loadfileselect == 2 || fileselection == 2) {
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff55555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff555fff5555555555fff555ffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555fffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff555ffffffffff555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff555fff555fff5555555555fff555ffffff5555f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555ffffff555fff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555fff555fff55555555fffff555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551115555555511111555fffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff5551fffffffffffffff555ffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f1555ffffffffffffffff5551fff5555ff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555f555555ffffffffffffffffffffffff115555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff55555ffffffffffffffffffffffffff5555fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555fff5555ffffffffffffffffffffffffff555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff555555555555555ff1fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555f1fffffffffffff11111111111ff1111111ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff5551ffffff111fffff11111111111ff1111111fff1fffffffff555ffff555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffff1fffffff111fffff11111111111ff1111111ffff1fffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fffff1ffffffff111ffffffffff111fffff111fff111fff1fffff55555ff5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ffff1fffffffff111ffffffffff111fffff111fff111ffff1ffff555555f5555ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1fff5555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555fff1ffffffffff111ffffffffff111fffff111fff111fffff1ff55555555555fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff111ffffffffff111fffff111fff111ffffff5f5555555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff111fffff111fff111ffffff55555f555555ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff555ff1fffffffffff11111111fffff1111ffff111fff111ffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff1111ffff111111111ffffff5555fff5555fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff1111111ffffffff5555ffff555fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55fff555f555ffff5fffff555fff5fff5fff5f555fff555ffff5fff555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5f5ffff5fffff5f5fff5fffff5f5fff5f5ff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff555f5ff5f5ff5ff55ff55ffff555ffff55fff555fff5f5ff55ffff55ff5ff5fff55fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff5fff5f5f5ff5f5ff5ffff5f5ffff5fff5fffff5f5fff5fff5fff5fffff5fff5ff5fff5ffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff55f5f5ff55fff55ff555ff555ff5fff5ff555ff5fff5fff5fff555fff5fff5ff555f555ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffff5ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff555ffff5fff555ffff55ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffff5f5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff5fff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ff5fff5ff555f555fff55555ffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff515ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51555555555555555555555555555555555555555555555555555555555555555555555515fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff51111111111111111111111111111111111111111111111111111111111111111111111115fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5fffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555fff5ff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffff5fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555fff5555fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffff5ffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff555ffff5fff555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff55ff5ff5fff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff5fff5ffffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ff5fff5ff555f555ffffff5fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        `)
                    if (loadfileselect == 2) {
                        fileselection = 0
                    } else {
                        loadfileselect = 0
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.jedi, function (sprite, otherSprite) {
    sprite.destroy()
    bosslives += -1
    BOSSLIVES()
    pause(500)
    super_markie.say("")
    if (bosslives == 0) {
        super_markie.say("")
        otherSprite.destroy(effects.disintegrate, 500)
        current_level += 1
        startlevel()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teammate2, function (sprite, otherSprite) {
    if (spoken_1 == 0) {
        super_markie.say("")
        game.showLongText("Febe: hello, super marcus", DialogLayout.Top)
        game.showLongText("Febe: i'll provide you with the most beautiful thing in the world", DialogLayout.Top)
        game.showLongText("Febe: killing and destroying :)", DialogLayout.Top)
        game.showLongText("marcus: i'm happy you are so motivated", DialogLayout.Top)
        spoken_1 = 1
        grouptalk += 1
    }
    if (grouptalk == 3) {
        super_markie.say("")
        game.showLongText("marcus: alright team, listen up", DialogLayout.Top)
        game.showLongText("marcus: our mission is to secure intel of the cis at the city of bruselus", DialogLayout.Top)
        game.showLongText("marcus: i'm going to distract them while you go in at the back", DialogLayout.Top)
        game.showLongText("marcus: once we have downloaded the intel you pick me up", DialogLayout.Top)
        grouptalk += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile75`, function (sprite, location) {
    if (grouptalk == 4) {
        startlevel()
        b2_side = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vendor, function (sprite, otherSprite) {
    if (vendor_talk_done == 0) {
        super_markie.say("")
        game.showLongText("vendor with stylish hoodie: would you like to buy some of my equipment?", DialogLayout.Top)
        game.showLongText("marcus: who are you?", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: my name doesn't matter, do you want to buy something or not?", DialogLayout.Top)
        game.showLongText("marcus: why does no one want to tell me his name?", DialogLayout.Top)
        game.showLongText("marcus: ok then, what can i buy?", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: i sell expensive weapons", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: the costprice is 100 coins per weapon", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: i sell a jetpack", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: and a very powerfull weapon", DialogLayout.Top)
        game.showLongText("vendor with stylish hoodie: come and take a look in my store", DialogLayout.Top)
        vendor_talk_done += 1
    }
})
info.onLifeZero(function () {
    newgameselected = 0
    started_game = 0
    super_markie.destroy()
    game.splash("no one is going to remember you, face it")
    functionfunction()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile103`, function (sprite, location) {
    for (let value6 of sprites.allOfKind(SpriteKind.B2)) {
        value6.follow(super_markie, 50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.superammo, function (sprite, otherSprite) {
    otherSprite.destroy()
    ammo2 += 50
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teammate3, function (sprite, otherSprite) {
    if (spoken_2 == 0) {
        super_markie.say("")
        game.showLongText("Dwight: hello sir", DialogLayout.Top)
        game.showLongText("Dwight: i'm that kind of guy that takes care of the logistics", DialogLayout.Top)
        spoken_2 = 1
        grouptalk += 1
    }
    if (grouptalk == 3) {
        super_markie.say("")
        game.showLongText("marcus: alright team, listen up", DialogLayout.Top)
        game.showLongText("marcus: our mission is to secure intel of the cis at the city of bruselus", DialogLayout.Top)
        game.showLongText("marcus: i'm going to distract them while you go in at the back", DialogLayout.Top)
        game.showLongText("marcus: once we have downloaded the intel you pick me up", DialogLayout.Top)
        grouptalk += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.armorer, function (sprite, otherSprite) {
    if (talkwithvada == 1) {
        super_markie.say("")
        game.showLongText("unit_75182869: hello unit marcus", DialogLayout.Top)
        game.showLongText("unit_75182869: i am unit 75182869", DialogLayout.Top)
        game.showLongText("unit_75182869: i'll make sure you have everything for your missions", DialogLayout.Top)
        game.showLongText("unit_75182869: Robot Vader has asked me to give you keratin armor", DialogLayout.Top)
        game.showLongText("unit_75182869: with a DC-17m gun", DialogLayout.Top)
        jetpack = 0
        super_markie.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ......2222c.............
            .......2cccc2...........
            ........2c199...........
            ........2c119...........
            ........2c11f...........
            ........2cccc2..........
            .........111c...........
            ........c115............
            .......5111b5.ff..b.....
            .......5b11ffffffff.....
            .......b5bbffb55f.......
            .......1b55551bb........
            .......1111111..........
            .......1111111..........
            .......fc....fc.........
            .......fc....fc.........
            .......fc....fc.........
            .......fc....fc.........
            .......fc....fc.........
            .......cff...cff........
            `)
        alldestruction = 0
        talkwithvada = 2
        tutorial_done = 1
    }
})
function fileN1_function () {
    fileselection = 4
    if (fileN1 == 0) {
        current_level = 0
    } else if (fileN1 == 1) {
        current_level = 1
    } else if (fileN1 == 2) {
        current_level = 2
    } else if (fileN1 == 3) {
        current_level = 3
    } else if (fileN1 == 4) {
        current_level = 4
    } else if (fileN1 == 5) {
        current_level = 5
    } else if (fileN1 == 6) {
        current_level = 6
    } else {
        current_level = 7
    }
    if (current_level == 7) {
        planetary_level = 1
        current_level = 5
        info.stopCountdown()
    }
    startlevel()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireball, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    alldestruction += 1
    info.changeScoreBy(-100)
    startlevel()
    scene.setBackgroundImage(img`
        99999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999111999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999991111999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999911199999999999999999999999999999999999999999999999
        9999999999999999999999999111111911111111111119999999999999999999999999999999999999999999999999911999999999991111199999999999999999999999999999999999999999999999
        9999999999999999999111999111111111111111111111999999999999999999999999999999999999999999999999111111999999111111119999999999999999999999999999999999999999999999
        9999999999999999991111991111111111111111111111999999999999999999999999999999999999999999999999111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111999999999999999999999999999999999999999999999
        9999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111119999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999
        9999999999991f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999
        9111111999911f11999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999
        9999999999911f11111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111191111111111111111999999999
        9999999999911f11111f29999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999
        9999999999991f11111f11229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111999999999
        999999999999f111111f11111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999
        911111199999f111111f11119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111119999999
        99999999999f119991f111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        99999999999f119191f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        99999999999f119991f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        9999999999f111111f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999
        99999999999ffffff99999999999999999999999999999999999999999999999999999999997779999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9991111119999999999999999999999999999999999999999999999999999999999999999966777999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999666777799999999999999999999999999999999999667999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999666667777799999999999999999999999999999999666.779999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999966666677777799999999999999999999999999999966666777999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999666666677777777999999999999999999999999999966666777779999999999999999999999999999999999999
        9999999999999999999999999996677799999999999999999999999999999999999996666666667777777799999999999999999999999999666666677777799999999999999999999999999999999999
        9999999999999999999999999666667779999999999999999999999999999999999966666666666777777779999999999999999999999996666666667777777999999999999999999999999999999999
        9999999999999999999999996666667777999999999999999999999999999999999666666666666777777777799999999999999999999966666666667777777999999999999999999999999999999999
        9999999999999999999999996666666777799999999999999999999999999999996666666666666777777777779999999999999999999666666666667777777779999999999999999999999999999999
        9999999999999999999999666666666777779999999999999999999999999999996666666666666677777777777999999999999999966666666666666777777777999999999999999999999999999999
        9999999999999999999996666666666677777999999999999999999999999999966666666666666677777777777779999999999999666666666666666777777777799999999999999999999999999999
        9999999999999999999966666666666667777779999999999999999999999999666666666666666667777777777777999999999996666666666666666777777777779999999999999999999999999999
        9999999999999999999666666666666666777779999999999999999999999996666666666666666666777777777777779999999666666666666666666777777777779999999999999999999999999999
        9999999999999999996666666666666666677777999999999999999999999996666666666666666666777777777777777799966666666666666666666677777777777799999999999999999999999999
        9999999999999999966666666666666666667777799999999999999999999966666666666666666666777777777777777777766666666666666666666667777777777779999999999999999999999999
        9999999999999999666666666666666666666777777999999999999999999666666666666666666666677777777777777777666666666666666666666667777777777779999999999999999999999999
        9999999999999966666666666666666666666677777779999999999999996666666666666666666666677777777777777766666666666666666666666666777777777777999999999999999999999999
        9999999999999666666666666666666666666677777777799999999999966666666666666666666666667777777777777666666666666666666666666666666777777777799999999999999999999999
        9999999999999666666666666666666666666667777777777999999999666666666666666666666666666777777777776666666666666666666666666666666777777777777999999999999999999999
        9999999999996666666666666666666666666666777777777777999999666666666666666666666666666677777777766666666666666666666666666666666677777777777799999999999999999999
        9999999999966666666666666666666666666666666667777777777796666666666666666666666666666667777777666666666666666666666666666666666667777777777779999999999999999999
        9999999999666666666666666666666666666666666666677777777776666666666666666666666666666666777776666666666666666666666666666666666666777777777777779999999999999999
        9999999996666666666666666666666666666666666666666777777766666666666666666666666666666666667766666666666666666666666666666666666666777777777777777799999999999999
        9999999666666666666666666666666666666666666666666677777666666666666666666666666666666666666766666666666666666666666666666666666666667777777777777777799999999999
        9999996666666666666666666666666666666666666666666666777666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777799999999
        9999966666666666666666666666666666666666666666666666776666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777777
        9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777777
        9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777777
        9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777777777777
        9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777
        9966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777
        9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666677777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666777
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    ammo2 += 100
    statusbar.value += 100
})
function b2_statusbar () {
    healthB2 = 100
    statusbar_3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar_3.value = 100
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.triggerpoint, function (sprite, otherSprite) {
    if (triggerpoint_activated == 0) {
        super_markie.say("")
        game.showLongText("Dwight: Marcus, we've been spotted", DialogLayout.Top)
        game.showLongText("Dwight: get out of there...", DialogLayout.Top)
        game.showLongText("Dwight: NOW!", DialogLayout.Top)
        game.showLongText("you hear an explosion and then the signal dissapears", DialogLayout.Top)
        triggerpoint_activated = 1
        info.startCountdown(120)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.B4, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teammate1, function (sprite, otherSprite) {
    if (spoken == 0) {
        super_markie.say("")
        game.showLongText("Milan: yow, bro", DialogLayout.Top)
        game.showLongText("Milan: i'm yow sniperman", DialogLayout.Top)
        game.showLongText("marcus: good", DialogLayout.Top)
        spoken = 1
        grouptalk += 1
    }
    if (grouptalk == 3) {
        super_markie.say("")
        game.showLongText("marcus: alright team, listen up", DialogLayout.Top)
        game.showLongText("marcus: our mission is to secure intel of the cis at the city of bruselus", DialogLayout.Top)
        game.showLongText("marcus: i'm going to distract them while you go in at the back", DialogLayout.Top)
        game.showLongText("marcus: once we have downloaded the intel you pick me up", DialogLayout.Top)
        grouptalk += 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (alldestruction == 0) {
        sprite.destroy()
    }
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    if (LAAT_done == 1) {
        bossbattle = 1
        startlevel()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let text_random = 0
let spoken = 0
let triggerpoint_activated = 0
let spoken_2 = 0
let vendor_talk_done = 0
let b2_side = 0
let spoken_1 = 0
let navbutton: Sprite = null
let bossbattle = 0
let statusbarboss: StatusBarSprite = null
let firsthit = 0
let talkwithvada = 0
let healthB2 = 0
let statusbar_3: StatusBarSprite = null
let B2baractivated = 0
let triggerpoint: Sprite = null
let teammates: Sprite = null
let bosslives = 0
let B4: Sprite = null
let B3: Sprite = null
let portal: Sprite = null
let armorer: Sprite = null
let fireball: Sprite = null
let super_ammo_sprite: Sprite = null
let sith_sprite: Sprite = null
let orakel: Sprite = null
let ammo_sprite: Sprite = null
let precoin: Sprite = null
let grouptalk = 0
let coin2: Sprite = null
let cantouchlava = 0
let vendor: Sprite = null
let portalused = 0
let LAAT_done = 0
let B2: Sprite = null
let blandius: Sprite = null
let blandius_saved = 0
let alldestruction = 0
let spawn: Sprite = null
let barbarian: Sprite = null
let loading_screen = 0
let question_activated = 0
let askingN3 = 0
let askingN2 = 0
let askingN1 = 0
let planetary_level = 0
let statuson = 0
let selector_side = 0
let statusbar: StatusBarSprite = null
let ammo2 = 0
let projectile2: Sprite = null
let projectile: Sprite = null
let tutorial_done = 0
let walking_side = 0
let hidden_egg_true = 0
let current_level = 0
let usingfileN = 0
let question = 0
let arrows: Sprite = null
let jedi: Sprite = null
let jedi_animation = 0
let newgameselected = 0
let loadingsaves = 0
let jetpack = 0
let started_game = 0
let intro_not_done = 0
let super_markie: Sprite = null
let savefileused3 = 0
let savefileused2 = 0
let savefileused1 = 0
let save_question = 0
let loadfileselect = 0
let fileselection = 0
let fileN3 = 0
let fileN2 = 0
let fileN1 = 0
intro()
fileN1 = 0
fileN2 = 0
fileN3 = 0
fileselection = 3
loadfileselect = 3
save_question = 3
savefileused1 = 0
savefileused2 = 0
savefileused3 = 0
functionfunction()
game.onUpdate(function () {
    if (started_game == 1) {
        if (jetpack == 0) {
            if (tutorial_done == 0) {
                super_markie.setImage(assets.image`CT_0545894 nickname super marcus`)
            } else {
                super_markie.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........................
                    ......2222c.............
                    .......2cccc2...........
                    ........2c199...........
                    ........2c119...........
                    ........2c11f...........
                    ........2cccc2..........
                    .........111c...........
                    ........c115............
                    .......5111b5.ff..b.....
                    .......5b11ffffffff.....
                    .......b5bbffb55f.......
                    .......1b55551bb........
                    .......1111111..........
                    .......1111111..........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......fc....fc.........
                    .......cff...cff........
                    `)
            }
        } else {
            super_markie.setImage(img`
                ........................
                ........................
                ........................
                ........................
                .......22221............
                ........211112..........
                .........211ff..........
                .........2111f..........
                .........2111f..........
                .........211112.........
                .......b..1111..........
                ......b1b1112...........
                ......b12111b2...b......
                ......b12b11ffffff......
                ......b1b2bbffb22.......
                ......b1bb22221bb.......
                ......b1b111111.........
                ......bbb111111.........
                .......bf1....f1........
                ........f1....f1........
                ........f1....f1........
                ........f1....f1........
                ........f1....f1........
                ........1ff...1ff.......
                `)
        }
        if (super_markie.vy < 0) {
            if (jetpack == 0) {
                if (tutorial_done == 0) {
                    super_markie.setImage(img`
                        ........................
                        ........................
                        ........................
                        .......2222.............
                        ........211112..........
                        .........211ff..........
                        .........2111f..........
                        .........2111f..........
                        .........211112.........
                        ..........11............
                        ........1111111.........
                        ........2111b2b.........
                        ........22111b2b........
                        ........b2b111b2........
                        ........1b2ffffff.......
                        ........11bf2b122.......
                        ........1111111.........
                        ........1111111.........
                        .........111111.........
                        .........11..11.........
                        .........f1..1f.........
                        .........f1..1f.........
                        .........f1..1f.........
                        .........1f11f1.........
                        `)
                } else {
                    super_markie.setImage(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ......2222c.............
                        .......2cccc2...........
                        ........2c199...........
                        ........2c119...........
                        ........2c11f...........
                        ........2cccc2..........
                        .........111c...........
                        ........c115............
                        .......5111b5.ff..b.....
                        .......5b11ffffffff.....
                        .......b5bbffb55f.......
                        .......1b55551bb........
                        .......1111111..........
                        .......1111111..........
                        .......fc...cf..........
                        ........fc.cf...........
                        ........fc.cf...........
                        ........fc.cf...........
                        ........fc.cf...........
                        ........cfffc...........
                        `)
                }
            } else {
                super_markie.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........2222............
                    .........211112.........
                    ..........211ff.........
                    ..........2111f.........
                    ..........2111f.........
                    ..........211112........
                    .......b...11...........
                    ......b1b11111..........
                    ......b1b2111b2b........
                    ......b1b22111b2b.......
                    ......b1bb2b111b2.......
                    ......b1b1b2ffffff......
                    ......b1b11bf2b122......
                    ......b1b1111111........
                    ......bbb1111111........
                    ......4b4.111111........
                    ......555.11..11........
                    .......5..f1..1f........
                    ..........f1..1f........
                    ..........f1..1f........
                    ..........1f11f1........
                    `)
            }
        } else if (super_markie.vy > 0) {
            if (jetpack == 0) {
                if (tutorial_done == 0) {
                    super_markie.setImage(img`
                        ........................
                        ........................
                        ........................
                        .......2222.............
                        ........211112..........
                        .........211ff..........
                        .........2111f..........
                        .........2111f..........
                        .........211112.........
                        ..........11............
                        ........1111111.........
                        ........2111b2b.........
                        ........22111b2b........
                        ........b2b111b2........
                        ........1b2ffffff.......
                        ........11bf2b122.......
                        ........1111111.........
                        ........1111111.........
                        .........111111.........
                        .........11..11.........
                        .........f1..1f.........
                        .........f1..1f.........
                        .........f1..1f.........
                        .........1f11f1.........
                        `)
                } else {
                    super_markie.setImage(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ......2222c.............
                        .......2cccc2...........
                        ........2c199...........
                        ........2c119...........
                        ........2c11f...........
                        ........2cccc2..........
                        .........111c...........
                        ........c115............
                        .......5111b5.ff..b.....
                        .......5b11ffffffff.....
                        .......b5bbffb55f.......
                        .......1b55551bb........
                        .......1111111..........
                        .......1111111..........
                        .......fc...cf..........
                        ........fc.cf...........
                        ........fc.cf...........
                        ........fc.cf...........
                        ........fc.cf...........
                        ........cfffc...........
                        `)
                }
            } else {
                super_markie.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........2222............
                    .........211112.........
                    ..........211ff.........
                    ..........2111f.........
                    ..........2111f.........
                    ..........211112........
                    .......b...11...........
                    ......b1b11111..........
                    ......b1b2111b2b........
                    ......b1b22111b2b.......
                    ......b1bb2b111b2.......
                    ......b1b1b2ffffff......
                    ......b1b11bf2b122......
                    ......b1b1111111........
                    ......bbb1111111........
                    ......4b4.111111........
                    ......555.11..11........
                    .......5..f1..1f........
                    ..........f1..1f........
                    ..........f1..1f........
                    ..........1f11f1........
                    `)
            }
        }
        if (super_markie.vx < 0) {
            super_markie.image.flipX()
            walking_side = 1
        }
        if (super_markie.vx > 0) {
            walking_side = 0
        }
        if (current_level >= 2) {
            if (super_markie.isHittingTile(CollisionDirection.Right)) {
                super_markie.setImage(super_markie.image)
            }
        }
        if ((super_markie.isHittingTile(CollisionDirection.Left) || super_markie.isHittingTile(CollisionDirection.Right)) && super_markie.vy >= 0) {
            if (current_level >= 2) {
                if (jetpack == 0) {
                    if (tutorial_done == 0) {
                        super_markie.vy = 0
                        super_markie.ay = 0
                        super_markie.setImage(img`
                            ........................
                            ........................
                            ..............22221.....
                            ...............211112...
                            ................211ff.c2
                            ................2111fc2c
                            ................2111fcc.
                            ................211112.c
                            ..............cf.111..c2
                            ...............f.1111c2c
                            ...............f.11112c.
                            ...............fc1111...
                            ...............fcf11f111
                            .................1f.1fff
                            ..................1f.111
                            ...................1ffff
                            ....................1111
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            `)
                    } else {
                        super_markie.vy = 0
                        super_markie.ay = 0
                        super_markie.setImage(img`
                            ........................
                            ........................
                            ..............2222c.....
                            ...............2cccc2...
                            ................2c199.b5
                            ................2c119b5c
                            ..............bf2c11fbb.
                            ...............f2cccc5.b
                            ...............f.111..b5
                            ..............ff.1111b5b
                            ..............ff.11115b.
                            ...............fc1111...
                            ...............fcf11f...
                            .................cf.cfff
                            ..................cf.ccc
                            ...................cffff
                            ....................cccc
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            ........................
                            `)
                    }
                } else {
                    super_markie.vy = 0
                    super_markie.ay = 0
                    super_markie.setImage(img`
                        ........................
                        ........................
                        ..............22221.....
                        ...............211112...
                        ................211ff.c2
                        ................2111fc2c
                        ................2111fcc.
                        ...............b211112.c
                        ...........bfbb1b111..c2
                        ............fbb1b1111c2c
                        ............f.b1b11112c.
                        ............f.b1b1111...
                        ............ffb1bf11f111
                        .............fbbb1f.1fff
                        ...............b..1f.111
                        ...................1ffff
                        ....................1111
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        `)
                }
            }
        } else {
            if (jetpack == 1) {
                if (super_markie.vy > 0) {
                    super_markie.ay = 100
                } else {
                    super_markie.ay = 350
                }
            } else {
                super_markie.ay = 350
            }
        }
        if (walking_side == 1) {
            if (super_markie.vx == 0) {
                super_markie.image.flipX()
                super_markie.setImage(super_markie.image)
            }
        }
    }
})
forever(function () {
    if (started_game == 1) {
        text_random = randint(0, 10)
        if (text_random == 0) {
            super_markie.say(":)")
            pause(5000)
            super_markie.say("")
            pause(30000)
        } else if (text_random == 1) {
            super_markie.say("for the Republic!!")
            pause(5000)
            super_markie.say("")
            pause(30000)
        } else if (text_random == 2) {
            super_markie.say("for the emperor")
            pause(5000)
            super_markie.say("")
            pause(30000)
        } else if (text_random == 3) {
            super_markie.say("lets kill these clanka's")
            pause(6000)
            super_markie.say("")
            pause(30000)
        } else if (text_random == 4) {
            super_markie.say("hello there")
            pause(5000)
            super_markie.say("")
            pause(30000)
        } else if (text_random == 5) {
            super_markie.say("clanka's ahead")
            pause(5000)
            super_markie.say("")
            pause(30000)
        }
    }
})
