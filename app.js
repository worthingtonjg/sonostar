const DEFAULT_HUB_DEDUCTION_INCHES = 2.28;

const DOMES = [
  {
    id: "2v",
    name: "2V",
    domeType: "twoV",
    heightFactor: 1,
    floorAreaFactor: 2.93893,
    image: "https://cdn.shopify.com/s/files/1/1592/5131/files/2V_dome_color.jpg",
    hubs: { fourStar: 10, fiveStar: 6, sixStar: 10 },
    struts: [
      { type: "A", color: "Blue", count: 35, coefficient: 0.61803, swatch: "#2f6db1" },
      { type: "B", color: "Yellow", count: 30, coefficient: 0.54653, swatch: "#d3a509" }
    ]
  },
  {
    id: "3v-4-9",
    name: "3V 4/9",
    domeType: "threeV",
    heightFactor: 0.81241,
    floorAreaFactor: 2.9426,
    image: "https://cdn.shopify.com/s/files/1/1592/5131/files/3v_4-9_color_dome_khruschke.jpg?16",
    hubs: { fourStar: 15, fiveStar: 6, sixStar: 25 },
    struts: [
      { type: "A", color: "Yellow", count: 30, coefficient: 0.329706, swatch: "#d3a509" },
      { type: "B", color: "Blue", count: 30, coefficient: 0.38229, swatch: "#2f6db1" },
      { type: "C", color: "Red", count: 50, coefficient: 0.421489, swatch: "#bd2f2f" },
      { type: "D", color: "Green", count: 10, coefficient: 0.441056, swatch: "#3d8f4e" }
    ]
  },
  {
    id: "3v-5-9",
    name: "3V 5/9",
    domeType: "threeV",
    heightFactor: 1.187592,
    floorAreaFactor: 2.9426,
    image: "https://cdn.shopify.com/s/files/1/1592/5131/files/3v_5-9_color_dome_khruschke.jpg?16",
    hubs: { fourStar: 15, fiveStar: 6, sixStar: 40 },
    struts: [
      { type: "A", color: "Yellow", count: 30, coefficient: 0.329706, swatch: "#d3a509" },
      { type: "B", color: "Blue", count: 35, coefficient: 0.38229, swatch: "#2f6db1" },
      { type: "C", color: "Red", count: 80, coefficient: 0.421489, swatch: "#bd2f2f" },
      { type: "D", color: "Green", count: 20, coefficient: 0.441056, swatch: "#3d8f4e" }
    ]
  },
  {
    id: "4v",
    name: "4V",
    domeType: "fourV",
    heightFactor: 1,
    floorAreaFactor: 3.0902,
    image: "https://cdn.shopify.com/s/files/1/1592/5131/files/4V_dome_color.JPG",
    hubs: { fourStar: 20, fiveStar: 6, sixStar: 65 },
    struts: [
      { type: "A", color: "Yellow", count: 30, coefficient: 0.25318, swatch: "#d3a509" },
      { type: "B", color: "Red", count: 30, coefficient: 0.29524, swatch: "#bd2f2f" },
      { type: "C", color: "Blue", count: 60, coefficient: 0.29453, swatch: "#2f6db1" },
      { type: "D", color: "Green", count: 70, coefficient: 0.31287, swatch: "#3d8f4e" },
      { type: "E", color: "Purple", count: 30, coefficient: 0.32492, swatch: "#7b58b5" },
      { type: "F", color: "Orange", count: 30, coefficient: 0.29859, swatch: "#ce7d14" }
    ]
  },
  {
    id: "5v-3-8",
    name: "5V 3/8",
    domeType: "fiveV",
    heightFactor: 0.89565,
    floorAreaFactor: 3.07013,
    image: "https://cdn.shopify.com/s/files/1/1592/5131/files/5V_3-8_dome_color.jpg",
    hubs: { fourStar: 25, fiveStar: 6, sixStar: 95 },
    struts: [
      { type: "A", color: "Yellow", count: 30, coefficient: 0.19814743, swatch: "#d3a509" },
      { type: "B", color: "Blue", count: 30, coefficient: 0.23179025, swatch: "#2f6db1" },
      { type: "C", color: "Red", count: 60, coefficient: 0.22568578, swatch: "#bd2f2f" },
      { type: "D", color: "Purple", count: 60, coefficient: 0.24724291, swatch: "#7b58b5" },
      { type: "E", color: "Green", count: 50, coefficient: 0.25516701, swatch: "#3d8f4e" },
      { type: "F", color: "Orange", count: 50, coefficient: 0.24508578, swatch: "#ce7d14" },
      { type: "G", color: "Pink", count: 30, coefficient: 0.2615981, swatch: "#cb6d96" },
      { type: "H", color: "Turquoise", count: 30, coefficient: 0.2315976, swatch: "#3fadb0" },
      { type: "I", color: "Brown", count: 10, coefficient: 0.24534642, swatch: "#7b5a3a" }
    ]
  },
  {
    id: "5v-5-8",
    name: "5V 5/8",
    domeType: "fiveV",
    heightFactor: 1.11126,
    floorAreaFactor: 3.07013,
    image: "https://cdn.shopify.com/s/files/1/1592/5131/files/5V_5-8_dome_color.JPG",
    hubs: { fourStar: 25, fiveStar: 6, sixStar: 120 },
    struts: [
      { type: "A", color: "Yellow", count: 30, coefficient: 0.19814743, swatch: "#d3a509" },
      { type: "B", color: "Blue", count: 30, coefficient: 0.23179025, swatch: "#2f6db1" },
      { type: "C", color: "Red", count: 60, coefficient: 0.22568578, swatch: "#bd2f2f" },
      { type: "D", color: "Purple", count: 70, coefficient: 0.24724291, swatch: "#7b58b5" },
      { type: "E", color: "Green", count: 70, coefficient: 0.25516701, swatch: "#3d8f4e" },
      { type: "F", color: "Orange", count: 80, coefficient: 0.24508578, swatch: "#ce7d14" },
      { type: "G", color: "Pink", count: 35, coefficient: 0.2615981, swatch: "#cb6d96" },
      { type: "H", color: "Turquoise", count: 30, coefficient: 0.2315976, swatch: "#3fadb0" },
      { type: "I", color: "Brown", count: 20, coefficient: 0.24534642, swatch: "#7b5a3a" }
    ]
  },
  {
    id: "6v",
    name: "6V",
    domeType: "sixV",
    heightFactor: 1,
    floorAreaFactor: 3.14159,
    image: "https://cdn.shopify.com/s/files/1/1592/5131/files/6V_dome_color.JPG",
    hubs: { fourStar: 30, fiveStar: 6, sixStar: 160 },
    struts: [
      { type: "A", color: "Yellow", count: 30, coefficient: 0.1625672, swatch: "#d3a509" },
      { type: "B", color: "Blue", count: 30, coefficient: 0.1904769, swatch: "#2f6db1" },
      { type: "C", color: "Red", count: 60, coefficient: 0.1819083, swatch: "#bd2f2f" },
      { type: "D", color: "Purple", count: 90, coefficient: 0.2028197, swatch: "#7b58b5" },
      { type: "E", color: "Green", count: 30, coefficient: 0.1873834, swatch: "#3d8f4e" },
      { type: "F", color: "Orange", count: 60, coefficient: 0.1980126, swatch: "#ce7d14" },
      { type: "G", color: "Pink", count: 130, coefficient: 0.2059077, swatch: "#cb6d96" },
      { type: "H", color: "Turquoise", count: 65, coefficient: 0.2153537, swatch: "#3fadb0" },
      { type: "I", color: "Brown", count: 60, coefficient: 0.2166282, swatch: "#7b5a3a" }
    ]
  }
];

