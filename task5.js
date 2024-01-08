class ElectricalApp {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    
    turnOn() {
        console.log(this.name + " is turned on!");
        this.isPlugged = true;
    }

    turnOff() {
        console.log(this.name + " is turned off");
        this.isPlugged = false;
    }
}

class Lamps extends ElectricalApp {
    constructor(color, category, name, power, isPlugged) {
        // Вызываем конструктор родительского класса с использованием super
        super(name, power);
        this.color = color;
        this.category = category;
        this.isPlugged = isPlugged;
    }
}

class Televisions extends ElectricalApp {
    constructor(screenResolution, brand, name, power, isPlugged) {
        // Вызываем конструктор родительского класса с использованием super
        super(name, power);
        this.screenResolution = screenResolution;
        this.company = brand;
        this.isPlugged = isPlugged;
    }
}

const lamp1 = new Lamps('blue', 'table lamp', 'lamp1', 9, false);
const telly1 = new Televisions('1080 HD', 'LG', 'telly1', 60, false);

lamp1.turnOn();
telly1.turnOn();