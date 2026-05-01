# SQL Quries Question

## ✈️ Airline Management System  


---

## 1. Show all passengers
```sql
SELECT * FROM passenger;
````

---

## 2. Show all confirmed bookings

```sql
SELECT * FROM booking
WHERE Status = 'Confirmed';
```

---

## 3. Display passenger name with their booking seat number

```sql
SELECT p.Passenger_Name, b.Seat_No
FROM passenger p
JOIN booking b ON p.Passenger_ID = b.Passenger_ID;
```

---

## 4. Show all flights with source and destination airport names

```sql
SELECT f.Flight_Number, a1.Airport_Name AS Source, a2.Airport_Name AS Destination
FROM flight f
JOIN airport a1 ON f.Source_Airport_ID = a1.Airport_ID
JOIN airport a2 ON f.Destination_Airport_ID = a2.Airport_ID;
```

---

## 5. Count total passengers

```sql
SELECT COUNT(*) AS Total_Passengers FROM passenger;
```

---

## 6. Show total bookings per flight

```sql
SELECT Flight_ID, COUNT(*) AS Total_Bookings
FROM booking
GROUP BY Flight_ID;
```

---

## 7. Find passengers who booked a specific flight

```sql
SELECT p.Passenger_Name
FROM passenger p
JOIN booking b ON p.Passenger_ID = b.Passenger_ID
WHERE b.Flight_ID = 1;
```

---

## 8. Show bookings with payment status

```sql
SELECT b.Booking_ID, p.Payment_Status
FROM booking b
JOIN payment p ON b.Booking_ID = p.Booking_ID;
```

---

## 9. Find total revenue generated

```sql
SELECT SUM(Amount) AS Total_Revenue
FROM payment
WHERE Payment_Status = 'Paid';
```

---

## 10. Show flights departing after a specific date

```sql
SELECT * FROM flight
WHERE Departure_Time > '2026-05-10';
```

---

## 11. Find baggage details for each passenger

```sql
SELECT p.Passenger_Name, bg.Weight, bg.Baggage_Type
FROM passenger p
JOIN booking b ON p.Passenger_ID = b.Passenger_ID
JOIN baggage bg ON b.Booking_ID = bg.Booking_ID;
```

---

## 12. Update booking status

```sql
UPDATE booking
SET Status = 'Cancelled'
WHERE Booking_ID = 3;
```

---

## 13. Delete a ticket record

```sql
DELETE FROM ticket
WHERE Ticket_ID = 2;
```

---

## 14. Show crew members for a specific flight

```sql
SELECT Crew_Name, Role
FROM crew
WHERE Flight_ID = 1;
```

---

## 15. Find flights with more than 1 booking

```sql
SELECT Flight_ID, COUNT(*) AS Total
FROM booking
GROUP BY Flight_ID
HAVING COUNT(*) > 1;
```

---


