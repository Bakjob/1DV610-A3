<script setup>
 import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
</script>

<template>
    <div>
      <h1>AREA</h1>
      <div>
        <input v-model="inputValue" type="number" placeholder="Enter value" />
        <select v-model="fromUnit">
          <option value="sqm">Square Meters</option>
          <option value="sqkm">Square Kilometers</option>
          <option value="sqft">Square Feet</option>
          <option value="sqyd">Square Yards</option>
          <option value="sqmi">Square Miles</option>
          <option value="sqin">Square Inches</option>
          <option value="sqcm">Square Centimeters</option>
          <option value="sqmm">Square Millimeters</option>
          <option value="acre">Acres</option>
          <option value="hectare">Hectares</option>
        </select>
        <select v-model="toUnit">
          <option value="sqm">Square Meters</option>
          <option value="sqkm">Square Kilometers</option>
          <option value="sqft">Square Feet</option>
          <option value="sqyd">Square Yards</option>
          <option value="sqmi">Square Miles</option>
          <option value="sqin">Square Inches</option>
          <option value="sqcm">Square Centimeters</option>
          <option value="sqmm">Square Millimeters</option>
          <option value="acre">Acres</option>
          <option value="hectare">Hectares</option>
        </select>
        <button @click="convertArea">Convert</button>
      </div>
      <div v-if="result !== null">
        <p>Result: {{ result }}</p>
      </div>
    </div>
  </template>

<script>

</script>