const buttons = document.querySelectorAll('.btn');
const content = document.getElementById('content');

const energyData = {
    solar: {
        background: "#f4a261",
        title: "Energía Solar",
        description: "La energía solar es la energía que aprovecha de forma directa la radiación solar. A pesar que el Sol no tiene una vida inagotable se estima que la vida del Sol es de millones de años. Distinguimos dos tipos: La energía solar térmica: convierte la radiación del Sol en energía calorífica y se emplea para producir agua caliente y vapor que se puede utilizar para accionar una turbina conectada a un generador eléctrico La energía solar fotovoltaica: transforma la energía solar en electricidad mediante placas fotovoltaicas.",
        video: "./../assets/230553_small.mp4",
        color: "#f4a261",
        image: "./../img/solar.jpg"
    },
    eolica: {
        background: "#0076b698",
        title: "Energía Eólica",
        description: "El recurso renovable que alimenta estos sistemas es la fuerza del viento. Los aerogeneradores son dispositivos diseñados para convertir la energía del viento en electricidad. El viento se desplaza por diferencias de presiones y temperaturas provocadas de forma directa o indirecta por el Sol. El viento en movimiento tiene energía cinética que los molinos de viento convierten en electricidad. Existen dos tipos de instalaciones eólicas: Instalaciones de energía eólicas aisladas. Parques eólicos, formados por un conjunto de aerogeneradores, para vender la energía eléctrica generada a la red.",
        video: "./../assets/230553_small.mp4",
        color: "#0077b6",
        image: "./../img/eolica.jpg"
    },
    hidraulica: {
        background: "#181a1a7a",
        title: "Energía Hidráulica",
        description: "La energía hidráulica aprovecha la energía potencial del agua para obtener un trabajo mecánico. Si este trabajo lo utilizamos para accionar un generador obtenemos electricidad. La energía hidráulica es renovable gracias al ciclo del agua, que es una consecuencia de la energía solar. La principal ventaja de la energía hidráulica es que se puede almacenar la energía en forma de energía potencial. En los momentos de demanda, se libera esta energía para poder generar electricidad. Existen fundamentalmente dos tipos de centrales hidroeléctricas: Centrales hidroeléctricas de agua fluyente: estas centrales captan una parte del caudal circulante por un río. Centrales hidroeléctricas a pie de presa: este tipo de central están situadas aguas abajo de los embalses.",
        video: "./../assets/230553_small.mp4",
        color: "#009688",
        image: "./../img/hidraulica.jpg"
    }, 
    biomasa: {
        background: "#13988b",
        title: "Biomasa",
        description: "La biomasa se basa en el aprovechamiento de materias orgánicas de origen vegetal o animal. En este tipo de energía renovable también se incluyen los productos y subproductos resultantes de su transformación. Pueden también incluirse los biocombustibles cuyo uso principal es para el transporte. Las aplicaciones de la biomasa se pueden englobar en dos grupos: Aplicaciones domésticas e industriales que funcionan mediante la combustión directa de la biomasa. Aplicaciones vinculadas a la aparición de nuevos recursos y nuevas técnicas de transformación, como la gasificación y la pirólisis de la biomasa.",
        video: "./../assets/230553_small.mp4",
        color: "#009688",
        image: "./../img/biomasa.jpg"
    }
    
};

function updateContent(type) {
    const data = energyData[type];

    content.style.background = data.background;

    content.style.color = "#000000";


    content.innerHTML = `
        <h2>${data.title}</h2>
        <div class="content">
            <div id="image">
                <img src="${data.image}">
            </div>
            <div id="description">
                <p>${data.description}</p>
            </div>
        </div>
        <div class="media">
        <video controls>
            <source src="${data.video}" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
        </div>
    `;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.id;
        updateContent(type);
    });
});
