---
layout: slide-01-portada
---

::title::
Gestión de la Seguridad de la Información

::week::
Semana 5

::date::
Junio 04 de 2026

<!--
Notas del presentador:
Dar la bienvenida a los estudiantes y ubicar la sesión como un momento clave del curso: pasar de diseñar el SGSI a verificar si realmente funciona. Enfatizar que una auditoría no debe entenderse como una persecución o revisión punitiva, sino como una herramienta sistemática para evidenciar cumplimiento, identificar brechas, fortalecer controles y preparar a la organización para la certificación. Recordar que la sesión tendrá un componente conceptual, una actividad breve de integración, revisión de la evaluación y una práctica guiada en Python para priorizar hallazgos de auditoría.
-->

---
layout: slide-02-titulo
---

::title::
Auditorías internas y externas

<!--
Notas del presentador:
Abrir con una idea central: en seguridad de la información no basta con tener políticas, controles o documentos; la organización debe demostrar que el sistema está implementado, es eficaz y mejora con evidencia. Conectar con ISO/IEC 27001:2022, que reconoce la auditoría interna como parte de la evaluación del desempeño del sistema de gestión. La auditoría externa, por su parte, permite que un organismo independiente valore la conformidad y la madurez del SGSI frente a requisitos de certificación.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Una organización afirma:

::image:: 
<img src="/imagenes/gestionseguridad_s5_01_auditoria_sgsi.png" alt="Imagen de apoyo sobre auditoría de seguridad de la información" />

::content::
“Tenemos políticas, matriz de riesgos, controles de acceso, plan de continuidad y procedimiento de incidentes”.

**Pregunta:**

¿Qué pediríamos como evidencia para comprobar que esos elementos realmente funcionan?

<!--
Notas del presentador:
Invitar a los estudiantes a responder de forma rápida, sin buscar definiciones perfectas. Orientar las respuestas hacia evidencias concretas: registros de accesos, actas de revisión, resultados de pruebas, bitácoras de incidentes, aprobaciones formales, indicadores, reportes de capacitación, pruebas de restauración, tickets cerrados y documentos controlados. Usar esta pregunta para diferenciar declaración, documento, evidencia y eficacia.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave:

::content::
**Auditoría:** proceso sistemático para obtener y evaluar evidencias frente a criterios definidos.

**Criterios de auditoría:** requisitos contra los cuales se compara el SGSI: norma, políticas, procedimientos, controles, requisitos legales o contractuales.

**Evidencia:** información verificable que permite sustentar una conclusión.

**Hallazgo:** resultado de comparar evidencia contra criterios.

**No conformidad:** incumplimiento de un requisito.

**Acción correctiva:** acción para eliminar la causa de una no conformidad y evitar su repetición.

<!--
Notas del presentador:
Detenerse en la diferencia entre hallazgo y no conformidad. Todo hallazgo no necesariamente implica incumplimiento; puede ser conformidad, oportunidad de mejora u observación. Una no conformidad sí exige tratamiento. Explicar que las auditorías internas deben producir información útil para la toma de decisiones y no únicamente un informe documental. Las guías de auditoría de sistemas de gestión, como ISO 19011, incluyen principios, gestión de programas de auditoría y competencia de auditores. :contentReference[oaicite:1]{index=1}
-->

---
layout: slide-04-imagen-derecha
---

::title::
Auditoría interna en ISO/IEC 27001

::image:: 
<img src="/imagenes/gestionseguridad_s5_02_auditoria_interna_iso27001.png" alt="Imagen de apoyo sobre auditoría interna del SGSI" />

::content::
La auditoría interna verifica si el SGSI:

* Cumple los requisitos de la organización.
* Cumple los requisitos de ISO/IEC 27001.
* Está implementado y mantenido eficazmente.
* Genera información para la mejora continua.
* Produce evidencias para la alta dirección.

No es una revisión improvisada: requiere programa, alcance, criterios, método, auditores competentes e imparciales.

<!--
Notas del presentador:
Explicar que la cláusula 9.2 de ISO/IEC 27001:2022 exige un programa estructurado de auditoría interna para evaluar periódicamente la eficacia del SGSI, con énfasis en imparcialidad, evidencia documentada y acciones correctivas oportunas. Resaltar que la auditoría interna no debe limitarse al área de TI; también puede revisar gestión documental, talento humano, compras, proveedores, continuidad, respuesta a incidentes, cumplimiento legal y cultura organizacional. Fuente: descripción de cláusula 9.2 en ISMS.online. :contentReference[oaicite:2]{index=2}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Auditoría interna vs auditoría externa

