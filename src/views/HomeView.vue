<template>
    <div>
      <h1>Home</h1>
      <p>Welcome to my unit converter. Select from the menu above which unit types you want to convert to and from. Below is a list of supported types to convert:</p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Supported Types</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Time</td>
            <td>
              minutes, hours, days, seconds, milliseconds, microseconds, nanoseconds, picoseconds
            </td>
          </tr>
          <tr>
            <td>Temperature</td>
            <td>celsius, fahrenheit, kelvin</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>grams, kilograms, pounds, ounces, stones</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>meters, kilometers, inches, feet, yards, miles</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>liters, milliliters, gallons, quarts, pints, cups</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>ms (meter per second), kmh, mph, knots</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              sqm, sqkm, sqft, sqyd, sqmi, sqin, sqcm, sqmm, acre, hectare
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    color: #333;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
  </style>