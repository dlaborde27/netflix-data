import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  slides: any[] = new Array(9).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/history/1997.png',
      title: '1997',
      subtitle: 'A Reed Hastings y Marc Randolph se les ocurre una idea para alquilar DVD por correo, y para comprobar su viabilidad, prueban a enviarse un DVD a sí mismos. El disco llega intacto, y así nace la semilla de Netflix.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/history/1998.jpg',
      title: '1998',
      subtitle: 'Lanzamiento del primer sitio web de alquiler y venta de DVD: netflix.com.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/history/1999.png',
      title: '1999',
      subtitle: 'Netflix estrena su servicio de suscripción, que permite alquilar un número ilimitado de DVD sin fechas de entrega o penalizaciones por retrasos.'
    }
    this.slides[3] = {
      id: 3,
      src: './assets/img/history/2000.jpg',
      title: '2000',
      subtitle: 'Presentación de un sistema personalizado de recomendación de películas, que usa las valoraciones de los suscriptores de títulos anteriores para predecir sus futuras elecciones.'
    };
    this.slides[4] = {
      id: 4,
      src: './assets/img/history/2002.jpg',
      title: '2002',
      subtitle: 'Netflix sale a bolsa (IPO en el NASDAQ con el teletipo «NFLX» y a un precio de venta de 1 $ por acción).'
    }
    this.slides[5] = {
      id: 5,
      src: './assets/img/history/2003.jpg',
      title: '2003',
      subtitle: 'Netflix registra una patente en Estados Unidos que cubre sus servicios de alquiler por suscripción cuando supera el millón de usuarios.'

    }
    this.slides[6] = {
      id: 6,
      src: './assets/img/history/2005.jpg',
      title: '2005',
      subtitle: 'Lanzamiento de la función Perfiles, que permite a los suscriptores crear listas para distintos usuarios o estados de ánimo.'
    };
    this.slides[7] = {
      id: 7,
      src: './assets/img/history/2006.jpg',
      title: '2006',
      subtitle: 'El número de suscriptores asciende a 5 millones.'
    }
    this.slides[8] = {
      id: 8,
      src: './assets/img/history/2007.png',
      title: '2007',
      subtitle: 'Presentación del servicio de streaming, que permite a los suscriptores ver series y películas al instante.'
    }
    this.slides[9] = {
      id: 9,
      src: './assets/img/history/2008.png',
      title: '2008',
      subtitle: 'Netflix se asocia con marcas de electrónica de consumo para ofrecer streaming a través de la Xbox 360, de los reproductores de Blu-ray y de los descodificadores de TV.'

    }
    this.slides[10] = {
      id: 10,
      src: './assets/img/history/2009.png',
      title: '2009',
      subtitle: 'Después de casi tres años y 40.000 envíos, se concede el premio Netflix (un millón de dólares) al equipo de Bellkors Pragmatic Chaos por haber mejorado en un 10 % la precisión de las recomendaciones. Las asociaciones de streaming se expanden a los televisores conectados a Internet y el número de suscriptores ya supera los 10 millones. Se publica la web sobre la cultura de Netflix.'

    }
    this.slides[11] = {
      id: 11,
      src: './assets/img/history/2010.png',
      title: '2010',
      subtitle: 'Llegada de Netflix a Canadá y lanzamiento del streaming en dispositivos móviles. Se estrena por streaming la primera experiencia exclusivamente para público infantil.'
    }
    this.slides[12] = {
      id: 12,
      src: './assets/img/history/2011.png',
      title: '2011',
      subtitle: 'Lanzamiento de Netflix en Latinoamérica y en el Caribe. Aparición del primer botón de Netflix en mandos a distancia.'
    }
    this.slides[13] = {
      id: 13,
      src: './assets/img/history/2012.jpg',
      title: '2012',
      subtitle: 'El número de suscriptores asciende a 25 millones, y el servicio se expande por el Reino Unido, Irlanda y los países nórdicos. Netflix estrena su primer especial de comedia: "Bill Burr: You People Are All the Same".'
    }
    this.slides[14] = {
      id: 14,
      src: './assets/img/history/2013.jpg',
      title: '2013',
      subtitle: 'Estreno de las primeras series originales de Netflix: "House of Cards", "Hemlock Grove", "Arrested Development" y "Orange Is the New Black". "House of Cards" gana tres premios Primetime Emmy, los primeros que recibe un servicio de streaming por Internet. Estreno de las funciones Perfiles y Mi lista por streaming.'
    }
    this.slides[15] = {
      id: 15,
      src: './assets/img/history/2014.jpg',
      title: '2014',
      subtitle: 'Los suscriptores superan los 50 millones y el servicio se expande por Alemania, Austria, Bélgica, Francia, Luxemburgo y Suiza. Netflix empieza a emitir por streaming en 4K Ultra HD.'
    }
    this.slides[16] = {
      id: 16,
      src: './assets/img/history/2015.png',
      title: '2015',
      subtitle: 'Estreno de nuestro primer largometraje original ("Beasts of No Nation"), nuestra primera serie original de habla no inglesa ("Club de Cuervos") y nuestro primer original asiático ("Terrace House"). Continúa la expansión por Australia, Cuba, España, Italia, Japón, Nueva Zelanda y Portugal. Lanzamiento con "Daredevil" de las descripciones sonoras para personas con discapacidad visual.'
    }
    this.slides[17] = {
      id: 17,
      src: './assets/img/history/2016.jpg',
      title: '2016',
      subtitle: 'Netflix se expande a 130 países más, lleva su servicio a suscriptores en más de 190 países y 21 idiomas. Se añade la función Descargas para poder ver contenidos sin tener conexión a Internet.'
    }
    this.slides[18] = {
      id: 18,
      src: './assets/img/history/2017.png',
      title: '2017',
      subtitle: 'El número global de suscriptores alcanza los 100 millones. Netflix gana su primer Oscar® por "Cascos Blancos". El lanzamiento de las historias interactivas y del botón «Omitir introducción» ofrecen a los suscriptores más opciones para personalizar sus visionados.'
    }
    this.slides[19] = {
      id: 19,
      src: './assets/img/history/2018.jpg',
      title: '2018',
      subtitle: "Netflix es el estudio con más nominaciones a los premios Emmy®, y gana 23 por sus series 'GLOW', 'Godless' y 'Queer Eye', entre otras. Dentro de otras mejoras en el control parental, se implementa la protección con PIN."
    }
    this.slides[20] = {
        id: 20,
        src: './assets/img/history/2019.jpg',
        title: '2019',
        subtitle: "Netflix gana cuatro premios Oscar®, por 'ROMA' y 'Una revolución en toda regla', y estrena su primera película de animación original: 'Klaus'. Se abren nuevos centros de producción en Madrid, Londres, Nueva York y Toronto. 'Bandersnatch' gana el primer gran Emmy® para un título interactivo."
      }
    this.slides[21] = {
        id: 21,
        src: './assets/img/history/2020.jpg',
        title: '2020',
        subtitle: "Estreno de las listas Top 10: los suscriptores saben, por primera vez, los títulos que tienen más éxito en su país. Netflix es el estudio con más nominaciones en los Oscar® y los Emmy®. Se crea el Hardship Fund para ayudar a los profesionales de la comunidad creativa afectados por la COVID-19, y el 2 % de nuestro efectivo disponible se entrega a instituciones financieras que apoyan a comunidades afroamericanas."
      }
    this.slides[22] = {
        id: 22,
        src: './assets/img/history/2021.jpg',
        title: '2021',
        subtitle: "El número de suscriptores supera los 200 millones. Netflix estrena su primer estudio de diversidad en películas y series, en colaboración con la Iniciativa de Inclusión Annenberg de la Universidad del Sur de California (USC), y anuncia sus planes para lograr cero emisiones netas de gases de efecto invernadero a finales de 2022. Netflix lanza juegos para móviles."
      }
    this.slides[23] = {
        id: 2022,
        src: './assets/img/history/2022.jpg',
        title: '2022',
        subtitle: "Se celebra en Los Ángeles el festival de Netflix Is a Joke, el mayor evento presencial de Netflix hasta la fecha: 11 días y 295 series. Netflix implementa el audio espacial para trasladar la experiencia cinematográfica a cualquier dispositivo y añade un centro de categorías al menú del televisor. En noviembre, se estrena un plan con anuncios más asequible en 12 países."
      }
      this.slides[24] = {
        id: 2023,
        src: './assets/img/history/2023.jpg',
        title: '2023',
        subtitle: "Netflix se estrena en el streaming en directo con el especial de humor ‘Chris Rock: Selective Outrage’. Netflix gana seis Oscar®: mejor cortometraje documental por ‘Nuestro bebé elefante’, mejor largometraje de animación por ‘Pinocho de Guillermo del Toro’ —la primera victoria en esa categoría de una plataforma de streaming— y cuatro por ‘Sin novedad en el frente’, que se convierte en la película de Netflix que más estatuillas ha cosechado."
      }
    }

  }
