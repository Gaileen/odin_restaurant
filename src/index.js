import "./styles.css";

import onPageload from "./homepage";
import loadAbout from "./aboutpage";
import loadMenu from "./menupage";

onPageload();
const content = document.getElementById("content");
const home_btn = document.getElementById("home-btn");
const menu_btn = document.getElementById("menu-btn");
const about_btn = document.getElementById("about-btn");

// Clear div#content function
function clearContent() {
    content.innerHTML = ``;
    //or: remove its child(s) elm
}

// Tab-switching logic
function switchTab(loadContent) {
    clearContent();
    loadContent();
}

home_btn.addEventListener("click", () => 
    switchTab(onPageload));

menu_btn.addEventListener("click", () => 
    switchTab(loadMenu));

about_btn.addEventListener("click", () => 
    switchTab(loadAbout));