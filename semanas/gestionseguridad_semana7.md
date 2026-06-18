---
layout: slide-01-portada
---

::title::
Gestión de la Seguridad de la Información
Identificación y evaluación de riesgos en un SGSI

::week::
Semana 7

::date::
Junio 18 de 2026

<!--
Notas del presentador:
Inicie la sesión dando una bienvenida cordial y ubicando a los estudiantes en el propósito central de la semana: comprender cómo la gestión de riesgos deja de ser una actividad aislada y se convierte en el eje operativo del Sistema de Gestión de Seguridad de la Información. Es importante explicar que, en un SGSI, la seguridad no se limita a instalar controles tecnológicos, cambiar contraseñas o comprar herramientas; la seguridad se gestiona cuando la organización identifica qué información necesita proteger, qué amenazas pueden afectarla, qué vulnerabilidades podrían ser explotadas y qué impacto tendría la materialización de esos eventos sobre la continuidad, la reputación, la operación y el cumplimiento. Presente la semana como un puente entre la auditoría trabajada en semanas anteriores y la capacidad de tomar decisiones preventivas.

Sugiera a los estudiantes imaginar una empresa que crece rápidamente, abre oficinas en distintos países, contrata personal remoto, usa servicios en la nube, comparte información con proveedores y desarrolla software para clientes empresariales. En ese contexto, la pregunta clave no es solamente “¿tenemos controles?”, sino “¿sabemos cuáles riesgos justifican esos controles?”. Esa pregunta permitirá conectar con el caso de XYZ Corp propuesto para el foro. Aclare que durante la clase se trabajará con ejemplos aplicados y con una práctica sencilla en Python para construir una matriz de riesgos. No se busca formar auditores expertos en una sola sesión, sino desarrollar criterio profesional para analizar escenarios, priorizar riesgos y justificar medidas de mitigación.

Indique que la sesión tendrá una duración efectiva de 90 minutos, con una breve actividad de integración, desarrollo conceptual, análisis aplicado, práctica guiada, socialización y cierre. Recuerde que la participación activa es fundamental, porque la evaluación de riesgos exige múltiples perspectivas: técnica, administrativa, humana, legal y estratégica. Cierre esta apertura recordando que ISO/IEC 27001 incluye requisitos para evaluar y tratar riesgos de seguridad de la información adaptados a las necesidades de la organización. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-02-titulo
---

::title::
Curso: Gestión de la Seguridad de la Información

<!--
Notas del presentador:
Utilice esta diapositiva como transición institucional entre la bienvenida y el desarrollo de la sesión. Explique que el curso avanza sobre una lógica progresiva: primero se comprende qué es la seguridad de la información, luego se identifican los componentes de un SGSI, después se revisan auditorías, controles, políticas y finalmente se profundiza en la gestión del riesgo como mecanismo de decisión. Esta semana se enfoca en la identificación y evaluación de riesgos, una competencia especialmente importante para estudiantes universitarios de pregrado porque les permite comprender cómo se toman decisiones reales en organizaciones donde los recursos son limitados y los riesgos son múltiples.

Puede explicar que, en seguridad de la información, no todos los riesgos se tratan igual. Una contraseña débil en un sistema crítico, una vulnerabilidad en una aplicación pública o la ausencia de copias de respaldo no tienen el mismo nivel de urgencia que otros riesgos menores o administrativos. Por eso, el curso busca que los estudiantes puedan pensar de manera estructurada: identificar activos, reconocer amenazas, asociar vulnerabilidades, estimar probabilidad, valorar impacto, priorizar acciones y justificar controles. Este razonamiento es útil para perfiles técnicos, administrativos, docentes, consultores, analistas de seguridad, gestores de proyectos y responsables de procesos.

Recalque que la clase no reemplaza el aula virtual, sino que la complementa. La presentación ofrece una mirada aplicada, con énfasis en el caso XYZ Corp, en las preguntas de evaluación y en una práctica guiada que permitirá producir una matriz básica de riesgos. Invite a los estudiantes a asumir una postura profesional: no responder solamente desde la memorización, sino desde la argumentación. Una buena respuesta en gestión de riesgos debe explicar por qué un riesgo es relevante, cómo se evidencia, qué consecuencias tendría y qué controles son adecuados.

Finalmente, recuerde que la sesión combina conceptualización y aplicación. El objetivo es que al terminar la clase cada estudiante pueda participar con mayor seguridad en el foro de discusión, apoyar el trabajo de su equipo y comprender por qué la alta dirección necesita resultados claros, priorizados y accionables.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Contextualización inicial: del control aislado al riesgo gestionado

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre gestión de riesgos en seguridad de la información" />

::content::
Una organización no protege “todo” de la misma manera.

Primero identifica qué información es crítica, qué amenazas pueden afectarla y qué vulnerabilidades aumentan la exposición.

Luego evalúa probabilidad e impacto para decidir qué riesgos se aceptan, se mitigan, se transfieren o se evitan.

La evaluación de riesgos permite que el SGSI sea preventivo, coherente y sostenible.

<!--
Notas del presentador:
Desarrolle esta diapositiva partiendo de una idea sencilla: una organización puede tener muchos controles, pero no necesariamente una buena gestión de seguridad. Por ejemplo, puede tener antivirus instalado, políticas escritas y copias de respaldo, pero si no sabe qué activos son críticos, qué amenazas son más probables y qué impactos serían más graves, sus controles pueden estar mal priorizados. En cambio, cuando una organización gestiona riesgos, decide con criterio. Esto significa que no asigna recursos por intuición, por moda tecnológica o por miedo generalizado, sino a partir de un análisis estructurado.

Explique que la seguridad de la información se relaciona con la confidencialidad, integridad y disponibilidad. La confidencialidad se afecta cuando información sensible llega a personas no autorizadas; la integridad se afecta cuando la información se modifica sin control o deja de ser confiable; la disponibilidad se afecta cuando los sistemas o datos no están accesibles cuando se necesitan. En un SGSI, los riesgos se formulan justamente considerando eventos que pueden comprometer esas propiedades. Por ejemplo, un ataque de ransomware puede afectar la disponibilidad, una fuga de código fuente puede afectar la confidencialidad y una manipulación de datos financieros puede afectar la integridad.

Conecte esta idea con la experiencia cotidiana de los estudiantes. Pregunte: ¿qué pasaría si una plataforma académica pierde las notas finales?, ¿qué pasaría si una empresa expone datos personales de clientes?, ¿qué pasaría si un proveedor externo queda comprometido y afecta a la organización? Estas preguntas ayudan a mostrar que el riesgo no es una abstracción; es la posibilidad de que un evento afecte objetivos reales. La norma ISO/IEC 27001 se apoya en esta lógica porque un SGSI debe establecer, implementar, mantener y mejorar procesos para gestionar la seguridad de la información, incluida la evaluación y el tratamiento de riesgos según el contexto organizacional. :contentReference[oaicite:1]{index=1}

Cierre enfatizando que esta semana se concentra en aprender a mirar la organización desde sus riesgos. No se trata de alarmar, sino de anticipar, priorizar y decidir.
-->

---
layout: slide-09-objetivos
---

::title::
Objetivos de aprendizaje de la sesión

::content::
Al finalizar la Open Class, el estudiante estará en capacidad de:

* Diferenciar activo, amenaza, vulnerabilidad, riesgo, impacto, probabilidad y riesgo residual.
* Aplicar una lógica básica de identificación y evaluación de riesgos en un SGSI.
* Priorizar riesgos mediante criterios cualitativos y semicuantitativos.
* Relacionar los resultados de una evaluación de riesgos con controles, mitigación y toma de decisiones.
* Construir una matriz sencilla de riesgos para el caso XYZ Corp usando Python.
* Preparar argumentos para el foro de la semana desde una perspectiva técnica y organizacional.

<!--
Notas del presentador:
Presente los objetivos como compromisos de aprendizaje alcanzables dentro de la sesión. Es importante evitar que los estudiantes perciban la gestión de riesgos como un tema exclusivamente normativo o documental. Aclare que la clase busca desarrollar una habilidad práctica: analizar situaciones de seguridad y traducirlas en decisiones. Para ello, se revisarán conceptos básicos, ejemplos aplicados y una práctica guiada. Cada objetivo puede explicarse con una breve pregunta orientadora.

Para el primer objetivo, señale que muchos errores en seguridad ocurren por confundir términos. Una amenaza no es lo mismo que una vulnerabilidad; una vulnerabilidad no es lo mismo que un riesgo; el impacto no es igual a la probabilidad; y el riesgo residual no es el riesgo inicial. Esa precisión conceptual será necesaria para responder adecuadamente las preguntas de evaluación y para participar con calidad en el foro.

