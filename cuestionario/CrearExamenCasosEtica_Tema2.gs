/**
 * Examen por casos – GB III-12 Consejero de Ética 1 – TEMA 2
 * 20 preguntas x 5 puntos = 100 puntos.
 *
 * Pensado para evitar la copia:
 *  - Casi todas las preguntas son casos prácticos (hay que aplicar, no buscar).
 *  - El orden de las preguntas es distinto para cada alumno.
 *  - Una sola respuesta por cuenta de Google.
 *  - La nota NO se muestra al enviar: el instructor la manda por mail
 *    cuando todos terminaron (función enviarNotas).
 *
 * USO (desde script.google.com):
 * Pegarlo en un proyecto de Apps Script NUEVO (no en el del Tema 1).
 *  1. crearExamen()   → crea el formulario (una sola vez).
 *  2. cerrarExamen()  → deja de aceptar respuestas cuando termina el tiempo.
 *  3. enviarNotas()   → manda la nota por mail a cada alumno.
 *  (abrirExamen() vuelve a habilitarlo si hace falta.)
 */

const PUNTOS = 5;
const TITULO = 'Examen por casos GB III-12 – Consejero de Ética 1 – Tema 2';

// Tipos: 'mc' = opción múltiple, 'vf' = verdadero/falso,
//        'cb' = casillas (varias correctas), 'dd' = desplegable.
// En 'correctas' van los textos exactos de la/s opción/es correcta/s.
const PREGUNTAS = [
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero se anotó voluntariamente para cubrir la guardia del fin de semana y no se presenta ni avisa, por lo que el cuartel queda sin dotación completa. ¿Cómo se encuadra y quién lo juzga?',
    opciones: [
      'Infracción por Función de Mando; la juzga un Tribunal',
      'Falta al Orden Interno; la juzga el Director Regional de Ética',
      'Infracción por Falsedad; la juzga el Consejo de Honor',
      'Falta al Servicio; la juzga el Jefe de Cuerpo',
    ],
    correctas: ['Falta al Servicio; la juzga el Jefe de Cuerpo'],
    explicacion: 'Las faltas Al Servicio se relacionan con las obligaciones que se contraen voluntariamente ante la comunidad. Son faltas leves y las juzga el Jefe de Cuerpo según el Reglamento de Régimen Disciplinario.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Durante una formación, un bombero le contesta de mala manera a su oficial y se niega a cumplir la orden que le dio. ¿Cómo se encuadra?',
    opciones: [
      'Falta al Respeto',
      'Falta al Orden Interno',
      'Infracción por Negligencia',
      'Infracción por Prevaricato',
    ],
    correctas: ['Falta al Respeto'],
    explicacion: 'Las faltas Al Respeto son las cometidas por los subalternos hacia sus superiores o hacia las órdenes.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Después de extinguir un incendio en una vivienda, un bombero se queda con objetos de valor que encontró entre los restos. ¿Qué infracción comete?',
    opciones: ['Negligencia', 'Honor Profesional', 'Función de Mando', 'Prevaricato'],
    correctas: ['Honor Profesional'],
    explicacion: 'Contravenir las normas éticas sobre dignidad, abnegación, valor y honradez es una infracción al Honor Profesional.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un integrante de un Tribunal de Ética vota a sabiendas en contra de lo que establecen las disposiciones reglamentarias para favorecer a un amigo imputado. ¿Qué infracción comete?',
    opciones: ['Falsedad', 'Honor Profesional', 'Prevaricato', 'Negligencia'],
    correctas: ['Prevaricato'],
    explicacion: 'Quien integra un organismo del C.E.B., debe administrar justicia y contraviene las disposiciones reglamentarias y/o éticas comete Prevaricato. Es la única excepción a los fueros del Tribunal.',
  },
  {
    tipo: 'cb',
    titulo: 'Marcá TODAS las características que corresponden a una INFRACCIÓN (no a una falta):',
    opciones: [
      'Es de carácter grave',
      'Se rige por el Reglamento de Régimen Disciplinario',
      'La juzga un Tribunal',
      'Su sanción máxima es una suspensión de 120 días',
      'Se encuadra en el Código de Ética Bomberil',
    ],
    correctas: [
      'Es de carácter grave',
      'La juzga un Tribunal',
      'Se encuadra en el Código de Ética Bomberil',
    ],
    explicacion: 'Infracción: carácter grave, Código de Ética Bomberil, la juzga un Tribunal y admite sanciones más severas (hasta la exoneración). El Reglamento de Régimen Disciplinario y el tope de 120 días corresponden a las faltas.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: A un bombero le aplicaron un apercibimiento el 10 de abril. El 1 de junio comete una nueva falta. ¿Se puede tomar ese apercibimiento para agravar la nueva sanción por reincidencia?',
    opciones: [
      'No, porque el apercibimiento nunca cuenta como antecedente',
      'Sí, porque todavía no pasaron 60 días desde que lo sancionaron',
      'No, porque ya pasaron más de 30 días',
      'Sí, porque el apercibimiento recién se extingue a los 5 años',
    ],
    correctas: ['Sí, porque todavía no pasaron 60 días desde que lo sancionaron'],
    explicacion: 'El apercibimiento se extingue a los 60 días de sancionado. Del 10/4 al 1/6 pasaron 52 días, así que todavía puede valorarse.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero terminó de cumplir una suspensión por falta el 5 de febrero de 2025. El 20 de marzo de 2026 comete otra falta. ¿Puede valorarse la suspensión anterior por reincidencia?',
    opciones: [
      'Sí, porque las suspensiones se extinguen recién a los 5 años',
      'Sí, porque no pasaron 770 días',
      'No, porque ya pasaron más de 360 días desde que la cumplió',
      'No, porque la suspensión se extingue a los 60 días',
    ],
    correctas: ['No, porque ya pasaron más de 360 días desde que la cumplió'],
    explicacion: 'La suspensión por falta se extingue a los 360 días de cumplida. Del 5/2/2025 al 20/3/2026 pasaron 408 días, así que ya no puede valorarse.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un Tribunal quiere aplicar una suspensión agravada de 900 días. ¿Es válida?',
    opciones: [
      'No, porque la suspensión agravada tiene un máximo de 770 días',
      'Sí, el Tribunal fija libremente la duración',
      'Sí, porque supera el mínimo de 121 días',
      'No, porque la suspensión agravada tiene un máximo de 360 días',
    ],
    correctas: ['No, porque la suspensión agravada tiene un máximo de 770 días'],
    explicacion: 'La suspensión agravada la regula el Tribunal, pero dentro de un mínimo de 121 y un máximo de 770 días.',
  },
  {
    tipo: 'dd',
    titulo: 'CASO: Un Tribunal quiere sacar al Segundo Jefe de Cuerpo de su cargo, pero sin que deje de pertenecer al Cuerpo. ¿Qué sanción corresponde?',
    opciones: ['Baja Disciplinaria', 'Exoneración', 'Suspensión Agravada', 'Destitución'],
    correctas: ['Destitución'],
    explicacion: 'La Destitución es la pérdida del cargo o función dentro de cualquier organismo del Sistema Bomberil Voluntario. La Baja y la Exoneración implican dejar de pertenecer al Cuerpo.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero fue EXONERADO por su asociación. Tiempo después quiere ingresar al cuerpo de bomberos voluntarios de otra localidad. ¿Puede?',
    opciones: [
      'Sí, porque la exoneración sólo rige en la asociación que la aplicó',
      'Sí, si pasaron 770 días',
      'Sí, si lo acepta el Jefe de Cuerpo de la nueva asociación',
      'No: el exonerado no puede ser reincorporado en ninguna asociación de bomberos voluntarios',
    ],
    correctas: ['No: el exonerado no puede ser reincorporado en ninguna asociación de bomberos voluntarios'],
    explicacion: 'La Exoneración tiene los mismos alcances que la baja disciplinaria y el sancionado no puede ser reincorporado en ninguna asociación de bomberos voluntarios.',
  },
  {
    tipo: 'vf',
    titulo: 'CASO: Un Tribunal de 5 miembros vota por unanimidad (5 a 0) la exoneración del imputado. La sanción puede aplicarse.',
    correctas: ['Verdadero'],
    explicacion: 'Verdadero. La Exoneración sólo puede aplicarse con la unanimidad de la totalidad de los integrantes del Tribunal, y en este caso la hay.',
  },
  {
    tipo: 'vf',
    titulo: 'En el Tribunal de Acción General, el Asesor Legal de cada Federación vota en el fallo igual que los demás integrantes.',
    correctas: ['Falso'],
    explicacion: 'Falso. El Asesor Legal de cada Federación participa con voz pero sin voto.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Hay un conflicto entre un cuartel de la Federación A y uno de la Federación B. El sorteo designa como Presidente del Tribunal al Presidente de la Federación A. ¿Qué corresponde?',
    opciones: [
      'Preside igual, porque salió sorteado',
      'Debe ser reemplazado, porque una asociación de su Federación está involucrada',
      'Preside, pero sin voto',
      'Lo reemplaza el Director Federativo Provincial de Ética',
    ],
    correctas: ['Debe ser reemplazado, porque una asociación de su Federación está involucrada'],
    explicacion: 'Es una Acción General: el Tribunal lo preside un Presidente de Federación rotativo por sorteo, que se reemplaza cuando una asociación de su Federación está involucrada.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Se constituye un Tribunal de Acción Zonal. ¿Cuál es su domicilio legal?',
    opciones: [
      'El de la Asociación donde ocurrió el hecho',
      'El de la Federación Provincial',
      'El de la Asociación a la que pertenece el Presidente del Tribunal',
      'El de la Asociación del imputado',
    ],
    correctas: ['El de la Asociación a la que pertenece el Presidente del Tribunal'],
    explicacion: 'En los Tribunales de Acción Institucional y Zonal, el domicilio legal es el de la Asociación del Presidente. En el de Acción General, es el de la Federación del Presidente.',
  },
  {
    tipo: 'cb',
    titulo: 'Marcá TODOS los que integran un Tribunal de Acción Individual:',
    opciones: [
      'El Jefe de Cuerpo de la Asociación donde se origina la causa, como Presidente',
      'El Director Federativo Provincial de Ética',
      'El Presidente del Consejo Directivo de la Asociación',
      'Dos integrantes del Consejo de Honor',
      'Tres integrantes del Cuerpo con igual o mayor jerarquía que el imputado',
    ],
    correctas: [
      'El Jefe de Cuerpo de la Asociación donde se origina la causa, como Presidente',
      'El Presidente del Consejo Directivo de la Asociación',
      'Tres integrantes del Cuerpo con igual o mayor jerarquía que el imputado',
    ],
    explicacion: 'Tribunal de Acción Individual (5 miembros): el Jefe de Cuerpo como Presidente, el Presidente del Consejo Directivo y tres integrantes de igual o mayor jerarquía. El Director Federativo y el Consejo de Honor integran los Tribunales Institucional y Zonal.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El Instructor Sumariante cita a declarar a un oficial, que se niega alegando que tiene mayor jerarquía que el Instructor. ¿Qué corresponde?',
    opciones: [
      'El oficial tiene razón: debe designarse un Instructor de mayor jerarquía',
      'No puede cuestionar la jerarquía del Instructor; su negativa será imputada como rebeldía',
      'El oficial puede pedir que lo cite directamente el Tribunal',
      'Se suspende la causa hasta que resuelva el Jefe de Cuerpo',
    ],
    correctas: ['No puede cuestionar la jerarquía del Instructor; su negativa será imputada como rebeldía'],
    explicacion: 'El Instructor designado oficialmente puede intervenir sin que se le hagan cuestionamientos de jerarquía. Actúa en nombre del sistema del C.E.B., y toda irreverencia u obstáculo se imputa como rebeldía.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un Tribunal terminó su función. ¿Qué hace el Secretario con el expediente y la documentación de la causa?',
    opciones: [
      'Se los devuelve al imputado',
      'Los guarda en el cuartel donde ocurrió el hecho',
      'Los destruye una vez que el fallo queda firme',
      'Los entrega por acta a la autoridad de la Federación que debe resguardarlos en archivo',
    ],
    correctas: ['Los entrega por acta a la autoridad de la Federación que debe resguardarlos en archivo'],
    explicacion: 'Concluida la función del Tribunal, el Secretario entrega toda la documentación por acta a la autoridad de la Federación que debe resguardarla en archivo.',
  },
  {
    tipo: 'vf',
    titulo: 'Los términos de prescripción de una sanción comienzan a correr desde la fecha en que ocurrió el hecho.',
    correctas: ['Falso'],
    explicacion: 'Falso. Los términos de prescripción corren a partir de la fecha del Fallo firme recaído en la causa.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Se produce un conflicto entre la Comisión Directiva y el Cuerpo Activo de un cuartel. ¿Quiénes integran el Tribunal?',
    opciones: [
      'El Director Federativo (o quien designe) como Presidente, 2 integrantes del Consejo Federativo Provincial de Ética y 2 del Consejo de Honor',
      'El Jefe de Cuerpo como Presidente, el Presidente de la Comisión Directiva y 3 integrantes del Cuerpo',
      'Un Presidente de Federación elegido por sorteo y 2 integrantes por cada Federación',
      'El Director Federativo como Presidente y 4 integrantes del Consejo Federativo Provincial de Ética',
    ],
    correctas: ['El Director Federativo (o quien designe) como Presidente, 2 integrantes del Consejo Federativo Provincial de Ética y 2 del Consejo de Honor'],
    explicacion: 'Es una Acción Institucional: 5 miembros, presidido por el Director Federativo (o quien designe), con 2 integrantes del Consejo Federativo Provincial de Ética y 2 del Consejo de Honor.',
  },
  {
    tipo: 'dd',
    titulo: '¿Cómo se elige al Secretario de Coordinación Federativo de Ética?',
    opciones: [
      'Por el mayor puntaje provincial',
      'Lo designa el Director Federativo Provincial de Ética',
      'Por el segundo mayor puntaje de cada región',
      'Lo elige el Consejo de Honor',
    ],
    correctas: ['Lo designa el Director Federativo Provincial de Ética'],
    explicacion: 'El Secretario Federativo y el Secretario de Coordinación los designa el Director Federativo. Por puntaje se eligen el Director Federativo y los Directores y Subdirectores regionales.',
  },
];

