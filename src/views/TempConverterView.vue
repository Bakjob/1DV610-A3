<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import ConverterComponent from '../components/ConverterComponent.vue'

const converter = new UnitConverter()

const tempUnits = [
    { label: 'Celsius', value: 'celsius' },
    { label: 'Fahrenheit', value: 'fahrenheit' },
    { label: 'Kelvin', value: 'kelvin' },
]

const converterMethod = (value, fromUnit, toUnit) => {
  return converter.tempConverter(value, fromUnit, toUnit)
}
</script>

<template>
  <ConverterComponent
    title="Temperature Converter"
    :units="tempUnits"
    :converterMethod="converterMethod"
    defaultFromUnit="celsius"
    defaultToUnit="fahrenheit"
  />
</template>
