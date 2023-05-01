export default class Rectangle {
    constructor(x, y, width, height, color = 'white') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        context.rect(this.x - this.width / 2, this.y, this.width, this.height);
        context.closePath();
        context.stroke();
    }

    getArea() {
        return this.width * this.height;
    }
}
