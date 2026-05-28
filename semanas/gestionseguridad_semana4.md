---
layout: slide-01-portada
--- 

::title::
Gestión de la Seguridad de la Información

::week::
Semana 4

::date::
Mayo 28 de 2026

<!--
Notas del presentador:
Dé la bienvenida al grupo y ubique la sesión dentro del curso. Enfatice que esta Open Class aborda la relación entre la estrategia organizacional, el Sistema de Gestión de Seguridad de la Información y la gestión de vulnerabilidades. Aclare que el propósito no es memorizar la norma, sino comprender cómo sus principios se traducen en decisiones, responsabilidades, controles, indicadores y mejora continua.
-->

---
layout: slide-02-titulo
--- 

::title::
SGSI, estrategia y vulnerabilidad

::content::

# SGSI, estrategia organizacional y vulnerabilidades

**Curso:** Gestión de la Seguridad de la Información
**Público:** estudiantes universitarios de pregrado
**Duración:** 90 minutos
**Enfoque:** aplicación práctica de ISO/IEC 27001 en decisiones de seguridad

<!--
Notas del presentador:
Explique que la seguridad de la información no debe entenderse como una función aislada del área técnica. En el contexto de ISO/IEC 27001, el SGSI debe estar conectado con la misión, la visión, los objetivos estratégicos, las obligaciones legales, las necesidades de las partes interesadas y los riesgos reales de la organización. La sesión combina teoría, análisis de casos y una práctica en Python para priorizar vulnerabilidades.
-->

---
layout: slide-03-imagen-izquierda
--- 

::title::
Contextualización

::image:: 
<img src="/imagenes/gestionseguridad_semana4_01_sgsi_estrategia.png" alt="Imagen de apoyo sobre SGSI alineado con la estrategia organizacional" />

::content::
Un SGSI no se limita a instalar herramientas de seguridad.

Un SGSI efectivo permite responder preguntas estratégicas:

* ¿Qué información sostiene la misión de la organización?
* ¿Qué riesgos pueden afectar la continuidad del servicio?
* ¿Qué controles son prioritarios?
* ¿Cómo se evidencia la mejora?
* ¿Qué decisiones debe respaldar la alta dirección?

<!--
Notas del presentador:
Utilice esta diapositiva para diferenciar una visión instrumental de la seguridad frente a una visión de gestión. Instalar antivirus, hacer copias de seguridad o aplicar parches son acciones necesarias, pero no suficientes si no se relacionan con activos, riesgos, responsables, indicadores, cumplimiento y objetivos institucionales.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Actividad corta de integración · Semáforo de alineación

::content::
**Duración:** 10 minutos

**Instrucción para estudiantes:** clasifiquen cada caso como:

* **Verde:** claramente alineado con la estrategia.
* **Amarillo:** parcialmente alineado, requiere ajuste.
* **Rojo:** desconectado de los objetivos organizacionales.

**Casos rápidos:**

1. Se compran herramientas de seguridad sin identificar activos críticos.
2. La alta dirección aprueba presupuesto para reducir incidentes que afectan la continuidad académica.
3. Se auditan controles, pero no se revisan los resultados ni se definen mejoras.
4. Se prioriza una vulnerabilidad porque afecta datos personales y procesos misionales.

<!--
Notas del presentador:
Pida respuestas rápidas por participación oral, chat o votación manual. No busque una respuesta extensa, sino activar criterios de análisis. Luego conecte las respuestas con la idea central: la alineación exige propósito, recursos, medición, revisión y ajuste. El caso 2 y el caso 4 tienden a estar mejor alineados; los casos 1 y 3 muestran fallas de gestión.
-->

---
layout: slide-11-dos-titulos-dos-columnas
--- 

::leftTitle::
Para el docente

::rightTitle::
Para los estudiantes

::left::

* Leer cada caso.
* Solicitar clasificación rápida.
* Preguntar: “¿Qué evidencia demuestra la alineación?”
* Conectar las respuestas con ISO/IEC 27001.
* Cerrar en máximo 10 minutos.

::right::

* Clasificar cada caso.
* Justificar con una frase.
* Identificar si hay estrategia, riesgo, recurso, control o mejora.
* Relacionar el caso con una decisión de seguridad.

<!--
Notas del presentador:
Oriente la actividad como diagnóstico de saberes previos. Evite convertirla en debate largo. El objetivo es preparar el terreno conceptual para comprender que la seguridad debe evidenciarse en decisiones concretas y no solo en documentos o herramientas.
-->

---
layout: slide-04-imagen-derecha
--- 

::title::
¿Qué es un SGSI?

::image:: 
<img src="/imagenes/gestionseguridad_semana4_02_que_es_sgsi.png" alt="Imagen de apoyo sobre Sistema de Gestión de Seguridad de la Información" />