function crearExamen() {
  if (PREGUNTAS.length !== 20) throw new Error('Se esperaban 20 preguntas, hay ' + PREGUNTAS.length);

  const form = FormApp.create(TITULO);
  form.setIsQuiz(true)
    .setDescription(
      'TEMA 2\n' +
      'Material: GB III-12 Consejero de Ética 1 (Lecciones 2, 3 y 4).\n' +
      '20 preguntas – 5 puntos cada una – Total 100 puntos.\n' +
      'En las preguntas de casillas deben marcarse TODAS las opciones correctas para obtener el puntaje.\n' +
      'Se permite una sola respuesta por persona. La calificación se enviará por correo al cierre del examen.')
    .setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(false)
    .setShuffleQuestions(true)
    .setLimitOneResponsePerUser(true)
    .setProgressBar(true)
    .setConfirmationMessage('Examen enviado. Recibirás tu calificación por correo cuando cierre el examen.');

  // Correo verificado de la cuenta de Google (necesario para enviar la nota).
  if (form.setEmailCollectionType) {
    form.setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED);
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

  // --- Preguntas (sin numerar, porque el orden cambia para cada alumno) ---
  form.addPageBreakItem().setTitle('Examen');
  PREGUNTAS.forEach((p, i) => agregarPregunta(form, p, i + 1));

  const props = PropertiesService.getScriptProperties();
  props.setProperty('FORM_ID_TEMA2', form.getId());
  props.deleteProperty('NOTAS_ENVIADAS_TEMA2');

  Logger.log('Formulario para editar: ' + form.getEditUrl());
  Logger.log('Link para los alumnos:   ' + form.getPublishedUrl());
  Logger.log('IMPORTANTE: en el formulario, Configuración > Cuestionarios > "Publicar calificación" ' +
    'elegí "Más tarde, tras la revisión manual" y desmarcá "Preguntas falladas" y "Respuestas correctas".');
}

