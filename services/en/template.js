const response = await fetch(`/data/lang/en/template.json`)
const englishTemplateData = await response.json();

export default englishTemplateData;