::content::
Un **Sistema de Gestión de Seguridad de la Información** organiza políticas, roles, procesos, controles, evidencias y acciones de mejora para proteger la información.

Trabaja sobre tres dimensiones fundamentales:

* **Confidencialidad:** acceso solo a quien corresponde.
* **Integridad:** información exacta, completa y confiable.
* **Disponibilidad:** información accesible cuando se necesita.

<!--
Notas del presentador:
Explique que el SGSI no es un software. Es un sistema de gestión. Incluye personas, procesos, tecnología, controles y evidencia documentada. Relacione la triada de seguridad con ejemplos cercanos: calificaciones, datos personales, plataformas LMS, correos institucionales, bases de datos académicas o repositorios de investigación.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
ISO/IEC 27001 como marco de gestión

::content::
ISO/IEC 27001 proporciona una estructura para gestionar riesgos de seguridad de la información mediante un enfoque sistemático, documentado y mejorable.

En la práctica, ayuda a:

* Definir alcance y contexto.
* Identificar activos, riesgos y requisitos.
* Establecer objetivos de seguridad.
* Seleccionar controles.
* Medir resultados.
* Auditar, revisar y mejorar.

La versión ISO/IEC 27001:2022 se orienta a mantener el SGSI adecuado frente a desafíos cambiantes de seguridad. ([ISO][1])

<!--
Notas del presentador:
Presente ISO/IEC 27001 como una guía de gobierno y gestión, no como una receta única. La norma permite que cada organización defina su alcance y controles según su contexto, sus riesgos y sus objetivos. Destaque que esto explica por qué la alineación estratégica es esencial.
-->

---
layout: slide-10-titulo-dos-columnas
--- 

::title::
Alineación estratégica del SGSI

::left::
Estrategia organizacional

* Misión y visión.
* Objetivos institucionales.
* Procesos críticos.
* Servicios esenciales.
* Requisitos legales y contractuales.
* Expectativas de partes interesadas.

::right::
Objetivos de seguridad

* Reducir incidentes relevantes.
* Proteger activos críticos.
* Cumplir obligaciones normativas.
* Mejorar tiempos de respuesta.
* Disminuir vulnerabilidades críticas.
* Asegurar continuidad del servicio.

<!--
Notas del presentador:
Explique que alinear no significa copiar los objetivos corporativos dentro del SGSI, sino traducirlos en objetivos de seguridad medibles. Por ejemplo, si la organización busca continuidad de servicios digitales, el SGSI puede definir objetivos sobre disponibilidad, respaldo, recuperación, monitoreo y reducción de vulnerabilidades críticas.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Papel de la alta dirección

::content::
La alta dirección es clave porque convierte la seguridad en una prioridad organizacional.

Debe:

* Integrar los objetivos de seguridad en la planificación estratégica.
* Proporcionar recursos financieros, tecnológicos y humanos.
* Aprobar políticas claras.
* Participar en revisiones del SGSI.
* Exigir evidencia de desempeño y mejora.

<!--
Notas del presentador:
Relacione esta diapositiva con las preguntas de evaluación sobre alta dirección. La respuesta correcta no es delegar completamente la seguridad ni limitarla a lo operativo. En ISO/IEC 27001, la dirección debe apoyar, orientar, asignar recursos y revisar resultados para asegurar que el SGSI responda a las prioridades reales de la organización.
-->

---
layout: slide-11-dos-titulos-dos-columnas
--- 

::leftTitle::
Términos clave

::rightTitle::
Ejemplo aplicado

::left::
**Activo:** recurso con valor para la organización.
**Amenaza:** causa potencial de daño.
**Vulnerabilidad:** debilidad que puede ser explotada.
**Riesgo:** efecto de la incertidumbre sobre los objetivos.
**Control:** medida para modificar el riesgo.

::right::
**Activo:** plataforma académica.
**Amenaza:** acceso no autorizado.
**Vulnerabilidad:** contraseñas débiles.
**Riesgo:** exposición de datos estudiantiles.
**Control:** MFA, política de contraseñas y monitoreo.

<!--
Notas del presentador:
Aclare las diferencias conceptuales con ejemplos simples. Una vulnerabilidad no es lo mismo que una amenaza. La amenaza puede ser un atacante, un error humano o una falla técnica; la vulnerabilidad es la debilidad; el riesgo surge cuando esa debilidad puede afectar un activo y un objetivo de la organización.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Gestión de vulnerabilidades

::content::
La gestión de vulnerabilidades es un proceso continuo para identificar, evaluar, priorizar, tratar y verificar debilidades que pueden afectar sistemas, datos o procesos.

Una evaluación de vulnerabilidades examina sistemáticamente un sistema o producto para identificar deficiencias de seguridad y aportar datos que permitan estimar la efectividad de las medidas de protección. ([NIST Computer Security Resource Center][2])

