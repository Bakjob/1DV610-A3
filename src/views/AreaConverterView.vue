<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import ConverterComponent from '../components/ConverterComponent.vue'

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

const converterMethod = (value, fromUnit, toUnit) => {
  return converter.areaConverter(value, fromUnit, toUnit)
}
</script>

<template>
  <ConverterComponent
    title="Area Converter"
    :units="areaUnits"
    :converterMethod="converterMethod"
    defaultFromUnit="sqm"
    defaultToUnit="sqkm"
  />
</template>
