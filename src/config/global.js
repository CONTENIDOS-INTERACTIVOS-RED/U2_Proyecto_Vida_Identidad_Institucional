export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Proyecto de vida',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'Ley 30 de 1992',
        numero: '1',
        titulo: 'Construyendo el proyecto de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es un Proyecto de Vida?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Autoconocimiento y toma de decisiones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Dimensiones del proyecto de vida',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Adaptación estudiantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Transición a la vida universitaria',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Retos y factores de permanencia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Comunidad y sentido de pertenencia',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1992). Ley 30 de 1992: Por la cual se organiza el servicio público de la educación superior. Diario Oficial N° 40.700.  ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-86430_archivo_pdf.pdf',
    },
    {
      referencia:
        'Corporación Escuela Tecnológica del Oriente. (2019). Proyecto Educativo Institucional (PEI) . Corporación Escuela Tecnológica del Oriente.',
      link: 'https://tecnologicadeloriente.edu.co/',
    },
    {
      referencia:
        'Corporación Escuela Tecnológica del Oriente. (2019). Reglamento Estudiantil. Actualizado mediante Acuerdo No. 11 del 13 de noviembre de 2019. Corporación Escuela Tecnológica del Oriente.',
      link: 'https://tecnologicadeloriente.edu.co/',
    },
  ],
  glosario: [
    {
      termino: 'Autoconocimiento',
      significado:
        'capacidad de una persona para conocerse a sí misma en aspectos emocionales, cognitivos y sociales.',
    },
    {
      termino: 'Autorregulación',
      significado:
        'habilidad para controlar las propias emociones, pensamientos y comportamientos en función de metas personales.',
    },
    {
      termino: 'Competencias',
      significado:
        'conjunto de conocimientos, habilidades y actitudes necesarias para un desempeño eficaz en diversos contextos.',
    },
    {
      termino: 'Desarrollo personal',
      significado:
        'proceso de crecimiento integral que permite fortalecer la identidad, la autonomía y la toma de decisiones.',
    },
    {
      termino: 'Desarrollo profesional',
      significado:
        'proyección de habilidades, conocimientos y metas hacia el ejercicio profesional con compromiso ético y social.',
    },
    {
      termino: 'Habilidades para la vida',
      significado:
        'capacidades personales y sociales que permiten afrontar de forma positiva los desafíos cotidianos.',
    },
    {
      termino: 'Permanencia estudiantil',
      significado:
        'condición que garantiza la continuidad y culminación del proceso formativo a través de apoyo integral.',
    },
    {
      termino: 'Planificación del futuro',
      significado:
        'proceso consciente de establecer metas y estrategias para orientar el rumbo personal y profesional.',
    },
    {
      termino: 'Proyecto de vida',
      significado:
        'plan de vida estructurado que integra aspiraciones, valores, metas y acciones con sentido.',
    },
    {
      termino: 'Sentido de pertenencia',
      significado:
        'identificación y conexión emocional con la institución educativa que fortalece el compromiso académico.',
    },
    {
      termino: 'Visión profesional',
      significado:
        'imagen proyectada del ejercicio profesional que articula metas, propósitos y responsabilidad social.',
    },
    {
      termino: 'Vocación',
      significado:
        'llamado interior que orienta la elección de una carrera o propósito vital acorde a talentos y valores.',
    },
  ],
}