function agregarPregunta(form, p, numero) {
  const opciones = p.tipo === 'vf' ? ['Verdadero', 'Falso'] : p.opciones;
  p.correctas.forEach(c => {
    if (opciones.indexOf(c) === -1) throw new Error('Pregunta ' + numero + ': respuesta correcta no está entre las opciones: ' + c);
  });

  let item;
  if (p.tipo === 'cb') item = form.addCheckboxItem();
  else if (p.tipo === 'dd') item = form.addListItem();
  else item = form.addMultipleChoiceItem();

  item.setTitle(p.titulo)
    .setRequired(true)
    .setPoints(PUNTOS)
    .setChoices(opciones.map(o => item.createChoice(o, p.correctas.indexOf(o) !== -1)))
    .setFeedbackForCorrect(FormApp.createFeedback().setText('¡Correcto!').build())
    .setFeedbackForIncorrect(FormApp.createFeedback().setText(p.explicacion).build());
}

function obtenerFormulario() {
  const id = PropertiesService.getScriptProperties().getProperty('FORM_ID_TEMA2');
  if (!id) throw new Error('Primero ejecutá crearExamen().');
  return FormApp.openById(id);
}

function cerrarExamen() {
  obtenerFormulario()
    .setAcceptingResponses(false)
    .setCustomClosedFormMessage('El examen está cerrado.');
  Logger.log('Examen cerrado: ya no acepta respuestas.');
}