Para el segundo y tercer objetivo, explique que identificar riesgos implica formular escenarios claros. No basta decir “hay riesgo de hackers”. Es mejor expresar: “Existe riesgo de acceso no autorizado a repositorios de código debido a credenciales débiles y ausencia de autenticación multifactor, lo que podría exponer propiedad intelectual y datos de clientes”. Esa formulación contiene activo, amenaza, vulnerabilidad e impacto. Después, la evaluación permite asignar niveles de probabilidad e impacto para priorizar.

Para el cuarto objetivo, relacione la evaluación con la toma de decisiones. Un riesgo crítico probablemente requiere controles inmediatos, responsables definidos y seguimiento; un riesgo bajo podría aceptarse temporalmente si está dentro del apetito de riesgo. Para el quinto objetivo, explique que la práctica en Python no pretende reemplazar herramientas profesionales de GRC, sino mostrar la lógica detrás de una matriz: datos de entrada, cálculo de nivel de riesgo, priorización y propuesta de tratamiento.

Finalice indicando que el último objetivo conecta directamente con la evaluación de la semana: el foro exige identificar riesgos, valorar políticas, priorizar y proponer mitigaciones basadas en buenas prácticas e ISO/IEC 27001.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ruta de trabajo para 90 minutos

::content::
0–5 min · Bienvenida, propósito y agenda.

5–15 min · Actividad de integración: “Riesgo o síntoma”.

15–40 min · Desarrollo conceptual: activos, amenazas, vulnerabilidades, probabilidad, impacto y riesgo residual.

40–60 min · Caso XYZ Corp, relación con evaluación y curaduría audiovisual.

60–78 min · Práctica guiada: matriz de riesgos con Python.

78–85 min · Socialización breve de resultados.

85–90 min · Resolución de dudas, cierre académico y Encuesta de Percepción Estudiantil.

<!--
Notas del presentador:
Explique la ruta de trabajo de manera clara para que los estudiantes comprendan el ritmo de la sesión y la finalidad de cada bloque. La tolerancia máxima de cinco minutos debe asumirse como criterio de gestión del tiempo. Por eso, es recomendable usar esta diapositiva como contrato didáctico: todos sabrán cuándo participar, cuándo escuchar, cuándo practicar y cuándo socializar. Mencione que la sesión está diseñada para ser dinámica, pero organizada; el objetivo no es saturar de teoría, sino construir comprensión progresiva.

En los primeros cinco minutos, además de la bienvenida, se explicará el propósito general de la semana. Entre los minutos cinco y quince se realizará una actividad corta de integración, llamada “Riesgo o síntoma”, que permitirá activar conocimientos previos. En esta actividad los estudiantes clasificarán enunciados rápidos para distinguir si corresponden a activos, amenazas, vulnerabilidades, impactos o controles. Esta dinámica prepara el lenguaje conceptual de la clase.

Entre los minutos quince y cuarenta se desarrollará el núcleo conceptual. Enfatice que esta parte no será una lectura de la norma, sino una explicación aplicada a situaciones reales. Se hablará de cómo un SGSI necesita criterios de riesgo, cómo se calcula una prioridad básica y cómo se interpreta el riesgo residual. Entre los minutos cuarenta y sesenta se usará el caso de XYZ Corp para relacionar conceptos con la evaluación y el foro. Allí se mostrarán riesgos probables, controles sugeridos y preguntas de análisis.

Entre los minutos sesenta y setenta y ocho se realizará la práctica guiada. Recomiende que quienes puedan abran Google Colab o un entorno Python local. Los estudiantes que no puedan ejecutar el código pueden seguirlo como lectura guiada y centrarse en interpretar los resultados. Entre los minutos setenta y ocho y ochenta y cinco se socializarán hallazgos, y los últimos cinco minutos se reservarán para dudas puntuales, cierre académico y recordatorio de la Encuesta de Percepción Estudiantil.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad corta de integración: “Riesgo o síntoma”

::left::
Para estudiantes:

1. Lea cada situación planteada por el docente.
2. Clasifique rápidamente: activo, amenaza, vulnerabilidad, impacto, control o riesgo.
3. Justifique en una frase.
4. Compare su respuesta con otra persona o con el chat.
5. Ajuste la clasificación si identifica una mejor explicación.

::right::
Para el docente:

* Duración sugerida: 10 a 15 minutos.
* Use cinco casos breves.
* Permita participación rápida.
* No califique respuestas como “malas” de inmediato.
* Enfatice la diferencia entre causa, condición, evento y consecuencia.

Casos sugeridos:

* Repositorio de código fuente.
* Contraseñas reutilizadas.
* Phishing a personal remoto.
* Pérdida de datos de clientes.
* Autenticación multifactor.

<!--
Notas del presentador:
Oriente esta actividad como una activación de saberes previos y no como evaluación formal. La intención es que los estudiantes empiecen a usar vocabulario de gestión de riesgos de manera precisa. Puede presentar los casos de uno en uno y pedir respuestas rápidas por voz, chat, formulario, reacción o participación voluntaria. Si la clase es presencial, puede pedir que levanten la mano o que escriban la clasificación en una hoja. Si es virtual, puede usar el chat o una herramienta simple de encuesta. No es necesario usar plataformas complejas; lo importante es generar participación.

Explique el primer caso: “repositorio de código fuente”. Pregunte si es activo, amenaza, vulnerabilidad, impacto, control o riesgo. La respuesta esperada es activo, porque representa información valiosa para una empresa de software. Luego presente “contraseñas reutilizadas”. Esta situación corresponde a una vulnerabilidad o debilidad que puede ser explotada. Después presente “phishing a personal remoto”. Puede clasificarse como amenaza o escenario de amenaza, porque describe una acción externa o un evento adverso potencial. “Pérdida de datos de clientes” es principalmente un impacto o consecuencia, aunque también puede formar parte de la formulación de un riesgo. “Autenticación multifactor” es un control, porque reduce la probabilidad de acceso no autorizado.

El valor didáctico de la actividad está en discutir los límites entre categorías. Por ejemplo, “phishing” puede ser una amenaza, pero “empleados sin entrenamiento para reconocer phishing” es una vulnerabilidad. “Ransomware” puede ser una amenaza, pero “ausencia de copias de respaldo verificadas” es una vulnerabilidad, y “interrupción del servicio durante tres días” es un impacto. Esta precisión conceptual permitirá que más adelante los estudiantes formulen riesgos completos.

Cierre la actividad solicitando a dos o tres estudiantes que transformen una clasificación en una frase de riesgo. Por ejemplo: “Existe riesgo de acceso no autorizado al repositorio de código por contraseñas reutilizadas ante campañas de phishing, lo que podría generar exposición de propiedad intelectual”. Esa frase conecta activo, amenaza, vulnerabilidad e impacto.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
ISO/IEC 27001 y el enfoque de riesgo

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre SGSI y evaluación de riesgos" />

::content::
Un SGSI requiere procesos consistentes para gestionar riesgos de seguridad de la información.

La evaluación de riesgos responde tres preguntas:

* ¿Qué puede salir mal?
* ¿Qué tan probable es?
* ¿Qué tan grave sería para la organización?

El tratamiento de riesgos responde:

* ¿Qué controles aplicaremos?
* ¿Quién será responsable?
* ¿Qué riesgo residual aceptaremos o seguiremos gestionando?

<!--
Notas del presentador:
Explique que ISO/IEC 27001 no debe entenderse como una lista de controles aislados, sino como un sistema de gestión. Esto implica planificación, implementación, operación, evaluación del desempeño y mejora continua. En ese marco, la gestión de riesgos ocupa un lugar central porque permite decidir qué controles son necesarios y por qué. Es importante que los estudiantes comprendan que un SGSI no consiste simplemente en copiar políticas o instalar herramientas de seguridad, sino en establecer un proceso verificable, repetible y coherente con el contexto de la organización.

Presente las tres preguntas de evaluación de riesgos. La primera, “¿qué puede salir mal?”, obliga a identificar eventos no deseados. Por ejemplo, acceso no autorizado, pérdida de disponibilidad, fuga de información, modificación indebida, fraude, indisponibilidad de servicios críticos o incumplimiento legal. La segunda pregunta, “¿qué tan probable es?”, exige analizar frecuencia, exposición, historial, efectividad de controles existentes, nivel de amenaza y vulnerabilidades. La tercera pregunta, “¿qué tan grave sería?”, exige estimar consecuencias: pérdida financiera, afectación operativa, daño reputacional, sanciones, pérdida de clientes o interrupción de servicios.

