<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import ConverterComponent from '../components/ConverterComponent.vue'

const converter = new UnitConverter()

const speedUnits = [
  { label: 'Miles per hour', value: 'mph' },
  { label: 'Kilometers per hour', value: 'kmh' },
  { label: 'Meters per second', value: 'ms' },
  { label: 'Knots', value: 'knots' },
]

const converterMethod = (value, fromUnit, toUnit) => {
  return converter.speedConverter(value, fromUnit, toUnit)
}
</script>

<template>
  <ConverterComponent
    title="Speed Converter"
    :units="speedUnits"
    :converterMethod="converterMethod"
    defaultFromUnit="mph"
    defaultToUnit="knots"
  />
</template>