/**
 * Examen por casos – GB III-13 Consejero de Ética 2 (Lecciones 5 a 8)
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
 * Pegarlo en un proyecto de Apps Script NUEVO (no en el de otro examen).
 *  1. crearExamen()   → crea el formulario (una sola vez).
 *  2. cerrarExamen()  → deja de aceptar respuestas cuando termina el tiempo.
 *  3. enviarNotas()   → manda la nota por mail a cada alumno.
 *  (abrirExamen() vuelve a habilitarlo si hace falta.)
 */

const PUNTOS = 5;
const TITULO = 'Examen por casos GB III-13 – Consejero de Ética 2';

// Tipos: 'mc' = opción múltiple, 'vf' = verdadero/falso,
//        'cb' = casillas (varias correctas), 'dd' = desplegable.
// En 'correctas' van los textos exactos de la/s opción/es correcta/s.
const PREGUNTAS = [
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero quiere denunciar a un compañero de su mismo cuartel por un hecho que cometió por su propia voluntad (Acción Individual). ¿Ante quién debe iniciar la causa?',
    opciones: [
      'Ante el Director Federativo Provincial de Ética',
      'Ante el Jefe de Cuerpo de su Asociación, con copia al Presidente de la misma',
      'Ante las autoridades de una Federación no involucrada',
      'Directamente ante el Tribunal Federativo',
    ],
    correctas: ['Ante el Jefe de Cuerpo de su Asociación, con copia al Presidente de la misma'],
    explicacion: 'Toda Acción Individual o Institucional se inicia ante el Jefe de Cuerpo de la Asociación del denunciante, con copia al Presidente. La Zonal se inicia ante el Director Federativo y la General ante la Federación no involucrada.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero considera que el Jefe de Cuerpo afectó sus derechos. ¿Cómo debe proceder?',
    opciones: [
      'Imputar directamente al Jefe ante el propio Jefe de Cuerpo',
      'Presentar la denuncia ante el Director Federativo Provincial de Ética',
      'No puede hacer nada, porque el Jefe es su superior',
      'Presentar por escrito un Recurso Jerárquico ante el Presidente de la Asociación, con copia al Jefe',
    ],
    correctas: ['Presentar por escrito un Recurso Jerárquico ante el Presidente de la Asociación, con copia al Jefe'],
    explicacion: 'La imputación directa de un subalterno a un superior es inadmisible: corresponde el Recurso Jerárquico, por escrito y fundado. Si es contra el Jefe, se eleva ante el Presidente de la Asociación (Consejo Directivo), con copia al Jefe.',
  },
  {
    tipo: 'cb',
    titulo: 'Marcá TODO lo que debe contener una imputación:',
    opciones: [
      'Nombre, cargo y domicilio del denunciante y del imputado',
      'La sanción que el denunciante pretende que se aplique',
      'El relato de los hechos en forma cronológica',
      'La aprobación firmada por el Jefe de Cuerpo',
      'El nombre de los testigos',
    ],
    correctas: [
      'Nombre, cargo y domicilio del denunciante y del imputado',
      'El relato de los hechos en forma cronológica',
      'El nombre de los testigos',
    ],
    explicacion: 'La imputación debe contener: nombre, cargo y domicilio del denunciante y del imputado; relato cronológico de los hechos; circunstancias de modo y lugar; nombre de testigos y todo otro elemento que fundamente el hecho. La sanción la decide el Tribunal.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El Instructor Sumariante recibió el oficio que lo pone en funciones y necesita más tiempo para investigar. ¿Cuál es el plazo máximo que puede llegar a tener la investigación?',
    opciones: [
      '50 días corridos (30 más dos ampliaciones de 10), con autorización previa de la autoridad que ordenó el sumario',
      '30 días corridos, sin posibilidad de ampliación',
      '40 días corridos, ampliando sólo por decisión propia',
      '60 días hábiles',
    ],
    correctas: ['50 días corridos (30 más dos ampliaciones de 10), con autorización previa de la autoridad que ordenó el sumario'],
    explicacion: 'El Instructor tiene 30 días corridos para la investigación y puede ampliarlos en dos períodos de 10 días corridos, con fundamentos y previa autorización de la autoridad que ordenó el sumario.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El imputado fue notificado, pero no se presenta dentro de los 10 días hábiles en el asiento del Instructor para tomar vista del expediente. ¿Qué ocurre?',
    opciones: [
      'Se archiva la causa',
      'Se le otorga un nuevo plazo de 30 días',
      'Queda incurso en rebeldía',
      'Se lo sobresee por falta de descargo',
    ],
    correctas: ['Queda incurso en rebeldía'],
    explicacion: 'No presentarse en el plazo de 10 días hábiles a tomar vista del expediente implica quedar incurso en rebeldía.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero sancionado por un Tribunal de Acción Individual fue notificado del Fallo y quiere apelar. ¿Qué debe hacer y en qué plazos?',
    opciones: [
      'Presentar el escrito de agravio en 5 días hábiles',
      'Dejar reserva de apelar en 10 días hábiles y presentar el agravio en 20 días hábiles',
      'Apelar directamente ante la Dirección General de Defensa Civil en 30 días',
      'Dejar reserva de apelar en 3 días hábiles y luego presentar el escrito de agravio en 15 días hábiles',
    ],
    correctas: ['Dejar reserva de apelar en 3 días hábiles y luego presentar el escrito de agravio en 15 días hábiles'],
    explicacion: 'En Acción Individual o Institucional: reserva de apelación en 3 días hábiles desde la notificación y, desde ahí, 15 días hábiles para el escrito de agravio, que se presenta ante el Tribunal que dictó el Fallo.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero fue sancionado por un Tribunal de Acción Zonal y quiere apelar. ¿Qué corresponde?',
    opciones: [
      'Reserva en 3 días hábiles y agravio en 15 días hábiles, ante el Tribunal Federativo',
      'Reserva en 10 días hábiles y agravio en 20 días hábiles, presentado ante el Tribunal que dictó el Fallo, que lo eleva a la Dirección General de Defensa Civil',
      'Agravio directamente ante la Dirección General de Defensa Civil en 10 días corridos',
      'Los fallos de Acción Zonal no admiten apelación',
    ],
    correctas: ['Reserva en 10 días hábiles y agravio en 20 días hábiles, presentado ante el Tribunal que dictó el Fallo, que lo eleva a la Dirección General de Defensa Civil'],
    explicacion: 'En Acción Zonal o General: 10 días hábiles para la reserva y 20 días hábiles para el agravio. Se presenta ante el Tribunal que dictó el Fallo, que lo eleva con el expediente a la Dirección General de Defensa Civil.',
  },
  {
    tipo: 'dd',
    titulo: 'CASO: Un bombero fue sancionado por el Tribunal de Acción Individual de su propia Asociación (Tribunal Institucional) y apela. ¿Quién resuelve en segunda instancia?',
    opciones: ['El Tribunal Federativo', 'La Dirección General de Defensa Civil', 'El Consejo de Honor', 'El Jefe de Cuerpo'],
    correctas: ['El Tribunal Federativo'],
    explicacion: 'El fallo de un Tribunal Institucional de Acción Individual se apela ante el Tribunal Federativo. Los demás (Federativo de Acción Individual, Institucional, Zonal y General) se apelan ante la Dirección General de Defensa Civil.',
  },
  {
    tipo: 'vf',
    titulo: 'Si una parte no está conforme con lo que resolvió el Tribunal Federativo en una apelación, puede apelar ante la Dirección General de Defensa Civil para que vuelva a analizar si el imputado es culpable o inocente.',
    correctas: ['Falso'],
    explicacion: 'Falso. La apelación ante la Dirección General de Defensa Civil procede sólo en lo referido a la legalidad de los procedimientos y al respeto del derecho de defensa.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Uno de los integrantes designados para un Tribunal es tío del imputado. ¿Qué corresponde?',
    opciones: [
      'Puede integrar el Tribunal igual, porque el parentesco no es directo',
      'Debe pedir al Jefe de Cuerpo que lo aparte dentro de los 10 días hábiles',
      'Puede excusarse por parentesco hasta tercer grado, con escrito fundado al Presidente del Tribunal dentro de las 96 horas de notificado',
      'Sólo el imputado puede pedir que lo aparten',
    ],
    correctas: ['Puede excusarse por parentesco hasta tercer grado, con escrito fundado al Presidente del Tribunal dentro de las 96 horas de notificado'],
    explicacion: 'El parentesco hasta tercer grado (un tío lo es) es causa de excusación. El escrito fundado se eleva al Presidente del Tribunal dentro de las 96 horas de notificada la designación.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Al ser notificado de la integración del Tribunal, el imputado se entera de que uno de sus integrantes es su enemigo públicamente reconocido. ¿Qué puede hacer?',
    opciones: [
      'Recusarlo con un escrito ante el Presidente del Tribunal, dentro de los 5 días hábiles de notificado',
      'Nada: sólo el propio integrante puede excusarse',
      'Pedir a la Dirección General de Defensa Civil que lo aparte',
      'Esperar el Fallo y, si lo sancionan, pedir la nulidad',
    ],
    correctas: ['Recusarlo con un escrito ante el Presidente del Tribunal, dentro de los 5 días hábiles de notificado'],
    explicacion: 'Cualquiera de las partes puede recusar a un integrante del Tribunal, por escrito ante el Presidente, dentro de los 5 días hábiles de notificada. La amistad íntima o la enemistad públicamente reconocida es causa de recusación.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: En medio de la causa, el imputado presenta su renuncia al Cuerpo. ¿Qué ocurre?',
    opciones: [
      'Se acepta la renuncia y la causa se archiva',
      'Se lo da de baja disciplinaria automáticamente',
      'La causa pasa a la Dirección General de Defensa Civil',
      'Queda en disponibilidad procesal hasta el Fallo: si es sobreseído se acepta la renuncia; si es sancionado, primero cumple la pena',
    ],
    correctas: ['Queda en disponibilidad procesal hasta el Fallo: si es sobreseído se acepta la renuncia; si es sancionado, primero cumple la pena'],
    explicacion: 'Toda acción iniciada no puede quedar inconclusa. Con la renuncia, el imputado queda en disponibilidad procesal hasta el Fallo; si es sobreseído se acepta, y si es sancionado debe cumplir la pena antes de que se dé lugar a la renuncia.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: A un bombero le aplicaron una suspensión agravada de 300 días y el Fallo está firme. ¿Desde cuándo y cómo puede pedir la reconsideración?',
    opciones: [
      'Cumplidos 150 días, ante la Dirección General de Defensa Civil',
      'Cumplidos 100 días, por escrito y por intermedio del Jefe de Cuerpo, ante el Tribunal que lo sancionó',
      'En cualquier momento, ante el Presidente de la Asociación',
      'Cumplidos 200 días, directamente ante el Tribunal Federativo',
    ],
    correctas: ['Cumplidos 100 días, por escrito y por intermedio del Jefe de Cuerpo, ante el Tribunal que lo sancionó'],
    explicacion: 'Con el Fallo firme y cumplida la tercera parte de la pena (100 de 300 días), puede pedir por escrito, por intermedio del Jefe de Cuerpo, la reconsideración al Tribunal que lo sancionó. El Tribunal tiene 30 días hábiles para resolver.',
  },
  {
    tipo: 'cb',
    titulo: 'Marcá TODAS las circunstancias que son AGRAVANTES de una infracción:',
    opciones: [
      'Que se cometa en presencia de subalternos',
      'La inexperiencia por poca antigüedad',
      'Que exista premeditación',
      'Que se origine por un exceso de celo en bien del servicio',
      'Que sea reiterada',
      'La buena conducta anterior',
    ],
    correctas: [
      'Que se cometa en presencia de subalternos',
      'Que exista premeditación',
      'Que sea reiterada',
    ],
    explicacion: 'Agravantes: perjudicar el servicio, comprometer a la Asociación o Federación, ser colectivas o reiteradas, cometerse ante subalternos, mayor jerarquía del infractor, abuso sobre el subalterno, premeditación. La inexperiencia, el exceso de celo y la buena conducta anterior son atenuantes.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Durante un incendio, un bombero rompe la puerta de la casa vecina para cortar el avance del fuego. El dueño lo denuncia por los daños. ¿Qué corresponde?',
    opciones: [
      'Sancionarlo por Negligencia',
      'Sancionarlo por Honor Profesional',
      'Aplicar un atenuante, pero sancionarlo igual',
      'El sobreseimiento, porque causó un mal para evitar un mal mayor',
    ],
    correctas: ['El sobreseimiento, porque causó un mal para evitar un mal mayor'],
    explicacion: 'Causar un mal para evitar un mal mayor es una de las causas de sobreseimiento previstas.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero empieza a llevarse combustible del cuartel para uso personal, se arrepiente y lo devuelve antes de irse. ¿Cómo se trata?',
    opciones: [
      'No hay infracción, porque lo devolvió',
      'Es tentativa: se sanciona con la mitad de la pena mínima de la infracción intentada',
      'Se sanciona con la pena completa, como si la hubiera consumado',
      'Es complicidad',
    ],
    correctas: ['Es tentativa: se sanciona con la mitad de la pena mínima de la infracción intentada'],
    explicacion: 'Quien con intención de cometer una infracción comienza la ejecución y luego desiste voluntariamente (o se lo impiden) incurre en tentativa, que se sanciona con la mitad de la pena mínima.',
  },
  {
    tipo: 'vf',
    titulo: 'Si el Tribunal no dispuso nada especial, los plazos de una causa siguen corriendo normalmente entre el 15 de diciembre y fin de febrero.',
    correctas: ['Falso'],
    explicacion: 'Falso. Del 15 de diciembre a fin de febrero rige la Feria de Tribunales y se suspenden los términos procesales, salvo que el Tribunal decida obviarla y lo notifique a las partes.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero está en disponibilidad procesal hace 40 días corridos y nunca le comunicaron quiénes integran el Tribunal. Presenta un Recurso de Irregularidad y pasan 10 días corridos sin que se corrija. ¿Qué derecho tiene?',
    opciones: [
      'Reincorporarse en forma inmediata al servicio activo',
      'Que se archive la causa',
      'Que se lo sobresea',
      'Ninguno, debe esperar el Fallo',
    ],
    correctas: ['Reincorporarse en forma inmediata al servicio activo'],
    explicacion: 'Pasados 30 días corridos en disponibilidad procesal, puede interponer Recurso de Irregularidad (por ejemplo, si no se le comunicó la integración del Tribunal). Si a los 10 días corridos no se salvan los errores, puede reincorporarse de inmediato al servicio activo.',
  },
  {
    tipo: 'vf',
    titulo: 'CASO: Un bombero sabe quién cometió una infracción en su cuartel y decide no informarlo. Puede ser sancionado hasta con la misma pena que el autor del hecho.',
    correctas: ['Verdadero'],
    explicacion: 'Verdadero. Quien, enterado de una infracción, conoce a los autores y no lo informa incurre en complicidad, y puede ser sancionado hasta con igual pena que el imputado.',
  },
  {
    tipo: 'dd',
    titulo: '¿Cómo se llama el escrito por el cual se notifican a las partes las resoluciones y fallos del Tribunal?',
    opciones: ['Auto', 'Providencia', 'Cédula de notificación', 'Oficio'],
    correctas: ['Cédula de notificación'],
    explicacion: 'La Cédula de notificación notifica a las partes las resoluciones y fallos. El Auto es una resolución fundada sin sentencia, la Providencia resuelve cuestiones de trámite y el Oficio es la comunicación escrita entre integrantes del sistema.',
  },
];

function crearExamen() {
  if (PREGUNTAS.length !== 20) throw new Error('Se esperaban 20 preguntas, hay ' + PREGUNTAS.length);

  const form = FormApp.create(TITULO);
  form.setIsQuiz(true)
    .setDescription(
      'Material: GB III-13 Consejero de Ética 2 (Lecciones 5, 6, 7 y 8).\n' +
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
  props.setProperty('FORM_ID_CE2', form.getId());
  props.deleteProperty('NOTAS_ENVIADAS_CE2');

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
  const id = PropertiesService.getScriptProperties().getProperty('FORM_ID_CE2');
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
  const enviadas = JSON.parse(props.getProperty('NOTAS_ENVIADAS_CE2') || '[]');
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

  props.setProperty('NOTAS_ENVIADAS_CE2', JSON.stringify(enviadas));
  Logger.log('Notas enviadas en esta ejecución: ' + cantidad);
}
