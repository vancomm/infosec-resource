const headers = [...document.querySelectorAll("main article :is(h1, h2, h3)")];
const toc = document.querySelector(".table-of-contents-items");

headers.map((heading, index) => {
    const level = Number(heading.tagName.slice(1)) - 1;
    const text = heading.textContent;
    const id = index.toString();

    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.id = id;

    heading.replaceChildren(anchor);

    return [level, id, text];
}).forEach(([level, id, text]) => {
    const tocEntry = document.createElement("li");
    tocEntry.style.marginLeft = `${1.5 * level}em`;

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = text;

    tocEntry.appendChild(link);
    toc.appendChild(tocEntry);
});
