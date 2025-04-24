//GET ALL DRUGS THAT ARE ANTIBIOTICS

const antibiotics = drugs.filter(drug => drug.category === "Antibiotic");
console.log(antibiotics);

//Return an array of drug name in lower cases
const lowerCaseNames = drugs.map(drug => drug.name.toLowerCase());
console.log(lowerCaseNames);

//Functions to get get drugs by category
function getDrugsByCategory(category) {
    return drugs.filter(drug => drug.category === category);
  }
  console.log(getDrugsByCategory("Analgesic"));

  //log each drugs names against its manufacturer
  drugs.forEach(drug => {
    console.log(`${drug.name} - ${drug.manufacturer}`);
  });

  //Return all drugs that require prescription
  const prescriptionDrugs = drugs.filter(drug => drug.isPrescriptionOnly);
console.log(prescriptionDrugs);

//Return a new array: "Drug: [name] - [dosageMg]mg":
const formattedDrugs = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`);
console.log(formattedDrugs);

//Function to get drugs with stocks less than 50
function getLowStockDrugs() {
    return drugs.filter(drug => drug.stock < 50);
  }
  console.log(getLowStockDrugs());

  //Return all drugs that are not prescription only
  const nonPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);
console.log(nonPrescriptionDrugs);

//Function To Count Drugs by manufacturer
function countDrugsByManufacturer(manufacturer) {
    return drugs.filter(drug => drug.manufacturer === manufacturer).length;
  }
  console.log(countDrugsByManufacturer("Pfizer"));

  //Use for Each to count how many drugs are Analgesic
  let analgesicCount = 0;
drugs.forEach(drug => {
  if (drug.category === "Analgesic") {
    analgesicCount++;
  }
});
console.log(`Number of Analgesics: ${analgesicCount}`);

  
