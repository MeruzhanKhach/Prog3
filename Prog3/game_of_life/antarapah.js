class Antarapah {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char,char1) {
        this.getNewCordinates();
        let result = [];


        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char||matrix[y][x] == char1
                    ) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }

    mul() {

        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 3) {
            let x = exact[0];
            let y = exact[1];

            let antarapah = new Antarapah(x, y);
            matrix[y][x] = 4;
            antarapahArr.push(antarapah);

            this.energy = 20;
        }
        else {
            console.error('there is no way to multiply');
        }

    }
    eat() {
        let found = this.chooseCell(2,3);
        let exact = random(found)


        if (exact) {
            this.energy += 4;
            let x = exact[0];
            let y = exact[1];


         
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)

                }
            }
            for (let i = 0; i < eaterArr.length; i++) {
                if (eaterArr[i].x == x && eaterArr[i].y == y) {
                    eaterArr.splice(i, 1)

                }
            }
            

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y

            if (this.energy > 40) {
                this.mul()
            }
            

        }
        else {
            this.move()
        } 
    }
    move() {
        let found = this.chooseCell(0);

        let exact = random(found)


        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

       
        }
    }
  
}

function antarapahplus() {
   
    
}
function antarapahminus() {
    
}