const state = {
  domeId: DOMES[0].id,
  inputType: "diameter",
  inputValue: 10,
  applyHubDeduction: true,
  hubDeductionInches: DEFAULT_HUB_DEDUCTION_INCHES
};

const elements = {
  tabs: document.querySelector("#dome-tabs"),
  title: document.querySelector("#dome-title"),
  subtitle: document.querySelector("#dome-subtitle"),
  description: document.querySelector("#dome-description"),
  image: document.querySelector("#dome-image"),
  inputType: document.querySelector("#input-type"),
  inputValue: document.querySelector("#input-value"),
  applyHubDeduction: document.querySelector("#apply-hub-deduction"),
  hubDeductionInches: document.querySelector("#hub-deduction-inches"),
  form: document.querySelector("#calculator-form"),
  hubNote: document.querySelector("#hub-note"),
  count4: document.querySelector("#count-4-star"),
  count5: document.querySelector("#count-5-star"),
  count6: document.querySelector("#count-6-star"),
  radius: document.querySelector("#metric-radius"),
  diameter: document.querySelector("#metric-diameter"),
  height: document.querySelector("#metric-height"),
  circumference: document.querySelector("#metric-circumference"),
  floorArea: document.querySelector("#metric-floor-area"),
  surfaceArea: document.querySelector("#metric-surface-area"),
  totalStrutLength: document.querySelector("#metric-total-strut-length"),
  strutTableBody: document.querySelector("#strut-table-body")
};

function formatFeet(value) {
  return `${value.toFixed(2)} ft`;
}

function formatSquareFeet(value) {
  return `${value.toFixed(2)} sq ft`;
}

function getActiveDome() {
  return DOMES.find((dome) => dome.id === state.domeId);
}

function valueToRadius(value, inputType, dome) {
  switch (inputType) {
    case "radius":
      return value;
    case "diameter":
      return value / 2;
    case "circumference":
      return value / (2 * Math.PI);
    case "height":
      return value / dome.heightFactor;
    case "floor-area":
      return Math.sqrt(value / Math.PI);
    case "surface-area":
      return Math.sqrt(value / (2 * Math.PI));
    default:
      return value;
  }
}

