// const request = fetch('https://meowfacts.herokuapp.com/');
// console.log(request);

const getHarryPotterHouses = () =>{
    fetch('https://potterapi-fedeperin.vercel.app/ptt/houses/')
    .then((resposta) => {
        if(!resposta.ok){
            console.log("A promisse foi rejeitada!");
        }
            return resposta.json()
        })
    .then((data) =>{
        if(data.error){
            throw new Error(data.error);
        }
        console.log("Harry Potter Houses: ", data);
        })
        .catch((err) => console.log(err));
}
getHarryPotterHouses();