<!--
Notas del presentador:
Explique que no todas las vulnerabilidades tienen la misma prioridad. Una vulnerabilidad técnica puede ser crítica si afecta un activo misional, tiene alta probabilidad de explotación, compromete datos sensibles o interrumpe un servicio esencial. Por eso la gestión de vulnerabilidades debe conectarse con la estrategia y no solo con el listado técnico de hallazgos.
-->

---
layout: slide-10-titulo-dos-columnas
--- 

::title::
Ciclo práctico de gestión de vulnerabilidades

::left::
Identificar y evaluar

* Inventario de activos.
* Detección de vulnerabilidades.
* Estimación de impacto.
* Estimación de probabilidad.
* Análisis de exposición.

::right::
Priorizar y mejorar

* Priorización por criticidad.
* Selección de controles.
* Tratamiento o aceptación.
* Verificación posterior.
* Reporte e indicadores.
* Mejora continua.

<!--
Notas del presentador:
Conecte este ciclo con la práctica en Python. La herramienta que se construirá no reemplaza un escáner profesional, pero permite comprender la lógica de priorización: no se trata de corregir todo al mismo tiempo, sino de decidir con criterio qué debe atenderse primero y por qué.
-->

---
layout: slide-04-imagen-derecha
--- 

::title::
Auditorías, revisión y mejora continua

::image:: 
<img src="/imagenes/gestionseguridad_semana4_03_auditoria_mejora_continua.png" alt="Imagen de apoyo sobre auditoría, revisión y mejora continua en un SGSI" />

::content::
La alineación del SGSI requiere verificación periódica.

Las auditorías internas y externas permiten identificar desviaciones, evidencias insuficientes y oportunidades de mejora.

La revisión por la dirección ayuda a mantener el SGSI conveniente, adecuado y eficaz frente a cambios del entorno, nuevos riesgos y resultados de desempeño. ([eXact learning solutions][3])

<!--
Notas del presentador:
Insista en que auditar no es castigar. Auditar es verificar si lo planificado se cumple, si los controles funcionan y si existen evidencias. La revisión por la dirección convierte los resultados de auditoría en decisiones: recursos, cambios, acciones correctivas, prioridades y mejora continua.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Partes interesadas y requisitos legales

::content::
La alineación estratégica también exige reconocer quiénes se ven afectados por el SGSI.

**Partes interesadas posibles:**

* Estudiantes, clientes o usuarios.
* Colaboradores.
* Proveedores.
* Alta dirección.
* Entidades reguladoras.
* Aliados estratégicos.

**Requisitos relevantes:**

* Leyes de protección de datos.
* Contratos.
* Políticas internas.
* Normas sectoriales.
* Acuerdos de nivel de servicio.

<!--
Notas del presentador:
Relacione esta diapositiva con las preguntas de evaluación sobre partes interesadas y requisitos legales. Un SGSI desconectado de las partes interesadas puede proteger lo que no es prioritario o ignorar obligaciones críticas. El cumplimiento legal protege la reputación, evita sanciones y fortalece la confianza.
-->

---
layout: slide-05-titulo-superior-texto-derecha
--- 

::title::
Objetivos de seguridad medibles

::image:: 
<img src="/imagenes/gestionseguridad_semana4_04_indicadores_objetivos_seguridad.png" alt="Imagen de apoyo sobre indicadores de seguridad de la información" />

::content::
Un objetivo de seguridad debe ser comprensible, medible y revisable.

Ejemplos:

* Reducir en 30 % las vulnerabilidades críticas abiertas en sistemas misionales.
* Lograr 95 % de cumplimiento en capacitación de seguridad.
* Disminuir el tiempo promedio de remediación de vulnerabilidades críticas.
* Aumentar la cobertura de copias de seguridad verificadas.
* Mantener evidencias actualizadas para auditoría interna.

<!--
Notas del presentador:
Explique que “mejorar la seguridad” es una intención, pero no siempre es un objetivo medible. Para gestionar se requieren indicadores. Puede preguntar al grupo: ¿cómo sabríamos que la seguridad mejoró? Oriente las respuestas hacia métricas, evidencia, responsables, plazos y revisión.
-->

---
layout: slide-10-titulo-dos-columnas
--- 

::title::
Ejemplo aplicado · Universidad

::left::
Objetivo estratégico

Garantizar continuidad de los servicios académicos digitales y proteger datos personales de estudiantes y docentes.
Activos críticos

* LMS institucional.
* Sistema de notas.
* Correo institucional.
* Repositorios académicos.
* Bases de datos de matrícula.

::right::
Objetivos del SGSI

* Reducir accesos no autorizados.
* Priorizar vulnerabilidades críticas.
* Fortalecer autenticación.
* Mejorar respaldos.
* Medir tiempos de respuesta.
* Evidenciar cumplimiento y mejora.