::left::
**Auditoría interna**

* Realizada por la organización o por terceros en su nombre.
* Busca verificar el SGSI antes de una revisión externa.
* Permite detectar brechas y oportunidades de mejora.
* Alimenta acciones correctivas y revisión por la dirección.

::right::
**Auditoría externa**

* Realizada por un organismo independiente.
* Evalúa conformidad con fines de certificación, vigilancia o recertificación.
* Revisa documentación, entrevistas, controles y evidencias.
* Aporta credibilidad frente a clientes, aliados y partes interesadas.

<!--
Notas del presentador:
Aclarar que ambas auditorías tienen valor, pero cumplen funciones distintas. La interna prepara, ajusta y mejora. La externa valida de manera independiente. Si una organización llega a la auditoría externa sin auditorías internas sólidas, probablemente tendrá dificultades para demostrar madurez del SGSI. ISO 19011 clasifica auditorías de primera parte, segunda parte y tercera parte; estas categorías ayudan a diferenciar auditoría interna, auditoría a proveedores y auditoría de certificación. :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
El programa de auditoría

::image:: 
<img src="/imagenes/gestionseguridad_s5_03_programa_auditoria.png" alt="Imagen de apoyo sobre programa de auditoría" />

::content::
Un programa de auditoría define cómo se revisará el SGSI durante un periodo determinado.

Debe considerar:

* Importancia de los procesos.
* Cambios recientes en el SGSI.
* Resultados de auditorías anteriores.
* Riesgos de seguridad de la información.
* Disponibilidad de auditores competentes.
* Alcance, criterios, frecuencia y métodos.

<!--
Notas del presentador:
Conectar esta diapositiva con la pregunta 2 y la pregunta 10 de la evaluación. La frecuencia no debe definirse por costumbre ni solo por calendario; debe responder al estado del sistema, los cambios relevantes, la criticidad de procesos y los resultados previos. Dar ejemplos: si hubo incidentes recientes, cambios de plataforma, tercerización de servicios o nuevas obligaciones legales, puede ser necesario ajustar el programa de auditoría.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Independencia y competencia del auditor

::image:: 
<img src="/imagenes/gestionseguridad_s5_04_independencia_auditor.png" alt="Imagen de apoyo sobre independencia del auditor" />

::content::
Un auditor interno debe contar con:

* Conocimiento del SGSI y de la norma.
* Capacidad para revisar evidencias.
* Habilidad para entrevistar y comunicar hallazgos.
* Criterio para distinguir incumplimiento, riesgo y mejora.
* Independencia respecto al área auditada.
* Imparcialidad para evitar sesgos.

La regla práctica es clara: **nadie debe auditar su propio trabajo**.

<!--
Notas del presentador:
Relacionar esta diapositiva con la pregunta 3 de la evaluación. Explicar que conocer el proceso no es suficiente si existe conflicto de interés. Por ejemplo, el responsable de configurar accesos no debería auditar su propia gestión de accesos. Puede participar como auditado, pero no como auditor independiente del proceso. La competencia técnica y la independencia protegen la credibilidad de las conclusiones.
-->

---
layout: slide-08-titulo-texto
---

::title::
Evidencias típicas en una auditoría SGSI

::content::
Ejemplos de evidencias que pueden solicitarse:

* Alcance documentado del SGSI.
* Política de seguridad aprobada y comunicada.
* Matriz de riesgos y plan de tratamiento.
* Declaración de aplicabilidad.
* Registros de capacitación.
* Bitácoras de acceso y cambios.
* Reportes de incidentes.
* Resultados de pruebas de continuidad.
* Actas de revisión por la dirección.
* Seguimiento de acciones correctivas.

<!--
Notas del presentador:
Aclarar que la evidencia debe ser suficiente, pertinente y actual. No basta con que un documento exista; debe estar controlado, vigente, aprobado y utilizado. Una política sin comunicación, una matriz de riesgos desactualizada o una acción correctiva sin cierre verificable pueden convertirse en hallazgos. Relacionar esto con la documentación exigida en la evaluación: planes, informes y evidencias de auditoría.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Criterios y alcance: dos decisiones críticas

::left::
**Alcance**

Define qué se audita:

* Procesos.
* Sedes.
* Sistemas.
* Áreas.
* Activos.
* Proveedores.
* Periodo de revisión.

::right::
**Criterios**

Define contra qué se audita:

