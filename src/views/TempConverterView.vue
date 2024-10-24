<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import { ref, computed } from 'vue'

const inputValue = ref(0)
const fromUnit = ref('celsius')
const toUnit = ref('fahrenheit')

const converter = new UnitConverter()

const tempUnits = [
    { label: 'Celsius', value: 'celsius' },
    { label: 'Fahrenheit', value: 'fahrenheit' },
    { label: 'Kelvin', value: 'kelvin' },
]

const result = computed(() => {
  try {
    return converter.tempConverter(
      inputValue.value,
      fromUnit.value,
      toUnit.value,
    )
  } catch (error) {
    console.error(error.message)
    return null
  }
})
</script>

<template>
  <div class="container">
    <h1>Temp Converter</h1>
    <div class="converter">
      <input v-model="inputValue" type="number" placeholder="Enter value" />
      <select v-model="fromUnit">
        <option v-for="unit in tempUnits" :key="unit.value" :value="unit.value">
          {{ unit.label }}
        </option>
      </select>
      <select v-model="toUnit">
        <option v-for="unit in tempUnits" :key="unit.value" :value="unit.value">
          {{ unit.label }}
        </option>
      </select>
    </div>
    <div v-if="result !== null" class="result">
      <p>{{ inputValue }} {{ fromUnit }} in {{ toUnit }} is:</p>
      <h1>{{ result }}</h1>
    </div>
  </div>
</template>