<!--
Notas del presentador:
Use este ejemplo para contextualizar el tema en un entorno universitario. Una caída del LMS, una filtración de calificaciones o el acceso indebido a datos personales afecta directamente la misión educativa. Por eso el SGSI debe traducir la estrategia institucional en controles, indicadores y decisiones concretas.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Ideas clave:

::content::

* La alta dirección integra, apoya, asigna recursos y revisa.
* Los objetivos de seguridad deben apoyar metas estratégicas.
* El cumplimiento legal y regulatorio forma parte de la alineación.
* Las auditorías permiten evaluar, ajustar y mejorar.
* Las partes interesadas aportan necesidades y expectativas.
* Los riesgos emergentes obligan a revisar controles.
* La disponibilidad de recursos condiciona la implementación efectiva.

<!--
Notas del presentador:
No reduzca la evaluación a memorizar opciones. Oriente a los estudiantes a identificar verbos clave: integrar, alinear, asignar, revisar, evaluar, ajustar, cumplir, involucrar y mejorar. Las opciones incorrectas suelen separar la seguridad de la estrategia, excluir a la alta dirección, ignorar requisitos legales o evitar la mejora continua.
-->

---
layout: slide-11-dos-titulos-dos-columnas
--- 

::leftTitle::
Opciones con enfoque correcto

::rightTitle::
Opciones con alerta conceptual

::left::

* Integran seguridad y estrategia.
* Consideran recursos.
* Incluyen a la alta dirección.
* Atienden requisitos legales.
* Evalúan riesgos nuevos.
* Promueven auditoría y mejora.
* Involucran partes interesadas.

::right::

* Aíslan la seguridad del negocio.
* Delegan todo a áreas operativas.
* Ignoran cambios del entorno.
* Evitan auditorías externas o internas.
* Desconocen requisitos legales.
* Se enfocan solo en tecnología.
* No miden ni actualizan objetivos.

<!--
Notas del presentador:
Explique que esta diapositiva funciona como una guía de lectura crítica para las preguntas. Las respuestas correctas suelen mostrar una mirada sistémica, mientras que las incorrectas suelen ser absolutas, aisladas o reduccionistas. Esto ayuda a los estudiantes a razonar incluso cuando las opciones tienen redacciones extensas.
-->

---
layout: slide-07-multimedia-con-titulo
--- 

::title::
Introducción a ISO/IEC 27001:2022

::media::

<iframe src="https://www.youtube.com/embed/u2DaBdg-odc" allowfullscreen></iframe>

<!--
Notas del presentador:
Video sugerido: “ISO/IEC 27001:2022 Seguridad de la información”, del Ministerio de Producción MPCEI Ecuador, publicado en 2025. Se recomienda usar un fragmento breve para reforzar principios, requisitos y buenas prácticas de la norma. El resultado de búsqueda lo describe como un recurso sobre principios, requisitos y mejores prácticas para fortalecer protección de datos, gestionar riesgos y asegurar cumplimiento normativo. :contentReference[oaicite:4]{index=4}

Propósito pedagógico: reforzar la comprensión general de la norma antes de entrar en ejemplos aplicados.
Momento recomendado: entre los minutos 15 y 25, si se requiere apoyo audiovisual.
Duración aproximada: verificar antes de clase.
Advertencia: seleccionar un fragmento breve para no afectar la distribución de los 90 minutos.
-->

---
layout: slide-02-titulo
--- 

::title::
Práctica guiada

::content::

# Priorizador de vulnerabilidades alineado al SGSI

**Propósito:** construir una herramienta sencilla en Python para priorizar vulnerabilidades según riesgo, criticidad del activo, exposición y relación con objetivos estratégicos.

**Plataforma sugerida:** Google Colab o Replit, ambas con opción gratuita.

<!--
Notas del presentador:
Presente la práctica como una simulación académica. No se escanearán sistemas reales ni se harán pruebas ofensivas. El objetivo es aprender a tomar decisiones de gestión a partir de datos de vulnerabilidades simuladas. Esta aclaración es importante para mantener la actividad dentro de un enfoque ético, seguro y formativo.
-->

---
layout: slide-10-titulo-dos-columnas
--- 

::title::
Componentes necesarios y conexiones sugeridas

::left::
Componentes necesarios

* Navegador web.
* Cuenta de Google para Colab o cuenta gratuita en Replit.
* Código Python de la práctica.
* Conjunto simulado de activos y vulnerabilidades.
* Criterios de priorización.
* Registro de decisiones.

::right::
Conexiones sugeridas

* Objetivo estratégico → activo crítico.
* Activo crítico → vulnerabilidad.
* Vulnerabilidad → impacto y probabilidad.
* Riesgo → control sugerido.
* Control → responsable e indicador.
* Resultado → revisión y mejora.