* ISO/IEC 27001.
* Políticas internas.
* Procedimientos.
* Requisitos legales.
* Contratos.
* Controles del Anexo A.
* Objetivos de seguridad.

<!--
Notas del presentador:
Explicar que una auditoría sin alcance claro puede volverse superficial o interminable. Un alcance mal definido puede dejar por fuera procesos críticos. Un criterio mal definido puede producir hallazgos poco defendibles. Dar un ejemplo: si el alcance es “gestión de accesos del LMS institucional durante 2026-01”, los criterios pueden incluir política de control de acceso, procedimiento de altas y bajas, registros de usuarios, segregación de funciones y requisitos de ISO/IEC 27001.
-->

---
layout: slide-08-titulo-texto
---

::title::
Del hallazgo a la mejora continua

::content::
Una auditoría aporta valor cuando sus resultados se transforman en decisiones.

Secuencia recomendada:

1. Identificar evidencia.
2. Comparar con criterios.
3. Formular hallazgo.
4. Clasificar severidad.
5. Definir causa.
6. Proponer acción correctiva.
7. Asignar responsable y fecha.
8. Verificar cierre y eficacia.

La mejora continua exige seguimiento, no solo informe.

<!--
Notas del presentador:
Conectar esta diapositiva con la pregunta 5 y la pregunta 8 de la evaluación. Explicar que documentar hallazgos y recomendaciones permite rastrear acciones correctivas y evaluar si fueron eficaces. La norma ISO/IEC 27001:2022 se articula con mejora continua y tratamiento de no conformidades; por ello, una auditoría sin seguimiento pierde valor. Fuente complementaria: la cláusula 10.2 se relaciona con identificación, investigación y resolución de no conformidades. :contentReference[oaicite:4]{index=4}
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Ejemplo aplicado · Gestión de accesos

::image:: 
<img src="/imagenes/gestionseguridad_s5_05_auditoria_accesos.png" alt="Imagen de apoyo sobre auditoría de accesos" />

::content::
Caso:

Una universidad usa una plataforma académica. El procedimiento indica que los usuarios retirados deben desactivarse en máximo 48 horas.

Evidencia revisada:

* Lista de usuarios activos.
* Registro de retiros de talento humano.
* Bitácora de desactivaciones.
* Solicitudes de mesa de ayuda.

Hallazgo posible:

Usuarios retirados permanecen activos más de 15 días después de la novedad.

<!--
Notas del presentador:
Guiar a los estudiantes para que identifiquen el criterio, la evidencia y el hallazgo. Criterio: procedimiento interno de desactivación en 48 horas. Evidencia: registros de usuarios, retiros y tickets. Hallazgo: incumplimiento del tiempo definido. Posible no conformidad: el control no se ejecuta como fue establecido. Acción correctiva: analizar causa, ajustar integración entre talento humano y mesa de ayuda, definir responsable, implementar alertas y verificar una muestra posterior.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Ejemplo aplicado · Copias de seguridad

::image:: 
<img src="/imagenes/gestionseguridad_s5_06_auditoria_respaldos.png" alt="Imagen de apoyo sobre auditoría de copias de seguridad" />

::content::
Caso:

La política indica respaldo diario y prueba de restauración mensual para información crítica.

Evidencia revisada:

* Reporte automático de respaldos.
* Registro de errores.
* Acta de prueba de restauración.
* Inventario de sistemas críticos.

Hallazgo posible:

Se ejecutan respaldos diarios, pero no existe evidencia de pruebas de restauración durante los últimos tres meses.

<!--
Notas del presentador:
Subrayar que un respaldo no probado no garantiza recuperación. La auditoría no solo pregunta si el control existe, sino si funciona. Un auditor puede encontrar que el respaldo se ejecuta, pero el criterio exige además probar restauración. La acción de mejora puede incluir calendario de pruebas, responsables, formato de evidencia, criterios de éxito y registro de lecciones aprendidas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Relación con la evaluación de la semana

::content::
La evaluación se centra en diez núcleos:

* Propósito de la auditoría interna.
* Frecuencia basada en hallazgos, cambios e importancia de procesos.
* Competencia e independencia de auditores internos.
* Selección objetiva de auditores externos.
* Seguimiento de acciones correctivas.
* Componentes de auditoría externa.
* Documentación de planes, informes y evidencias.
* Registro de hallazgos y recomendaciones.
* Planificación con alcance, criterios y métodos.
* Programación periódica y revisión sistemática del SGSI.

