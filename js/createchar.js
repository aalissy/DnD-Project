const create = document.getElementById('create');

// Change modifier with score
function updateMods() {
  var strScore = document.getElementById("strScore").value;
  document.getElementById("strMod").value = Math.floor((strScore - 10) / 2);
  var dexScore = document.getElementById("dexScore").value;
  document.getElementById("dexMod").value = Math.floor((dexScore - 10) / 2);
  var conScore = document.getElementById("conScore").value;
  document.getElementById("conMod").value = Math.floor((conScore - 10) / 2);
  var intScore = document.getElementById("intScore").value;
  document.getElementById("intMod").value = Math.floor((intScore - 10) / 2);
  var wisScore = document.getElementById("wisScore").value;
  document.getElementById("wisMod").value = Math.floor((wisScore - 10) / 2);
  var chaScore = document.getElementById("chaScore").value;
  document.getElementById("chaMod").value = Math.floor((chaScore - 10) / 2);

  updateSkills();
}

// Change prof bonus with level
function updateProf() {
  var playerLevel = parseInt(document.getElementById("playerLevel").value);

  if (playerLevel >= 17) {
    document.getElementById("profBonus").value = 6;
  } else if (playerLevel >= 13) {
    document.getElementById("profBonus").value = 5;
  } else if (playerLevel >= 9) {
    document.getElementById("profBonus").value = 4;
  } else if (playerLevel >= 5) {
    document.getElementById("profBonus").value = 3;
  } else {
    document.getElementById("profBonus").value = 2;
  }
}

// Update skills with ability score
function updateSkills() {
  var profBonus = parseInt(document.getElementById("profBonus").value);
  var strMod = parseInt(document.getElementById("strMod").value);
  var dexMod = parseInt(document.getElementById("dexMod").value);
  var intMod = parseInt(document.getElementById("intMod").value);
  var wisMod = parseInt(document.getElementById("wisMod").value);
  var chaMod = parseInt(document.getElementById("chaMod").value);

  if (document.getElementById("acroProf").checked == true) {
    document.getElementById("acroScore").value = dexMod + profBonus;
  } else {
    document.getElementById("acroScore").value = dexMod;
  }
  if (document.getElementById("animProf").checked == true) {
    document.getElementById("animScore").value = wisMod + profBonus;
  } else {
    document.getElementById("animScore").value = wisMod;
  }
  if (document.getElementById("arcaProf").checked == true) {
    document.getElementById("arcaScore").value = intMod + profBonus;
  } else {
    document.getElementById("arcaScore").value = intMod;
  }
  if (document.getElementById("athlProf").checked == true) {
    document.getElementById("athlScore").value = strMod + profBonus;
  } else {
    document.getElementById("athlScore").value = strMod;
  }
  if (document.getElementById("decProf").checked == true) {
    document.getElementById("decScore").value = chaMod + profBonus;
  } else {
    document.getElementById("decScore").value = chaMod;
  }
  if (document.getElementById("hisProf").checked == true) {
    document.getElementById("hisScore").value = intMod + profBonus;
  } else {
    document.getElementById("hisScore").value = intMod;
  }
  if (document.getElementById("insProf").checked == true) {
    document.getElementById("insScore").value = wisMod + profBonus;
  } else {
    document.getElementById("insScore").value = wisMod;
  }
  if (document.getElementById("intiProf").checked == true) {
    document.getElementById("intiScore").value = chaMod + profBonus;
  } else {
    document.getElementById("intiScore").value = chaMod;
  }
  if (document.getElementById("invProf").checked == true) {
    document.getElementById("invScore").value = intMod + profBonus;
  } else {
    document.getElementById("invScore").value = intMod;
  }
  if (document.getElementById("medProf").checked == true) {
    document.getElementById("medScore").value = wisMod + profBonus;
  } else {
    document.getElementById("medScore").value = wisMod;
  }
  if (document.getElementById("natProf").checked == true) {
    document.getElementById("natScore").value = intMod + profBonus;
  } else {
    document.getElementById("natScore").value = intMod;
  }
  if (document.getElementById("percProf").checked == true) {
    document.getElementById("percScore").value = wisMod + profBonus;
  } else {
    document.getElementById("percScore").value = wisMod;
  }
  if (document.getElementById("perfProf").checked == true) {
    document.getElementById("perfScore").value = chaMod + profBonus;
  } else {
    document.getElementById("perfScore").value = chaMod;
  }
  if (document.getElementById("persProf").checked == true) {
    document.getElementById("persScore").value = chaMod + profBonus;
  } else {
    document.getElementById("persScore").value = chaMod;
  }
  if (document.getElementById("relProf").checked == true) {
    document.getElementById("relScore").value = intMod + profBonus;
  } else {
    document.getElementById("relScore").value = intMod;
  }
  if (document.getElementById("sleiProf").checked == true) {
    document.getElementById("sleiScore").value = dexMod + profBonus;
  } else {
    document.getElementById("sleiScore").value = dexMod;
  }
  if (document.getElementById("steProf").checked == true) {
    document.getElementById("steScore").value = dexMod + profBonus;
  } else {
    document.getElementById("steScore").value = dexMod;
  }
  if (document.getElementById("survProf").checked == true) {
    document.getElementById("survScore").value = wisMod + profBonus;
  } else {
    document.getElementById("survScore").value = wisMod;
  }
}

function changeLevel() {
  updateProf();
  updateMods();
  updateSkills();
}

create.addEventListener("click", newChar);

async function newChar() {
  const response = await fetch('/api/character', {
    body: JSON.stringify({ level, strength, dexterity, constitution, intelligence, wisdom, charisma, 
    strength_save, dexterity_save, consitution_save, intelligence_save, wisdom_save, charisma_save,
  race, proficiency_bonus, acrobatics, animal_handling, arcana, athletics, deception, history, insight, 
intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleight_of_hand, stealth, survival }),
headers: {
  "content-Type": "application/json",
},
method: "POST",
  });
  if (response.ok) {
    const { id } = await response.json();
    window.location = `/update/${id}`;
  } else {
    alert("I'm sorry! I couldn't create this character! Please try again later");
  }
};