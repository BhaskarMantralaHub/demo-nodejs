export class ParkingLot {
  private readonly parkingLotSize: number;
  parkingLots: string[] = [];
  private readonly EMPTY = '';

  constructor(size: number) {
    this.parkingLotSize = size;
    this.parkingLots = new Array<string>(this.parkingLotSize);
    this.initiateParkingLots();
  }

  initiateParkingLots() {
    for (let i = 0; i < this.parkingLots.length; i++) {
      this.parkingLots[i] = this.EMPTY;
    }
  }

  getAvailableParkingSlot() {
    let availableSlot = -1;
    for (let i = 0; i < this.parkingLots.length; i++) {
      if (this.parkingLots[i] == this.EMPTY) {
        availableSlot = i;
        break;
      }
    }
    return availableSlot;
  }

  isParkingAvailable() {
    return this.getAvailableParkingSlot() != -1;
  }

  isCarParked(carId: string) {
    return this.getParkingSlotOfCar(carId) >= 0;
  }

  getParkingSlotOfCar(carId: string) {
    return this.parkingLots.findIndex((parkingLot) => parkingLot == carId);
  }

  parkCar(carId: string) {
    if (!this.isParkingAvailable()) {
      console.log('Parking lot is full');
      return;
    }

    if (this.isCarParked(carId)) {
      console.log(`${carId} is already parked`);
      return;
    }

    const availableParkingSlot = this.getAvailableParkingSlot();
    this.parkingLots[availableParkingSlot] = carId;
    console.log(`${carId} is parked at location ${availableParkingSlot}`);
  }

  removeCar(carId: string) {
    if (!this.isCarParked(carId)) {
      console.log(`${carId} is not parked`);
      return;
    }

    const removableSlot = this.getParkingSlotOfCar(carId);
    this.parkingLots[removableSlot] = this.EMPTY;
    console.log(`Car ${carId} is removed from parking`);
  }

  printParkingLotsInfo() {
    this.parkingLots.forEach((parkingLot, index) => {
      if (parkingLot) {
        console.log(`Parking lot is occupied by ${parkingLot}`);
      } else console.log(`Parking lot ${index} is empty`);
    });
  }
}

export const parkingLot = new ParkingLot(5);
// parkingLot.parkCar('Bhaskar Hyundai'); //New car 0
// parkingLot.parkCar('Mounika Honda'); //New car 1
// parkingLot.parkCar('Vedanth Toyota'); //New car 2
// parkingLot.parkCar('Mounika Honda'); //Already parked
//
// parkingLot.parkCar('Bhaskar Hyundai'); // Already parked
// parkingLot.removeCar('Vedanth Toyota'); //Removed car from index 2
// parkingLot.parkCar('Bhaskar Hyundai'); // Already Parked
// parkingLot.parkCar('Gayathri Mercedes'); // New car 2
// parkingLot.removeCar('Vedanth Toyota'); //No car parked to be removed
// parkingLot.parkCar('Vedanth Toyota'); //New car 3
// parkingLot.printParkingLotsInfo();
