/**
 * Cuestionario GB III-12 Consejero de Ética 1
 * 25 preguntas x 4 puntos = 100 puntos.
 *
 * USO: ejecutar la función crearCuestionario() una sola vez desde
 * script.google.com. Crea el Google Form, lo configura como cuestionario,
 * y deja instalado el envío automático de la calificación por correo.
 */

const PUNTOS = 4;
const TITULO = 'Examen GB III-12 – Consejero de Ética 1';

// Tipos: 'mc' = opción múltiple, 'vf' = verdadero/falso,
//        'cb' = casillas (varias correctas), 'dd' = desplegable.
// En 'correctas' van los textos exactos de la/s opción/es correcta/s.
const PREGUNTAS = [
  {
    tipo: 'mc',
    titulo: 'El Sistema Provincial de Ética de Bomberos Voluntarios es la reglamentación de:',
    opciones: [
      'La Comisión Directiva de cada Asociación',
      'La F.A.B.V.P.B.A.',
      'El Ministerio de Seguridad de la Provincia',
      'El Consejo de Honor',
    ],
    correctas: ['La F.A.B.V.P.B.A.'],
    explicacion: 'Es la reglamentación de la F.A.B.V.P.B.A. orientada a crear los organismos que regulan el accionar ético bomberil.',
  },
  {
    tipo: 'vf',
    titulo: 'Cada Federación legalmente reconocida podrá establecer un Sistema Federativo de Ética con las facultades y competencias que le otorga el Código.',
    correctas: ['Verdadero'],
    explicacion: 'Verdadero. Así lo establece la definición del Sistema Provincial de Ética.',
  },
  {
    tipo: 'mc',
    titulo: '¿Cuál es la máxima autoridad del Sistema Federativo de Ética?',
    opciones: [
      'El Director Federativo Provincial de Ética',
      'El Tribunal de Acción General',
      'El Consejo Federativo Provincial de Ética',
      'El Consejo de Honor',
    ],
    correctas: ['El Consejo Federativo Provincial de Ética'],
    explicacion: 'La máxima autoridad es un cuerpo colegiado: el Consejo Federativo Provincial de Ética.',
  },
  {
    tipo: 'vf',
    titulo: 'El Secretario Federativo Provincial de Ética es elegido por puntaje.',
    correctas: ['Falso'],
    explicacion: 'Falso. Es designado por el Director Federativo Provincial de Ética.',
  },
  {
    tipo: 'cb',
    titulo: 'Marque TODAS las autoridades del Consejo Federativo Provincial de Ética que se eligen por puntaje:',
    opciones: [
      'Director Federativo Provincial de Ética',
      'Secretario Federativo Provincial de Ética',
      'Director de Ética de cada región',
      'Secretario de Coordinación Federativo de Ética',
      'Subdirector de Ética de cada región',
    ],
    correctas: [
      'Director Federativo Provincial de Ética',
      'Director de Ética de cada región',
      'Subdirector de Ética de cada región',
    ],
    explicacion: 'Por puntaje: Director Federativo, Directores y Subdirectores regionales. Los Secretarios son designados por el Director Federativo.',
  },
  {
    tipo: 'mc',
    titulo: 'El Subdirector Regional de Ética corresponde al Consejero que obtuvo:',
    opciones: [
      'El mayor puntaje provincial',
      'El mayor puntaje de la región',
      'El segundo mayor puntaje de la región',
      'La designación del Director Regional',
    ],
    correctas: ['El segundo mayor puntaje de la región'],
    explicacion: 'Mayor puntaje regional → Director Regional; 2° mayor puntaje → Subdirector Regional.',
  },
  {
    tipo: 'dd',
    titulo: 'Un hecho que involucra a dos o más cuarteles de DISTINTA Federación corresponde a una:',
    opciones: ['Acción Individual', 'Acción Institucional', 'Acción Zonal', 'Acción General'],
    correctas: ['Acción General'],
    explicacion: 'Acción General: dos o más cuarteles de distinta Federación. (Misma Federación = Acción Zonal).',
  },
  {
    tipo: 'mc',
    titulo: 'La Acción Institucional es aquella que involucra a:',
    opciones: [
      'Un integrante por su propia voluntad y responsabilidad',
      'El Honorable Consejo Directivo (Comisión Directiva) y el Cuerpo Activo',
      'Dos o más cuarteles de una misma Federación',
      'Dos o más Federaciones',
    ],
    correctas: ['El Honorable Consejo Directivo (Comisión Directiva) y el Cuerpo Activo'],
    explicacion: 'La Acción Institucional involucra al HCD y al Cuerpo Activo.',
  },
  {
    tipo: 'vf',
    titulo: 'Las FALTAS son contravenciones de carácter mayor y son tratadas por el Código de Ética Bomberil.',
    correctas: ['Falso'],
    explicacion: 'Falso. Las faltas son de carácter menor y se tratan por el Reglamento de Régimen Disciplinario. Las de carácter mayor son las INFRACCIONES (CEB).',
  },
  {
    tipo: 'mc',
    titulo: 'Las sanciones por FALTAS pueden llegar como máximo a una suspensión de:',
    opciones: ['30 días', '60 días', '120 días', '770 días'],
    correctas: ['120 días'],
    explicacion: 'El Reglamento de Régimen Disciplinario comprende sanciones hasta un máximo de 120 días.',
  },
  {
    tipo: 'dd',
    titulo: 'La falta cometida por un subalterno hacia sus superiores o hacia las órdenes se encuadra como falta:',
    opciones: ['Al Servicio', 'Al Orden Interno', 'Al Respeto', 'A la Ética Profesional'],
    correctas: ['Al Respeto'],
    explicacion: 'Falta al Respeto: las cometidas por los subalternos hacia sus superiores o hacia las órdenes.',
  },
  {
    tipo: 'mc',
    titulo: 'Una falta que contradice lo requerido en capacitación, mantenimiento, funcionamiento administrativo y conservación de los elementos se encuadra como falta:',
    opciones: ['Al Orden Interno', 'Al Servicio', 'Al Respeto', 'A la Ética Profesional'],
    correctas: ['Al Orden Interno'],
    explicacion: 'Corresponde a falta Al Orden Interno.',
  },
  {
    tipo: 'mc',
    titulo: 'La sanción de APERCIBIMIENTO se extingue:',
    opciones: [
      'A los 30 días de sancionado',
      'A los 60 días de sancionado',
      'A los 360 días de cumplida la sanción',
      'A los 5 años de aplicada',
    ],
    correctas: ['A los 60 días de sancionado'],
    explicacion: 'El apercibimiento se extingue a los 60 días de sancionado.',
  },
  {
    tipo: 'vf',
    titulo: 'La sanción de suspensión por una falta se extingue a los trescientos sesenta (360) días de cumplida la sanción.',
    correctas: ['Verdadero'],
    explicacion: 'Verdadero. Luego de ese plazo no puede valorarse para agravar por reincidencia.',
  },
  {
    tipo: 'cb',
    titulo: 'Marque TODOS los tipos de INFRACCIONES previstos por el Código de Ética Bomberil:',
    opciones: ['Negligencia', 'Falta al Servicio', 'Falsedad', 'Apercibimiento', 'Prevaricato', 'Función de Mando'],
    correctas: ['Negligencia', 'Falsedad', 'Prevaricato', 'Función de Mando'],
    explicacion: 'Infracciones del CEB: Negligencia, Falsedad, Honor Profesional, Función de Mando y Prevaricato. "Al Servicio" es una falta y "Apercibimiento" una sanción.',
  },
  {
    tipo: 'mc',
    titulo: 'Quien integrando un organismo establecido por el C.E.B. debiera administrar justicia y contraviniera las disposiciones reglamentarias y/o éticas dictadas a tal fin, incurre en:',
    opciones: ['Negligencia', 'Falsedad', 'Honor Profesional', 'Prevaricato'],
    correctas: ['Prevaricato'],
    explicacion: 'Es la definición de Prevaricato.',
  },
  {
    tipo: 'mc',
    titulo: 'La Suspensión Agravada debe ser regulada con un:',
    opciones: [
      'Mínimo de 30 días y máximo de 120 días',
      'Mínimo de 120 días y máximo de 360 días',
      'Mínimo de 121 días y máximo de 770 días',
      'Mínimo de 360 días y máximo de 5 años',
    ],
    correctas: ['Mínimo de 121 días y máximo de 770 días'],
    explicacion: 'Suspensión agravada: mínimo 121 días, máximo 770 días.',
  },
  {
    tipo: 'vf',
    titulo: 'La Baja Disciplinaria prescribe a los cinco (5) años de aplicada la sanción.',
    correctas: ['Verdadero'],
    explicacion: 'Verdadero.',
  },
  {
    tipo: 'dd',
    titulo: 'La sanción que representa la pérdida del cargo o función que ocupe dentro de cualquier organismo del Sistema Bomberil Voluntario (ej.: Jefe de Cuerpo) es la:',
    opciones: ['Baja Disciplinaria', 'Destitución', 'Exoneración', 'Suspensión Agravada'],
    correctas: ['Destitución'],
    explicacion: 'La Destitución implica la pérdida del cargo o función; es permanente mientras no la reconsidere el Tribunal que dictó el Fallo.',
  },
  {
    tipo: 'vf',
    titulo: 'La sanción de Exoneración puede aplicarse por simple mayoría de los integrantes del Tribunal.',
    correctas: ['Falso'],
    explicacion: 'Falso. La Exoneración requiere unanimidad de la totalidad de los integrantes del Tribunal.',
  },
  {
    tipo: 'mc',
    titulo: '¿Quién preside el Tribunal de Acción Individual?',
    opciones: [
      'El Presidente del Consejo Directivo de la Asociación',
      'El Director Federativo Provincial de Ética',
      'El Jefe de Cuerpo de la Asociación donde se origina la causa',
      'El Instructor Sumariante',
    ],
    correctas: ['El Jefe de Cuerpo de la Asociación donde se origina la causa'],
    explicacion: 'Lo preside el Jefe de Cuerpo de la Asociación donde se origina la causa (5 miembros, hasta 2 suplentes).',
  },
  {
    tipo: 'mc',
    titulo: 'Cuando el imputado fuera el Jefe de Cuerpo, el Presidente de la Asociación elevará las actuaciones:',
    opciones: [
      'En 5 días, a la Dirección Federativa Provincial de Ética',
      'En 30 días, al Consejo de Honor',
      'En 5 días, al Segundo Jefe de Cuerpo',
      'En 45 días hábiles, al Tribunal de Acción General',
    ],
    correctas: ['En 5 días, a la Dirección Federativa Provincial de Ética'],
    explicacion: 'Se elevan en un plazo de 5 días a la Dirección Federativa Provincial de Ética.',
  },
  {
    tipo: 'mc',
    titulo: '¿Cuántos miembros componen el Tribunal de Acción General?',
    opciones: ['3 miembros', '5 miembros', '7 miembros', '9 miembros'],
    correctas: ['7 miembros'],
    explicacion: 'El Tribunal de Acción General tiene 7 miembros; los de Acción Individual, Institucional y Zonal tienen 5.',
  },
  {
    tipo: 'mc',
    titulo: 'Una vez recibido el Expediente con la Resolución del Instructor Sumariante, el Tribunal de Acción Institucional o Zonal debe dictar el Fallo en un plazo no mayor a:',
    opciones: ['5 días corridos', '30 días hábiles', '45 días hábiles', '60 días hábiles'],
    correctas: ['45 días hábiles'],
    explicacion: '45 días hábiles para los Tribunales de Acción Institucional y Zonal.',
  },
  {
    tipo: 'mc',
    titulo: 'Durante la Disponibilidad Procesal, el sumariado puede usar el uniforme únicamente:',
    opciones: [
      'En servicios de emergencia',
      'En actos protocolares de la Asociación',
      'Para presentarse a una Audiencia o comparecer ante el Tribunal',
      'Nunca, bajo ninguna circunstancia',
    ],
    correctas: ['Para presentarse a una Audiencia o comparecer ante el Tribunal'],
    explicacion: 'La Disponibilidad Procesal prohíbe el ingreso al Cuartel y el uso de grado, cargo y funciones; el uniforme sólo se permite para una Audiencia o comparecer ante el Tribunal.',
  },
];

