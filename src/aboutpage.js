
const loadAbout = () => {
    const content = document.getElementById("content");
    const content_filler = document.createElement("div");
    content_filler.innerHTML = `
        <div>
            This is the about page!
            We're a french fusion restaurant located in southern CT.
            That's all!
         </div>
    `;
    content.appendChild(content_filler);
};

export default loadAbout;