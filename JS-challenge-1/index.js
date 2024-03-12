class Seat {
  constructor(row, seatNumber) {
    this.row = row;
    this.seatNumber = seatNumber;
    this.isReserved = false;
  }

  reserve() {
    if (!this.isReserved) {
      this.isReserved = true;
      return true;
    }
    return false;
  }

  toString() {
    return `Seat ${this.seatNumber} in Row ${this.row} - ${
      this.isReserved ? "Reserved" : "Available"
    }`;
  }
}

class Cinema {
  constructor(rows, seatsPerRow) {
    this.seats = Array.from({ length: rows }, (_, row) =>
      Array.from(
        { length: seatsPerRow },
        (_, seat) => new Seat(row + 1, seat + 1)
      )
    );
  }

  displaySeats() {
    this.seats.flat().forEach((seat) => console.log(seat.toString()));
  }

  reserveSeat(row, seatNumber) {
    const seat = this.seats[row - 1]?.[seatNumber - 1];
    if (seat && seat.reserve()) {
      console.log(
        `Seat ${seatNumber} in Row ${row} has been successfully reserved.`
      );
    } else {
      console.log(
        `Seat ${seatNumber} in Row ${row} is already reserved or does not exist.`
      );
    }
  }
}

function testCinema() {
  const cinema = new Cinema(5, 10);

  console.log("Estado inicial:");
  cinema.displaySeats();
  console.log();

  cinema.reserveSeat(1, 1);
  cinema.reserveSeat(7, 7);
  cinema.reserveSeat(5, 2);

  console.log("Despues de reserva:");
  cinema.displaySeats();
}

testCinema();