Luego explique el tratamiento de riesgos. Una vez identificados y evaluados, los riesgos no desaparecen automáticamente. La organización debe decidir qué hacer. Puede mitigarlos mediante controles, evitarlos eliminando una actividad riesgosa, transferir parte del riesgo mediante contratos o seguros, o aceptarlos si se encuentran dentro de criterios definidos. Aquí aparece el concepto de riesgo residual: el riesgo que permanece después de aplicar controles. No todo riesgo residual es inaceptable; lo importante es que sea conocido, aprobado y monitoreado.

Aclare que ISO/IEC 27001 exige que la evaluación y el tratamiento estén adaptados a las necesidades de la organización, lo cual implica que no existe una única matriz universal válida para todos los casos. Una empresa financiera, una universidad, una clínica y una empresa de software tendrán activos, amenazas, impactos y criterios diferentes. La fuente oficial de ISO indica que el documento incluye requisitos de evaluación y tratamiento de riesgos ajustados a las necesidades de la organización. :contentReference[oaicite:2]{index=2}
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Términos clave

::rightTitle::
Preguntas orientadoras

::left::
Activo: información, sistema, proceso o recurso con valor.

Amenaza: causa potencial de un incidente.

Vulnerabilidad: debilidad que puede ser explotada.

Riesgo: efecto de la incertidumbre sobre objetivos de seguridad.

Impacto: consecuencia si el riesgo se materializa.

Probabilidad: posibilidad de ocurrencia.

Riesgo residual: riesgo que permanece tras aplicar controles.

::right::
¿Qué activo se afectaría?

¿Qué amenaza podría actuar?

¿Qué vulnerabilidad facilitaría el evento?

¿Qué propiedad se compromete: confidencialidad, integridad o disponibilidad?

¿Qué tan probable es?

¿Qué impacto tendría?

¿Qué control reduce la probabilidad o el impacto?

¿Qué riesgo queda después del control?

<!--
Notas del presentador:
Use esta diapositiva para consolidar un lenguaje común. La gestión de riesgos requiere precisión terminológica, porque una matriz mal formulada conduce a decisiones equivocadas. Explique que el activo es aquello que tiene valor para la organización. Puede ser información, software, infraestructura, reputación, procesos, contratos, datos personales, propiedad intelectual o conocimiento organizacional. En el caso de XYZ Corp, los activos pueden incluir código fuente, plataformas de desarrollo, bases de datos de clientes, infraestructura en la nube, documentación técnica, contratos internacionales y credenciales de acceso.

La amenaza es aquello que puede causar daño. Puede ser externa, como ciberdelincuentes, malware, phishing o ataques de denegación de servicio; interna, como errores humanos, uso indebido de privilegios o negligencia; ambiental, como fallas eléctricas o desastres; o relacionada con terceros, como proveedores vulnerables. La vulnerabilidad es una condición de debilidad. Por ejemplo, ausencia de autenticación multifactor, parches desactualizados, permisos excesivos, políticas no comunicadas, falta de monitoreo, copias de respaldo no probadas o capacitación insuficiente.

El riesgo surge cuando una amenaza puede explotar una vulnerabilidad y afectar un activo. Por eso no conviene escribir riesgos vagos. En lugar de “riesgo de hackers”, se puede decir: “Riesgo de acceso no autorizado a cuentas administrativas debido a contraseñas reutilizadas y ausencia de MFA, ante campañas de phishing dirigidas, lo que podría comprometer datos de clientes”. Esta redacción permite evaluar y controlar.

Explique probabilidad e impacto. La probabilidad no es una adivinanza; se estima con criterios: frecuencia de eventos similares, exposición, historial, controles actuales y atractivo del activo. El impacto considera consecuencias operativas, legales, reputacionales, financieras y académicas o misionales, según el contexto. El riesgo residual es crucial porque los controles no suelen eliminar por completo el riesgo. Por ejemplo, MFA reduce el riesgo de acceso no autorizado, pero no elimina totalmente el phishing, la ingeniería social o la mala gestión de sesiones. El objetivo profesional es conocer, documentar y monitorear ese riesgo restante.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Identificación de riesgos: construir escenarios completos

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre activos amenazas vulnerabilidades y riesgos" />

::content::
Una formulación útil de riesgo integra:

Activo + amenaza + vulnerabilidad + consecuencia.

Ejemplo aplicado:

“Existe riesgo de acceso no autorizado al repositorio de código fuente debido a contraseñas reutilizadas y ausencia de MFA, ante campañas de phishing dirigidas, lo que podría exponer propiedad intelectual y afectar compromisos contractuales.”

La calidad de la evaluación depende de la calidad del escenario.

<!--
Notas del presentador:
Explique que identificar riesgos no consiste en hacer una lista genérica de problemas. Una buena identificación exige construir escenarios comprensibles, evaluables y accionables. La fórmula “activo + amenaza + vulnerabilidad + consecuencia” ayuda a evitar frases incompletas. Si alguien escribe “riesgo de contraseña”, no queda claro cuál es el activo, qué amenaza existe, qué vulnerabilidad se aprovecha ni qué impacto tendría. En cambio, cuando se formula un escenario completo, la organización puede asignar probabilidad, impacto, controles y responsables.

Desglose el ejemplo de la diapositiva. El activo es el repositorio de código fuente. La amenaza son campañas de phishing dirigidas. La vulnerabilidad son contraseñas reutilizadas y ausencia de autenticación multifactor. La consecuencia es exposición de propiedad intelectual y afectación contractual. Esta estructura permite evaluar mejor: si el repositorio contiene código de productos críticos, el impacto puede ser alto; si la empresa tiene empleados remotos y alta exposición a correos externos, la probabilidad puede ser media o alta; si no hay MFA, el riesgo aumenta; si existe monitoreo y capacitación, puede disminuir.

Invite a los estudiantes a pensar en XYZ Corp. Al ser una empresa global de software con 500 empleados en varias regiones, sus riesgos no se limitan al área técnica. Puede tener riesgos por acceso remoto, diferencias regulatorias, proveedores internacionales, gestión de identidades, desarrollo seguro, protección de datos de clientes, continuidad operativa y cultura de seguridad. Por eso, la identificación debe involucrar a varias partes interesadas: tecnología, legal, operaciones, recursos humanos, dirección, clientes y proveedores.

Proponga una mini pregunta: ¿cuál de estas frases es más útil para una matriz? “Riesgo de nube” o “Riesgo de exposición de datos de clientes almacenados en nube por configuración incorrecta de permisos, ante accesos no autorizados, con posible incumplimiento contractual y sanciones”. La segunda frase permite evaluar y tratar. Cierre enfatizando que la evaluación de riesgos comienza con buena redacción. Una mala identificación produce números aparentemente precisos pero decisiones débiles.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Evaluación: probabilidad, impacto y prioridad

::left::
Criterios cualitativos:

* Bajo
* Medio
* Alto
* Crítico

Criterios semicuantitativos:

* Probabilidad de 1 a 5.
* Impacto de 1 a 5.
* Nivel de riesgo = probabilidad × impacto.
* Priorización según umbrales definidos.

::right::
Interpretación sugerida:

1 a 4 · Bajo
Seguimiento básico.

5 a 9 · Medio
Controles y monitoreo.

10 a 14 · Alto
Plan de mitigación prioritario.

15 a 25 · Crítico
Acción inmediata, responsable y seguimiento directivo.

<!--
Notas del presentador:
Explique que la evaluación de riesgos permite comparar escenarios diferentes usando criterios comunes. Sin evaluación, una organización podría tratar todos los riesgos como urgentes o, por el contrario, subestimar riesgos críticos. La evaluación cualitativa usa categorías como bajo, medio, alto y crítico. Es útil cuando no hay datos suficientes o cuando se busca una discusión rápida. La evaluación semicuantitativa asigna valores numéricos, por ejemplo de 1 a 5, para probabilidad e impacto. El producto de ambos valores genera un nivel de riesgo que ayuda a priorizar.

Aclare que el cálculo probabilidad por impacto es una simplificación didáctica. En entornos profesionales, algunas organizaciones usan modelos más complejos, ponderaciones, análisis económico, escenarios de pérdida, datos históricos, indicadores de amenaza, controles existentes y criterios legales. Sin embargo, para una Open Class y para un primer ejercicio académico, la escala 1 a 5 es suficiente para desarrollar criterio. Lo importante no es creer que el número es exacto, sino justificarlo. Si se asigna probabilidad 5, debe explicarse por qué: exposición alta, incidentes frecuentes, controles débiles, amenazas activas o vulnerabilidades conocidas. Si se asigna impacto 5, debe explicarse la consecuencia: interrupción crítica, pérdida de datos sensibles, sanciones, daño reputacional severo o incumplimiento contractual.