<!--
Notas del presentador:
Explicar que las preguntas no buscan memorización literal, sino reconocer el propósito real de la auditoría dentro del SGSI. Advertir sobre distractores frecuentes: reducir la auditoría a activos tecnológicos, desempeño individual de empleados o definición de políticas sin diagnóstico. La respuesta correcta suele estar relacionada con eficacia del SGSI, conformidad con la norma, evidencias, independencia, seguimiento y mejora continua.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Lectura estratégica de las opciones de respuesta

::left::
**Opciones generalmente correctas**

* Evalúan la eficacia del SGSI.
* Mencionan conformidad con la norma.
* Incluyen evidencias y controles.
* Hablan de independencia.
* Incorporan seguimiento y acciones correctivas.
* Consideran procesos, áreas y hallazgos previos.

::right::
**Distractores frecuentes**

* “Únicamente activos tecnológicos”.
* “Solo desempeño de empleados”.
* “Definir nuevas políticas sin evaluación”.
* “Sin documentación”.
* “Sin seguimiento”.
* “Auditar el propio trabajo”.

<!--
Notas del presentador:
Dar una orientación metacognitiva para responder la evaluación. Pedir que los estudiantes identifiquen verbos clave: evaluar, verificar, documentar, monitorear, implementar, corregir, comunicar. También deben detectar palabras restrictivas como “únicamente”, “exclusivamente” o “sin necesidad”, porque suelen convertir una respuesta en incompleta o equivocada en gestión de seguridad.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Auditoría interna ISO 27001:2022

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/qQpT28sJ1Mg?si=-69fiZ2yc4NVWG7F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Video sugerido: “Auditoria Interna ISO 27001:2022”. Enlace verificado: https://www.youtube.com/watch?v=lN8-CC3-aT0. Propósito pedagógico: reforzar el concepto de auditoría interna, plantillas y revisión práctica del SGSI. Momento recomendado: después de explicar programa de auditoría y antes de la relación con evaluación. Duración aproximada: verificar en YouTube antes de clase. Canal: verificar en YouTube antes de publicar. Justificación académica: útil para aterrizar la cláusula 9.2 en actividades concretas. Advertencia: se recomienda seleccionar un fragmento de máximo 6 a 8 minutos para no afectar la práctica.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Preparación de auditoría ISO 27001

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/SATi2IrDPXw?si=mIKIeMLs7cu9VKRb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Video sugerido: “Preparación de Auditoría ISO 27001”. Enlace verificado: https://www.youtube.com/watch?v=KAY_NlEG1sY. Propósito pedagógico: mostrar cómo una organización se prepara para una auditoría de certificación o seguimiento. Momento recomendado: como refuerzo entre auditoría interna y externa. Duración aproximada: verificar en YouTube antes de clase. Canal o institución: verificar en YouTube antes de publicar. Justificación académica: permite conectar documentación, evidencias, entrevistas y revisión de controles. Advertencia: contextualizar que cada organización adapta la preparación según alcance, riesgos y madurez del SGSI.
-->

---
layout: slide-02-titulo
---

::title::
Práctica guiada · Priorización de hallazgos de auditoría SGSI

<!--
Notas del presentador:
Introducir la práctica como una simulación sencilla. El objetivo no es automatizar una auditoría completa ni reemplazar el juicio profesional, sino apoyar la priorización de hallazgos para orientar acciones correctivas. Explicar que los estudiantes usarán Python en una plataforma gratuita, preferiblemente Google Colab, sin instalar librerías externas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Propósito de la práctica

::content::
Construir un pequeño analizador en Python que permita:

* Registrar hallazgos simulados de auditoría SGSI.
* Calcular un puntaje de prioridad.
* Clasificar hallazgos como críticos, altos, medios o bajos.
* Proponer una acción correctiva inicial.
* Generar un resumen útil para la alta dirección.

Producto esperado:

**Listado priorizado de hallazgos con responsable, fecha sugerida y acción de mejora.**

<!--
Notas del presentador:
Explicar que la priorización es clave porque una auditoría puede producir múltiples hallazgos y la organización necesita decidir por dónde empezar. En seguridad de la información, no todos los hallazgos tienen el mismo impacto. Un retraso en pruebas de restauración de información crítica puede tener mayor prioridad que un formato documental menor, aunque ambos deban gestionarse.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes necesarios y conexiones sugeridas

::left::
**Componentes necesarios**

* Navegador web.
* Cuenta de Google o acceso a Google Colab.
* Conexión a internet.
* Conocimientos básicos de listas, diccionarios y funciones en Python.
* Casos simulados de hallazgos de auditoría.

