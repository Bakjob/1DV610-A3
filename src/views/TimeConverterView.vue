<script setup>
import { UnitConverter } from '../lib/UnitConverter/UnitConverter'
import ConverterComponent from '../components/ConverterComponent.vue'

const converter = new UnitConverter()

const timeUnits = [
    { label: 'Seconds', value: 'seconds' },
    { label: 'Minutes', value: 'minutes' },
    { label: 'Hours', value: 'hours' },
    { label: 'Days', value: 'days' },
    { label: 'Milliseconds', value: 'milliseconds' },
    { label: 'Microseconds', value: 'microseconds' },
    { label: 'Nanoseconds', value: 'nanoseconds' },
    { label: 'Picoseconds', value: 'picoseconds' },
]

const converterMethod = (value, fromUnit, toUnit) => {
  return converter.timeConverter(value, fromUnit, toUnit)
}
</script>

<template>
  <ConverterComponent
    title="Time Converter"
    :units="timeUnits"
    :converterMethod="converterMethod"
    defaultFromUnit="seconds"
    defaultToUnit="minutes"
  />
</template>