<!--
Notas del presentador:
Aclare que “conexiones” en esta práctica no se refiere a cableado electrónico, sino a relaciones de gestión. El aprendizaje clave consiste en conectar el lenguaje estratégico con evidencias operativas: activos, vulnerabilidades, controles, responsables e indicadores.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Pasos para probar en Google Colab

::content::

1. Ingresar a Google Colab desde el navegador.
2. Crear un nuevo cuaderno.
3. Copiar el código completo de la práctica.
4. Ejecutar la celda principal.
5. Revisar la tabla textual de resultados.
6. Descargar o consultar el archivo `reporte_vulnerabilidades_sgsi.csv`.
7. Responder las preguntas de análisis.
8. Socializar una decisión de priorización.

<!--
Notas del presentador:
Si el grupo no tiene cuentas activas o conectividad suficiente, puede ejecutar el código desde el computador del docente y pedir que los estudiantes participen en la interpretación de resultados. También puede usarse Replit con un archivo main.py. La práctica no requiere librerías externas, lo que facilita su ejecución.
-->

---
layout: slide-codigo
--- 

::title::
Código completo en Python · Parte 1

::content::

```python {lines:true}
"""
Práctica guiada:
Priorizador de vulnerabilidades alineado al SGSI.

Objetivo:
Simular la priorización de vulnerabilidades considerando:
- Impacto sobre el negocio.
- Probabilidad de explotación.
- Criticidad del activo.
- Exposición del activo.
- Relación con objetivos estratégicos.
- Existencia de requisitos legales o regulatorios.

No requiere librerías externas.
Puede ejecutarse en Google Colab, Replit o Python local.
"""

from dataclasses import dataclass
from datetime import datetime
import csv


@dataclass
class Vulnerabilidad:
    id: str
    activo: str
    proceso: str
    descripcion: str
    impacto: int
    probabilidad: int
    criticidad_activo: int
    exposicion: int
    alineacion_estrategica: int
    requisito_legal: bool
    control_sugerido: str
    responsable: str


def validar_rango(valor, campo):
    """Valida que un valor esté entre 1 y 5."""
    if not isinstance(valor, int):
        raise TypeError(f"{campo} debe ser entero.")
    if valor < 1 or valor > 5:
        raise ValueError(f"{campo} debe estar entre 1 y 5.")
    return valor
```

<!--
Notas del presentador:
Explique que se usa una clase de datos para representar cada vulnerabilidad. Cada campo tiene un sentido de gestión. Impacto y probabilidad permiten aproximar el riesgo; criticidad del activo y exposición ayudan a priorizar; alineación estratégica permite conectar el hallazgo con los objetivos de la organización; requisito legal aumenta la prioridad cuando existe una obligación normativa.
-->

---
layout: slide-codigo
--- 

::title::
Código completo en Python · Parte 2

::content::

```python {lines:true}
def calcular_puntaje(v):
    """
    Calcula un puntaje de prioridad.

    Fórmula académica propuesta:
    riesgo_base = impacto * probabilidad
    factor_activo = criticidad_activo + exposicion
    factor_estrategico = alineacion_estrategica
    bono_legal = 5 si hay requisito legal, de lo contrario 0
    """

    validar_rango(v.impacto, "impacto")
    validar_rango(v.probabilidad, "probabilidad")
    validar_rango(v.criticidad_activo, "criticidad_activo")
    validar_rango(v.exposicion, "exposicion")
    validar_rango(v.alineacion_estrategica, "alineacion_estrategica")

    riesgo_base = v.impacto * v.probabilidad
    factor_activo = v.criticidad_activo + v.exposicion
    factor_estrategico = v.alineacion_estrategica
    bono_legal = 5 if v.requisito_legal else 0

    puntaje = (riesgo_base * 2) + factor_activo + factor_estrategico + bono_legal
    return puntaje


def clasificar_prioridad(puntaje):
    """Clasifica la prioridad según el puntaje obtenido."""
    if puntaje >= 55:
        return "Crítica"
    if puntaje >= 40:
        return "Alta"
    if puntaje >= 25:
        return "Media"
    return "Baja"
```

<!--
Notas del presentador:
Aclare que la fórmula no reemplaza una metodología formal de análisis de riesgos, pero permite entender cómo se ponderan criterios. Puede preguntar al grupo qué pasaría si se elimina el factor estratégico: se tendría una mirada técnica, pero menos conectada con la misión y los procesos críticos de la organización.
-->

---
layout: slide-codigo
--- 

::title::
Código completo en Python · Parte 3

::content::

