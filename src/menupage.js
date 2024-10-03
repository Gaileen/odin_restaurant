
const loadMenu = () => {
    const content = document.getElementById("content");
    const content_filler = document.createElement("div");
    content_filler.innerHTML = `
        <div>
            <h1>Menu</h1>

            <div class="items">
                <div class="entrees-container">
                    <div class="entree" id="1">Tilapia</div>
                    <div class="entree" id="2">Watermelon</div>
                </div>

                <div class="drinks-container">
                    <div class="drink" id="3">Rubbing Alcohol</div>
                    <div class="drink" id="4">Still Water</div>
                </div>
            </div>

         </div>
    `;
    content.appendChild(content_filler);
};

export default loadMenu;