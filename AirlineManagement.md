

````
# Airline Management System Database

## Create Database
```sql
CREATE DATABASE airline;
USE airline;
````

---

## ACCOUNT TABLE

```sql
CREATE TABLE account (
    Account_ID INT AUTO_INCREMENT PRIMARY KEY,
    Account_Type VARCHAR(50) NOT NULL
);

INSERT INTO account (Account_Type) VALUES
('Admin'), ('Passenger'), ('Staff');
```

---

## ADMIN TABLE

```sql
CREATE TABLE administrator (
    Admin_ID INT AUTO_INCREMENT PRIMARY KEY,
    Admin_Name VARCHAR(100),
    Account_ID INT,
    FOREIGN KEY (Account_ID) REFERENCES account(Account_ID)
);
```

---

## PASSENGER TABLE

```sql
CREATE TABLE passenger (
    Passenger_ID INT AUTO_INCREMENT PRIMARY KEY,
    Passenger_Name VARCHAR(100),
    Passport_No VARCHAR(50),
    Account_ID INT,
    FOREIGN KEY (Account_ID) REFERENCES account(Account_ID)
);
```

---

## STAFF TABLE

```sql
CREATE TABLE staff (
    Staff_ID INT AUTO_INCREMENT PRIMARY KEY,
    Staff_Name VARCHAR(100),
    Role VARCHAR(50),
    Account_ID INT,
    FOREIGN KEY (Account_ID) REFERENCES account(Account_ID)
);
```

---

## AIRCRAFT TABLE

```sql
CREATE TABLE aircraft (
    Aircraft_ID INT AUTO_INCREMENT PRIMARY KEY,
    Model VARCHAR(50),
    Total_Seats INT
);
```

---

## FLIGHT TABLE

```sql
CREATE TABLE flight (
    Flight_ID INT AUTO_INCREMENT PRIMARY KEY,
    Flight_Number VARCHAR(20),
    Source VARCHAR(50),
    Destination VARCHAR(50),
    Departure_Time DATETIME,
    Arrival_Time DATETIME,
    Aircraft_ID INT,
    FOREIGN KEY (Aircraft_ID) REFERENCES aircraft(Aircraft_ID)
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

## CREW ASSIGNMENT TABLE

```sql
CREATE TABLE crew_assignment (
    Flight_ID INT,
    Staff_ID INT,
    PRIMARY KEY (Flight_ID, Staff_ID),
    FOREIGN KEY (Flight_ID) REFERENCES flight(Flight_ID),
    FOREIGN KEY (Staff_ID) REFERENCES staff(Staff_ID)
);
```

```

---

If you want, I can also convert this into a **downloadable `.md` or `.docx` file** directly.
```
