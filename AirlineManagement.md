# Airline Management System Database

## Create Database
```sql
CREATE DATABASE airline;
USE airline;
````

---

## PASSENGER TABLE

```sql
CREATE TABLE passenger (
    Passenger_ID INT AUTO_INCREMENT PRIMARY KEY,
    Passenger_Name VARCHAR(100),
    Passport_No VARCHAR(50)
);
```

---

## AIRPORT TABLE

```sql
CREATE TABLE airport (
    Airport_ID INT AUTO_INCREMENT PRIMARY KEY,
    Airport_Name VARCHAR(100),
    City VARCHAR(50),
    Country VARCHAR(50)
);
```

---

## FLIGHT TABLE

```sql
CREATE TABLE flight (
    Flight_ID INT AUTO_INCREMENT PRIMARY KEY,
    Flight_Number VARCHAR(20),
    Source_Airport_ID INT,
    Destination_Airport_ID INT,
    Departure_Time DATETIME,
    Arrival_Time DATETIME,
    FOREIGN KEY (Source_Airport_ID) REFERENCES airport(Airport_ID),
    FOREIGN KEY (Destination_Airport_ID) REFERENCES airport(Airport_ID)
);
```

---

## BOOKING TABLE

```sql
CREATE TABLE booking (
    Booking_ID INT AUTO_INCREMENT PRIMARY KEY,
    Passenger_ID INT,
    Flight_ID INT,
    Seat_No VARCHAR(10),
    Booking_Date DATE,
    Status VARCHAR(20),
    FOREIGN KEY (Passenger_ID) REFERENCES passenger(Passenger_ID),
    FOREIGN KEY (Flight_ID) REFERENCES flight(Flight_ID)
);
```

---

## BAGGAGE TABLE

```sql
CREATE TABLE baggage (
    Baggage_ID INT AUTO_INCREMENT PRIMARY KEY,
    Booking_ID INT,
    Weight DECIMAL(5,2),
    Baggage_Type VARCHAR(50),
    Status VARCHAR(20),
    FOREIGN KEY (Booking_ID) REFERENCES booking(Booking_ID)
);
```

---

## PAYMENT TABLE

```sql
CREATE TABLE payment (
    Payment_ID INT AUTO_INCREMENT PRIMARY KEY,
    Booking_ID INT,
    Amount DECIMAL(10,2),
    Payment_Status VARCHAR(20),
    Payment_Date DATE,
    FOREIGN KEY (Booking_ID) REFERENCES booking(Booking_ID)
);
```

---

## TICKET TABLE

```sql
CREATE TABLE ticket (
    Ticket_ID INT AUTO_INCREMENT PRIMARY KEY,
    Booking_ID INT,
    Issue_Date DATE,
    FOREIGN KEY (Booking_ID) REFERENCES booking(Booking_ID)
);
```

---

## CREW TABLE

```sql
CREATE TABLE crew (
    Crew_ID INT AUTO_INCREMENT PRIMARY KEY,
    Crew_Name VARCHAR(100),
    Role VARCHAR(50),
    Flight_ID INT,
    FOREIGN KEY (Flight_ID) REFERENCES flight(Flight_ID)
);
```

# ✈️ Airline Management System — Sample Data Inserts

## 🧑‍✈️ PASSENGER TABLE

```sql
INSERT INTO passenger (Passenger_Name, Passport_No) VALUES
('Amit Sharma', 'IND123456'),
('Priya Verma', 'IND654321'),
('Rahul Singh', 'IND987654');
```

---

## 🛫 AIRPORT TABLE

```sql
INSERT INTO airport (Airport_Name, City, Country) VALUES
('Indira Gandhi International Airport', 'Delhi', 'India'),
('Chhatrapati Shivaji Airport', 'Mumbai', 'India'),
('Heathrow Airport', 'London', 'UK');
```

---

## ✈️ FLIGHT TABLE

```sql
INSERT INTO flight (Flight_Number, Source_Airport_ID, Destination_Airport_ID, Departure_Time, Arrival_Time) VALUES
('AI101', 1, 2, '2026-05-10 10:00:00', '2026-05-10 12:00:00'),
('AI202', 2, 3, '2026-05-11 14:00:00', '2026-05-11 20:00:00'),
('AI303', 1, 3, '2026-05-12 09:00:00', '2026-05-12 18:00:00');
```

---

## 🎟️ BOOKING TABLE

```sql
INSERT INTO booking (Passenger_ID, Flight_ID, Seat_No, Booking_Date, Status) VALUES
(1, 1, '12A', '2026-05-01', 'Confirmed'),
(2, 2, '14B', '2026-05-02', 'Confirmed'),
(3, 3, '10C', '2026-05-03', 'Pending');
```

---

## 🧳 BAGGAGE TABLE

```sql
INSERT INTO baggage (Booking_ID, Weight, Baggage_Type, Status) VALUES
(1, 15.5, 'Checked', 'Loaded'),
(2, 10.0, 'Cabin', 'Approved'),
(3, 20.0, 'Checked', 'Pending');
```

---

## 💳 PAYMENT TABLE

```sql
INSERT INTO payment (Booking_ID, Amount, Payment_Status, Payment_Date) VALUES
(1, 5000.00, 'Paid', '2026-05-01'),
(2, 7500.00, 'Paid', '2026-05-02'),
(3, 6000.00, 'Pending', '2026-05-03');
```

---

## 🎫 TICKET TABLE

```sql
INSERT INTO ticket (Booking_ID, Issue_Date) VALUES
(1, '2026-05-01'),
(2, '2026-05-02'),
(3, '2026-05-03');
```

---

## 👨‍✈️ CREW TABLE

```sql
INSERT INTO crew (Crew_Name, Role, Flight_ID) VALUES
('Captain Raj', 'Pilot', 1),
('Anjali Mehta', 'Cabin Crew', 1),
('John Smith', 'Pilot', 2);
```

