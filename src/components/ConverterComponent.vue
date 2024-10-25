<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="converter">
      <input v-model="inputValue" type="number" placeholder="Enter value" />
      <select v-model="fromUnit">
        <option v-for="unit in units" :key="unit.value" :value="unit.value">
          {{ unit.label }}
        </option>
      </select>
      <select v-model="toUnit">
        <option v-for="unit in units" :key="unit.value" :value="unit.value">
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

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  units: Array,
  converterMethod: Function,
  defaultFromUnit: String,
  defaultToUnit: String,
})

const inputValue = ref(0)
const fromUnit = ref(props.defaultFromUnit)
const toUnit = ref(props.defaultToUnit)

const result = computed(() => {
  try {
    return props.converterMethod(inputValue.value, fromUnit.value, toUnit.value)
  } catch (error) {
    console.error(error.message)
    return null
  }
})
</script>