function crearCuestionario() {
  if (PREGUNTAS.length !== 25) throw new Error('Se esperaban 25 preguntas, hay ' + PREGUNTAS.length);

  const form = FormApp.create(TITULO);
  form.setIsQuiz(true)
    .setDescription(
      'Material: GB III-12 Consejero de Ética 1 (Lecciones 2, 3 y 4).\n' +
      '25 preguntas – 4 puntos cada una – Total 100 puntos.\n' +
      'En las preguntas de casillas deben marcarse TODAS las opciones correctas para obtener el puntaje.')
    .setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(false)
    .setProgressBar(true)
    .setConfirmationMessage('¡Examen enviado! Recibirás tu calificación por correo electrónico.');

  // Recolección de correo (necesaria para enviar la calificación).
  if (form.setEmailCollectionType) {
    form.setEmailCollectionType(FormApp.EmailCollectionType.RESPONDER_INPUT);
  } else {
    form.setCollectEmail(true);
  }

  // --- Datos del alumno ---
  form.addSectionHeaderItem().setTitle('Datos del alumno');
  form.addTextItem().setTitle('Grado').setRequired(true);
  form.addTextItem().setTitle('Nombre y Apellido').setRequired(true);
  form.addTextItem().setTitle('Legajo Personal').setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Ingrese sólo números.')
      .requireNumber().build());
  form.addTextItem().setTitle('DNI').setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Ingrese el DNI sin puntos (7 u 8 dígitos).')
      .requireTextMatchesPattern('^[0-9]{7,8}$').build());

  // --- Preguntas ---
  form.addPageBreakItem().setTitle('Examen');
  PREGUNTAS.forEach((p, i) => agregarPregunta(form, p, i + 1));

  // Envío automático de la calificación por mail al enviar.
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'enviarCalificacion')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('enviarCalificacion').forForm(form).onFormSubmit().create();

  Logger.log('Formulario para editar: ' + form.getEditUrl());
  Logger.log('Link para los alumnos:   ' + form.getPublishedUrl());
}

