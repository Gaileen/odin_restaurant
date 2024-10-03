
const onPageload = () => {
    const content = document.getElementById("content");
    const content_filler = document.createElement("div");
    content_filler.innerHTML = `
        <div class="image-placeholder">
            <h1>My Odin Restaurant</h1>
         </div>
         <div class="info">
            This CT-based french fusion restaurant is so epic. Learn more...
         </div>
    `;
    content.appendChild(content_filler);
};

export default onPageload;