let Luffy_animation_gatling = sprites.create(assets.image`Luffy gatling 1 sprite`, SpriteKind.Player)
let Zoro_tora_gari_animation = sprites.create(assets.image`Zoro animation tori gari`, SpriteKind.Food)
controller.moveSprite(Zoro_tora_gari_animation, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