function agregarPregunta(form, p, numero) {
  const titulo = numero + '. ' + p.titulo;
  const opciones = p.tipo === 'vf' ? ['Verdadero', 'Falso'] : p.opciones;
  p.correctas.forEach(c => {
    if (opciones.indexOf(c) === -1) throw new Error('Pregunta ' + numero + ': respuesta correcta no está entre las opciones: ' + c);
  });

  let item;
  if (p.tipo === 'cb') item = form.addCheckboxItem();
  else if (p.tipo === 'dd') item = form.addListItem();
  else item = form.addMultipleChoiceItem();

  item.setTitle(titulo)
    .setRequired(true)
    .setPoints(PUNTOS)
    .setChoices(opciones.map(o => item.createChoice(o, p.correctas.indexOf(o) !== -1)))
    .setFeedbackForCorrect(FormApp.createFeedback().setText('¡Correcto!').build())
    .setFeedbackForIncorrect(FormApp.createFeedback().setText(p.explicacion).build());
}

/** Se ejecuta automáticamente con cada envío del formulario. */
function enviarCalificacion(e) {
  const respuesta = e.response;
  const email = respuesta.getRespondentEmail();
  if (!email) return;

  const datos = {};
  respuesta.getItemResponses().forEach(r => { datos[r.getItem().getTitle()] = r.getResponse(); });

  let puntaje = 0;
  let correctas = 0;
  respuesta.getGradableItemResponses().forEach(r => {
    const s = r.getScore() || 0;
    puntaje += s;
    if (s > 0) correctas++;
  });
  const total = PREGUNTAS.length * PUNTOS;

  const cuerpo =
    'Grado: ' + (datos['Grado'] || '') + '\n' +
    'Nombre y Apellido: ' + (datos['Nombre y Apellido'] || '') + '\n' +
    'Legajo Personal: ' + (datos['Legajo Personal'] || '') + '\n' +
    'DNI: ' + (datos['DNI'] || '') + '\n\n' +
    'Respuestas correctas: ' + correctas + ' de ' + PREGUNTAS.length + '\n' +
    'CALIFICACIÓN: ' + puntaje + ' / ' + total + ' puntos\n\n' +
    'El detalle de cada pregunta se puede ver con el botón "Ver puntuación" que aparece al enviar el examen.';

  MailApp.sendEmail({
    to: email,
    subject: 'Calificación – ' + TITULO + ': ' + puntaje + '/' + total,
    body: cuerpo,
  });
}