```python {lines: true}
def generar_plan_accion(vulnerabilidad, prioridad):
    """Propone un plazo de atención según la prioridad."""
    if prioridad == "Crítica":
        plazo = "Atender en máximo 7 días"
        seguimiento = "Revisión semanal por comité de seguridad"
    elif prioridad == "Alta":
        plazo = "Atender en máximo 30 días"
        seguimiento = "Seguimiento quincenal por responsable del proceso"
    elif prioridad == "Media":
        plazo = "Atender en máximo 60 días"
        seguimiento = "Seguimiento mensual"
    else:
        plazo = "Monitorear y revisar en el siguiente ciclo"
        seguimiento = "Seguimiento trimestral"

    return {
        "plazo": plazo,
        "seguimiento": seguimiento,
        "control": vulnerabilidad.control_sugerido,
        "responsable": vulnerabilidad.responsable
    }


def imprimir_reporte(resultados):
    """Imprime un reporte textual organizado."""
    print("\nREPORTE DE PRIORIZACIÓN DE VULNERABILIDADES")
    print("Fecha:", datetime.now().strftime("%Y-%m-%d %H:%M"))
    print("-" * 90)

    for item in resultados:
        v = item["vulnerabilidad"]
        print(f"ID: {v.id}")
        print(f"Activo: {v.activo}")
        print(f"Proceso asociado: {v.proceso}")
        print(f"Descripción: {v.descripcion}")
        print(f"Puntaje: {item['puntaje']}")
        print(f"Prioridad: {item['prioridad']}")
        print(f"Control sugerido: {item['plan']['control']}")
        print(f"Responsable: {item['plan']['responsable']}")
        print(f"Plazo: {item['plan']['plazo']}")
        print(f"Seguimiento: {item['plan']['seguimiento']}")
        print("-" * 90)
```

<!--
Notas del presentador:
Esta parte traduce la clasificación en decisiones. Recalque que un SGSI no se queda en diagnosticar; debe definir acciones, responsables, plazos y seguimiento. Aquí aparece la conexión con la mejora continua y la revisión por la dirección.
-->

---
layout: slide-codigo
--- 

::title::
Código completo en Python · Parte 4

::content::

```python {lines:true}
def exportar_csv(resultados, nombre_archivo="reporte_vulnerabilidades_sgsi.csv"):
    """Exporta los resultados a un archivo CSV."""
    campos = [
        "id",
        "activo",
        "proceso",
        "descripcion",
        "impacto",
        "probabilidad",
        "criticidad_activo",
        "exposicion",
        "alineacion_estrategica",
        "requisito_legal",
        "puntaje",
        "prioridad",
        "control_sugerido",
        "responsable",
        "plazo",
        "seguimiento"
    ]

    with open(nombre_archivo, mode="w", newline="", encoding="utf-8") as archivo:
        escritor = csv.DictWriter(archivo, fieldnames=campos)
        escritor.writeheader()

        for item in resultados:
            v = item["vulnerabilidad"]
            escritor.writerow({
                "id": v.id,
                "activo": v.activo,
                "proceso": v.proceso,
                "descripcion": v.descripcion,
                "impacto": v.impacto,
                "probabilidad": v.probabilidad,
                "criticidad_activo": v.criticidad_activo,
                "exposicion": v.exposicion,
                "alineacion_estrategica": v.alineacion_estrategica,
                "requisito_legal": "Sí" if v.requisito_legal else "No",
                "puntaje": item["puntaje"],
                "prioridad": item["prioridad"],
                "control_sugerido": item["plan"]["control"],
                "responsable": item["plan"]["responsable"],
                "plazo": item["plan"]["plazo"],
                "seguimiento": item["plan"]["seguimiento"]
            })

    print(f"\nArchivo generado: {nombre_archivo}")
```

<!--
Notas del presentador:
Explique que la evidencia documentada es importante en un SGSI. El archivo CSV funciona como producto de la práctica y como evidencia de análisis. Puede sugerir que el grupo abra el CSV y revise si la priorización es coherente con los criterios definidos.
-->

---
layout: slide-codigo
--- 

::title::
Código completo en Python · Parte 5

::content::

