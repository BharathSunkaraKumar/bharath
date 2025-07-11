
const stars = () => {
    for(let i=0; i<5; i++) {
        console.log(i,'*')
        for(var j=1; j<5-i; j++) {
            console.log(j,'*')
        }
    }
}
stars()