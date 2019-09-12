class Bike {
    price: number;
    max_speed: string;
    miles: number;

    constructor(price: number, max_speed: string){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo = () => {
        return console.log(`Price: ${this.price} - Maximum Speed: ${this.max_speed} - Total Miles: ${this.miles}`);
    }
    ride = () => {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse = () => {
        if(this.miles < 5){
            console.log("Reversing");
            this.miles = 0;
            return this;
        }
        else{
            console.log("Reversing");
            this.miles -= 5;
            return this;
        }
    }
}

const bike1 = new Bike(200, "25 mph");
const bike2 = new Bike(500, "35 mph");
const bike3 = new Bike(400, "30 mph");
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