function abrirExamen() {
  obtenerFormulario().setAcceptingResponses(true);
  Logger.log('Examen abierto: acepta respuestas.');
}

/**
 * Manda la nota por mail a cada alumno. Ejecutar al cerrar el examen.
 * Si se ejecuta de nuevo, sólo envía a quienes todavía no recibieron la nota.
 */
function enviarNotas() {
  const form = obtenerFormulario();
  const props = PropertiesService.getScriptProperties();
  const enviadas = JSON.parse(props.getProperty('NOTAS_ENVIADAS_TEMA2') || '[]');
  const total = PREGUNTAS.length * PUNTOS;
  let cantidad = 0;

  form.getResponses().forEach(respuesta => {
    const id = respuesta.getId();
    const email = respuesta.getRespondentEmail();
    if (!email || enviadas.indexOf(id) !== -1) return;

    const datos = {};
    respuesta.getItemResponses().forEach(r => { datos[r.getItem().getTitle()] = r.getResponse(); });

    let puntaje = 0;
    let correctas = 0;
    respuesta.getGradableItemResponses().forEach(r => {
      const s = r.getScore() || 0;
      puntaje += s;
      if (s > 0) correctas++;
    });

    const cuerpo =
      'Grado: ' + (datos['Grado'] || '') + '\n' +
      'Nombre y Apellido: ' + (datos['Nombre y Apellido'] || '') + '\n' +
      'Legajo Personal: ' + (datos['Legajo Personal'] || '') + '\n' +
      'DNI: ' + (datos['DNI'] || '') + '\n\n' +
      'Respuestas correctas: ' + correctas + ' de ' + PREGUNTAS.length + '\n' +
      'CALIFICACIÓN: ' + puntaje + ' / ' + total + ' puntos';

    MailApp.sendEmail({
      to: email,
      subject: 'Calificación – ' + TITULO + ': ' + puntaje + '/' + total,
      body: cuerpo,
    });
    enviadas.push(id);
    cantidad++;
  });

  props.setProperty('NOTAS_ENVIADAS_TEMA2', JSON.stringify(enviadas));
  Logger.log('Notas enviadas en esta ejecución: ' + cantidad);
}