```python {lines:true}
def main():
    vulnerabilidades = [
        Vulnerabilidad(
            id="VUL-001",
            activo="LMS institucional",
            proceso="Gestión académica",
            descripcion="Autenticación sin segundo factor para usuarios administrativos.",
            impacto=5,
            probabilidad=4,
            criticidad_activo=5,
            exposicion=4,
            alineacion_estrategica=5,
            requisito_legal=True,
            control_sugerido="Implementar MFA y monitoreo de accesos privilegiados.",
            responsable="Coordinación de TI"
        ),
        Vulnerabilidad(
            id="VUL-002",
            activo="Servidor de archivos",
            proceso="Gestión documental",
            descripcion="Carpetas compartidas con permisos excesivos.",
            impacto=4,
            probabilidad=4,
            criticidad_activo=4,
            exposicion=3,
            alineacion_estrategica=4,
            requisito_legal=True,
            control_sugerido="Revisar permisos, aplicar mínimo privilegio y registrar cambios.",
            responsable="Administrador de infraestructura"
        ),
        Vulnerabilidad(
            id="VUL-003",
            activo="Aplicación de encuestas",
            proceso="Experiencia estudiantil",
            descripcion="Versión de software desactualizada.",
            impacto=3,
            probabilidad=3,
            criticidad_activo=3,
            exposicion=3,
            alineacion_estrategica=3,
            requisito_legal=False,
            control_sugerido="Actualizar versión y programar revisión mensual de parches.",
            responsable="Equipo de desarrollo"
        ),
        Vulnerabilidad(
            id="VUL-004",
            activo="Base de datos de matrícula",
            proceso="Admisiones y registro",
            descripcion="Copias de seguridad no verificadas mediante pruebas de restauración.",
            impacto=5,
            probabilidad=3,
            criticidad_activo=5,
            exposicion=2,
            alineacion_estrategica=5,
            requisito_legal=True,
            control_sugerido="Ejecutar pruebas de restauración y documentar resultados.",
            responsable="Administrador de bases de datos"
        ),
        Vulnerabilidad(
            id="VUL-005",
            activo="Equipo de sala de docentes",
            proceso="Apoyo académico",
            descripcion="Sistema operativo sin actualización reciente.",
            impacto=2,
            probabilidad=4,
            criticidad_activo=2,
            exposicion=3,
            alineacion_estrategica=2,
            requisito_legal=False,
            control_sugerido="Aplicar parches y activar política de actualización automática.",
            responsable="Soporte técnico"
        )
    ]

    resultados = []

    for v in vulnerabilidades:
        puntaje = calcular_puntaje(v)
        prioridad = clasificar_prioridad(puntaje)
        plan = generar_plan_accion(v, prioridad)

        resultados.append({
            "vulnerabilidad": v,
            "puntaje": puntaje,
            "prioridad": prioridad,
            "plan": plan
        })

    resultados.sort(key=lambda item: item["puntaje"], reverse=True)

    imprimir_reporte(resultados)
    exportar_csv(resultados)


if __name__ == "__main__":
    main()
```

<!--
Notas del presentador:
Indique que esta parte contiene los datos simulados. Proponga que los estudiantes modifiquen valores para observar cómo cambia la prioridad. Por ejemplo, si una vulnerabilidad afecta un activo no crítico, su prioridad puede bajar; si tiene requisito legal y alta alineación estratégica, puede subir.
-->

---
layout: slide-10-titulo-dos-columnas
--- 

::title::
Producto esperado de la práctica

::left::
Evidencia técnica

* Código ejecutado correctamente.
* Reporte textual en consola.
* Archivo CSV generado.
* Vulnerabilidades ordenadas por prioridad.
* Control sugerido por cada caso.

::right::
Evidencia de gestión

* Justificación de la vulnerabilidad prioritaria.
* Relación con objetivo estratégico.
* Responsable propuesto.
* Plazo de atención.
* Indicador de seguimiento.
* Acción de mejora sugerida.

<!--
Notas del presentador:
Recalque que la evidencia técnica y la evidencia de gestión se complementan. En seguridad de la información no basta con producir una lista de hallazgos; se requiere explicar por qué un hallazgo importa, qué objetivo protege, quién debe actuar, en qué plazo y cómo se verificará el avance.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Preguntas de análisis

::content::
Después de ejecutar el código, respondan:

1. ¿Cuál vulnerabilidad quedó con mayor prioridad y por qué?
2. ¿Qué factor influyó más: impacto, probabilidad, criticidad, exposición, alineación estratégica o requisito legal?
3. ¿Qué control sugerido tiene mayor relación con la continuidad del negocio?
4. ¿Qué decisión debería tomar la alta dirección?
5. ¿Qué indicador permitiría revisar si la acción fue efectiva?
6. ¿Qué cambiaría si aparece una nueva amenaza o vulnerabilidad emergente?

<!--
Notas del presentador:
Use estas preguntas para llevar la práctica más allá de la ejecución del código. La intención es que el estudiante razone como gestor de seguridad de la información: analizar, priorizar, justificar, decidir y medir. Invite a responder con frases breves y orientadas a evidencia.
-->

---
layout: slide-11-dos-titulos-dos-columnas
--- 

::leftTitle::
Socialización breve

::rightTitle::
Criterios de escucha

::left::
Cada grupo o estudiante comparte:

* Vulnerabilidad prioritaria.
* Justificación.
* Control propuesto.
* Responsable.
* Indicador de seguimiento.

::right::
Mientras escuchan, identifiquen:

