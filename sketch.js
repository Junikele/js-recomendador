//infantil,adolescente, jovem

// o bichinho da maca,5, infantil
// a volta ao mundo em 80 dias,10,adolescente
// a rainha vermelha,12 , adolescente
// a menina que roubava livros,15,adolescente
// a cartomante,17, jovem

let campoIdade;
let campoAdolescente;

function setup() {
  createCanvas(800,400);
  createElement("h2","Recomendador de livros");
  createSpan("Sua idade:");
 campoIdade = createInput("12");
 campoAdolescente = createCheckbox("Para adolescente?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let paraAdolescente = campoAdolescente.checked();
  let recomendacao = geraRecomendacao(idade,paraAdolescente);
  fill(color(254,65,100));
  textAlign(CENTER,CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2 );
}

function geraRecomendacao(idade,paraAdolescente) {
  if(idade >= 10) {
  if (idade >= 14) { 
  return "A cartomante";
  } else {      
  if(idade >=12){ 
  return "A menina que roubava livros";
  } else {  
  if (paraAdolescente) {
     return "A volta ao mundo em 80 dias";                    
  } else { return "A rainha vermelha"; 
         }                                           }
     }
   } else {   
return "O bichinho da maca";                              
     }
}