::right::
**Conexiones sugeridas del flujo SGSI**

* Hallazgo → criterio incumplido.
* Hallazgo → riesgo asociado.
* Riesgo → severidad y probabilidad.
* Prioridad → acción correctiva.
* Acción → responsable y fecha.
* Cierre → verificación de eficacia.

<!--
Notas del presentador:
Aclarar que “conexiones sugeridas” no se refiere a conexiones físicas, sino a conexiones lógicas entre elementos del SGSI. Esta práctica sirve para que el estudiante visualice cómo una auditoría se convierte en un plan de acción. También puede adaptarse a Excel, pero Python permite automatizar la clasificación y generar reportes de manera sencilla.
-->

---
layout: slide-08-titulo-texto
---

::title::
Plataforma gratuita para probar

::content::
Opción sugerida: **Google Colab**

Pasos:

1. Ingresar a [https://colab.research.google.com](https://colab.research.google.com)
2. Crear un nuevo cuaderno.
3. Copiar el código completo de la siguiente diapositiva.
4. Ejecutar la celda.
5. Revisar el listado priorizado de hallazgos.
6. Modificar un hallazgo o agregar uno nuevo.
7. Ejecutar nuevamente y comparar resultados.

No se requieren librerías externas.

<!--
Notas del presentador:
Guiar a los estudiantes paso a paso. Si algún estudiante no puede ingresar a Colab, puede usar Python instalado localmente o un editor en línea como Replit, siempre que permita ejecutar Python estándar. Recordar que la práctica no requiere archivos externos ni instalación de paquetes. Dar dos minutos para que todos abran la plataforma antes de mostrar el código.
-->

---
layout: slide-codigo
---

::title::
Código completo en Python

::content::

```python {lines:true}
# Simulador de priorización de hallazgos de auditoría SGSI
# Curso: Gestión de la Seguridad de la Información
# Semana 5: Auditorías internas y externas ISO/IEC 27001
# No requiere librerías externas.

from datetime import date, timedelta

def clasificar_prioridad(puntaje):
    """Clasifica el hallazgo según su puntaje total."""
    if puntaje >= 18:
        return "Crítico"
    elif puntaje >= 13:
        return "Alto"
    elif puntaje >= 8:
        return "Medio"
    return "Bajo"

def fecha_compromiso(prioridad):
    """Asigna una fecha sugerida de cierre según prioridad."""
    hoy = date.today()
    dias = {
        "Crítico": 7,
        "Alto": 15,
        "Medio": 30,
        "Bajo": 45
    }
    return hoy + timedelta(days=dias[prioridad])

def sugerir_accion(hallazgo):
    """Propone una acción correctiva inicial según el tipo de hallazgo."""
    categoria = hallazgo["categoria"].lower()

    if "acceso" in categoria:
        return "Revisar usuarios activos, formalizar bajas y automatizar alertas de acceso."
    if "respaldo" in categoria or "continuidad" in categoria:
        return "Programar prueba de restauración, documentar resultados y corregir fallas."
    if "incidente" in categoria:
        return "Actualizar procedimiento, socializar roles y ejecutar simulacro controlado."
    if "proveedor" in categoria:
        return "Revisar cláusulas contractuales, evidencias del proveedor y acuerdos de seguridad."
    if "capacitación" in categoria:
        return "Ejecutar plan de formación, evaluar comprensión y conservar registros."
    return "Analizar causa raíz, definir responsable, implementar corrección y verificar eficacia."

def calcular_puntaje(hallazgo):
    """
    Puntaje simple:
    impacto: 1 a 5
    probabilidad: 1 a 5
    evidencia: 1 a 5, donde 5 indica evidencia muy débil o inexistente
    exposición: 1 a 5, según alcance del problema
    """
    return (
        hallazgo["impacto"] +
        hallazgo["probabilidad"] +
        hallazgo["debilidad_evidencia"] +
        hallazgo["exposicion"]
    )

def imprimir_reporte(hallazgos):
    """Imprime un reporte priorizado para revisión académica."""
    reporte = []

    for h in hallazgos:
        puntaje = calcular_puntaje(h)
        prioridad = clasificar_prioridad(puntaje)
        accion = sugerir_accion(h)
        cierre = fecha_compromiso(prioridad)

        reporte.append({
            "codigo": h["codigo"],
            "categoria": h["categoria"],
            "descripcion": h["descripcion"],
            "criterio": h["criterio"],
            "puntaje": puntaje,
            "prioridad": prioridad,
            "responsable": h["responsable"],
            "fecha_sugerida": cierre.isoformat(),
            "accion": accion
        })

    reporte_ordenado = sorted(
        reporte,
        key=lambda item: item["puntaje"],
        reverse=True
    )

    print("REPORTE PRIORIZADO DE HALLAZGOS SGSI")
    print("=" * 60)

    for item in reporte_ordenado:
        print(f"\nHallazgo: {item['codigo']} | Prioridad: {item['prioridad']} | Puntaje: {item['puntaje']}")
        print(f"Categoría: {item['categoria']}")
        print(f"Descripción: {item['descripcion']}")
        print(f"Criterio auditado: {item['criterio']}")
        print(f"Responsable sugerido: {item['responsable']}")
        print(f"Fecha sugerida de cierre: {item['fecha_sugerida']}")
        print(f"Acción correctiva inicial: {item['accion']}")

    criticos = [item for item in reporte_ordenado if item["prioridad"] == "Crítico"]
    altos = [item for item in reporte_ordenado if item["prioridad"] == "Alto"]

    print("\nRESUMEN PARA ALTA DIRECCIÓN")
    print("=" * 60)
    print(f"Total de hallazgos revisados: {len(reporte_ordenado)}")
    print(f"Hallazgos críticos: {len(criticos)}")
    print(f"Hallazgos altos: {len(altos)}")

    if criticos:
        print("Recomendación: atender hallazgos críticos antes de continuar con auditoría externa.")
    elif altos:
        print("Recomendación: cerrar hallazgos altos y verificar eficacia antes de certificación.")
    else:
        print("Recomendación: mantener seguimiento y documentar mejora continua.")

# Datos simulados de auditoría
hallazgos_sgsi = [
    {
        "codigo": "AI-001",
        "categoria": "Control de acceso",
        "descripcion": "Usuarios retirados permanecen activos más de 15 días.",
        "criterio": "Procedimiento de bajas de usuario máximo 48 horas.",
        "impacto": 5,
        "probabilidad": 4,
        "debilidad_evidencia": 4,
        "exposicion": 5,
        "responsable": "Coordinación de TI"
    },
    {
        "codigo": "AI-002",
        "categoria": "Respaldo y continuidad",
        "descripcion": "No hay evidencia de pruebas de restauración en los últimos tres meses.",
        "criterio": "Política de respaldo y prueba mensual de restauración.",
        "impacto": 5,
        "probabilidad": 3,
        "debilidad_evidencia": 5,
        "exposicion": 4,
        "responsable": "Administrador de infraestructura"
    },
    {
        "codigo": "AI-003",
        "categoria": "Capacitación",
        "descripcion": "La política fue comunicada, pero no existe evaluación de comprensión.",
        "criterio": "Plan anual de concienciación en seguridad de la información.",
        "impacto": 3,
        "probabilidad": 3,
        "debilidad_evidencia": 3,
        "exposicion": 4,
        "responsable": "Talento humano"
    },
    {
        "codigo": "AI-004",
        "categoria": "Gestión de incidentes",
        "descripcion": "El procedimiento de incidentes no define tiempos de escalamiento.",
        "criterio": "Procedimiento de gestión de incidentes aprobado.",
        "impacto": 4,
        "probabilidad": 4,
        "debilidad_evidencia": 3,
        "exposicion": 4,
        "responsable": "Oficial de seguridad"
    },
    {
        "codigo": "AI-005",
        "categoria": "Proveedor crítico",
        "descripcion": "Contrato de proveedor cloud sin evidencia de revisión de requisitos de seguridad.",
        "criterio": "Procedimiento de gestión de proveedores y acuerdos de seguridad.",
        "impacto": 4,
        "probabilidad": 3,
        "debilidad_evidencia": 4,
        "exposicion": 5,
        "responsable": "Compras y TI"
    }
]

imprimir_reporte(hallazgos_sgsi)
```

<!--
Notas del presentador:
Recomendar copiar el código completo en una sola celda. Explicar brevemente las funciones: clasificar prioridad, asignar fecha, sugerir acción, calcular puntaje e imprimir reporte. Enfatizar que el modelo de puntaje es didáctico y puede mejorarse con criterios más formales. Pedir que los estudiantes modifiquen un valor de impacto o probabilidad y observen cómo cambia la prioridad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Prueba guiada del código

::content::
Durante la ejecución, realice estas acciones:

1. Ejecute el código sin modificarlo.
2. Identifique el hallazgo con mayor prioridad.
3. Cambie la probabilidad del hallazgo AI-003 de 3 a 5.
4. Ejecute nuevamente.
5. Agregue un nuevo hallazgo relacionado con documentación.
6. Revise si el resumen para alta dirección cambia.
7. Explique por qué el modelo prioriza algunos hallazgos sobre otros.

<!--
Notas del presentador:
Caminar por el aula virtual o revisar el chat para identificar dificultades. Si hay estudiantes con errores de copiado, pedir que verifiquen comillas, sangrías y llaves. En Colab, normalmente el código funciona sin configuraciones adicionales. Usar los resultados para mostrar que un hallazgo puede aumentar de prioridad si incrementan impacto, probabilidad, debilidad de evidencia o exposición.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y criterios de revisión

::left::
**Producto esperado**

* Reporte priorizado generado por Python.
* Hallazgo más crítico identificado.
* Acción correctiva inicial propuesta.
* Responsable sugerido.
* Fecha de cierre estimada.
* Resumen para alta dirección.

::right::
**Criterios de revisión académica**

* Comprende la relación entre hallazgo y criterio.
* Justifica la prioridad asignada.
* Propone una acción correctiva coherente.
* Diferencia corrección inmediata y mejora continua.
* Interpreta el reporte para tomar decisiones.

<!--
Notas del presentador:
Aclarar que el resultado no se evalúa por complejidad técnica, sino por interpretación desde gestión de seguridad. Un estudiante puede ejecutar el código, pero debe explicar por qué un hallazgo de acceso o restauración puede tener mayor riesgo para el SGSI. Relacionar con auditoría externa: una organización que presenta hallazgos críticos abiertos puede llegar débil a un proceso de certificación.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis para la práctica

::content::
Responda brevemente:

* ¿Qué criterio de auditoría se incumple en el hallazgo de mayor prioridad?
* ¿La evidencia disponible es suficiente, parcial o débil?
* ¿Qué causa raíz podría explicar el hallazgo?
* ¿Qué acción correctiva debería implementarse primero?
* ¿Cómo se verificaría la eficacia de esa acción?
* ¿Qué hallazgo debería revisar la alta dirección con mayor urgencia?

<!--
Notas del presentador:
Orientar a los estudiantes para que no se queden en el puntaje numérico. La auditoría exige razonamiento: identificar criterio, evidencia, causa, acción, responsable y verificación. Explicar que verificar eficacia no es lo mismo que declarar cierre. Por ejemplo, cerrar una acción de accesos exige comprobar una nueva muestra de usuarios retirados y confirmar que ya no permanecen activos fuera del plazo.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Socialización breve

::rightTitle::
Preguntas orientadoras

::left::
Cada grupo o estudiante comparte en máximo un minuto:

* Hallazgo priorizado.
* Razón de la prioridad.
* Acción correctiva propuesta.
* Evidencia necesaria para cerrar.

::right::

* ¿Qué aprendimos sobre evidencia?
* ¿Qué hallazgo sería más grave ante auditoría externa?
* ¿Qué decisión debería tomar la alta dirección?
* ¿Qué mejoraría en el modelo de priorización?

<!--
Notas del presentador:
Gestionar la socialización con máximo tres intervenciones si el tiempo es limitado. Seleccionar respuestas que muestren diferencias entre hallazgos técnicos, documentales y de gestión. Resaltar que una auditoría efectiva combina evidencia documental, entrevistas, observación y revisión de registros. Cerrar la socialización conectando con la mejora continua.
-->

---
layout: slide-08-titulo-texto
---

::title::
Dudas frecuentes

::content::
**¿Una auditoría interna certifica el SGSI?**
No. Prepara, verifica y mejora el sistema; la certificación la realiza un organismo externo competente.

**¿Auditar es buscar culpables?**
No. Auditar es evaluar evidencias frente a criterios.

**¿Todo hallazgo es una no conformidad?**
No. Puede ser conformidad, observación, oportunidad de mejora o no conformidad.

**¿Solo se audita tecnología?**
No. También se auditan procesos, personas, proveedores, documentos, riesgos y controles.

<!--
Notas del presentador:
Usar esta diapositiva para resolver dudas en máximo 15 minutos. Si aparecen preguntas extensas, responder de forma breve y proponer continuidad por el canal institucional. Recordar que el objetivo de la Open Class es dar herramientas para comprender la actividad y aplicar criterios de auditoría en el diseño del SGSI.
-->

---
layout: slide-08-titulo-texto
---

::title::
Síntesis académica

::content::
Una auditoría de SGSI aporta valor cuando:

* Tiene alcance y criterios claros.
* Es realizada por auditores competentes e imparciales.
* Se basa en evidencia verificable.
* Comunica hallazgos comprensibles.
* Prioriza riesgos y no conformidades.
* Define acciones correctivas con responsables.
* Verifica cierre y eficacia.
* Alimenta la mejora continua del sistema.

<!--
Notas del presentador:
Cerrar el componente académico señalando que la auditoría es uno de los mecanismos más importantes para pasar de la intención a la evidencia. Un SGSI maduro no teme a la auditoría porque la usa como herramienta de aprendizaje organizacional. La auditoría externa se maximiza cuando la organización ya ha hecho auditorías internas rigurosas, ha cerrado brechas y puede demostrar trazabilidad de sus decisiones.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Antes de finalizar

::left::
**Para la evaluación**

Revise especialmente:

* Propósito de auditoría interna.
* Frecuencia de auditorías.
* Competencia e independencia.
* Evidencia documentada.
* Auditoría externa y certificación.
* Acciones correctivas.
* Mejora continua.

::right::
**Para el proyecto SGSI**

Verifique que su diseño incluya:

* Alcance definido.
* Riesgos priorizados.
* Controles seleccionados.
* Evidencias esperadas.
* Programa de auditoría.
* Seguimiento de hallazgos.
* Responsables y fechas.

<!--
Notas del presentador:
Dar recomendaciones concretas para que los estudiantes conecten la clase con la evaluación y con el producto académico del curso. Enfatizar que los distractores de la evaluación suelen reducir el SGSI a tecnología o a desempeño de empleados, cuando la norma exige una visión sistémica. Pedir que revisen sus entregables y se pregunten: ¿qué evidencia demostraría que esto funciona?
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de cerrar la sesión, recuerde diligenciar la **Encuesta de Percepción Estudiantil**.

Su participación permite:

* Valorar la experiencia académica.
* Identificar oportunidades de mejora.
* Fortalecer el acompañamiento docente.
* Mejorar la calidad de los espacios formativos.
* Retroalimentar el desarrollo de las Open Class.

<!--
Notas del presentador:
Hacer el recordatorio de manera cordial y breve. Indicar que la encuesta es un mecanismo institucional de mejoramiento y que la retroalimentación estudiantil es importante para ajustar metodologías, recursos, acompañamiento y claridad de las actividades. Evitar que el cierre se convierta en una instrucción administrativa extensa.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Recordatorio Evaluación Docente

::image:: 
<img src="/imagenes/40da6190-d19e-47f8-aa5c-148153777d31.png" alt="Imagen de apoyo sobre flujo productor cola consumidor y archivo CSV" />

::content::
¡Tu voz transforma la experiencia académica! 📚✨

Estimado estudiante,

Te invitamos a participar en la **Evaluación Estudiante al Profesor**, un espacio diseñado para escuchar tu percepción sobre el proceso formativo y continuar fortaleciendo la calidad académica.

Tu participación es muy importante, ya que tus comentarios y aportes contribuyen al mejoramiento continuo de las prácticas pedagógicas y al fortalecimiento de la experiencia de aprendizaje.

**🗓️ Fecha de participación:** del 25 de mayo al 14 de junio de 2026.
https://genesisplus.uniminuto.edu/StudentSelfService/

**Paso a paso:** https://www.youtube.com/watch?v=WcvhvkXY6FM

Agradecemos realizar el proceso con responsabilidad, respeto y compromiso.

¡Construimos juntos una mejor experiencia educativa! 

<!--
Notas del presentador:
Realizar el recordatorio de forma clara y breve. Explicar que la encuesta no es un trámite aislado, sino una herramienta de mejora continua. Invitar a responderla con responsabilidad, honestidad y sentido constructivo. Evitar extender demasiado esta parte para conservar el cierre académico.
-->

---
layout: slide-12-cierre
---

::title::
Cierre

::content::
La auditoría no es el final del SGSI.

Es el mecanismo que permite comprobar, aprender, corregir y mejorar.

**Un SGSI confiable se demuestra con evidencias, decisiones y acciones de mejora continua.**

<!--
Notas del presentador:
Agradecer la participación y cerrar con una idea integradora: la seguridad de la información es una práctica permanente de gestión, no un documento aislado ni una certificación decorativa. Invitar a los estudiantes a revisar la evaluación de la semana y a usar la lógica de auditoría en sus proyectos: criterio, evidencia, hallazgo, acción y mejora.
-->

