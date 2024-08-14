let title = "ELzero";
let description = "ELzero Web School";
let date = "25/10";
let elzeroCard = `
    <div class="card">
        <h3 class="title">Hello ${title}</h3>
        <p class="description">${description}</p>
        <span class="date">${date}</span>
    </div>
`;

document.write(elzeroCard.repeat(4));