Presente los umbrales de la diapositiva como una propuesta didáctica, no como una regla universal. Cada organización debe definir criterios de riesgo de acuerdo con su contexto, apetito de riesgo y objetivos. Por ejemplo, para una empresa que maneja datos de salud, un riesgo de confidencialidad puede ser crítico incluso si la probabilidad no es máxima. Para una empresa de comercio electrónico, la disponibilidad puede ser prioritaria en temporadas de alta demanda. En XYZ Corp, el código fuente, la información de clientes empresariales y la continuidad de servicios internacionales podrían tener impacto alto.

Recalque que evaluar riesgos implica dialogar. No es una tarea exclusiva del área de TI. La probabilidad puede requerir datos técnicos, pero el impacto suele requerir visión de negocio. Por eso la comunicación con la alta dirección es esencial.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Riesgo residual y decisiones de tratamiento

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre riesgo residual y controles de seguridad" />

::content::
El riesgo inherente existe antes de aplicar controles.

El riesgo residual permanece después de aplicar controles.

Opciones de tratamiento:

* Mitigar: aplicar controles.
* Evitar: suspender o cambiar una actividad riesgosa.
* Transferir: compartir responsabilidad contractual o financiera.
* Aceptar: asumir el riesgo dentro de criterios aprobados.

La clave no es eliminar todo riesgo, sino gestionarlo con evidencia.

<!--
Notas del presentador:
Explique que uno de los conceptos más importantes de la semana es el riesgo residual. El riesgo inherente representa el nivel de exposición antes de considerar controles. Por ejemplo, si una empresa permite acceso remoto a sistemas críticos sin autenticación multifactor, con contraseñas débiles y sin monitoreo, el riesgo inherente de acceso no autorizado puede ser muy alto. Después de aplicar controles como MFA, políticas de contraseña, monitoreo de sesiones, capacitación contra phishing y revisión de permisos, el riesgo disminuye, pero no necesariamente desaparece. Ese riesgo que permanece es el riesgo residual.

Es fundamental que los estudiantes comprendan que en seguridad de la información no existe riesgo cero. Incluso organizaciones maduras pueden sufrir incidentes. La madurez está en conocer los riesgos, documentarlos, tratarlos, monitorearlos y tomar decisiones informadas. Cuando una organización acepta un riesgo residual, esa aceptación debe estar justificada y aprobada por el nivel correspondiente. No debe ser una aceptación informal basada en descuido o desconocimiento.

Desarrolle las cuatro opciones de tratamiento. Mitigar significa implementar controles para reducir probabilidad o impacto. Por ejemplo, MFA reduce la probabilidad de acceso no autorizado; copias de respaldo probadas reducen el impacto de ransomware; segmentación de red limita propagación; capacitación reduce errores humanos. Evitar implica dejar de realizar una actividad que genera un riesgo inaceptable. Por ejemplo, no almacenar datos sensibles en una plataforma no aprobada. Transferir implica compartir o trasladar parte del riesgo mediante seguros, contratos, acuerdos de nivel de servicio o proveedores especializados; sin embargo, aclare que la responsabilidad final no siempre desaparece. Aceptar implica reconocer el riesgo y decidir que está dentro del apetito definido.

Conecte con las preguntas de evaluación: cuando se pregunta qué son los riesgos residuales, la respuesta correcta debe señalar que son los riesgos que continúan existiendo después de aplicar medidas de control y que pueden seguir representando amenazas significativas. Invite a los estudiantes a no memorizar solamente la frase, sino a comprenderla con ejemplos. Cierre indicando que la práctica en Python calculará una versión sencilla de riesgo residual usando una efectividad estimada del control.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Caso XYZ Corp

::rightTitle::
Relación con la evaluación

::left::
Empresa global de tecnología.

500 empleados.

Oficinas en América del Norte, Europa y Asia.

Crecimiento acelerado.

Desarrollo de software empresarial.

Expansión a nuevos mercados internacionales.

Riesgos probables:

* Acceso remoto inseguro.
* Vulnerabilidades en desarrollo.
* Proveedores sin evaluación.
* Configuraciones débiles en nube.
* Incumplimiento normativo internacional.

::right::
Preguntas clave del foro:

* ¿Qué riesgos afectan a XYZ Corp?
* ¿Qué amenazas y vulnerabilidades los explican?
* ¿Cómo priorizar probabilidad e impacto?
* ¿Qué controles mitigan los riesgos?
* ¿Qué riesgo residual queda?
* ¿Cómo comunicar resultados a la alta dirección?
* ¿Qué aporte hará cada integrante del equipo?

<!--
Notas del presentador:
Use esta diapositiva para conectar de forma explícita la clase con la actividad evaluativa. Lea brevemente el caso de XYZ Corp y enfatice sus características: empresa global, sector tecnológico, desarrollo de software empresarial, 500 empleados, crecimiento acelerado y expansión internacional. Cada característica aumenta o modifica la superficie de riesgo. Una empresa global tiene desafíos de coordinación, cumplimiento legal y diferencias horarias. Una empresa de software maneja código fuente, credenciales, ambientes de desarrollo, pruebas, despliegue y datos de clientes. El crecimiento acelerado puede producir brechas en políticas, capacitación, inventario de activos, gestión de proveedores y control de accesos.

Proponga tres riesgos mínimos que podrían usar los estudiantes en el foro. Primero: riesgo de acceso no autorizado a sistemas internos por credenciales comprometidas, phishing y ausencia o baja cobertura de MFA. Segundo: riesgo de vulnerabilidades en aplicaciones empresariales por prácticas insuficientes de desarrollo seguro, revisión de código limitada o dependencias desactualizadas. Tercero: riesgo asociado a terceros o proveedores en la nube por falta de evaluación, contratos débiles, controles no verificados o configuraciones incorrectas. Puede agregar un cuarto riesgo: pérdida de disponibilidad por ransomware o fallas en continuidad operativa, especialmente si no hay respaldos probados y plan de recuperación.

Luego relacione con las preguntas de evaluación de selección múltiple. Señale que el proceso de identificación y evaluación de riesgos incluye analizar riesgos, determinar frecuencia o probabilidad y evaluar impacto. Explique que la clasificación de riesgos implica categorizar según probabilidad e impacto para priorizar los más críticos. También recuerde que comunicar resultados a la alta dirección es crucial porque permite asignar recursos, tomar decisiones estratégicas y aprobar tratamientos. Esta idea se puede relacionar con el crecimiento internacional de XYZ Corp: si la dirección no comprende los riesgos, puede expandirse sin controles suficientes.

Oriente la participación en equipo. El integrante que haga la participación principal puede presentar la matriz de riesgos. Los integrantes que retroalimentan pueden cuestionar probabilidad, impacto, controles y riesgos residuales. El integrante de cierre puede sintetizar acuerdos y proponer recomendaciones. Insista en que una buena participación debe argumentar, no solamente listar.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Video de apoyo sugerido para la sesión

::media::

<iframe src="https://www.youtube.com/embed/NA1qVuEBvms" allowfullscreen></iframe>

<!--
Notas del presentador:
Use esta diapositiva como punto de apoyo audiovisual, no como reemplazo de la explicación. El video sugerido corresponde a “ISO 27001: Gestión de riesgos sobre la seguridad de la información”, asociado en los resultados consultados con EALDE Business School. El recurso es pertinente porque se enfoca directamente en la relación entre ISO 27001 y gestión de riesgos, lo cual conecta con el núcleo de la semana. En los resultados verificados aparece como video de YouTube con ese título y canal, y se observa una referencia aproximada de duración cercana a una sesión extensa, por lo que se recomienda no reproducirlo completo durante la Open Class. :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}

Para mantener la duración de la clase dentro de los 90 minutos, seleccione un fragmento de cinco a ocho minutos. Antes de la clase, revise el video y elija una parte donde se explique la importancia de identificar, analizar y tratar riesgos. El momento recomendado de uso es entre los minutos 40 y 60, justo después de presentar el caso XYZ Corp y antes de iniciar la práctica guiada. Su propósito pedagógico es reforzar la idea de que el SGSI no se limita a documentación, sino que exige decisiones basadas en riesgos.

