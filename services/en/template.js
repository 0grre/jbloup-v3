const response = await fetch(`../src/assets/lang/en/template.json`)
const englishTemplateData = await response.json();

export default englishTemplateData;
