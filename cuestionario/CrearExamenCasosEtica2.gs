/**
 * Examen por casos – GB III-13 Consejero de Ética 2
 * Lecciones 5 a 8: Procedimientos, Fallo y Apelación – Institutos especiales y Defensa –
 * Rebeldía, Expedientes, Disponibilidad Procesal y Feria – Recursos y Formas documentales.
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
 * Pegarlo en un proyecto de Apps Script NUEVO (no en el de los exámenes anteriores).
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
  // ---------- Lección 5: Procedimientos – Fallo – Apelación ----------
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero quiere imputar a su propio Jefe de Cuerpo por una infracción al C.E.B. ¿Cómo debe iniciar la causa?',
    opciones: [
      'Ante el Jefe de Cuerpo, con copia al Presidente de la Asociación',
      'Por la vía del Recurso Jerárquico ante el Presidente de la Asociación, con copia al Jefe en su domicilio legal',
      'Directamente ante el Director Federativo Provincial de Ética',
      'Ante la Dirección General de Defensa Civil',
    ],
    correctas: ['Por la vía del Recurso Jerárquico ante el Presidente de la Asociación, con copia al Jefe en su domicilio legal'],
    explicacion: 'La Acción Individual o Institucional se inicia ante el Jefe de Cuerpo con copia al Presidente. Si el involucrado es el Jefe, se inicia por la vía del Recurso Jerárquico ante el Presidente de la Asociación, con copia al Jefe en su domicilio legal.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El Instructor Sumariante recibió el oficio que lo pone en funciones. Pasaron 30 días corridos y todavía le faltan declaraciones de testigos importantes. ¿Qué puede hacer?',
    opciones: [
      'Nada: vencidos los 30 días debe elevar el expediente como esté',
      'Ampliar el plazo él mismo, sin pedir autorización, las veces que necesite',
      'Pedir una única ampliación de 30 días al Jefe de Cuerpo',
      'Ampliarlo hasta en dos períodos de diez días corridos, con fundamentos y previa autorización de la autoridad que ordenó el sumario',
    ],
    correctas: ['Ampliarlo hasta en dos períodos de diez días corridos, con fundamentos y previa autorización de la autoridad que ordenó el sumario'],
    explicacion: 'El Instructor tiene 30 días corridos desde que recibe el oficio. Puede ampliarlo en dos períodos de 10 días corridos por vez, con fundamentos y previa autorización de quien ordenó el sumario. Si se excede sin ampliación, el Presidente del Tribunal lo releva.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El imputado fue notificado en forma fehaciente, pero no se presenta a tomar vista del expediente dentro de los diez días hábiles. ¿Qué corresponde?',
    opciones: [
      'Queda incurso en rebeldía; el Instructor deja constancia en el expediente y finaliza la instrucción',
      'Se suspende el sumario hasta que se presente',
      'Se lo vuelve a notificar y se le otorgan otros diez días hábiles',
      'El Instructor debe archivar la causa',
    ],
    correctas: ['Queda incurso en rebeldía; el Instructor deja constancia en el expediente y finaliza la instrucción'],
    explicacion: 'No presentarse a tomar vista del expediente implica quedar incurso en rebeldía. El Instructor deja constancia de la no presentación y finaliza la instrucción.',
  },
  {
    tipo: 'dd',
    titulo: 'CASO: El Tribunal ya dictó el fallo y debe comunicárselo formalmente a las partes. ¿Qué documento utiliza?',
    opciones: ['Auto', 'Providencia', 'Cédula de Notificación', 'Oficio'],
    correctas: ['Cédula de Notificación'],
    explicacion: 'La Cédula de Notificación es el escrito con el que se notifican a las partes las resoluciones y fallos del Tribunal. El Auto resuelve cuestiones que no requieren sentencia, la Providencia cuestiones de trámite y el Oficio es la comunicación entre integrantes del sistema.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero sancionado por un Tribunal Institucional de Acción Individual fue notificado del fallo en forma fehaciente. Hace la reserva de apelar a los 5 días hábiles. ¿Es válida?',
    opciones: [
      'Sí, porque tiene 15 días hábiles para apelar',
      'No: la reserva debía hacerse dentro de los 3 días hábiles de la notificación',
      'Sí, porque la reserva puede hacerse hasta 10 días hábiles después',
      'No, porque en Acción Individual el fallo no se puede apelar',
    ],
    correctas: ['No: la reserva debía hacerse dentro de los 3 días hábiles de la notificación'],
    explicacion: 'En Acción Individual o Institucional hay 3 días hábiles para hacer reserva de apelar y, desde entonces, 15 días hábiles para presentar el escrito de agravio. Los 10 días hábiles de reserva corresponden a Acción Zonal y General.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un integrante del sistema fue sancionado por un Tribunal en una causa de Acción Zonal y quiere apelar. ¿Cuál es el procedimiento correcto?',
    opciones: [
      'Reserva en 3 días hábiles y escrito de agravio en 15 días hábiles ante el Tribunal Federativo',
      'Reserva en 10 días hábiles y escrito de agravio en 20 días hábiles ante el Tribunal que dictó el fallo, que lo eleva a la Dirección General de Defensa Civil',
      'Escrito de agravio en 30 días directamente ante la Dirección General de Defensa Civil',
      'Reserva en 10 días hábiles y escrito de agravio en 20 días hábiles ante el Director Federativo Provincial de Ética',
    ],
    correctas: ['Reserva en 10 días hábiles y escrito de agravio en 20 días hábiles ante el Tribunal que dictó el fallo, que lo eleva a la Dirección General de Defensa Civil'],
    explicacion: 'En Acción Zonal o General: 10 días hábiles para dejar constancia de la apelación y 20 días hábiles para el escrito de agravio. Se presenta ante el Tribunal que dictó el fallo, que lo eleva con el expediente a la Dirección General de Defensa Civil.',
  },

  // ---------- Lección 6: Institutos especiales – La defensa ----------
  {
    tipo: 'mc',
    titulo: 'CASO: Designan como integrante de un Tribunal a un oficial cuyo hermano es el imputado. ¿Qué debe hacer?',
    opciones: [
      'Integrar igual el Tribunal, pero abstenerse en la votación',
      'Esperar a que el imputado lo recuse',
      'Presentar un escrito fundado de excusación al Presidente del Tribunal dentro de las 96 horas de notificado de su designación',
      'Pedirle al Jefe de Cuerpo que lo reemplace dentro de los 10 días hábiles',
    ],
    correctas: ['Presentar un escrito fundado de excusación al Presidente del Tribunal dentro de las 96 horas de notificado de su designación'],
    explicacion: 'El parentesco de hasta tercer grado con el imputado es causa de excusación. El escrito fundado se eleva al Presidente del Tribunal dentro de las 96 horas de notificada la designación (si se excusa el Presidente, va al Director Federativo de Ética).',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Al conocer la integración de un Tribunal Institucional, el imputado detecta que uno de sus miembros tiene con él una enemistad públicamente reconocida. Presenta la recusación, pero el recusado no la acepta. ¿Qué ocurre?',
    opciones: [
      'Las actuaciones se elevan al Tribunal superior, que decide si puede actuar con imparcialidad',
      'El recusado sigue en el Tribunal, porque no aceptó la recusación',
      'El Jefe de Cuerpo decide sobre la recusación',
      'Se anula todo lo actuado y se inicia una nueva causa',
    ],
    correctas: ['Las actuaciones se elevan al Tribunal superior, que decide si puede actuar con imparcialidad'],
    explicacion: 'La recusación se presenta por escrito ante el Presidente del Tribunal dentro de los 5 días hábiles de notificada la integración. Si el recusado no la acepta, se eleva al Tribunal superior. Sólo en un Tribunal Provincial la resuelven los restantes miembros.',
  },
  {
    tipo: 'cb',
    titulo: 'CASO: Un bombero imputado está eligiendo cómo defenderse. Marcá TODAS las opciones que el C.E.B. le permite:',
    opciones: [
      'Defenderse por sí mismo',
      'Nombrar defensor a un bombero de otra Asociación de su Federación, sin importar la jerarquía',
      'Nombrar defensor a un Directivo de su Asociación, avalado por ella y con 3 años de antigüedad',
      'Nombrar defensor a un abogado particular que no pertenece al Sistema Bomberil',
      'Nombrar defensor a un Directivo con 1 año de antigüedad en la Asociación',
    ],
    correctas: [
      'Defenderse por sí mismo',
      'Nombrar defensor a un bombero de otra Asociación de su Federación, sin importar la jerarquía',
      'Nombrar defensor a un Directivo de su Asociación, avalado por ella y con 3 años de antigüedad',
    ],
    explicacion: 'Puede defenderse por sí mismo o nombrar defensor. El defensor debe pertenecer al sistema federativo, sin importar jerarquía. Si no integra un Cuerpo, debe ser Directivo avalado por su Asociación con al menos 2 años de antigüedad. Un abogado ajeno al sistema no puede ser defensor.',
  },
  {
    tipo: 'vf',
    titulo: 'CASO: Un bombero imputado presenta su renuncia durante el sumario. La renuncia se le acepta de inmediato y la causa se extingue.',
    correctas: ['Falso'],
    explicacion: 'Falso. Queda en disponibilidad procesal hasta que el Tribunal emita el fallo. Si es sobreseído se le acepta la renuncia; si es sancionado, primero cumple la pena y luego se da lugar a la renuncia.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero fue sancionado con una suspensión agravada de 300 días; el fallo está firme. Lleva cumplidos 90 días y quiere pedir la reconsideración. ¿Puede hacerlo?',
    opciones: [
      'Sí, en cualquier momento, directamente ante el Tribunal Federativo',
      'Sí, porque el fallo está firme',
      'Todavía no: debe haber cumplido la tercera parte (100 días) y presentarlo por escrito, por intermedio del Jefe de Cuerpo, al Tribunal que lo sancionó',
      'No, la reconsideración sólo procede después de cumplir la mitad de la sanción',
    ],
    correctas: ['Todavía no: debe haber cumplido la tercera parte (100 días) y presentarlo por escrito, por intermedio del Jefe de Cuerpo, al Tribunal que lo sancionó'],
    explicacion: 'Con el fallo firme y cumplida la tercera parte del castigo, puede pedirse por escrito, por intermedio del Jefe de Cuerpo, al Tribunal que sancionó. El Tribunal tiene 30 días hábiles para resolver. No se considera si la causa está en apelación.',
  },
  {
    tipo: 'cb',
    titulo: 'CASO: Un Oficial planifica de antemano humillar a un bombero y lo insulta delante de toda la dotación formada. Marcá TODOS los AGRAVANTES que se presentan:',
    opciones: [
      'Cometida en presencia de subalternos',
      'Mayor grado jerárquico del infractor',
      'Premeditación',
      'Abuso en perjuicio del subalterno',
      'Inexperiencia motivada en la poca antigüedad',
      'Exceso de celo en bien del servicio',
    ],
    correctas: [
      'Cometida en presencia de subalternos',
      'Mayor grado jerárquico del infractor',
      'Premeditación',
      'Abuso en perjuicio del subalterno',
    ],
    explicacion: 'Son agravantes: cometerla en presencia de subalternos, el mayor grado jerárquico del infractor, la premeditación y el abuso en perjuicio del subalterno. La inexperiencia y el exceso de celo son atenuantes.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero empieza a cargar en su auto herramientas del cuartel para llevárselas, pero se arrepiente y las devuelve antes de irse. ¿Cómo se encuadra y cómo se sanciona?',
    opciones: [
      'No hay infracción, porque devolvió las herramientas',
      'Tentativa: se sanciona con la mitad de la pena mínima de la infracción',
      'Complicidad: se sanciona con igual pena que el autor',
      'Infracción consumada: se sanciona con la pena completa',
    ],
    correctas: ['Tentativa: se sanciona con la mitad de la pena mínima de la infracción'],
    explicacion: 'Quien comienza la ejecución de una infracción y desiste voluntariamente incurre en tentativa. Se sanciona con la mitad de la pena mínima que hubiera correspondido si se consumaba.',
  },

  // ---------- Lección 7: Institutos especiales ----------
  {
    tipo: 'mc',
    titulo: 'CASO: Un bombero en disponibilidad procesal quiere desfilar con el uniforme en el aniversario del cuartel. ¿Puede?',
    opciones: [
      'Sí, porque todavía no hay fallo y conserva su grado',
      'Sí, si lo autoriza el Jefe de Cuerpo',
      'No: no puede ingresar al cuartel ni usar grado, cargo o función, y el uniforme sólo para presentarse a una audiencia o ante el Tribunal',
      'Sí, pero sin las insignias de su grado',
    ],
    correctas: ['No: no puede ingresar al cuartel ni usar grado, cargo o función, y el uniforme sólo para presentarse a una audiencia o ante el Tribunal'],
    explicacion: 'La disponibilidad procesal prohíbe ingresar al cuartel o sus dependencias y usar grado, cargos y funciones. El uniforme sólo puede usarse para presentarse a una audiencia o comparecer ante el Tribunal.',
  },
  {
    tipo: 'dd',
    titulo: 'CASO: Se inicia la causa número 12 del año 2026 en la Asociación con I.N.O.B.V. 0245, de la Federación cuya abreviatura es FP. ¿Cuál es la identificación correcta del expediente?',
    opciones: [
      'FP-B.A.-0245-012-2026',
      'B.A.-FP-012-0245-26',
      'B.A.-FP-0245-012-26',
      'B.A.-0245-FP-26-012',
    ],
    correctas: ['B.A.-FP-0245-012-26'],
    explicacion: 'El orden es: Provincia (B.A.) – Federación (2 letras) – I.N.O.B.V. – número de causa (desde 001) – dos últimos dígitos del año.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Es 10 de enero y hay una causa grave en trámite. El Tribunal no quiere esperar a que termine la Feria de Tribunales. ¿Qué corresponde?',
    opciones: [
      'Debe esperar: durante la Feria está prohibido actuar',
      'Puede continuar con las actuaciones, pero debe notificarlo a las partes',
      'Puede continuar sin avisar, porque la Feria es optativa',
      'Necesita autorización de la Dirección General de Defensa Civil',
    ],
    correctas: ['Puede continuar con las actuaciones, pero debe notificarlo a las partes'],
    explicacion: 'La Feria va del 15 de diciembre a fin de febrero y suspende los términos procesales, salvo que el Tribunal decida obviarla por las características del caso, notificándolo a las partes.',
  },

  // ---------- Lección 8: Recursos – Formas documentales ----------
  {
    tipo: 'vf',
    titulo: 'CASO: Un bombero presenta por escrito un Recurso Jerárquico ante su Jefe de Cuerpo. El Jefe debe registrarlo en el Libro de Jefatura y responderlo dentro de los cuatro días corridos mediante una Orden de Jefatura.',
    correctas: ['Verdadero'],
    explicacion: 'Verdadero. Si el recurrente no está conforme con la respuesta, puede accionar en segunda instancia ante la Comisión Directiva.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El Presidente del Tribunal puso a un imputado en disponibilidad procesal hace 35 días corridos y nunca le comunicaron la integración del Tribunal. Presenta un Recurso de Irregularidad y pasan 10 días corridos sin que se salve el error. ¿Qué derecho tiene?',
    opciones: [
      'Reincorporarse en forma inmediata al servicio activo, y el Instructor eleva las actuaciones al Tribunal de la causa',
      'Ninguno: debe esperar el fallo',
      'Pedir la nulidad de la causa ante la Dirección General de Defensa Civil',
      'Que se le dé la pena por cumplida',
    ],
    correctas: ['Reincorporarse en forma inmediata al servicio activo, y el Instructor eleva las actuaciones al Tribunal de la causa'],
    explicacion: 'Pasados 30 días corridos en disponibilidad procesal, si no se le comunicó la imputación, la integración del Tribunal o no se le permitió tomar vista, puede interponer Recurso de Irregularidad. Si a los 10 días corridos no se salvan los errores, puede reincorporarse de inmediato.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: Un Tribunal Institucional de Acción Individual aplicó una Baja Disciplinaria y el sancionado interpone un Recurso de Nulidad. ¿Ante quién va y en qué plazo lo eleva el Tribunal?',
    opciones: [
      'Ante la Dirección General de Defensa Civil, en 5 días hábiles',
      'Ante el mismo Tribunal, que lo resuelve en 30 días hábiles',
      'Ante el Director Federativo Provincial de Ética, en 15 días hábiles',
      'Ante el Tribunal Federativo; el Tribunal tiene 10 días hábiles para elevarlo y debe notificar al recurrente',
    ],
    correctas: ['Ante el Tribunal Federativo; el Tribunal tiene 10 días hábiles para elevarlo y debe notificar al recurrente'],
    explicacion: 'La Nulidad procede sólo contra baja disciplinaria, destitución y exoneración. Contra un fallo de un Tribunal Institucional de Acción Individual va al Tribunal Federativo. Contra uno Federativo de Acción Individual o de Acción Institucional, a la Dirección General de Defensa Civil.',
  },
  {
    tipo: 'mc',
    titulo: 'CASO: El Jefe de Cuerpo le ordena a un bombero entrar a una estructura incendiada sin equipo de protección respiratoria. El bombero presenta un recurso. ¿Qué tipo de recurso es y qué pasa si no le contestan?',
    opciones: [
      'Recurso de Irregularidad; si no contestan, se reincorpora al servicio',
      'Recurso Jerárquico común; si no contestan, va a la Comisión Directiva',
      'Recurso Jerárquico de Privilegio; si no contestan en plazo, puede recurrir al Tribunal Federativo y el responsable queda encuadrado en prevaricato',
      'Recurso de Nulidad; si no contestan, va a la Dirección General de Defensa Civil',
    ],
    correctas: ['Recurso Jerárquico de Privilegio; si no contestan en plazo, puede recurrir al Tribunal Federativo y el responsable queda encuadrado en prevaricato'],
    explicacion: 'Las órdenes que ponen en riesgo la integridad física son causal de Recurso Jerárquico de Privilegio. La autoridad debe responder en no más de 15 días hábiles (el Jefe de Cuerpo, 7). No contestar encuadra en prevaricato y faculta a recurrir al Tribunal Federativo.',
  },
];

function crearExamen() {
  if (PREGUNTAS.length !== 20) throw new Error('Se esperaban 20 preguntas, hay ' + PREGUNTAS.length);

  const form = FormApp.create(TITULO);
  form.setIsQuiz(true)
    .setDescription(
      'GB III-13 – CONSEJERO DE ÉTICA 2\n' +
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
