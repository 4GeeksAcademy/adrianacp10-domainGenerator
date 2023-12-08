window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "a", "your", "my", "his"];
  let adj = ["great", "big", "small", "gorgeous", "horrendous", "easy"];
  let noun = ["jogger", "racoon", "uncle", "father", "panda", "cat"];
  let domain = [".com", ".es", ".org", ".cat"];

  let domainName = [];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let domain of domain) {
          domainName.push(`${pronoun}${adj}${noun}©${domain}`);
        }
      }
    }
  }
  document.body.innerHTML = `<ul>${domainName
    .map(domainName => `<li> ${domainName}</li>`)
    .join("")}</ul>`;
};
