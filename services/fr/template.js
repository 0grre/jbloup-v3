const response = await fetch(`/data/lang/fr/template.json`)
const frenchTemplateData = await response.json();

export default frenchTemplateData;
