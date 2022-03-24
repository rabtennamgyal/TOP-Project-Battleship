import { openModalPvP, closeModalPvP, openModalPvC, closeModalPvC } from "./domutil";
// Intro related dom elements
const pvpBtn = document.getElementById('pvp');
const pvpX = document.getElementById('closePvP');
const pvcBtn = document.getElementById('pvc');
const pvcX = document.getElementById('closePvC');
// pvcX = 


pvpBtn.addEventListener('click', openModalPvP);
pvpX.addEventListener('click', closeModalPvP);
pvcBtn.addEventListener('click', openModalPvC);
pvcX.addEventListener('click', closeModalPvC);
