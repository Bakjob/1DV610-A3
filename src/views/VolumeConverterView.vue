<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import ConverterComponent from '../components/ConverterComponent.vue'

const converter = new UnitConverter()

const volumeUnits = [
    { label: 'Liters', value: 'liters' },
    { label: 'Milliliters', value: 'milliliters' },
    { label: 'Gallons', value: 'gallons' },
    { label: 'Quarts', value: 'quarts' },
    { label: 'Pints', value: 'pints' },
    { label: 'Cups', value: 'cups' },
]

const converterMethod = (value, fromUnit, toUnit) => {
  return converter.volumeConverter(value, fromUnit, toUnit)
}
</script>

<template>
  <ConverterComponent
    title="Volume Converter"
    :units="volumeUnits"
    :converterMethod="converterMethod"
    defaultFromUnit="liters"
    defaultToUnit="milliliters"
  />
</template>
