window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "a", "your", "my", "his"];
  let adj = ["great", "big", "small", "gorgeous", "horrendous", "easy"];
  let noun = ["jogger", "racoon", "uncle", "father", "panda", "cat"];
  let domain = [".com", ".es", ".org", ".cat"];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let domain of domain) {
          console.log(`${pronoun}${adj}${noun}${domain}`);
        }
      }
    }
  }
};
