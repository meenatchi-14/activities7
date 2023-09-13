 xhr = new XMLHttpRequest()
//console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    const countries = JSON.parse(xhr.response)
    console.log(countries);
    //map method of region
    // const Map = countries.map((value) => {
      
    //       return value;
    //    });
    //    console.log(Map);
       console.log(".........................................................................");
       console.log("Get all the countries from Asia continent /region using Filter function");
       const region=countries.filter((value)=> value.region==="Asia");
       console.log(region);
       region.forEach(value=>{
        console.log(`Countries:${value.name.common}`);
         });
       console.log(".........................................................................");
       console.log("Get all the countries with a population of less than 2 lakhs using Filter function");
       const population=countries.filter((value)=>  value.population <=200000);
       console.log(population);
       population.forEach(element=>{ 
        console.log(`Countries: ${element.name.common} 
                   population:"${element.population}`);
       });

       
       console.log(".........................................................................");
       console.log("Print the following details name, capital, flag using forEach function");
       countries.forEach(element=> {
        console.log(`
        name: ${element.name.common},
        capital: ${element.capital},
        falg: ${element.flag},
        `)
       });

       console.log(".........................................................................");
       console.log("Print the total population of countries using reduce function"); 
       const reducePopulation=countries.reduce((acc,val)=>{ 
        return acc+val.population;
       },0)
        console.log("Total of population:", reducePopulation);

        console.log(".........................................................................");
        console.log("Print the country which uses US Dollars as currency");   
        countries.filter(element=>{
        for(let item in element.currencies){
            if(element.currencies[item].name==="United States dollar"){
                console.log(`Name of country uses US Dollars as currency: ${element.name.common}`);
            }
        }
    });
}
//
        
        
