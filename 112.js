class Vehicle {
    constructor(a,b,c,d) {
        this.type=a;
        this.model=b;
        this.parts=c;
        this.parts.quality=this.parts.engine*this.parts.power;
        this.fuel=d;
    }
    drive(n) {
        this.fuel=this.fuel-n;
   }
   }
   const Vehicle = result;

   let parts = {engine: 6, power: 100};
   let vehicle = new Vehicle('a', 'b', parts, 200);
   vehicle.drive(100);
   
   expect(vehicle.fuel).to.equal(100);
   expect(vehicle.parts.quality).to.equal(600);