function calculateDome(radius, dome, applyHubDeduction, hubDeductionInches) {
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const height = radius * dome.heightFactor;
  const floorArea = dome.floorAreaFactor * radius * radius;
  const surfaceArea = 2 * Math.PI * radius * radius;
  const hubDeduction = applyHubDeduction ? hubDeductionInches : 0;

  const struts = dome.struts.map((strut) => {
    const inches = radius * strut.coefficient * 12 - hubDeduction;

    return {
      ...strut,
      inches
    };
  });

  const totalStrutLengthInches = struts.reduce(
    (sum, strut) => sum + strut.inches * strut.count,
    0
  );

  return { radius, diameter, circumference, height, floorArea, surfaceArea, struts, totalStrutLengthInches };
}

function renderTabs() {
  elements.tabs.innerHTML = "";

  DOMES.forEach((dome) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-button${dome.id === state.domeId ? " active" : ""}`;
    button.textContent = `${dome.name} Dome`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(dome.id === state.domeId));
    button.addEventListener("click", () => {
      state.domeId = dome.id;
      render();
    });
    elements.tabs.appendChild(button);
  });
}

function renderSummary(dome, result) {
  elements.title.textContent = `${dome.name} Dome`;
  elements.subtitle.textContent = "Standard Dome Calculator";
  const deductionValueText = `${state.hubDeductionInches.toFixed(2)} in`;
  const deductionDescription = state.applyHubDeduction
    ? `with a ${deductionValueText} hub deduction per strut.`
    : "with no hub deduction applied to strut lengths.";
  elements.description.textContent =
    `${dome.name} uses Sonostar's extracted ${dome.domeType} strut coefficient set ${deductionDescription}`;
  elements.image.src = dome.image;
  elements.image.alt = `${dome.name} geodesic dome`;
  elements.hubNote.textContent = state.applyHubDeduction
    ? `PVC strut lengths currently subtract ${deductionValueText} for connectors.`
    : "PVC strut lengths currently do not subtract connector deduction.";
  elements.count4.textContent = String(dome.hubs.fourStar);
  elements.count5.textContent = String(dome.hubs.fiveStar);
  elements.count6.textContent = String(dome.hubs.sixStar);

  elements.radius.textContent = formatFeet(result.radius);
  elements.diameter.textContent = formatFeet(result.diameter);
  elements.height.textContent = formatFeet(result.height);
  elements.circumference.textContent = formatFeet(result.circumference);
  elements.floorArea.textContent = formatSquareFeet(result.floorArea);
  elements.surfaceArea.textContent = formatSquareFeet(result.surfaceArea);
  elements.totalStrutLength.textContent = formatFeet(result.totalStrutLengthInches / 12);
}

function renderStrutTable(struts) {
  elements.strutTableBody.innerHTML = "";

  struts.forEach((strut) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${strut.type}</td>
      <td>${strut.inches.toFixed(2)} inch</td>
      <td>
        <span class="color-chip">
          <span class="color-dot" style="background:${strut.swatch}"></span>
          ${strut.color}
        </span>
      </td>
      <td>${strut.count}</td>
    `;
    elements.strutTableBody.appendChild(row);
  });
}

function render() {
  const dome = getActiveDome();
  const radius = valueToRadius(Number(state.inputValue), state.inputType, dome);
  const result = calculateDome(radius, dome, state.applyHubDeduction, state.hubDeductionInches);

  elements.inputType.value = state.inputType;
  elements.inputValue.value = String(state.inputValue);
  elements.applyHubDeduction.checked = state.applyHubDeduction;
  elements.hubDeductionInches.value = String(state.hubDeductionInches);
  elements.hubDeductionInches.disabled = !state.applyHubDeduction;

  renderTabs();
  renderSummary(dome, result);
  renderStrutTable(result.struts);
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = Number(elements.inputValue.value);
  const hubDeductionInches = Number(elements.hubDeductionInches.value);
  if (!Number.isFinite(inputValue) || inputValue <= 0) {
    return;
  }
  if (!Number.isFinite(hubDeductionInches) || hubDeductionInches < 0) {
    return;
  }

  state.inputType = elements.inputType.value;
  state.inputValue = inputValue;
  state.applyHubDeduction = elements.applyHubDeduction.checked;
  state.hubDeductionInches = hubDeductionInches;
  render();
});

elements.applyHubDeduction.addEventListener("change", () => {
  state.applyHubDeduction = elements.applyHubDeduction.checked;
  render();
});

elements.hubDeductionInches.addEventListener("change", () => {
  const hubDeductionInches = Number(elements.hubDeductionInches.value);
  if (!Number.isFinite(hubDeductionInches) || hubDeductionInches < 0) {
    elements.hubDeductionInches.value = String(state.hubDeductionInches);
    return;
  }
  state.hubDeductionInches = hubDeductionInches;
  render();
});

render();
