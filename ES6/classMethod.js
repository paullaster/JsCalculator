class AeroPlane {
    constructor(model, capacity) {
    this.model = model;
    this.capacity = capacity;
    }
    getData() {
    console.log(`You're flying a ${this.model} aeroplane`);
    console.log(`This plane can fly with ${this.capacity}
    passengers`);
    }
    }
    const jet = new AeroPlane("chopper", 8);
    jet.getData();