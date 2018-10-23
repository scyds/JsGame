class GuaScene {
    constructor(game) {
        this.game = game
    }
    // 将子类中的共同方法提取到父类中
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {

    }
    update() {
        
    }
}

// 继承父类 GuaScene
// class SceneTitle extends GuaScene {
//     constructor(game) {
//         super(game)
//         game.registerAction('k', function() {
//             var s = Scene(game)
//             game.replaceScene(s)
//         })
//     }
//     draw() {
//         // draw lables
//         this.game.context.fillText('按 k 开始游戏', 150, 200)
//     }
// }