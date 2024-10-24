<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import { ref, computed } from 'vue'

const inputValue = ref(0)
const fromUnit = ref('seconds')
const toUnit = ref('minutes')

const converter = new UnitConverter()

const areaUnits = [
  { value: 'sqm', label: 'sqm' },
  { value: 'sqkm', label: 'sqkm' },
  { value: 'sqft', label: 'sqft' },
  { value: 'sqyd', label: 'sqyd' },
  { value: 'sqmi', label: 'sqmi' },
  { value: 'sqin', label: 'sqin' },
  { value: 'sqcm', label: 'sqcm' },
  { value: 'sqmm', label: 'sqmm' },
  { value: 'acre', label: 'acre' },
  { value: 'hectare', label: 'hectare' },
]

const result = computed(() => {
  try {
    return converter.areaConverter(
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
    <h1>Area Converter</h1>
    <div class="converter">
      <input v-model="inputValue" type="number" placeholder="Enter value" />
      <select v-model="fromUnit">
        <option v-for="unit in areaUnits" :key="unit.value" :value="unit.value">
          {{ unit.label }}
        </option>
      </select>
      <select v-model="toUnit">
        <option v-for="unit in areaUnits" :key="unit.value" :value="unit.value">
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