Sugiera a los estudiantes ver el video con una pregunta guía: ¿qué elementos del video ayudan a mejorar la matriz de riesgos de XYZ Corp? Pueden tomar nota de términos como criterios de riesgo, controles, priorización, tratamiento, aceptación y seguimiento. Si el video menciona versiones anteriores o enfoques generales, contextualice que la clase se está trabajando desde una lectura actualizada de ISO/IEC 27001 y desde el caso específico de la semana. Esto es importante porque algunos recursos audiovisuales pueden ser útiles aunque no sustituyan la norma ni el material institucional.

Como alternativas de curaduría, puede sugerir tres recursos adicionales: “ISO/IEC 27001:2022 Seguridad de la información”, del Ministerio de Producción MPCEI Ecuador, útil para introducir principios y requisitos de la norma; “Claves de la ISO 27001 para la gestión de riesgos de seguridad de la información”, de EALDE Business School, útil como ampliación técnica; y “NIST Cybersecurity Framework 2.0 | Todo lo que necesitas saber”, útil para contrastar la gestión de riesgos con un marco complementario. Estos recursos fueron identificados en resultados de búsqueda verificados, pero se recomienda revisar duración, actualidad y fragmentos antes de incorporarlos. :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}
-->

---
layout: slide-08-titulo-texto
---

::title::
Curaduría de videos complementarios

