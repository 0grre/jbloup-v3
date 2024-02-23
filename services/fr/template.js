const response = await fetch(`../src/assets/lang/fr/template.json`)
const frenchTemplateData = await response.json();

export default frenchTemplateData;
