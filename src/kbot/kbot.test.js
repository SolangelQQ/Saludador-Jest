const Kbot = require("./kbot");

/*console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");*/

describe("Saludor", () => {
    it("deberia Saludar a Andrés en idioma default", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 8) 
        expect(resultado).toEqual("Buenos días Andrés");
    });

    it("Saludar a Andrés en espanol por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Buenas tardes Andrés");
    });
    
    it("Saludar a Andrés en espanol por la noche", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 20)
        expect(resultado).toEqual("Buenas noches Andrés");
    });
  });

  describe("Saludor_en_ingles", () => {
    it("deberia Saludar a Andrés en idioma ingles en la manana", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 8)
        expect(resultado).toEqual("Good morning Andrés");
    });


    it("Saludar a Andrés en ingles por la tarde", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Good afternoon Andrés");
    });

    it("Saludar a Andrés en ingles por la noche", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 20)
        expect(resultado).toEqual("Good evening Andrés");
    });
    
});
  