::content::
Recurso 1
ISO 27001: Gestión de riesgos sobre la seguridad de la información
Canal: EALDE Business School
Momento: refuerzo conceptual antes de la práctica
Duración aproximada: extensa; usar fragmento de 5 a 8 minutos
Enlace: [https://www.youtube.com/watch?v=NA1qVuEBvms](https://www.youtube.com/watch?v=NA1qVuEBvms)
Advertencia: requiere recorte y contextualización con ISO/IEC 27001:2022.

Recurso 2
ISO/IEC 27001:2022 Seguridad de la información
Canal: Ministerio de Producción MPCEI Ecuador
Momento: introducción o ampliación autónoma
Duración aproximada: verificar antes de clase
Enlace: [https://www.youtube.com/watch?v=u2DaBdg-odc](https://www.youtube.com/watch?v=u2DaBdg-odc)
Advertencia: revisar el fragmento más pertinente para pregrado.

Recurso 3
Claves de la ISO 27001 para la gestión de riesgos de seguridad de la información
Canal: EALDE Business School
Momento: ampliación para equipos del foro
Duración aproximada: verificar antes de clase
Enlace: [https://www.youtube.com/watch?v=NahHaJKXpkM](https://www.youtube.com/watch?v=NahHaJKXpkM)
Advertencia: puede requerir edición por extensión.

Recurso 4
NIST Cybersecurity Framework 2.0 | Todo lo que necesitas saber
Momento: contraste con marcos complementarios
Duración aproximada: verificar antes de clase
Enlace: [https://www.youtube.com/watch?v=dDHMro1NxM0](https://www.youtube.com/watch?v=dDHMro1NxM0)
Advertencia: usar solo como marco comparativo, no como sustituto de ISO/IEC 27001.

<!--
Notas del presentador:
Esta diapositiva no debe ocupar demasiado tiempo en la sesión. Su función es ofrecer una curaduría útil para estudiantes que quieran reforzar o ampliar el tema. Explique que los videos no reemplazan la lectura del aula virtual ni la norma, pero pueden ayudar a comprender con lenguaje audiovisual conceptos como SGSI, gestión de riesgos, controles y marcos de ciberseguridad. Indique que se priorizaron recursos relacionados directamente con ISO 27001, gestión de riesgos y seguridad de la información, y que los enlaces fueron verificados en resultados de búsqueda. El recurso de EALDE sobre gestión de riesgos aparece en YouTube con el título “ISO 27001: Gestión de riesgos sobre la seguridad de la información”. :contentReference[oaicite:8]{index=8}

Para el primer recurso, recomiende usarlo como refuerzo conceptual. No conviene reproducirlo completo durante una clase de 90 minutos si su duración es extensa. Lo adecuado es seleccionar un fragmento donde se explique la lógica de identificar, analizar, evaluar y tratar riesgos. La advertencia de recorte es importante porque los estudiantes pueden perder foco si se reproduce un webinar largo sin actividad asociada. Puede pedirles que identifiquen una idea aplicable a XYZ Corp y la escriban como mejora para la matriz.

El segundo recurso, del Ministerio de Producción MPCEI Ecuador, aparece publicado en 2025 y se presenta como una explicación de principios, requisitos y mejores prácticas de ISO/IEC 27001:2022 para fortalecer protección de datos, gestión de riesgos y cumplimiento. :contentReference[oaicite:9]{index=9} Puede usarse como introducción para estudiantes que necesiten una visión general de la norma. Recomiende revisar previamente el lenguaje, duración y pertinencia exacta.

El tercer recurso, “Claves de la ISO 27001 para la gestión de riesgos de seguridad de la información”, también aparece relacionado con EALDE Business School y puede servir para ampliar metodología. :contentReference[oaicite:10]{index=10} El cuarto recurso sobre NIST CSF 2.0 puede utilizarse para contraste, porque NIST presenta su Cybersecurity Framework como una herramienta para ayudar a las organizaciones a entender y mejorar la gestión del riesgo de ciberseguridad. :contentReference[oaicite:11]{index=11} Aclare que NIST CSF no sustituye ISO/IEC 27001 en esta actividad, pero permite comparar enfoques de gobernanza, identificación, protección, detección, respuesta y recuperación.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Práctica guiada: matriz básica de riesgos para XYZ Corp

::image:: 
<img src="/imagenes/favicon.png" alt="Imagen de apoyo sobre matriz de riesgos SGSI con Python" />

::content::
Título de la actividad:

“Matriz semicuantitativa de riesgos para un SGSI”

Propósito:

Construir una matriz sencilla para identificar, valorar y priorizar riesgos de seguridad de la información en XYZ Corp.

La práctica permitirá:

* Formular escenarios de riesgo.
* Calcular riesgo inherente.
* Estimar riesgo residual.
* Priorizar acciones.
* Proponer tratamiento y controles.

<!--
Notas del presentador:
Presente la práctica como una actividad sencilla, guiada y directamente relacionada con el foro. Aclare que no se necesita experiencia avanzada en programación. El código estará completo, comentado y listo para ejecutarse en Google Colab o en cualquier entorno Python básico. La intención no es convertir a los estudiantes en desarrolladores de herramientas GRC, sino mostrar cómo la evaluación de riesgos puede organizarse de manera sistemática. El uso de Python permite automatizar cálculos, ordenar riesgos y generar un archivo CSV que puede servir como evidencia o insumo para la discusión.

Explique que la matriz trabajará con cinco escenarios de riesgo para XYZ Corp. Cada escenario tendrá activo, amenaza, vulnerabilidad, probabilidad, impacto, control sugerido y efectividad estimada del control. El código calculará el riesgo inherente como probabilidad por impacto. Luego estimará el riesgo residual aplicando un factor de reducción asociado a la efectividad del control. Finalmente, clasificará el nivel de riesgo y sugerirá un tratamiento. Aclare que los valores son didácticos y pueden ajustarse. De hecho, uno de los objetivos de la práctica es que los estudiantes discutan si las calificaciones asignadas son razonables.

Puede indicar que esta práctica reproduce una lógica común en análisis de riesgos: primero se identifica el escenario, luego se valora, después se prioriza y finalmente se decide cómo tratarlo. En una herramienta profesional se agregarían más campos: responsable, fecha, evidencia, control ISO/IEC 27001 asociado, estado, costo estimado, propietario del riesgo y aprobación de la alta dirección. Sin embargo, la versión de clase es suficiente para comprender el razonamiento.

Conecte la práctica con la evaluación. Los estudiantes podrán usar los resultados como base para responder al foro: identificar al menos tres riesgos, analizar amenazas y vulnerabilidades, priorizar cualitativa o cuantitativamente, proponer mitigaciones y explicar el riesgo residual. Recomiende que los equipos no copien literalmente la matriz, sino que la adapten, la cuestionen y la complementen con argumentos propios.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes, conexiones y pasos para probar

::left::
Componentes necesarios:

* Computador con navegador web.
* Cuenta Google institucional o personal.
* Acceso a Google Colab.
* Código Python de la siguiente diapositiva.
* Caso XYZ Corp de la semana.
* Criterios de probabilidad e impacto de 1 a 5.

Conexiones sugeridas:

* Aula virtual.
* Foro de discusión.
* Material de auditoría de semana 5.
* Buenas prácticas de ISO/IEC 27001.
* Discusión del equipo.

::right::
Pasos para probar:

1. Ingresar a [https://colab.research.google.com](https://colab.research.google.com)
2. Crear un cuaderno nuevo.
3. Copiar el código completo.
4. Ejecutar la celda.
5. Revisar la matriz ordenada.
6. Descargar o copiar el archivo CSV generado.
7. Cambiar valores de probabilidad, impacto o efectividad.
8. Comparar cómo cambia la prioridad.
9. Elegir tres riesgos para el foro.
10. Formular conclusiones y mitigaciones.

<!--
Notas del presentador:
Explique con calma los componentes necesarios. La práctica se diseñó para ejecutarse en Google Colab porque es gratuito, no requiere instalación local y permite que los estudiantes trabajen desde un navegador. Aclare que quienes prefieran pueden usar Python instalado en su computador, Visual Studio Code, Jupyter Notebook o cualquier entorno equivalente, porque el código usa librerías estándar de Python. No se requiere instalar paquetes externos. Esta decisión es didáctica: evitar que la clase se detenga por problemas de instalación.

Describa cada componente. El navegador permite acceder a Colab. La cuenta Google permite guardar el cuaderno. El caso XYZ Corp aporta el contexto de negocio. Los criterios de probabilidad e impacto permiten convertir una discusión cualitativa en una valoración semicuantitativa. La auditoría de la semana 5 sirve como antecedente, porque de allí pueden surgir hallazgos, debilidades o controles pendientes. La conexión con el foro es esencial: la práctica no es un ejercicio aislado, sino un insumo para la actividad evaluativa.

Al explicar los pasos, haga énfasis en que el código puede modificarse. Los valores iniciales no son una verdad absoluta. Si un equipo considera que el riesgo de proveedor es más crítico, puede aumentar el impacto. Si considera que un control es muy efectivo, puede aumentar su efectividad. Luego debe observar cómo cambia el riesgo residual. Esta experimentación ayuda a comprender que las matrices de riesgo son instrumentos de análisis, no simples formatos para llenar.

Sugiera que los equipos usen la práctica de tres maneras. Primero, como diagnóstico: identificar cuáles riesgos quedan más altos. Segundo, como argumento: justificar por qué priorizan un riesgo sobre otro. Tercero, como evidencia: mostrar que aplicaron una metodología estructurada. Recuerde que la pregunta de evaluación destaca la importancia de una metodología sistemática para analizar amenazas y establecer controles efectivos. La práctica justamente materializa ese enfoque.

Si algún estudiante no puede ejecutar Colab, puede seguir la lectura del código y participar interpretando los resultados mostrados por el docente. Lo importante es la comprensión del proceso: identificar, valorar, priorizar, tratar y comunicar.
-->

---
layout: slide-codigo
---

::title::
Código completo en Python: matriz de riesgos SGSI

::content::

```python {lines:true}
"""
Matriz básica de riesgos para XYZ Corp
Curso: Gestión de la Seguridad de la Información
Semana 7: Identificación y evaluación de riesgos en un SGSI

Este script usa únicamente librerías estándar de Python.
Puede ejecutarse en Google Colab, Jupyter Notebook, VS Code o consola.
"""

from dataclasses import dataclass, asdict
from pathlib import Path
import csv


@dataclass
class Riesgo:
    id: str
    activo: str
    amenaza: str
    vulnerabilidad: str
    consecuencia: str
    probabilidad: int
    impacto: int
    control_sugerido: str
    efectividad_control: float

    def riesgo_inherente(self) -> int:
        """Calcula el riesgo antes de aplicar controles."""
        return self.probabilidad * self.impacto

    def riesgo_residual(self) -> float:
        """
        Calcula una estimación simple del riesgo residual.
        efectividad_control debe estar entre 0.0 y 1.0.
        """
        residual = self.riesgo_inherente() * (1 - self.efectividad_control)
        return round(residual, 2)

    def nivel(self, valor: float) -> str:
        """Clasifica el nivel de riesgo según umbrales didácticos."""
        if valor <= 4:
            return "Bajo"
        if valor <= 9:
            return "Medio"
        if valor <= 14:
            return "Alto"
        return "Crítico"

    def tratamiento(self) -> str:
        """Sugiere una opción de tratamiento según el riesgo residual."""
        residual = self.riesgo_residual()
        if residual <= 4:
            return "Aceptar con monitoreo"
        if residual <= 9:
            return "Mitigar y revisar periódicamente"
        if residual <= 14:
            return "Mitigar con prioridad y asignar responsable"
        return "Acción inmediata, escalamiento directivo y plan formal"


riesgos = [
    Riesgo(
        id="R-01",
        activo="Repositorios de código fuente",
        amenaza="Phishing dirigido a desarrolladores",
        vulnerabilidad="Contraseñas reutilizadas y MFA incompleta",
        consecuencia="Exposición de propiedad intelectual y acceso no autorizado",
        probabilidad=4,
        impacto=5,
        control_sugerido="MFA obligatorio, gestor de contraseñas y capacitación anti-phishing",
        efectividad_control=0.55,
    ),
    Riesgo(
        id="R-02",
        activo="Aplicaciones empresariales desarrolladas por XYZ Corp",
        amenaza="Explotación de vulnerabilidades en dependencias",
        vulnerabilidad="Gestión débil de parches y revisión limitada de dependencias",
        consecuencia="Compromiso de clientes, interrupción de servicios y daño reputacional",
        probabilidad=4,
        impacto=4,
        control_sugerido="SCA, revisión de dependencias, pipeline DevSecOps y pruebas de seguridad",
        efectividad_control=0.50,
    ),
    Riesgo(
        id="R-03",
        activo="Datos de clientes almacenados en servicios cloud",
        amenaza="Acceso no autorizado o exposición pública accidental",
        vulnerabilidad="Configuraciones incorrectas de permisos en almacenamiento",
        consecuencia="Fuga de información, sanciones contractuales y pérdida de confianza",
        probabilidad=3,
        impacto=5,
        control_sugerido="Revisión de configuración cloud, mínimo privilegio y monitoreo continuo",
        efectividad_control=0.60,
    ),
    Riesgo(
        id="R-04",
        activo="Servicios críticos de operación global",
        amenaza="Ransomware o malware en equipos remotos",
        vulnerabilidad="Backups no probados y endpoints con controles heterogéneos",
        consecuencia="Indisponibilidad de servicios y retrasos en entregas internacionales",
        probabilidad=3,
        impacto=5,
        control_sugerido="EDR, copias de respaldo verificadas, segmentación y plan de recuperación",
        efectividad_control=0.50,
    ),
    Riesgo(
        id="R-05",
        activo="Relaciones con proveedores SaaS y tecnológicos",
        amenaza="Incidente de seguridad en tercero crítico",
        vulnerabilidad="Evaluación insuficiente de proveedores y contratos sin requisitos claros",
        consecuencia="Interrupción operativa, exposición de datos y responsabilidades legales",
        probabilidad=3,
        impacto=4,
        control_sugerido="Evaluación de terceros, cláusulas de seguridad y seguimiento de SLA",
        efectividad_control=0.45,
    ),
]


def validar_riesgo(riesgo: Riesgo) -> None:
    """Valida rangos básicos de probabilidad, impacto y efectividad."""
    if not 1 <= riesgo.probabilidad <= 5:
        raise ValueError(f"{riesgo.id}: la probabilidad debe estar entre 1 y 5.")
    if not 1 <= riesgo.impacto <= 5:
        raise ValueError(f"{riesgo.id}: el impacto debe estar entre 1 y 5.")
    if not 0 <= riesgo.efectividad_control <= 1:
        raise ValueError(f"{riesgo.id}: la efectividad debe estar entre 0.0 y 1.0.")


def construir_registro(lista_riesgos):
    """Construye una lista de diccionarios ordenada por riesgo residual."""
    registro = []

    for riesgo in lista_riesgos:
        validar_riesgo(riesgo)

        fila = asdict(riesgo)
        fila["riesgo_inherente"] = riesgo.riesgo_inherente()
        fila["nivel_inherente"] = riesgo.nivel(riesgo.riesgo_inherente())
        fila["riesgo_residual"] = riesgo.riesgo_residual()
        fila["nivel_residual"] = riesgo.nivel(riesgo.riesgo_residual())
        fila["tratamiento_sugerido"] = riesgo.tratamiento()

        registro.append(fila)

    return sorted(registro, key=lambda item: item["riesgo_residual"], reverse=True)


def imprimir_registro(registro):
    """Imprime un resumen legible en consola."""
    print("\nMATRIZ BÁSICA DE RIESGOS - XYZ CORP")
    print("=" * 80)

    for fila in registro:
        print(f"\nID: {fila['id']}")
        print(f"Activo: {fila['activo']}")
        print(f"Amenaza: {fila['amenaza']}")
        print(f"Vulnerabilidad: {fila['vulnerabilidad']}")
        print(f"Consecuencia: {fila['consecuencia']}")
        print(f"Probabilidad: {fila['probabilidad']} | Impacto: {fila['impacto']}")
        print(
            f"Riesgo inherente: {fila['riesgo_inherente']} "
            f"({fila['nivel_inherente']})"
        )
        print(
            f"Riesgo residual: {fila['riesgo_residual']} "
            f"({fila['nivel_residual']})"
        )
        print(f"Control sugerido: {fila['control_sugerido']}")
        print(f"Tratamiento: {fila['tratamiento_sugerido']}")
        print("-" * 80)


def exportar_csv(registro, nombre_archivo="matriz_riesgos_xyz_corp.csv"):
    """Exporta el registro de riesgos a un archivo CSV."""
    ruta = Path(nombre_archivo)

    campos = [
        "id",
        "activo",
        "amenaza",
        "vulnerabilidad",
        "consecuencia",
        "probabilidad",
        "impacto",
        "riesgo_inherente",
        "nivel_inherente",
        "control_sugerido",
        "efectividad_control",
        "riesgo_residual",
        "nivel_residual",
        "tratamiento_sugerido",
    ]

    with ruta.open("w", newline="", encoding="utf-8") as archivo:
        escritor = csv.DictWriter(archivo, fieldnames=campos)
        escritor.writeheader()
        for fila in registro:
            escritor.writerow({campo: fila[campo] for campo in campos})

    return ruta


if __name__ == "__main__":
    registro_ordenado = construir_registro(riesgos)
    imprimir_registro(registro_ordenado)

    archivo_generado = exportar_csv(registro_ordenado)
    print(f"\nArchivo generado: {archivo_generado.resolve()}")

    print("\nPreguntas para el análisis:")
    print("1. ¿Qué riesgo residual quedó más alto y por qué?")
    print("2. ¿Qué control reduce probabilidad y cuál reduce impacto?")
    print("3. ¿Qué riesgo debería comunicarse primero a la alta dirección?")
    print("4. ¿Qué valores cambiarían después de una auditoría más detallada?")
```

<!--
Notas del presentador:
Antes de ejecutar el código, explique su estructura general. Comience indicando que se usa una clase de datos llamada Riesgo para representar cada escenario. Esta clase contiene campos que corresponden a una matriz básica: identificador, activo, amenaza, vulnerabilidad, consecuencia, probabilidad, impacto, control sugerido y efectividad del control. Luego contiene métodos para calcular riesgo inherente, riesgo residual, nivel de riesgo y tratamiento sugerido. Esta organización permite que los estudiantes vean cómo un proceso de evaluación puede traducirse en una lógica computacional simple.

Explique el cálculo. El riesgo inherente se calcula multiplicando probabilidad por impacto. Si la probabilidad es 4 y el impacto es 5, el riesgo inherente será 20, que según los umbrales propuestos corresponde a crítico. Luego el riesgo residual se calcula aplicando una reducción basada en la efectividad estimada del control. Por ejemplo, si el riesgo inherente es 20 y la efectividad del control es 0.55, el residual será 9. Esta es una simplificación, pero permite visualizar la idea de que los controles reducen exposición sin eliminarla por completo.

Aclare que la efectividad del control es una estimación didáctica. En una organización real debería sustentarse con evidencias: pruebas de control, auditorías, métricas de incidentes, cobertura de MFA, resultados de simulaciones de phishing, cumplimiento de parches, pruebas de restauración de respaldos o monitoreo de proveedores. Invite a los estudiantes a modificar esos valores y observar los cambios. Si disminuyen la efectividad de un control, el riesgo residual aumentará. Si aumentan el impacto, la prioridad también cambiará.

Explique las funciones auxiliares. La función validar_riesgo evita valores fuera de rango. La función construir_registro crea una lista ordenada por riesgo residual, lo que permite priorizar. La función imprimir_registro muestra un resumen legible. La función exportar_csv genera un archivo que puede abrirse en Excel, LibreOffice Calc o Google Sheets. Aunque la presentación no usa tablas, el producto de la práctica sí puede ser un archivo estructurado para análisis.

Durante la ejecución, sugiera que los estudiantes identifiquen el primer riesgo ordenado por residual y discutan si están de acuerdo. La conversación posterior debe centrarse en la justificación: ¿por qué ese riesgo es más importante?, ¿qué control es más pertinente?, ¿quién debería aprobar el riesgo residual?, ¿cómo se conectaría con ISO/IEC 27001?
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Producto esperado

::rightTitle::
Preguntas de análisis

::left::
Al finalizar la práctica, cada equipo debe contar con:

* Una matriz básica de riesgos.
* Tres riesgos priorizados para XYZ Corp.
* Justificación de probabilidad e impacto.
* Controles de mitigación propuestos.
* Identificación del riesgo residual.
* Una recomendación para alta dirección.
* Ideas para el aporte principal, retroalimentación o conclusión del foro.

::right::
Para discutir:

* ¿El riesgo más alto es técnico, humano o de proveedor?
* ¿Qué control reduce más la probabilidad?
* ¿Qué control reduce más el impacto?
* ¿Qué riesgo residual puede aceptarse?
* ¿Qué riesgo requiere seguimiento directivo?
* ¿Qué evidencia pediría un auditor?
* ¿Qué cambiaría si XYZ Corp abre operaciones en otro país?

<!--
Notas del presentador:
Utilice esta diapositiva después de ejecutar el código. Pida a los estudiantes que observen el resultado y no se queden solo con el número final. Una matriz de riesgos es útil si permite conversar, decidir y mejorar. El producto esperado tiene siete elementos. Primero, la matriz básica, que contiene los escenarios y sus valores. Segundo, tres riesgos priorizados para XYZ Corp, alineados con la exigencia del foro. Tercero, una justificación de probabilidad e impacto, porque los números sin argumento tienen poco valor académico o profesional. Cuarto, controles de mitigación, preferiblemente relacionados con buenas prácticas de seguridad y con la lógica de ISO/IEC 27001. Quinto, riesgo residual, para demostrar que los controles no eliminan totalmente la exposición. Sexto, una recomendación para la alta dirección, porque la gestión de riesgos debe orientar decisiones. Séptimo, ideas para organizar la participación del equipo en el foro.

Desarrolle las preguntas de análisis. La primera pregunta invita a clasificar la naturaleza del riesgo. Algunos riesgos son principalmente técnicos, como vulnerabilidades en dependencias; otros son humanos, como phishing; otros son de proveedor, como servicios SaaS críticos sin evaluación. Esta clasificación ayuda a definir controles. La segunda y tercera preguntas diferencian controles que reducen probabilidad de controles que reducen impacto. MFA reduce la probabilidad de acceso no autorizado; copias de respaldo probadas reducen el impacto de ransomware. Esta distinción es clave para diseñar tratamientos adecuados.

La pregunta sobre aceptación de riesgo residual permite discutir apetito de riesgo. Un riesgo bajo podría aceptarse con monitoreo; un riesgo crítico normalmente requiere plan formal. La pregunta sobre seguimiento directivo conecta con la evaluación: la alta dirección debe conocer los riesgos principales para asignar recursos y aprobar decisiones. La pregunta sobre evidencia de auditoría ayuda a pasar de la opinión a la trazabilidad. Un auditor podría pedir políticas, registros de capacitación, reportes de pruebas, bitácoras, contratos, evidencias de MFA, resultados de escaneo o pruebas de restauración.

Finalmente, la pregunta sobre expansión internacional permite ampliar el caso. Nuevos países implican nuevas regulaciones, proveedores, idiomas, zonas horarias, prácticas laborales y requisitos de privacidad. Por tanto, la evaluación de riesgos debe ser continua y actualizarse ante cambios tecnológicos, organizacionales y del entorno de amenazas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve y resolución de dudas

::content::
Socialización:

* Cada equipo comparte un riesgo prioritario.
* Debe explicar activo, amenaza, vulnerabilidad e impacto.
* Debe mencionar el control principal.
* Debe indicar el riesgo residual esperado.

Dudas:

* Máximo 15 minutos.
* Priorizar preguntas sobre foro, conceptos clave y práctica.
* Resolver primero dudas comunes.
* Dejar preguntas específicas para acompañamiento posterior según dinámica institucional.

<!--
Notas del presentador:
Conduzca la socialización de forma breve y ordenada. Recuerde que el tiempo sugerido es de siete minutos para socialización y hasta quince minutos para dudas dentro del cierre de la sesión. Para no exceder el tiempo, pida intervenciones concretas. Una estructura útil es: “nuestro riesgo prioritario es…, el activo afectado es…, la amenaza es…, la vulnerabilidad es…, el impacto sería…, el control sugerido es…, el riesgo residual esperado sería…”. Esta estructura evita intervenciones demasiado generales y refuerza el lenguaje técnico de la semana.

Seleccione dos o tres equipos para compartir, dependiendo del tamaño del grupo. Si la clase es numerosa, puede pedir que los demás publiquen su riesgo en el chat o en una herramienta colaborativa. Mientras escuchan, invite a los estudiantes a identificar similitudes y diferencias. Por ejemplo, varios equipos pueden seleccionar phishing, pero asignar impactos diferentes. Esa diferencia no necesariamente es un error; puede deberse a supuestos distintos sobre activos, controles existentes o exposición. Lo importante es que puedan justificar.

Durante la resolución de dudas, priorice preguntas que ayuden a todos. Es probable que aparezcan dudas como: ¿cuál es la diferencia entre amenaza y vulnerabilidad?, ¿cómo se calcula riesgo residual?, ¿qué significa aceptar un riesgo?, ¿cómo se relaciona el foro con la auditoría de semana 5?, ¿qué controles se pueden proponer?, ¿cuántos riesgos se deben presentar? Responda conectando siempre con el caso XYZ Corp y con el producto esperado. Si surge una pregunta muy específica sobre una herramienta o una situación personal, puede atenderla de forma breve o indicar que se revisará por el canal institucional correspondiente.

Es importante no cerrar la clase con la sensación de que la matriz es un ejercicio puramente matemático. Recalque que la evaluación de riesgos combina criterio, evidencia, participación de partes interesadas y toma de decisiones. La matriz ayuda a ordenar la conversación, pero la calidad profesional depende de la argumentación. Invite a los estudiantes a revisar sus aportes del foro antes de publicarlos, verificando que incluyan riesgo, amenaza, vulnerabilidad, impacto, priorización, mitigación y relación con ISO/IEC 27001.
-->

---
layout: slide-12-cierre
---

::title::
Cierre académico e institucional

::content::
La identificación y evaluación de riesgos permite que el SGSI sea preventivo, trazable y alineado con la organización.

Para el foro de la semana:

* Identifique al menos tres riesgos de XYZ Corp.
* Justifique amenazas y vulnerabilidades.
* Valore probabilidad e impacto.
* Priorice los riesgos.
* Proponga controles y mitigación.
* Explique el riesgo residual.
* Participe según el rol acordado por el equipo.

Recuerde diligenciar la Encuesta de Percepción Estudiantil.

Gracias por su participación.

<!--
Notas del presentador:
Cierre la sesión recuperando las ideas principales. Primero, la gestión de riesgos es el corazón práctico de un SGSI, porque permite tomar decisiones basadas en evidencia y no únicamente en intuición. Segundo, la identificación de riesgos debe formular escenarios completos: activo, amenaza, vulnerabilidad y consecuencia. Tercero, la evaluación combina probabilidad e impacto para priorizar. Cuarto, los controles reducen probabilidad o impacto, pero normalmente dejan un riesgo residual que debe ser conocido, aprobado y monitoreado. Quinto, la comunicación a la alta dirección es esencial porque sin recursos, responsables y seguimiento, la matriz se convierte en un documento sin efecto.

Relacione el cierre con XYZ Corp. Recuerde que la empresa del caso tiene características que aumentan la complejidad: operación internacional, crecimiento acelerado, desarrollo de software empresarial, múltiples oficinas y expansión a nuevos mercados. Por tanto, los riesgos deben analizarse desde una perspectiva técnica y organizacional. Un buen aporte al foro no será el que enumere controles de manera genérica, sino el que argumente por qué un riesgo es prioritario y cómo los controles propuestos responden a amenazas y vulnerabilidades específicas.

Insista en la dinámica del foro por equipos. El integrante que realice la participación principal puede usar una estructura clara: breve contexto, tres riesgos, valoración, priorización y controles. Los integrantes que retroalimenten deben aportar valor, no repetir. Pueden cuestionar criterios, sugerir controles adicionales, mejorar la formulación de riesgos o identificar evidencias necesarias. El integrante que cierre puede sintetizar acuerdos, destacar aprendizajes y proponer recomendaciones a la alta dirección. Todos deben participar para ser evaluados.

Finalmente, recuerde la Encuesta de Percepción Estudiantil como un mecanismo institucional de mejora. Explique que la retroalimentación permite fortalecer el curso, la metodología, los recursos, la interacción y el acompañamiento. Agradezca la participación y anime a los estudiantes a aplicar la matriz como herramienta de pensamiento, no solamente como requisito. El aprendizaje esperado es que puedan mirar una organización, reconocer riesgos relevantes y proponer decisiones de seguridad razonables, priorizadas y sostenibles.
-->

<!--
PROMPTS DE IMÁGENES DE APOYO
Material aparte de la presentación. No proyectar como diapositiva.

Imagen 1 · Riesgo gestionado en un SGSI
Ilustración académica universitaria sobre un Sistema de Gestión de Seguridad de la Información basado en riesgos. Mostrar una organización moderna con activos digitales, documentos, servidores, usuarios, nube, candados, escudos, alertas y una matriz visual abstracta de probabilidad e impacto. Debe comunicar identificación, evaluación, priorización y tratamiento de riesgos. Estilo profesional, limpio, didáctico, tecnológico, con paleta azul, blanco, gris y acentos naranja. Sin texto legible, sin logotipos, sin marcas de agua, formato horizontal 16:9.

Imagen 2 · Activos, amenazas y vulnerabilidades
Ilustración conceptual sobre la relación entre activos de información, amenazas y vulnerabilidades. Mostrar un repositorio de código, base de datos, usuarios remotos y servicios cloud protegidos parcialmente, con amenazas externas abstractas y puntos débiles señalados mediante líneas o nodos visuales sin texto. Debe comunicar que el riesgo surge cuando una amenaza puede explotar una vulnerabilidad sobre un activo valioso. Estilo infográfico académico, moderno y claro. Sin texto legible, sin marcas, formato horizontal 16:9.

Imagen 3 · Matriz de probabilidad e impacto
Ilustración educativa de una matriz de riesgos abstracta, sin números ni texto legible, con zonas visuales de bajo, medio, alto y crítico representadas por intensidad progresiva. Incluir iconos genéricos de seguridad, alerta, decisión directiva y controles. Debe transmitir priorización de riesgos y toma de decisiones en un SGSI. Estilo universitario, limpio, profesional, fondo claro, acentos azules y naranjas. Sin logotipos ni marcas de agua, formato horizontal 16:9.

Imagen 4 · Riesgo residual y controles
Ilustración técnica sobre riesgo inherente, controles de seguridad y riesgo residual. Mostrar un flujo visual con una amenaza acercándose a un activo digital, controles como MFA, backup, monitoreo y capacitación reduciendo la exposición, y una alerta residual pequeña que permanece bajo seguimiento. Sin texto legible. Estilo claro, académico, moderno, con sensación de proceso y mejora continua. Formato horizontal 16:9, sin marcas ni logotipos.

Imagen 5 · Caso XYZ Corp global
Ilustración académica sobre una empresa global de software con oficinas conectadas en América, Europa y Asia, equipos remotos, repositorios de código, servicios cloud, proveedores SaaS y panel de gestión de riesgos. Debe comunicar crecimiento internacional, seguridad de la información y necesidad de priorizar riesgos. Estilo profesional, tecnológico, limpio, con mapa mundial abstracto sin nombres legibles. Paleta azul oscuro, blanco, violeta y detalles naranja. Sin texto legible, sin marcas de agua, formato horizontal 16:9.

Imagen 6 · Práctica Python de matriz de riesgos
Ilustración educativa sobre análisis de riesgos con Python. Mostrar una pantalla de código abstracto, una matriz de riesgos visual, nodos de activos, amenazas, vulnerabilidades y controles, con estudiantes universitarios analizando resultados en un entorno académico. Sin texto legible ni código real. Estilo moderno, claro, universitario, tecnológico, fondo claro, acentos azules y verdes. Formato horizontal 16:9, sin logotipos ni marcas.
-->
