<script setup>
import UnitConverter from '../lib/UnitConverter/UnitConverter'
import { ref, computed } from 'vue'

const inputValue = ref(0)
const fromUnit = ref('seconds')
const toUnit = ref('minutes')

const converter = new UnitConverter()

const result = computed(() => {
  try {
    return converter.convert(inputValue.value, fromUnit.value, toUnit.value)
  } catch (error) {
    console.error(error.message)
    return null
  }
})
</script>

<template>
  <div>
    <h1>TIME</h1>
    <div>
      <input v-model="inputValue" type="number" placeholder="Enter value" />
      <select v-model="fromUnit">
        <option value="seconds">Seconds</option>
        <option value="minutes">Minutes</option>
        <option value="hours">Hours</option>
        <option value="days">Days</option>
        <option value="milliseconds">Milliseconds</option>
        <option value="microseconds">Microseconds</option>
        <option value="nanoseconds">Nanoseconds</option>
        <option value="picoseconds">Picoseconds</option>
      </select>
      <select v-model="toUnit">
        <option value="seconds">Seconds</option>
        <option value="minutes">Minutes</option>
        <option value="hours">Hours</option>
        <option value="days">Days</option>
        <option value="milliseconds">Milliseconds</option>
        <option value="microseconds">Microseconds</option>
        <option value="nanoseconds">Nanoseconds</option>
        <option value="picoseconds">Picoseconds</option>
      </select>
    </div>
    <div v-if="result !== null">
      <p>Result: {{ result }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Lägg till din CSS här */
</style>