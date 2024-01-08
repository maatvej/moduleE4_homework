function ElectricalApp(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalApp.prototype.turnOn = function() {
    console.log(this.name + " is turned on!");
    this.isPlugged = true;
}

ElectricalApp.prototype.turnOff = function() {
    console.log(this.name + " is turned off");
    this.isPlugged = false;
}

function Lamps(name, color, category, power) {
    this.name = name;
    this.color = color;
    this.category = category;
    this.power = power;
}

Lamps.prototype = new ElectricalApp();

function Televisions(name, screenResolution, brand, power) {
    this.name = name;
    this.screenResolution = screenResolution;
    this.company = brand;
    this.power = power;
}

Televisions.prototype = new ElectricalApp();

function calculatePowerUsage(...devices) {
    let sum = 0;
    for (let device of devices) {
        if (device.isPlugged) {
            sum += device.power;
        }
    }
    return sum;
}

const lamp1 = new Lamps('lamp1', 'blue', 'table lamp', 9);
const telly1 = new Televisions('telly1', '1080 HD', 'LG', 60);

lamp1.turnOn();

console.log(calculatePowerUsage(lamp1, telly1));