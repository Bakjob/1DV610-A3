<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import ConverterComponent from '../components/ConverterComponent.vue'

const converter = new UnitConverter()

const weightUnits = [
    { label: 'Kilograms', value: 'kilograms' },
    { label: 'Grams', value: 'grams' },
    { label: 'Pounds', value: 'pounds' },
    { label: 'Ounces', value: 'ounces' },
    { label: 'Stones', value: 'stones' },
]

const converterMethod = (value, fromUnit, toUnit) => {
  return converter.weightConverter(value, fromUnit, toUnit)
}
</script>

<template>
  <ConverterComponent
    title="Weight Converter"
    :units="weightUnits"
    :converterMethod="converterMethod"
    defaultFromUnit="kilograms"
    defaultToUnit="grams"
  />
</template>
