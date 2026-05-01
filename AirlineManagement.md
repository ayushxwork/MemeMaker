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
