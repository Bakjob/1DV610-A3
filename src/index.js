import converter from './lib/UnitConverter/UnitConverter';

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Example usage of the UnitConverter
  console.log(converter.convert(1, 'm', 'cm')); // 100
});
