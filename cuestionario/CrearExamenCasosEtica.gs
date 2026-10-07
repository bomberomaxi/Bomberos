/**
 * Examen por casos – GB III-12 Consejero de Ética 1
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
 *  1. crearExamen()   → crea el formulario (una sola vez).
 *  2. cerrarExamen()  → deja de aceptar respuestas cuando termina el tiempo.
 *  3. enviarNotas()   → manda la nota por mail a cada alumno.
 *  (abrirExamen() vuelve a habilitarlo si hace falta.)
 */

const PUNTOS = 5;
const TITULO = 'Examen por casos GB III-12 – Consejero de Ética 1';

// Tipos: 'mc' = opción múltiple, 'vf' = verdadero/falso,
//        'cb' = casillas (varias correctas), 'dd' = desplegable.
// En 'correctas' van los textos exactos de la/s opción/es correcta/s.
const PREGUNTAS = [
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero llega tarde de manera reiterada a las capacitaciones y no limpia ni guarda el equipo después de usarlo. ¿Cómo se encuadra y quién lo juzga?',
    opciones: [
      'Infracción por Negligencia; lo juzga un Tribunal',
      'Falta al Orden Interno; lo juzga el Jefe de Cuerpo',
      'Falta al Servicio; lo juzga el Director Federativo de Ética',
      'Infracción al Honor Profesional; lo juzga el Consejo de Honor',
    ],
    correctas: ['Falta al Orden Interno; lo juzga el Jefe de Cuerpo'],
    explicacion: 'Capacitación, mantenimiento y conservación de elementos = falta Al Orden Interno. Las faltas son leves, se rigen por el Reglamento de Régimen Disciplinario y las juzga el Jefe de Cuerpo.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un oficial completa el parte de un incendio con datos que sabe que no son ciertos. ¿Qué corresponde?',
    opciones: [
      'Falta a la Ética Profesional, por Reglamento de Régimen Disciplinario',
      'Falta al Servicio, con apercibimiento',
      'Infracción por Falsedad, según el Código de Ética Bomberil',
      'Infracción por Prevaricato, según el Código de Ética Bomberil',
    ],
    correctas: ['Infracción por Falsedad, según el Código de Ética Bomberil'],
    explicacion: 'Faltar a la verdad en dichos o hechos es Falsedad: una infracción (carácter grave) tratada por el CEB.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El oficial a cargo de una dotación no cumple las obligaciones propias de su cargo y, por esa omisión, perjudica a sus subalternos y al servicio. ¿Qué infracción comete?',
    opciones: ['Función de Mando', 'Negligencia', 'Falsedad', 'Prevaricato'],
    correctas: ['Función de Mando'],
    explicacion: 'Quien ocupa una función de mando y contraviene sus obligaciones afectando a subalternos, al servicio o a la Asociación, por acción u omisión, comete infracción a la Función de Mando.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Durante un servicio, un bombero no respeta las normas técnicas de uso del equipo de respiración por falta de cuidado. No ocupa cargo de mando. ¿Qué infracción es?',
    opciones: ['Honor Profesional', 'Función de Mando', 'Prevaricato', 'Negligencia'],
    correctas: ['Negligencia'],
    explicacion: 'Contravenir normas técnicas o funcionales, o incurrir en falta de cuidado u omisión, es Negligencia (sin distinción de grado o cargo).',
  },
  {
    tipo: 'vf',
    titulo: 'Un integrante de un Tribunal de Ética nunca puede ser imputado por ninguna causa relacionada con su función, sin excepción.',
    correctas: ['Falso'],
    explicacion: 'Falso. Los fueros protegen a los integrantes del Tribunal y sus auxiliares, salvo en el caso de Prevaricato.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: A un bombero le aplicaron un apercibimiento el 1 de marzo. El 15 de mayo comete una nueva falta. ¿Se puede tomar ese apercibimiento para agravar la nueva sanción por reincidencia?',
    opciones: [
      'Sí, porque no pasó un año desde la sanción',
      'Sí, porque el apercibimiento recién se extingue a los 360 días',
      'No, porque el apercibimiento nunca se toma como antecedente',
      'No, porque el apercibimiento se extinguió a los 60 días',
    ],
    correctas: ['No, porque el apercibimiento se extinguió a los 60 días'],
    explicacion: 'El apercibimiento se extingue a los 60 días de sancionado. Del 1/3 al 15/5 pasaron 75 días, así que ya no puede valorarse.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero terminó de cumplir una suspensión de 90 días (por falta) el 10 de enero. El 20 de octubre del mismo año comete otra falta. ¿Puede valorarse la suspensión anterior por reincidencia?',
    opciones: [
      'No, porque la suspensión se extingue a los 60 días',
      'No, porque pasaron más de 120 días',
      'Sí, porque todavía no pasaron 360 días desde que la cumplió',
      'Sí, porque las suspensiones nunca se extinguen',
    ],
    correctas: ['Sí, porque todavía no pasaron 360 días desde que la cumplió'],
    explicacion: 'La suspensión por falta se extingue a los 360 días de cumplida. Del 10/1 al 20/10 pasaron 283 días, por lo que todavía puede valorarse.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un Tribunal, al juzgar una infracción, decide aplicar una suspensión agravada de 100 días. ¿Es válida?',
    opciones: [
      'No, porque la suspensión agravada debe ser de 121 a 770 días',
      'Sí, el Tribunal fija libremente la duración',
      'Sí, porque no supera los 120 días',
      'No, porque la suspensión agravada debe ser de al menos 360 días',
    ],
    correctas: ['No, porque la suspensión agravada debe ser de 121 a 770 días'],
    explicacion: 'La suspensión agravada tiene un mínimo de 121 días y un máximo de 770. Hasta 120 días es el rango de las faltas.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un Tribunal de 5 miembros vota 4 a 1 a favor de EXONERAR al imputado. ¿Qué ocurre?',
    opciones: [
      'Se exonera, porque hay mayoría',
      'Se exonera, porque votó más de dos tercios',
      'No puede exonerarse: la exoneración exige unanimidad de todos los integrantes',
      'Debe repetirse la votación con los suplentes',
    ],
    correctas: ['No puede exonerarse: la exoneración exige unanimidad de todos los integrantes'],
    explicacion: 'Los fallos se toman por simple mayoría, salvo la Exoneración, que exige la unanimidad de la totalidad de los integrantes del Tribunal.',
  },
  {
    tipo: 'vf',
    titulo: 'CASO: En un Tribunal de 5 miembros, 3 votan a favor de aplicar una suspensión agravada y 2 en contra. La sanción puede aplicarse.',
    correctas: ['Verdadero'],
    explicacion: 'Verdadero. Salvo la Exoneración, las resoluciones se toman por simple mayoría con voto fundado.',
  },
  {
    tipo: 'vf',
    titulo: 'CASO: Un Jefe de Cuerpo destituido recupera automáticamente su cargo a los 5 años de aplicada la sanción.',
    correctas: ['Falso'],
    explicacion: 'Falso. La Destitución es permanente mientras no la reconsidere el Tribunal que dictó el Fallo. (Los 5 años corresponden a la prescripción de la Baja Disciplinaria.)',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El imputado es el Jefe de Cuerpo de la Asociación. ¿Qué corresponde?',
    opciones: [
      'Lo juzga el Tribunal de Acción Individual presidido por el Segundo Jefe',
      'El Presidente de la Asociación eleva las actuaciones en 5 días a la Dirección Federativa Provincial de Ética, y lo juzga el Tribunal Federativo de Acción Individual',
      'El Presidente de la Asociación preside el Tribunal de Acción Individual',
      'Se eleva al Tribunal de Acción General en 30 días',
    ],
    correctas: ['El Presidente de la Asociación eleva las actuaciones en 5 días a la Dirección Federativa Provincial de Ética, y lo juzga el Tribunal Federativo de Acción Individual'],
    explicacion: 'Si el imputado es el Jefe de Cuerpo, las actuaciones se elevan en 5 días a la Dirección Federativa Provincial de Ética. El Tribunal Federativo lo preside el Director Federativo (o quien designe) con 4 integrantes del Consejo.',
  },
  {
    tipo: 'dd',
    titulo: 'CASO: Se produce un conflicto grave entre la Comisión Directiva y el Cuerpo Activo de un mismo cuartel. ¿Qué tipo de acción es?',
    opciones: ['Acción Individual', 'Acción Institucional', 'Acción Zonal', 'Acción General'],
    correctas: ['Acción Institucional'],
    explicacion: 'Cuando el hecho involucra al HCD (Comisión Directiva) y al Cuerpo Activo es una Acción Institucional: Tribunal de 5 miembros presidido por el Director Federativo, fallo en 45 días hábiles.',
  },
  {
    tipo: 'cb',
    titulo: 'CASO: Hay un conflicto entre dos cuarteles de la MISMA Federación. Marcá TODAS las afirmaciones correctas:',
    opciones: [
      'Corresponde a una Acción Zonal',
      'Un oficial de uno de los cuarteles involucrados puede integrar el Tribunal',
      'El Tribunal tiene 5 miembros',
      'Lo preside un Presidente de Federación elegido por sorteo',
      'Debe dictar el fallo dentro de los 45 días hábiles de recibido el expediente con la resolución del Instructor',
    ],
    correctas: [
      'Corresponde a una Acción Zonal',
      'El Tribunal tiene 5 miembros',
      'Debe dictar el fallo dentro de los 45 días hábiles de recibido el expediente con la resolución del Instructor',
    ],
    explicacion: 'Acción Zonal: 5 miembros, lo preside el Director Federativo, fallo en 45 días hábiles. Nadie de las asociaciones involucradas puede integrarlo. El sorteo entre Presidentes de Federación es del Tribunal de Acción General.',
  },
  {
    tipo: 'cb',
    titulo: 'ENCONTRÁ LOS ERRORES: "El Tribunal de Acción General interviene en conflictos entre cuarteles de distinta Federación, tiene 5 miembros, lo preside el Director Federativo Provincial de Ética y tiene 60 días hábiles para fijar la audiencia." Marcá TODOS los datos INCORRECTOS:',
    opciones: [
      'Que intervenga entre cuarteles de distinta Federación',
      'Que tenga 5 miembros',
      'Que lo presida el Director Federativo Provincial de Ética',
      'Que tenga 60 días hábiles para fijar la audiencia',
    ],
    correctas: [
      'Que tenga 5 miembros',
      'Que lo presida el Director Federativo Provincial de Ética',
    ],
    explicacion: 'El Tribunal de Acción General tiene 7 miembros y lo preside un Presidente de Federación (rotativo por sorteo). Lo demás es correcto.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero está en Disponibilidad Procesal y quiere participar del desfile del Día del Bombero con uniforme. ¿Puede?',
    opciones: [
      'Sí, porque todavía no hay fallo firme',
      'Sí, si lo autoriza el Jefe de Cuerpo',
      'No, salvo que desfile sin insignias de grado',
      'No: sólo puede usar el uniforme para presentarse a una Audiencia o comparecer ante el Tribunal',
    ],
    correctas: ['No: sólo puede usar el uniforme para presentarse a una Audiencia o comparecer ante el Tribunal'],
    explicacion: 'La Disponibilidad Procesal prohíbe el ingreso al Cuartel y el uso de grado, cargos y funciones. El uniforme sólo se permite para una Audiencia o comparecer ante el Tribunal.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: En un Tribunal de Acción Individual, el imputado es un Cabo con 5 años de antigüedad en el grado. ¿Cuál de estos puede ser uno de los 3 integrantes del Cuerpo?',
    opciones: [
      'Un Bombero con 15 años de antigüedad',
      'Un Cabo con 3 años de antigüedad en el grado',
      'Un Cabo con 8 años de antigüedad en el grado',
      'Ninguno: sólo pueden integrarlo oficiales',
    ],
    correctas: ['Un Cabo con 8 años de antigüedad en el grado'],
    explicacion: 'Los integrantes deben tener igual o mayor jerarquía que el imputado y, a igual jerarquía, mayor antigüedad.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Una de las partes recusa al Presidente del Tribunal. ¿Quién resuelve esa recusación?',
    opciones: [
      'Los restantes componentes del Tribunal',
      'El propio Presidente del Tribunal',
      'El Director Federativo Provincial de Ética',
      'El Instructor Sumariante',
    ],
    correctas: ['Los restantes componentes del Tribunal'],
    explicacion: 'El Presidente resuelve las excusaciones y recusaciones, pero si el recusado es él, resuelven los restantes componentes del Tribunal.',
  },
  {
    tipo: 'mc',
    titulo: 'Presentada una imputación, ¿cuál es el orden correcto de los pasos?',
    opciones: [
      'Designar Instructor → elevar antecedentes al Tribunal → declararse competente',
      'Elevar antecedentes al Tribunal (máx. 5 días corridos) → caratular, declararse competente y determinar causa valedera → designar Instructor y fijar los hechos a investigar',
      'Declararse competente → dictar el Fallo → designar Instructor',
      'Fijar la audiencia → elevar antecedentes → caratular la causa',
    ],
    correctas: ['Elevar antecedentes al Tribunal (máx. 5 días corridos) → caratular, declararse competente y determinar causa valedera → designar Instructor y fijar los hechos a investigar'],
    explicacion: 'Los antecedentes se elevan en no más de 5 días corridos; el Tribunal constituido caratula, se declara competente, determina causa valedera, dispone la instrucción y fija los hechos a investigar.',
  },
  {
    tipo: 'dd',
    titulo: 'CASO: En la elección de una región, Pérez obtuvo el mayor puntaje regional y Gómez el segundo. ¿Qué cargo le corresponde a Gómez?',
    opciones: [
      'Subdirector Regional de Ética',
      'Director Regional de Ética',
      'Secretario Federativo Provincial de Ética',
      'Secretario de Coordinación Federativo de Ética',
    ],
    correctas: ['Subdirector Regional de Ética'],
    explicacion: 'Mayor puntaje de la región → Director Regional; segundo mayor puntaje → Subdirector Regional. Los Secretarios los designa el Director Federativo.',
  },
];

function crearExamen() {
  if (PREGUNTAS.length !== 20) throw new Error('Se esperaban 20 preguntas, hay ' + PREGUNTAS.length);

  const form = FormApp.create(TITULO);
  form.setIsQuiz(true)
    .setDescription(
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
  props.setProperty('FORM_ID', form.getId());
  props.deleteProperty('NOTAS_ENVIADAS');

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
  const id = PropertiesService.getScriptProperties().getProperty('FORM_ID');
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
  const enviadas = JSON.parse(props.getProperty('NOTAS_ENVIADAS') || '[]');
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

  props.setProperty('NOTAS_ENVIADAS', JSON.stringify(enviadas));
  Logger.log('Notas enviadas en esta ejecución: ' + cantidad);
}
