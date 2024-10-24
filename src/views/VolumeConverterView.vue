<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import { ref, computed } from 'vue'

const inputValue = ref(0)
const fromUnit = ref('liters')
const toUnit = ref('milliliters')

const converter = new UnitConverter()

const volumeUnits = [
    { label: 'Liters', value: 'liters' },
    { label: 'Milliliters', value: 'milliliters' },
    { label: 'Gallons', value: 'gallons' },
    { label: 'Quarts', value: 'quarts' },
    { label: 'Pints', value: 'pints' },
    { label: 'Cups', value: 'cups' },
]

const result = computed(() => {
  try {
    return converter.volumeConverter(
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
        <h1>Volume Converter</h1>
        <div class="converter">
        <input v-model="inputValue" type="number" placeholder="Enter value" />
        <select v-model="fromUnit">
            <option v-for="unit in volumeUnits" :key="unit.value" :value="unit.value">
            {{ unit.label }}
            </option>
        </select>
        <select v-model="toUnit">
            <option v-for="unit in volumeUnits" :key="unit.value" :value="unit.value">
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
