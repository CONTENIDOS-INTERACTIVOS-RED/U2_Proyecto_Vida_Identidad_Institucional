<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Construyendo el proyecto de vida'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Construir un proyecto de vida implica una toma de conciencia sobre el propio existir, las decisiones asumidas y el propósito que guía las acciones personales, académicas y profesionales. Este proceso no es solo introspectivo, sino también transformador del entorno, en la medida en que cada persona reconoce su papel social y actúa con responsabilidad, coherencia y sentido ético.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Desde el marco filosófico y pedagógico de la Institución Tecnológica del Oriente, el proyecto de vida no se entiende como una planificación rígida, sino como una guía flexible que orienta la formación como una experiencia de crecimiento integral. Según el Proyecto Educativo Institucional (PEI), se busca formar estudiantes con visión crítica, sensibilidad social y compromiso con su realidad, proyectando valores, metas y decisiones alineadas con una vocación de servicio y una identidad fundamentada en la dignidad humana, la responsabilidad y el desarrollo sostenible (Corporación Escuela Tecnológica del Oriente, 2019).
        p(data-aos="fade-left") Autores como García (2019) destacan que el proyecto de vida parte del autoconocimiento, la autorregulación y la capacidad de anticipar escenarios futuros. A su vez, Cadena y Pérez Villaseñor (2007) sostienen que se construye día a día, en diálogo con las circunstancias y contextos vitales. Así, el proyecto de vida se enriquece con las experiencias académicas, familiares y sociales.
        p Este tema se desarrolla en tres momentos de reflexión:
    
    .bg-full-width.bg-color-6
      .px-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center 01
                p.mb-0 Definición del proyecto de vida y su importancia en la formación universitaria.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center 02
                p.mb-0 Valor del autoconocimiento y la toma de decisiones conscientes.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center 03
                p.mb-0 Identificación de las dimensiones del proyecto de vida: personal, profesional, social y espiritual.
    
    .bg-full-width.bg-color-9.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 Al finalizar, se espera que el estudiante inicie la formulación de su propio proyecto de vida, en coherencia con sus valores e ideales y en consonancia con la misión institucional de contribuir a la transformación del entorno.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] ¿Qué es un Proyecto de Vida?

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Un proyecto de vida es una construcción dinámica, personal y progresiva que articula valores, metas, decisiones y sentidos. No se trata de un documento ni de un requisito académico, sino de una guía estructurada que orienta las acciones desde la identidad y las convicciones.
    
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 García (2019) afirma que proyectar una vida plena exige reconocer capacidades, formular metas alcanzables y ejercer la voluntad y autodeterminación. Este enfoque permite dotar de sentido al presente con visión de futuro. Para Cadena y Pérez Villaseñor (2007), este proceso exige tiempo, compromiso y disposición, ya que se construye en diálogo constante con contextos familiares, académicos, sociales y culturales.
        p Desde el enfoque del PEI, el proyecto de vida abarca todas las dimensiones del ser humano: cognitiva, emocional, praxeológica, social y ética. En este sentido, se convierte en una herramienta para articular el “ser”, el “saber” y el “hacer” tanto en la vida académica como futura. Los elementos fundamentales del proyecto de vida son: 
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/8.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7%" y="83.5%" numero="+")
                h5 Autoconocimiento
                p Permite identificar fortalezas, debilidades, intereses, creencias y expectativas. Es clave para tomar decisiones claras y fortalecer la autoestima, autonomía y perseverancia.
    
              .bg-color-white.box-shadow.p-3(x="46.5%" y="85%" numero="+")
                h5 Valores personales
                p Constituyen el núcleo que da sentido a las decisiones. Valores como la honestidad, responsabilidad, solidaridad y justicia son pilares de una vida ética.
    
              .bg-color-white.box-shadow.p-3(x="25.5%" y="74%" numero="+")
                h5 Planificación consciente
                p Implica establecer metas a corto, mediano y largo plazo. Se trata de una guía flexible que permite medir avances y adaptar el rumbo sin perder coherencia.
    
              .bg-color-white.box-shadow.p-3(x="72.5%" y="85%" numero="+")
                h5 Dimensión profesional
                p Articulación de las aspiraciones profesionales con una formación crítica y responsable. El proyecto se enlaza con el perfil del egresado institucional.
    
              .bg-color-white.box-shadow.p-3(x="52.5%" y="43%" numero="+")
                h5 Dimensión social
                p Reconocimiento del impacto de las decisiones individuales en la comunidad. Impulsa la responsabilidad colectiva y la transformación social.
              .bg-color-white.box-shadow.p-3(x="59.5%" y="68%" numero="+")
                h5 Dimensión espiritual
                p Búsqueda de sentido y trascendencia. No se limita a lo religioso: incluye la reflexión ética y conexión con lo esencial.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") El proyecto de vida es una herramienta fundamental para orientar el desarrollo personal, académico y profesional. Su formulación exige introspección, análisis del entorno, planificación y compromiso ético. Aporta claridad, propósito y coherencia en la toma de decisiones, fortaleciendo una identidad resiliente y comprometida con el bien común.
    
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 La Institución Tecnológica del Oriente contribuye a este proceso a través del acompañamiento académico, el fortalecimiento de competencias personales y sociales, y una formación orientada a la dignidad, la justicia y la sostenibilidad. Así, el proyecto de vida trasciende lo académico y se convierte en una apuesta vital por el crecimiento y la transformación social.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Autoconocimiento y toma de decisiones

    .bg-full-width.bg-color-6
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") La construcción de un proyecto de vida coherente y significativo comienza con un conocimiento profundo de sí mismo. El autoconocimiento es una herramienta fundamental, especialmente en la vida universitaria, ya que permite identificar habilidades, intereses, motivaciones, emociones, límites y áreas de mejora. A mayor autoconocimiento, mayor claridad para establecer objetivos realistas, tomar decisiones responsables y responder con coherencia ante los desafíos personales, académicos y profesionales.
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 García (2019) afirma que el autoconocimiento es la base del desarrollo humano, pues revela capacidades internas que impulsan el crecimiento personal y social. Por su parte, Cadena y Pérez Villaseñor (2007) destacan que el proyecto de vida no es un destino fijo, sino una construcción continua que exige tiempo, análisis y conciencia. Reconocer quién se es, qué se desea y hacia dónde se quiere ir es parte de este proceso formativo que convierte al estudiante en protagonista de su trayectoria.
            p Desde la perspectiva institucional, el Proyecto Educativo Institucional (PEI) de la Institución Tecnológica del Oriente promueve la formación integral, entendida como la articulación de lo cognitivo, lo ético, lo afectivo y lo social. En este contexto, el autoconocimiento se convierte en un eje transversal que permite a los estudiantes tomar decisiones responsables con base en una visión crítica de sí mismos y de su entorno.
        
        h2(data-aos="fade-left") Autoconocimiento: definición y dimensiones
        p.mb-5 El autoconocimiento es la capacidad de una persona para observarse, analizarse y comprender su forma de pensar, actuar y sentir. Esta práctica reflexiva permite reconocer tanto los recursos como los límites internos. Se expresa en distintas dimensiones que se articulan en el desarrollo humano integral:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/12.svg" alt="" style="width: 90px")
              h5.text-center Emocional
              p.mb-0.text-center Reconocimiento y gestión de emociones, reacciones y formas de manejo afectivo.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/13.svg" alt="" style="width: 90px")
              h5.text-center Cognitiva
              p.mb-0.text-center Identificación del estilo de pensamiento, habilidades de aprendizaje y estrategias de estudio.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/14.svg" alt="" style="width: 90px")
              h5.text-center Social
              p.mb-0.text-center Comprensión de las formas de relacionamiento, capacidad de comunicación y empatía.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/15.svg" alt="" style="width: 90px")
              h5.text-center Ética
              p.mb-0.text-center Claridad sobre los valores y principios que guían la conducta personal y profesional.

    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas dimensiones, en coherencia con el Reglamento Estudiantil, forman parte del desarrollo integral que busca formar estudiantes conscientes de su valor histórico, su función en la vida y su compromiso con los entornos social, cultural, ambiental y político.
    
    h2.mb-5(data-aos="fade-left") La toma de decisiones: responsabilidad y proyección

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.p-4.mb-5(data-aos="fade-left")
          p.mb-0 El autoconocimiento cobra sentido cuando conduce a la acción. En la etapa universitaria, las decisiones son constantes y determinantes: elección de carrera, relaciones interpersonales, gestión del tiempo, dilemas éticos, entre otras. Para García (2019), la toma de decisiones es la capacidad de elegir entre alternativas con base en la reflexión sobre sus consecuencias. Esta habilidad se fortalece a medida que se afianzan las prioridades personales y se asume la responsabilidad de las elecciones.
        p(data-aos="fade-left") Cadena y Pérez Villaseñor (2007) afirman que decidir es un acto de libertad y compromiso: la libertad se refleja en la posibilidad de elegir, pero el compromiso aparece al responder por lo que se ha escogido. Por ello, decidir no debe ser producto de impulsos ni de presiones externas, sino de una conciencia madura, fortalecida por el autoconocimiento. Los factores que inciden en la toma de decisiones son: 
    
    .bg-full-width.bg-color-6
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Valores personales
                p.text-center Orientan éticamente las elecciones y aseguran coherencia con los principios de vida.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Entorno social
                p.text-center Las expectativas familiares, culturales o sociales pueden condicionar las decisiones si no se analizan críticamente.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Emociones
                p.text-center Las decisiones bajo alta carga emocional pueden ser irracionales o impulsivas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Información
                p.text-center Contar con datos veraces, suficientes y oportunos mejora la calidad de las decisiones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Autonomía
                p.text-center Capacidad de actuar sin depender exclusivamente de la aprobación ajena; clave para la madurez personal.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema3/18.png', alt='')

    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/24.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Según el PEI, la formación debe fomentar autorregulación, análisis crítico y discernimiento ético como herramientas para fortalecer el criterio personal y profesional del estudiante.
    
    h2.mb-5(data-aos="fade-left") Autoconocimiento, decisiones y proyecto de vida
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") La relación entre autoconocimiento y toma de decisiones es directa y esencial en la construcción del proyecto de vida. Sin conocimiento de sí mismo, es difícil establecer metas realistas, definir caminos coherentes o perseverar ante los retos. De igual forma, actuar sin asumir las consecuencias de las decisiones implica perder el rumbo y la oportunidad de llevar una vida con sentido.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 García (2019) advierte que toda planificación que no se fundamente en el conocimiento interior está destinada a la fragilidad y la contradicción. Por eso, el proyecto de vida debe construirse desde una comprensión clara de quién se es, qué se desea y cómo se quiere contribuir al mundo.
    
    h2.mb-5(data-aos="fade-left") Rol de la Institución Educativa

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/26.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La Institución Tecnológica del Oriente reconoce que el acompañamiento en los procesos de autoconocimiento y toma de decisiones es crucial. Las políticas de bienestar, los espacios de orientación y las estrategias de permanencia académica reflejan el compromiso con la formación de personas capaces de asumir sus proyectos de vida con ética y responsabilidad social.
    
        .bg-color-4.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Este enfoque se refuerza en el perfil del Licenciado en Educación Infantil, donde se valora la formación de sujetos conscientes de sus decisiones y de su impacto en los demás. Se promueve el desarrollo de competencias como la autorregulación y la autogestión, esenciales para adaptarse a los cambios y tomar decisiones acertadas en la vida personal, profesional y social.
        p El autoconocimiento y la toma de decisiones constituyen pilares fundamentales en la construcción del proyecto de vida. A medida que el estudiante adquiere una mirada crítica y consciente sobre sí mismo, se fortalece su capacidad de planificar con sentido, actuar con coherencia y liderar su existencia con ética y compromiso social. La educación superior, en este contexto, debe ir más allá de la formación técnica, desarrollando también habilidades personales y sociales que permitan a cada ser humano vivir de manera autónoma y significativa.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Dimensiones del proyecto de vida
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/27.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El proyecto de vida se consolida como una herramienta fundamental para articular los diversos aspectos del ser humano, permitiéndole proyectarse de manera consciente hacia el futuro. Para que este ejercicio tenga sentido, es necesario reconocer que el ser humano es un ser integral, con múltiples dimensiones interconectadas que deben ser identificadas, desarrolladas y armonizadas. Por tanto, el proyecto de vida no se reduce a una meta profesional, sino que incorpora todas las áreas significativas de la existencia. Este enfoque integral facilita la construcción de una vida coherente, ética y con sentido.
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/28.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cadena y Pérez Villaseñor (2007) afirman que las decisiones vitales deben estar guiadas por una visión global de sí mismo, que incluya no solo las aspiraciones personales, sino también el papel en la sociedad y el entorno inmediato. De esta manera, el proyecto de vida debe abordarse desde distintas dimensiones: personal, social, académica, profesional, familiar y espiritual, entre otras.
        p Desde la perspectiva institucional, el Proyecto Educativo Institucional (PEI) de la Institución Tecnológica del Oriente promueve una formación centrada en la persona, articulando el saber, el ser y el hacer. Esta propuesta comprende el desarrollo humano como un proceso de crecimiento integral, continuo y armónico, en concordancia con los valores institucionales de respeto, compromiso social y formación ética. Las dimensiones del proyecto de vida son: 
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/29.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Personal") Constituye la base del proyecto de vida, ya que abarca el conocimiento y aceptación de sí mismo, el desarrollo de la autoestima, la autorregulación emocional y la autonomía. Se relaciona con el deseo de superación, la construcción del carácter y la capacidad para afrontar desafíos personales manteniendo la coherencia interna. También se vincula estrechamente con la salud mental y emocional, favoreciendo decisiones acertadas y relaciones interpersonales saludables.
          p(numero="2" titulo="Académica") Proporciona las herramientas intelectuales y metodológicas necesarias para alcanzar metas formativas. Incluye habilidades cognitivas, adquisición de conocimientos, planificación del aprendizaje y compromiso educativo. El PEI resalta que esta dimensión debe responder a contextos sociales, culturales, ambientales y tecnológicos, promoviendo un conocimiento pertinente y transformador.
          p(numero="3" titulo="Profesional") Se refiere a la vocación, proyección laboral y desarrollo de competencias para el mundo del trabajo. Abarca la elección de una carrera coherente con intereses y capacidades personales, así como la preparación para actuar en un entorno laboral cambiante. Esta dimensión debe estar guiada por principios éticos y sociales, promoviendo una actuación profesional comprometida con el desarrollo sostenible y la transformación del entorno.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/30.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="4" titulo="Social") Resalta la relación con los demás y el rol del individuo dentro de la comunidad. Implica habilidades comunicativas, empatía, cooperación y participación ciudadana, así como un compromiso activo con la transformación social, el respeto por la diversidad y una actitud crítica frente al contexto.
          p(numero="5" titulo="Familiar") Reconoce a la familia como el primer espacio de formación y socialización. Se enfoca en la construcción de vínculos afectivos, relaciones de apoyo mutuo y ambientes emocionalmente estables. Su influencia es clave en la identidad, toma de decisiones y definición de metas.
          p(numero="6" titulo="Espiritual") Vinculada a la búsqueda de sentido, la trascendencia y la conexión con valores profundos. No se restringe a lo religioso, sino que implica reflexionar sobre el propósito de la vida y actuar con integridad. Aporta estabilidad emocional, guía en momentos difíciles y fortaleza interior para avanzar con firmeza.
      
    h2.mb-5(data-aos="fade-left") Relación entre dimensiones y desarrollo integral

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/31.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Cada dimensión del proyecto de vida está interconectada. Descuidar una puede afectar las demás: por ejemplo, el desbalance en lo personal puede influir negativamente en lo académico, y una débil dimensión social puede llevar al aislamiento emocional. Por ello, el desarrollo integral requiere una mirada sistémica que armonice todas las áreas de la vida.
    
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p.mb-0 El Reglamento Estudiantil de la Institución Tecnológica del Oriente define el desarrollo humano integral como un proceso continuo, participativo y coherente, que permite al estudiante comprender su valor histórico, su rol en la vida y su responsabilidad frente al contexto político, cultural, social y ambiental.
        p Construir un proyecto de vida implica reconocer las múltiples dimensiones que conforman la existencia humana. Cada una aporta elementos esenciales para definir metas, tomar decisiones con sentido y actuar con responsabilidad. Al integrar lo personal, lo académico, lo profesional, lo social, lo familiar y lo espiritual, se configura una visión amplia, ética y comprometida con el bienestar propio y colectivo. Esta propuesta es coherente con el modelo educativo de la Institución Tecnológica del Oriente, que busca formar personas capaces de liderar su vida y transformar su entorno con conciencia, conocimiento y valores.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71777  " target="_blank" rel="noopener noreferrer") Espinoza Freire, E. E. (2017). El aprendizaje en estudiantes universitarios: (ed.). Editorial Universo Sur. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://platzi.com/blog/que-es-un-plan-de-vida-crea-el-tuyo-en-9-pasos/" target="_blank" rel="noopener noreferrer") Platzi. (2022, 17 de junio). ¿Qué es un plan de vida? Crea el tuyo en 9 pasos. Platzi Blog. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/@corporacionescuelatecnolog9271" target="_blank" rel="noopener noreferrer") Corporación Escuela Tecnológica del Oriente [Canal de YouTube]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
