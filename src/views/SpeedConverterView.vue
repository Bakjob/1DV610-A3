<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import { ref, computed } from 'vue'

const inputValue = ref(0)
const fromUnit = ref('Miles per hour')
const toUnit = ref('Knots')

const converter = new UnitConverter()

const speedUnits = [
    { label: 'Miles per hour', value: 'mph' },
    { label: 'Kilometers per hour', value: 'kmh' },
    { label: 'Meters per second', value: 'ms' },
    { label: 'Knots', value: 'knots' },
]

const result = computed(() => {
  try {
    return converter.speedConverter(
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
        <h1>Speed Converter</h1>
        <div class="converter">
        <input v-model="inputValue" type="number" placeholder="Enter value" />
        <select v-model="fromUnit">
            <option v-for="unit in speedUnits" :key="unit.value" :value="unit.value">
            {{ unit.label }}
            </option>
        </select>
        <select v-model="toUnit">
            <option v-for="unit in speedUnits" :key="unit.value" :value="unit.value">
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