* ¿Está conectada con un objetivo estratégico?
* ¿Considera riesgo y requisito legal?
* ¿Incluye acción medible?
* ¿Se evidencia mejora continua?

<!--
Notas del presentador:
Organice la socialización en máximo siete minutos. Seleccione dos o tres participaciones si el grupo es grande. Evite que todos lean resultados completos; pida una decisión y una justificación. Esto mantiene la sesión dentro del tiempo y fortalece la capacidad de síntesis.
-->

---
layout: slide-08-titulo-texto
--- 

::title::
Síntesis:

::content::
Un SGSI alineado con la estrategia permite que la seguridad de la información sea una función de valor organizacional.

La alineación se evidencia cuando:

* Los objetivos de seguridad respaldan metas institucionales.
* La alta dirección asigna recursos y revisa resultados.
* Las partes interesadas son consideradas.
* Los requisitos legales se integran.
* Las auditorías generan mejora.
* Las vulnerabilidades se priorizan por riesgo y contexto.
* Los controles se miden, ajustan y documentan.

<!--
Notas del presentador:
Esta diapositiva debe funcionar como cierre conceptual antes de las dudas. Resuma la sesión destacando que ISO/IEC 27001 propone una lógica de gestión: planear, implementar, verificar, revisar y mejorar. La priorización de vulnerabilidades es una forma concreta de demostrar que el SGSI responde al contexto y a las prioridades organizacionales.
-->

---
layout: slide-10-titulo-dos-columnas
--- 

::title::
Resolución de dudas

::left::
Dudas conceptuales

* SGSI e ISO/IEC 27001.
* Alineación estratégica.
* Alta dirección.
* Partes interesadas.
* Auditoría y mejora continua.
* Requisitos legales.

::right::
Dudas prácticas

* Ejecución del código.
* Interpretación del puntaje.
* Priorización de vulnerabilidades.
* Exportación del CSV.
* Producto esperado.
* Relación con la evaluación.

<!--
Notas del presentador:
Invite a formular preguntas concretas. Si aparecen dudas extensas, proponga retomarlas en el espacio de acompañamiento o en el aula virtual. Mantenga el cierre dentro del tiempo establecido. Priorice preguntas que conecten la práctica con la evaluación de la semana.
-->

---
layout: slide-04-imagen-derecha
--- 

::title::
Para cerrar la semana, recuerde:

::image:: 
<img src="/imagenes/gestionseguridad_semana4_05_practica_python_vulnerabilidades.png" alt="Imagen de apoyo sobre cierre académico y mejora continua" />

::content::

* Revisar el material del aula virtual.
* Resolver la evaluación con lectura crítica de cada opción.
* Relacionar cada respuesta con estrategia, recursos, cumplimiento, auditoría y mejora.
* Conservar el producto de la práctica como evidencia de aprendizaje.
* Diligenciar la **Encuesta de Percepción Estudiantil**.

<!--
Notas del presentador:
Agradezca la participación y recuerde la importancia de la encuesta institucional como mecanismo de mejora. Explique que la percepción estudiantil permite fortalecer las estrategias didácticas, los recursos de apoyo y la experiencia de aprendizaje. Cierre con un llamado a aplicar los conceptos en situaciones reales.
-->

---
layout: slide-12-cierre
--- 

::title::
Gracias por su participación

::content::

# Gestión de la Seguridad de la Información

**Semana 4:** SGSI alineado a la estrategia y controles de vulnerabilidad
**Fecha:** Mayo 28 de 2026

Recordatorio final: diligenciar la **Encuesta de Percepción Estudiantil**.

<!--
Notas del presentador:
Finalice con un mensaje breve y cordial. Reitere que la seguridad de la información es una responsabilidad compartida y una capacidad estratégica de las organizaciones. Invite a continuar profundizando en la evaluación, la práctica y los recursos sugeridos.
-->

[1]: https://www.iso.org/standard/27001?utm_source=chatgpt.com "ISO/IEC 27001:2022 - Information security management ..."
[2]: https://csrc.nist.gov/glossary/term/vulnerability_assessment?utm_source=chatgpt.com "vulnerability assessment - Glossary | CSRC"
[3]: https://www.exactls.com/wp-content/uploads/2025/02/ISO_IEC-270012022-ed.3.pdf?utm_source=chatgpt.com "﻿ISO/IEC 27001:2022﻿"
[4]: https://www.youtube.com/watch?v=u2DaBdg-odc&utm_source=chatgpt.com "ISO/IEC 27001:2022 Seguridad de la información"
[5]: https://www.youtube.com/watch?v=NA1qVuEBvms&utm_source=chatgpt.com "ISO 27001: Gestión de riesgos sobre la seguridad de la ..."
[6]: https://www.youtube.com/watch?v=I94bQRGK0Ww&utm_source=chatgpt.com "PASOS IMPLANTAR LA ISO 27001"
