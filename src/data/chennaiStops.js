import React, { useState, useEffect } from "react";

const chennaiStops = [
  "Anna Nagar",
  "Guindy",
  "T Nagar",
  "Mylapore",
  "Egmore",
  "Korattur",
  "Velachery",
  "Choolaimedu",
  "Kodambakkam",
  "Mount Road",
  "Adyar",
  "Royapettah",
  "Alwarpet",
  "Chennai Central",
  "Chetpet",
  "Ashok Nagar",
  "Purasawalkam",
  "Nungambakkam",
  "Saidapet",
  "Perungudi",
];

const transportData = {
  bus: [
    {
      from: "Anna Nagar",
      to: "Egmore",
      arrivalTime: "10:30 AM",
      departureTime: "10:45 AM",
      status: "On time",
      traffic: "Clear",
      estimatedDelay: "0 minutes",
      ticketPrice: 20,
      seatStatus: "Available",  
    },
    {
      from: "Mylapore",
      to: "Royapettah",
      arrivalTime: "11:15 AM",
      departureTime: "11:25 AM",
      status: "Delayed",
      traffic: "Moderate",
      estimatedDelay: "10 minutes",
      ticketPrice: 15,  // Added ticket price
      seatStatus: "Rush",  // Added seat status
    },
  ],
  metro: [
    {
      from: "T Nagar",
      to: "Adyar",
      arrivalTime: "9:50 AM",
      departureTime: "10:00 AM",
      status: "On time",
      traffic: "No traffic",
      estimatedDelay: "0 minutes",
      ticketPrice: 30,  // Added ticket price
      seatStatus: "Available",  // Added seat status
    },
    {
      from: "Chennai Central",
      to: "Chetpet",
      arrivalTime: "12:00 PM",
      departureTime: "12:05 PM",
      status: "On time",
      traffic: "Clear",
      estimatedDelay: "0 minutes",
      ticketPrice: 25,  // Added ticket price
      seatStatus: "Available",  // Added seat status
    },
  ],
  train: [
    {
      from: "Korattur",
      to: "Guindy",
      arrivalTime: "6:45 AM",
      departureTime: "7:00 AM",
      status: "On time",
      traffic: "No delays",
      estimatedDelay: "0 minutes",
      ticketPrice: 40,  // Added ticket price
      seatStatus: "Available",  // Added seat status
    },
    {
      from: "Nungambakkam",
      to: "Perungudi",
      arrivalTime: "5:30 PM",
      departureTime: "5:40 PM",
      status: "Delayed",
      traffic: "Heavy",
      estimatedDelay: "20 minutes",
      ticketPrice: 35,  // Added ticket price
      seatStatus: "Rush",  // Added seat status
    },
  ],
};
