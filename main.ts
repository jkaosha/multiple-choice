function multipleChoice (choices: any[]) {
    choice_A = sprites.create(img`
        . . 2 . . 
        . 2 . 2 . 
        2 . . . 2 
        2 2 2 2 2 
        2 . . . 2 
        `, SpriteKind.Player)
    choice_A.setPosition(78, 58)
    game.showLongText(choices[0], DialogLayout.Bottom)
    choice_A.destroy()
    choice_B = sprites.create(img`
        4 4 4 . . 
        4 . . 4 . 
        4 4 4 . . 
        4 . . 4 . 
        4 4 4 . . 
        `, SpriteKind.Player)
    choice_B.setPosition(78, 58)
    game.showLongText(choices[1], DialogLayout.Bottom)
    choice_B.destroy()
    choice_C = sprites.create(img`
        . 7 7 7 . 
        7 . . . 7 
        7 . . . . 
        7 . . . 7 
        . 7 7 7 . 
        `, SpriteKind.Player)
    choice_C.setPosition(78, 58)
    game.showLongText(choices[2], DialogLayout.Bottom)
    choice_C.destroy()
    choice = game.askForString("Make a choice! (A, B or C)")
    while (!(choice == "A" || (choice == "B" || choice == "C"))) {
        choice = game.askForString("Make a choice! (A, B or C)")
    }
}
let choice_C: Sprite = null
let choice_B: Sprite = null
let choice_A: Sprite = null
let choice = ""
multipleChoice(["Give Hovik an A?", "Give Ingrid an A?", "Give Vixay an A?"])
game.splash("You made choice:", choice)
if (choice == "A") {
    game.over(false)
} else if (choice == "B") {
    game.over(false)
} else {
    game.over(true)
}
