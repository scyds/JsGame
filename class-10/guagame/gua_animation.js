class GuaAnimation {
    constructor(game) {
        this.game = game 
        // 为了省事，在这里 hard code 一套动画
        // this.frames = []
        // 多种状态
        this.animations = {
            idle: [],
            run: [],
        }
        for (var i = 1; i < 4; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        for (var i = 1; i < 7; i++) {
            var name = `run${i}`
            var t = game.textureByName(name)
            this.animations['run'].push(t)
        }
        this.animationsName = 'idle'
        // texture 图片
        this.texture = this.frames()[0]
        // this.texture = this.frames[0]
        this.frameIndex = 0
        this.frameCount = 3
        // 图片的翻转状态
        this.flipX = false
        this.w = this.texture.width
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationsName]
    }
    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            // 切换图片下标，防止溢出，使用 %
            // log(this.frames())
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            // log(this.frameIndex)
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        // this.game.drawImage(this)
        var context = this.game.context
        if (this.flipX) {
            // 这里是图片翻转
            context.save()
            var x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            // log('211111', x, -x)
            context.drawImage(this.texture, this.x, this.y)
            context.restore()
        } else {
            context.drawImage(this.texture, this.x, this.y)
        }
    }
    move(x, keyStatus) {
        this.flipX = x < 0
        this.x += x
        var names = {
            down: 'run',
            up: 'idle',
        }
        var name = names[keyStatus]
        this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationsName = name
    }
 }