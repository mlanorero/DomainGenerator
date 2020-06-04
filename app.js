var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var pointdomain = ['.com', '.net', '.us', '.io', '.es', 'org'];

const generator = (pronoun, adj, noun, pointdomain) => {

    let domain=[];

    for(let i = 0; i < pronoun.length; i++){
        for(let x = 0; x < adj.length; x++){
            for(y=0; y < noun.length; y++) {
                for(j=0; j < pointdomain.length; j++){

                    domain.push(pronoun[i] + adj[x] + noun[y] + pointdomain[j]);

                }
            }
        }
    }

    return domain;

};

console.log(generator());