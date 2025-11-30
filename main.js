// Algoritmus pro generování seznamu zaměstnanců

class Employee {
  constructor(name, surname, gender, birthdate, workload) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.birthdate = birthdate;
    this.workload = workload;
  }
}

// funkce na výběr náhodného jména
function getRandomName() {
  const names = [
    "Jaroslava", "Jan", "Eva", "Pavel", "Klára", "Tomáš", "Lucie",
    "Michal", "Veronika", "Lukáš", "Filip", "Anna", "Barbora",
    "Ondřej", "Jiří", "Karel", "Martina", "Zuzana", "Radek", "Roman",
    "David", "Nikola", "Alena", "Petra", "Daniel", "Eliška"
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// funkce na výběr příjmení
function getRandomSurname() {
  const surnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Žilka",
    "Marek", "Hájek", "Němec", "Šimek", "Růžička", "Sedláček",
    "Pokorný", "Pospíšil", "Holý", "Král", "Vlček", "Urban",
    "Kozák", "Fiala", "Moravec", "Bláha", "Malý", "Kříž"
  ];
  return surnames[Math.floor(Math.random() * surnames.length)];
}

// vytvoření náhodného data narození tak, aby věk byl v intervalu
function generateBirthdate(minAge, maxAge) {
  const now = new Date();
  const yearMs = 365.25 * 24 * 60 * 60 * 1000;

  const maxBirthMs = now.getTime() - (minAge * yearMs);
  const minBirthMs = now.getTime() - (maxAge * yearMs);

  const randomMs = minBirthMs + Math.random() * (maxBirthMs - minBirthMs);

  return new Date(randomMs).toISOString();
}

// vygenerování jednoho zaměstnance
function generateEmployee(minAge, maxAge) {
  const gender = Math.random() < 0.5 ? "male" : "female";

  const workloads = [10, 20, 30, 40];
  const workload = workloads[Math.floor(Math.random() * workloads.length)];

  return new Employee(
      getRandomName(),
      getRandomSurname(),
      gender,
      generateBirthdate(minAge, maxAge),
      workload
  );
}

// generování seznamu zaměstnanců
function generateEmployeesList(numEmployees, minAge, maxAge) {
  const employees = [];

  for (let i = 0; i < numEmployees; i++) {
    employees.push(generateEmployee(minAge, maxAge));
  }

  return employees;
}

// hlavní funkce
function main(dtoIn) {
  const employees = generateEmployeesList(
      dtoIn.numEmployees,
      dtoIn.minAge,
      dtoIn.maxAge
  );

  return {
    employees: employees
  };
}

// export for autograder
export { main };
