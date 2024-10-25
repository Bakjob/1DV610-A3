<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import ConverterComponent from '../components/ConverterComponent.vue'

const converter = new UnitConverter()

const lengthUnits = [
  { value: 'meters', label: 'Meters' },
  { value: 'kilometers', label: 'Kilometers' },
  { value: 'inches', label: 'Inches' },
  { value: 'feet', label: 'Feet' },
  { value: 'yards', label: 'Yards' },
  { value: 'miles', label: 'Miles' },
]

const converterMethod = (value, fromUnit, toUnit) => {
  return converter.lengthConverter(value, fromUnit, toUnit)
}
</script>

<template>
  <ConverterComponent
    title="Length Converter"
    :units="lengthUnits"
    :converterMethod="converterMethod"
    defaultFromUnit="meters"
    defaultToUnit="kilometers"
  />
</template>
