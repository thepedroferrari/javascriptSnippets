// GlassDoor filter lower Rating Companies
// Go to https://www.glassdoor.com/Reviews/, make your search criteria and add the following code to the console

const desiredRating = 3.5; // Choose your rating from 0.0 to 5.0

const companies = document.querySelectorAll('.eiHdrModule');
const companiesArray = Array.from(companies)

for (const company of companiesArray) {
    const findRating = company.querySelector('.bigRating');
    if (findRating.innerText < desiredRating) {
        company.style.display = 'none';
	}
}
