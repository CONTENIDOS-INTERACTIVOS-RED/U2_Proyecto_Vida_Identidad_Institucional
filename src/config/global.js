export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Marco Legal Corporación Tecnológica',
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
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos de la Educación Superior en Colombia.',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Reglamentación estudiantil: derechos, deberes y participación.',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identidad institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Filosofía institucional: misión, visión, valores y principios.',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Símbolos institucionales y sentido de pertenencia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Deber ser institucional: fundamentos éticos y sociales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Construyendo el proyecto de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Qué es un Proyecto de Vida?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Autoconocimiento y toma de decisiones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Dimensiones del proyecto de vida',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Adaptación estudiantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Transición a la vida universitaria',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Retos y factores de permanencia',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Comunidad y sentido de pertenencia',
            hash: 't_4_3',
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
      termino: 'Acceso con equidad',
      significado:
        'principio que garantiza la igualdad de oportunidades para acceder a la educación superior',
    },
    {
      termino: 'Autonomía universitaria',
      significado:
        'capacidad de las IES de gobernarse autónomamente respetando la Constitución y la Ley',
    },
    {
      termino: 'Calidad educativa',
      significado:
        'compromiso de las IES con ofrecer procesos, recursos y resultados académicos de excelencia',
    },
    {
      termino: 'Constitución política',
      significado:
        'norma fundamental que rige la vida jurídica, política y social de Colombia desde 1991',
    },
    {
      termino: 'Deber ser institucional',
      significado:
        'conjunto de principios éticos y sociales que guían la acción de la comunidad educativa',
    },
    {
      termino: 'Educación superior',
      significado:
        'nivel de formación posterior a la educación media que promueve el desarrollo humano integral',
    },
    {
      termino: 'Extensión universitaria',
      significado:
        'función que permite a las IES interactuar con la sociedad a través de servicios y programas',
    },
    {
      termino: 'Ley 30 de 1992',
      significado:
        'ley colombiana que organiza el servicio público de la educación superior',
    },
    {
      termino: 'Misión institucional',
      significado:
        'declaración que define la razón de ser y los propósitos fundamentales de una institución educativa',
    },
    {
      termino: 'Participación estudiantil',
      significado:
        'derecho y deber de los estudiantes de involucrarse en los procesos de gobierno y vida institucional',
    },
    {
      termino: 'Proyecto Educativo Institucional (PEI)',
      significado:
        'documento que orienta la filosofía, misión, visión y políticas de una institución educativa',
    },
    {
      termino: 'Responsabilidad social universitaria',
      significado:
        'compromiso ético de las IES con el desarrollo social, ambiental y económico sostenible',
    },
  ],
}
