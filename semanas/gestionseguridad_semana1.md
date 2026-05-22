---
layout: slide-01-portada
---

::title::
Gestión de la Seguridad de la Información

::week::
Semana 1

::date::
07/05/2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class. Presentar la sesión como un espacio académico y aplicado para comprender cómo la norma ISO/IEC 27001 orienta la construcción, documentación, evaluación y mejora de un Sistema de Gestión de Seguridad de la Información. Indicar que la clase tendrá una ruta de trabajo de 90 minutos, con una actividad inicial breve, desarrollo conceptual, ejemplos aplicados, relación con la evaluación, práctica guiada en Python, socialización, dudas y cierre institucional.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad corta de integración

::content::
**Reto diagnóstico: “¿riesgo, control o evidencia?”**

Duración sugerida: **10 a 15 minutos**

Cada estudiante analiza rápidamente una situación y la clasifica como:

- Riesgo.
- Control.
- Evidencia.
- Indicador.
- Política.

Situaciones sugeridas:

- Un colaborador usa la misma contraseña en varios servicios.
- La organización exige autenticación multifactor.
- Existe un registro de auditoría de accesos.
- El 92 % del personal completó la capacitación obligatoria.
- La alta dirección aprueba lineamientos de seguridad.

<!--
Notas del presentador:
Invitar a los estudiantes a responder de forma rápida, preferiblemente mediante chat, levantamiento de mano o participación oral breve. Después de cada situación, solicitar una justificación corta. El propósito no es calificar, sino activar vocabulario técnico y detectar confusiones comunes. Conectar las respuestas con la idea de que un SGSI convierte hechos cotidianos en decisiones documentadas: si hay riesgo, se analiza; si hay control, se verifica; si hay evidencia, se conserva; si hay indicador, se interpreta; si hay política, se comunica.

Situaciones sugeridas:

- Un colaborador usa la misma contraseña en varios servicios.
- La organización exige autenticación multifactor.
- Existe un registro de auditoría de accesos.
- El 92 % del personal completó la capacitación obligatoria.
- La alta dirección aprueba lineamientos de seguridad.
-->

---
layout: slide-08-titulo-texto
---

::title::
¿Qué es un SGSI?

::content::
Un **Sistema de Gestión de Seguridad de la Información** organiza políticas, procesos, responsables, controles, recursos, evidencias e indicadores para proteger la información de una organización. Su propósito es gestionar la seguridad de forma sistemática, no improvisada.
Un SGSI busca proteger:

- Confidencialidad.
- Integridad.
- Disponibilidad.
- Trazabilidad.
- Cumplimiento.
- Confianza institucional.

<!--
Notas del presentador:
Aclarar que un SGSI no es únicamente un software, un antivirus o un firewall. Es una forma de dirigir y controlar la seguridad de la información desde una perspectiva organizacional. Puede incluir controles tecnológicos, pero también controles administrativos, físicos, legales, formativos y de seguimiento. Relacionar la confidencialidad con el acceso autorizado, la integridad con la exactitud y no alteración indebida de la información, y la disponibilidad con la posibilidad de usar la información cuando se necesita.
-->

---
layout: slide-04-imagen-derecha
---

::title::
ISO/IEC 27001 como marco estructurado

::image::
<img src="/imagenes/marco-iso-27001-sgsi.png" alt="Imagen de apoyo sobre SGSI e ISO IEC 27001" />

::content::
ISO/IEC 27001 proporciona un marco para establecer, implementar, mantener y mejorar un SGSI. Su valor está en ordenar la gestión de la seguridad mediante:

- Contexto organizacional.
- Liderazgo.
- Planificación.
- Soporte.
- Operación.
- Evaluación del desempeño.
- Mejora continua.

<!--
Notas del presentador:
Explicar que la norma ayuda a que la organización piense estratégicamente en sus necesidades de seguridad de información, de acuerdo con sus objetivos, procesos, tamaño y estructura. Recalcar que no se trata de aplicar controles aislados, sino de integrar la seguridad de la información en la gestión organizacional. Este marco permite que las decisiones de seguridad se documenten, se midan y se mejoren con base en evidencia.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Contexto, partes interesadas y alcance

::left::
**Contexto**

La organización identifica factores internos y externos que afectan la seguridad de la información.

Ejemplos:

- Regulaciones.
- Procesos críticos.
- Tecnología usada.
- Cultura organizacional.
- Servicios tercerizados.
- Amenazas digitales.

::right::
**Alcance**

El alcance define qué procesos, áreas, sedes, activos, servicios y límites estarán cubiertos por el SGSI.

Un alcance claro evita ambigüedad y permite seleccionar controles pertinentes.

<!--
Notas del presentador:
Dar un ejemplo universitario: el SGSI puede cubrir el sistema de matrícula, la plataforma LMS, el correo institucional, la mesa de ayuda y los repositorios de investigación, pero quizá no todos los procesos de la institución en una primera fase. Explicar que definir el alcance no significa excluir riesgos importantes sin justificación, sino delimitar de forma documentada qué será gestionado, con qué límites, interfaces y dependencias.
-->

---
layout: slide-08-titulo-texto
---

::title::
Política de seguridad de la información

::content::
La política de seguridad expresa la dirección, el compromiso y los principios generales para proteger la información.

Una política bien formulada debe:

- Estar aprobada por la alta dirección.
- Ser apropiada al propósito de la organización.
- Servir como marco para los objetivos.
- Comunicar responsabilidades.
- Comprometer la mejora continua.
- Estar disponible como información documentada.

<!--
Notas del presentador:
Insistir en que la política no debe ser un documento decorativo. Debe orientar decisiones reales, por ejemplo: uso aceptable de sistemas, clasificación de información, responsabilidades del personal, gestión de incidentes y protección de datos. Relacionar esta diapositiva con las preguntas de evaluación donde se indaga qué debe reflejar una política de seguridad. Explicar que una política sólida comunica dirección, compromiso y responsabilidad organizacional.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Objetivos de seguridad

::rightTitle::
Alineación estratégica

::left::
Los objetivos de seguridad de la información convierten la política en metas verificables.

Deben ser:

- Coherentes con la política.
- Medibles cuando sea posible.
- Comunicados.
- Monitoreados.
- Actualizados.
- Asignados a responsables.

::right::
Alinear seguridad y estrategia significa que la protección de la información apoya la misión institucional.

Ejemplos:

- Proteger datos de estudiantes.
- Mantener continuidad de servicios.
- Reducir incidentes.
- Cumplir requisitos legales.
- Fortalecer reputación.

<!--
Notas del presentador:
Explicar que un objetivo como “mejorar la seguridad” es débil porque no indica cómo se medirá. En cambio, “alcanzar 95 % de cumplimiento en capacitación de seguridad antes del cierre del semestre” permite seguimiento. Conectar con las preguntas de evaluación sobre comunicación de objetivos, revisión periódica y alineación estratégica. Resaltar que los objetivos deben responder a la estrategia de la organización y no funcionar como metas aisladas del área tecnológica.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para analizar riesgos

::content::
Para evaluar riesgos en seguridad de la información se deben diferenciar varios conceptos:

- **Activo:** información, sistema, proceso o recurso con valor.
- **Amenaza:** evento potencial que puede causar daño.
- **Vulnerabilidad:** debilidad que puede ser explotada.
- **Impacto:** consecuencia si el evento ocurre.
- **Probabilidad:** posibilidad de ocurrencia.
- **Control:** medida para reducir riesgo.
- **Riesgo residual:** riesgo que permanece después de aplicar controles.

<!--
Notas del presentador:
Usar un ejemplo sencillo: las calificaciones almacenadas en una plataforma son un activo; el acceso no autorizado es una amenaza; una contraseña débil es una vulnerabilidad; la alteración de notas es impacto; la probabilidad depende de exposición y controles; la autenticación multifactor reduce la posibilidad de acceso indebido; el riesgo residual es lo que queda incluso después de aplicar controles. Recalcar que ninguna organización elimina todos los riesgos, por eso debe aceptarlos, mitigarlos, transferirlos o evitarlos según criterios definidos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Evaluación y tratamiento del riesgo

::left::
**Evaluación de riesgos**

Permite identificar, analizar y priorizar riesgos de seguridad.

Incluye:

- Identificación del activo.
- Amenaza y vulnerabilidad.
- Impacto.
- Probabilidad.
- Nivel de riesgo.
- Responsable del riesgo.

::right::
**Tratamiento de riesgos**

Define qué hacer con los riesgos priorizados.

Opciones habituales:

- Mitigar.
- Evitar.
- Transferir.
- Aceptar.
- Monitorear.
- Revisar periódicamente.

<!--
Notas del presentador:
Explicar que evaluar riesgos no es llenar una matriz por cumplir. Es un proceso para decidir dónde invertir esfuerzos. Una organización con recursos limitados debe priorizar los riesgos más críticos. El tratamiento debe considerar resultados de la evaluación, controles necesarios, responsables, criterios de aceptación y aprobación de los riesgos residuales por parte de los dueños del riesgo. Conectar este proceso con la mejora continua y con la necesidad de mantener información documentada.
-->

---
layout: slide-08-titulo-texto
---

::title::
Riesgo inherente y riesgo residual

::content::
El **riesgo inherente** es el nivel de riesgo antes de aplicar controles.

El **riesgo residual** es el nivel de riesgo que permanece después de implementar controles.

Ejemplo:

Un sistema con datos personales tiene riesgo de acceso no autorizado.

- Antes del control: contraseña simple.
- Control aplicado: autenticación multifactor.
- Después del control: el riesgo baja, pero no desaparece.

<!--
Notas del presentador:
Relacionar directamente con la evaluación de la semana. La respuesta correcta sobre riesgos residuales es que son aquellos que continúan existiendo después de aplicar medidas de control y que todavía pueden representar amenazas significativas. Aclarar que el riesgo residual no es un riesgo no identificado ni un riesgo exclusivamente documentado en la política. Es un riesgo reconocido, gestionado y aceptado o tratado de acuerdo con criterios definidos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Controles esenciales en un SGSI

::left::
**Controles organizacionales**

- Políticas.
- Roles y responsabilidades.
- Gestión de activos.
- Gestión de proveedores.
- Capacitación.
- Gestión de incidentes.
- Auditorías internas.

::right::
**Controles tecnológicos y operativos**

- Control de acceso.
- Copias de seguridad.
- Cifrado.
- Registro de eventos.
- Actualizaciones.
- Segmentación.
- Monitoreo de alertas.

<!--
Notas del presentador:
Aclarar que los controles no deben seleccionarse de forma automática. Deben responder al riesgo identificado, al contexto, al alcance y a los objetivos de seguridad. Un control puede ser excelente en una organización y poco pertinente en otra si no se relaciona con sus activos críticos. En la práctica, después de evaluar riesgos se seleccionan controles, se justifica su aplicación y se conserva evidencia.
-->

---
layout: slide-08-titulo-texto
---

::title::
Gestión de activos de información

::content::
La gestión de activos permite saber qué información existe, dónde se encuentra, quién es responsable y cómo debe protegerse.

Los procedimientos documentados deben indicar:

- Cómo se identifican los activos.
- Cómo se clasifican.
- Quién es responsable.
- Qué controles aplican.
- Cómo se revisan.
- Cómo se retiran o actualizan.

<!--
Notas del presentador:
Usar el ejemplo de una base de datos de estudiantes. No basta con saber que existe; se debe conocer quién la administra, qué datos contiene, qué nivel de sensibilidad tiene, quién puede acceder, dónde se aloja, cómo se respalda y qué controles la protegen. Relacionar con preguntas de evaluación sobre procedimientos de gestión de activos, donde suelen confundirse inventario, clasificación, protección y responsabilidades.
-->

---
layout: slide-08-titulo-texto
---

::title::
Indicadores y KPI en seguridad de la información

::content::
Los KPI permiten evaluar si el SGSI funciona y si sus controles producen resultados.

Ejemplos de KPI:

- Porcentaje de empleados capacitados.
- Número de auditorías internas realizadas.
- Tiempo de respuesta ante incidentes.
- Tasa de falsos positivos en alertas.
- Porcentaje de controles implementados.
- Cumplimiento de revisión de políticas.
- Cantidad de riesgos residuales no aceptados.

<!--
Notas del presentador:
Explicar que un indicador no es solo un número, sino una señal para decidir. Si la tasa de capacitación es baja, se requiere reforzar formación. Si hay muchos falsos positivos, se deben ajustar reglas de monitoreo. Si no se realizan auditorías, se pierde capacidad de detectar no conformidades. Relacionar con preguntas de evaluación sobre capacitación, auditorías internas y falsos positivos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Auditorías y mejora continua

::left::
**Auditorías**

El ciclo de auditoría permite revisar la conformidad del SGSI.

Fases habituales:

- Planificación.
- Ejecución.
- Informe.
- Seguimiento.
- Acción correctiva.

::right::
**Hallazgos**

Los hallazgos pueden clasificarse como:

- No conformidad mayor.
- No conformidad menor.
- Observación.
- Oportunidad de mejora.

Cada tipo exige una respuesta proporcional.

<!--
Notas del presentador:
Explicar que una auditoría no debe verse como castigo, sino como mecanismo de aprendizaje organizacional. Una no conformidad mayor puede indicar ausencia de un requisito crítico o falla sistemática; una menor puede ser un incumplimiento puntual; una observación puede anticipar un problema futuro. Relacionar con las preguntas de evaluación sobre clasificación de hallazgos, auditorías internas, auditores externos y mejora continua.
-->

---
layout: slide-08-titulo-texto
---

::title::
Cultura organizacional orientada a la seguridad

::content::
Un SGSI mejora cuando las personas comprenden su papel en la protección de la información.

Una cultura de seguridad implica:

- Conciencia sobre activos de información.
- Reporte oportuno de incidentes.
- Cumplimiento de políticas.
- Cuidado con contraseñas y accesos.
- Participación en capacitaciones.
- Prevención antes que reacción.
- Comunicación clara de objetivos.

<!--
Notas del presentador:
Insistir en el componente humano. Muchos incidentes no empiezan por una falla técnica, sino por desconocimiento, exceso de confianza, presión operativa o falta de comunicación. Una cultura de seguridad ayuda a que las personas entiendan por qué existen controles y cómo sus acciones contribuyen al SGSI. Relacionar con las preguntas de evaluación sobre comunicación de objetivos y cultura organizacional.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Relación con la evaluación de la semana

::left::
**Conceptos centrales evaluados**

- Riesgo residual.
- Evaluación de riesgos.
- Cuantificación de riesgos.
- Alcance del SGSI.
- Política de seguridad.
- Objetivos de seguridad.
- Comunicación interna.
- Gestión de activos.

::right::
**Procesos y medición**

- Selección de controles.
- KPI de capacitación.
- KPI de auditorías.
- Falsos positivos.
- Auditorías internas y externas.
- Hallazgos.
- Mejora continua.
- Cultura de seguridad.

<!--
Notas del presentador:
Explicar que la evaluación no debe abordarse como memorización de respuestas. Cada pregunta puede resolverse si el estudiante identifica a qué elemento del SGSI pertenece: riesgo, control, indicador, política, alcance, auditoría, cultura o mejora. Recomendar leer cada enunciado buscando palabras clave como “permanece después de controles”, “porcentaje de empleados”, “frecuencia de revisión”, “objetivos estratégicos”, “clasificación de hallazgos” o “procedimientos documentados”.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ejemplo aplicado: plataforma académica

::content::
Caso: una universidad gestiona calificaciones, datos personales, foros, evidencias de aprendizaje y reportes académicos en una plataforma LMS.

Posibles riesgos:

- Acceso no autorizado a calificaciones.
- Pérdida de disponibilidad durante cierres académicos.
- Exposición de datos personales.
- Copias de seguridad incompletas.
- Usuarios sin capacitación.
- Alertas de seguridad mal configuradas.

<!--
Notas del presentador:
Guiar al grupo para convertir el caso en una matriz simple. Preguntar: ¿cuáles son los activos?, ¿qué amenazas existen?, ¿qué vulnerabilidades aumentan el riesgo?, ¿qué impacto tendría un incidente?, ¿qué controles se podrían aplicar?, ¿qué indicador permitiría verificar el avance? Este ejemplo prepara la práctica guiada en Python, porque el código trabajará con activos, probabilidad, impacto, efectividad de controles y riesgo residual.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Lectura del caso

::rightTitle::
Decisiones SGSI

::left::
Activo principal:

- Plataforma LMS.
- Base de datos de usuarios.
- Calificaciones.
- Evidencias académicas.
- Registros de acceso.

Amenazas:

- Phishing.
- Acceso indebido.
- Fallo de respaldo.
- Malware.
- Error humano.

::right::
Controles posibles:

- Autenticación multifactor.
- Gestión de roles.
- Copias de seguridad.
- Cifrado.
- Capacitación.
- Monitoreo de eventos.
- Auditoría de accesos.
- Procedimiento de incidentes.

<!--
Notas del presentador:
Mostrar que un mismo caso permite trabajar varias preguntas de evaluación: alcance, activos, controles, indicadores, auditorías, cultura y mejora continua. Por ejemplo, el KPI de capacitación se relaciona con usuarios preparados; la tasa de falsos positivos se relaciona con monitoreo; la auditoría interna revisa conformidad; la política define reglas generales; el riesgo residual se analiza después de aplicar controles.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
ISO/IEC 27001

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/0WFEOuoic2A?si=Fl-iufG9LneWstqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!--
Notas del presentador:
Usar este recurso como introducción o refuerzo breve. El propósito pedagógico es presentar la norma ISO/IEC 27001 y su relación con la protección de la información, la gestión de riesgos y la mejora continua. Se recomienda proyectar un fragmento corto, no necesariamente el video completo. Antes de la clase, verificar duración, audio y pertinencia del segmento seleccionado.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad práctica guiada

::content::
**Título:** Simulador básico de evaluación de riesgos en un SGSI

**Propósito:** calcular riesgo inherente, riesgo residual y sugerir una decisión de tratamiento usando una matriz sencilla.

**Duración sugerida:** 18 minutos

**Producto esperado:**

- Código ejecutado correctamente.
- Captura del resultado en consola.
- Interpretación breve de un riesgo residual.
- Respuesta a dos preguntas de análisis.

<!--
Notas del presentador:
Presentar la práctica como una simulación didáctica, no como una herramienta profesional de auditoría. El objetivo es que el estudiante comprenda cómo se conectan activos, amenazas, impacto, probabilidad, controles y riesgo residual. La práctica se puede desarrollar en Google Colab, Replit o un entorno local con Python 3. No requiere instalación de librerías externas.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes necesarios y conexiones sugeridas

::left::
**Componentes necesarios**

- Navegador web.
- Cuenta de Google o acceso a Replit.
- Python 3.
- Código suministrado en clase.
- Caso base de activos de información.
- Captura de pantalla del resultado.

**Plataforma sugerida**

- Google Colab.
- Replit.
- Python local.

::right::
**Conexiones conceptuales sugeridas**

- Activo → amenaza.
- Amenaza → vulnerabilidad.
- Probabilidad × impacto → riesgo inherente.
- Control → reducción del riesgo.
- Riesgo residual → decisión de tratamiento.
- KPI → seguimiento.
- Auditoría → mejora continua.

<!--
Notas del presentador:
Aclarar que “conexiones sugeridas” no se refiere a conexiones físicas de hardware, sino al flujo lógico de análisis dentro del SGSI. El estudiante debe reconocer cómo una amenaza se transforma en una evaluación y cómo esa evaluación permite tomar decisiones. Este flujo conceptual se conecta con las preguntas sobre cuantificación de riesgos, riesgos residuales, controles, KPI y mejora continua.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Google Colab

::content::
1. Ingresar a Google Colab.

2. Crear un cuaderno nuevo.

3. Copiar el código completo en una celda.

4. Ejecutar la celda.

5. Revisar la matriz de riesgos generada.

6. Identificar el riesgo con mayor nivel residual.

7. Tomar una captura de pantalla del resultado.

8. Escribir una conclusión breve:

**¿Qué control reduce mejor el riesgo y qué riesgo residual permanece?**

<!--
Notas del presentador:
Indicar que Google Colab es gratuito y funciona desde el navegador. Si algún estudiante no tiene cuenta, puede observar la ejecución del docente y realizar el análisis con base en la salida proyectada. Recalcar que el entregable no es solo la captura, sino la interpretación: el estudiante debe explicar qué significa el riesgo residual y qué decisión de tratamiento se recomienda.
-->

---
layout: slide-08-titulo-texto
---

::title::
Código completo en Python

::content::
```python
# =============================================================================
# Simulador básico de evaluación de riesgos para un SGSI
# Curso: Gestión de la Seguridad de la Información
# Tema: ISO/IEC 27001, riesgo inherente, controles y riesgo residual
# Plataforma sugerida: Google Colab, Replit o Python 3 local
# =============================================================================

from dataclasses import dataclass
from typing import List


@dataclass
class RiesgoSGSI:
    activo: str
    amenaza: str
    vulnerabilidad: str
    probabilidad: int      # Escala de 1 a 5
    impacto: int           # Escala de 1 a 5
    control: str
    eficacia_control: int  # Porcentaje de 0 a 100
    responsable: str

    def riesgo_inherente(self) -> int:
        """Calcula el riesgo antes de aplicar controles."""
        return self.probabilidad * self.impacto

    def riesgo_residual(self) -> float:
        """Calcula el riesgo que permanece después del control."""
        reduccion = self.eficacia_control / 100
        residual = self.riesgo_inherente() * (1 - reduccion)
        return round(residual, 2)

    def nivel(self, valor: float) -> str:
        """Clasifica el riesgo según una escala didáctica."""
        if valor >= 18:
            return "CRÍTICO"
        elif valor >= 12:
            return "ALTO"
        elif valor >= 6:
            return "MEDIO"
        elif valor > 0:
            return "BAJO"
        return "CONTROLADO"

    def tratamiento_sugerido(self) -> str:
        """Sugiere una decisión de tratamiento según el riesgo residual."""
        residual = self.riesgo_residual()

        if residual >= 12:
            return "Mitigar de inmediato y revisar controles adicionales."
        elif residual >= 6:
            return "Mitigar, monitorear y asignar seguimiento periódico."
        elif residual > 0:
            return "Aceptar con aprobación del responsable y monitoreo."
        return "Mantener control y conservar evidencia de seguimiento."


def calcular_kpi_capacitacion(total_empleados: int, empleados_capacitados: int) -> float:
    """Calcula el porcentaje de cumplimiento de capacitación."""
    if total_empleados == 0:
        return 0.0
    return round((empleados_capacitados / total_empleados) * 100, 2)


def calcular_tasa_falsos_positivos(total_alertas: int, alertas_no_amenazantes: int) -> float:
    """Calcula la tasa de falsos positivos en monitoreo de seguridad."""
    if total_alertas == 0:
        return 0.0
    return round((alertas_no_amenazantes / total_alertas) * 100, 2)


def imprimir_riesgo(riesgo: RiesgoSGSI) -> None:
    """Muestra el análisis de un riesgo en consola."""
    inherente = riesgo.riesgo_inherente()
    residual = riesgo.riesgo_residual()

    print("=" * 78)
    print(f"Activo:               {riesgo.activo}")
    print(f"Amenaza:              {riesgo.amenaza}")
    print(f"Vulnerabilidad:       {riesgo.vulnerabilidad}")
    print(f"Responsable:          {riesgo.responsable}")
    print("-" * 78)
    print(f"Probabilidad:         {riesgo.probabilidad}/5")
    print(f"Impacto:              {riesgo.impacto}/5")
    print(f"Riesgo inherente:     {inherente} | Nivel: {riesgo.nivel(inherente)}")
    print(f"Control aplicado:     {riesgo.control}")
    print(f"Eficacia control:     {riesgo.eficacia_control}%")
    print(f"Riesgo residual:      {residual} | Nivel: {riesgo.nivel(residual)}")
    print(f"Tratamiento sugerido: {riesgo.tratamiento_sugerido()}")
    print("=" * 78)
    print()


def main() -> None:
    print("\nSIMULADOR BÁSICO DE RIESGOS PARA UN SGSI")
    print("Escala: probabilidad 1-5, impacto 1-5, eficacia del control 0-100%")
    print("Objetivo: comprender riesgo inherente, control y riesgo residual.\n")

    riesgos: List[RiesgoSGSI] = [
        RiesgoSGSI(
            activo="Plataforma LMS institucional",
            amenaza="Acceso no autorizado a calificaciones",
            vulnerabilidad="Contraseñas débiles y ausencia de MFA",
            probabilidad=4,
            impacto=5,
            control="Autenticación multifactor y política de contraseñas",
            eficacia_control=70,
            responsable="Coordinación de TI"
        ),
        RiesgoSGSI(
            activo="Base de datos de estudiantes",
            amenaza="Exposición de datos personales",
            vulnerabilidad="Permisos excesivos en perfiles administrativos",
            probabilidad=3,
            impacto=5,
            control="Gestión de roles, revisión de accesos y registros de auditoría",
            eficacia_control=65,
            responsable="Administrador de datos"
        ),
        RiesgoSGSI(
            activo="Copias de seguridad académicas",
            amenaza="Pérdida de disponibilidad ante falla técnica",
            vulnerabilidad="Respaldos no verificados periódicamente",
            probabilidad=3,
            impacto=4,
            control="Plan de copias de seguridad y prueba de restauración mensual",
            eficacia_control=80,
            responsable="Equipo de infraestructura"
        ),
        RiesgoSGSI(
            activo="Correo institucional",
            amenaza="Phishing dirigido a docentes y estudiantes",
            vulnerabilidad="Baja capacitación en identificación de mensajes fraudulentos",
            probabilidad=5,
            impacto=4,
            control="Capacitación obligatoria y filtro antiphishing",
            eficacia_control=55,
            responsable="Oficial de seguridad"
        )
    ]

    for riesgo in riesgos:
        imprimir_riesgo(riesgo)

    riesgo_mayor = max(riesgos, key=lambda r: r.riesgo_residual())

    print("RIESGO RESIDUAL MÁS RELEVANTE")
    print("-" * 78)
    print(f"Activo afectado:      {riesgo_mayor.activo}")
    print(f"Riesgo residual:      {riesgo_mayor.riesgo_residual()}")
    print(f"Nivel:                {riesgo_mayor.nivel(riesgo_mayor.riesgo_residual())}")
    print(f"Decisión sugerida:    {riesgo_mayor.tratamiento_sugerido()}")
    print()

    total_empleados = 120
    empleados_capacitados = 98
    total_alertas = 250
    alertas_no_amenazantes = 72
    auditorias_internas_anuales = 3

    kpi_capacitacion = calcular_kpi_capacitacion(total_empleados, empleados_capacitados)
    tasa_falsos_positivos = calcular_tasa_falsos_positivos(
        total_alertas,
        alertas_no_amenazantes
    )

    print("INDICADORES DE SEGUIMIENTO DEL SGSI")
    print("-" * 78)
    print(f"KPI capacitación obligatoria: {kpi_capacitacion}%")
    print(f"Tasa de falsos positivos:     {tasa_falsos_positivos}%")
    print(f"Auditorías internas al año:   {auditorias_internas_anuales}")
    print()

    print("PREGUNTAS PARA ANALIZAR")
    print("-" * 78)
    print("1. ¿Qué riesgo residual debería priorizar la organización y por qué?")
    print("2. ¿Qué control adicional podría reducir el riesgo residual más alto?")
    print("3. ¿Qué KPI ayuda a evidenciar mejora continua en este caso?")
    print("4. ¿Qué información debería conservarse como evidencia del SGSI?")


if __name__ == "__main__":
    main()
```

<!--
Notas del presentador:
Explicar brevemente la estructura del código antes de ejecutarlo. Mostrar que cada riesgo tiene activo, amenaza, vulnerabilidad, probabilidad, impacto, control, eficacia del control y responsable. El cálculo de riesgo inherente se realiza multiplicando probabilidad por impacto. El riesgo residual se calcula reduciendo el valor según la eficacia estimada del control. Aclarar que esta fórmula es simplificada para fines pedagógicos; en organizaciones reales pueden usarse metodologías más elaboradas, criterios de aceptación y matrices aprobadas por la dirección.
-->

---
layout: slide-08-titulo-texto
---

::title::
Lectura de resultados de la práctica

::content::
Después de ejecutar el código, cada estudiante debe identificar:

- El riesgo inherente más alto.
- El riesgo residual más relevante.
- El control con mayor reducción.
- El control que requiere fortalecimiento.
- El KPI de capacitación.
- La tasa de falsos positivos.
- La decisión de tratamiento sugerida.

La evidencia mínima será una captura de pantalla de la salida en consola.

<!--
Notas del presentador:
Orientar la revisión de resultados proyectando la consola. Preguntar: ¿el riesgo con mayor impacto siempre es el más prioritario?, ¿qué ocurre si la probabilidad es baja?, ¿qué pasa si el control tiene poca eficacia?, ¿cuándo se acepta un riesgo residual?, ¿cuándo se requiere mitigarlo? Aprovechar la salida del código para conectar con preguntas de evaluación sobre cuantificación de riesgos, riesgos residuales e indicadores.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Preguntas de análisis

::left::
**Análisis individual**

- ¿Qué activo requiere mayor protección?
- ¿Qué amenaza parece más probable?
- ¿Qué vulnerabilidad facilita el incidente?
- ¿Qué control reduce mejor el riesgo?
- ¿Qué riesgo residual permanece?

::right::
**Discusión grupal**

- ¿El riesgo residual puede eliminarse totalmente?
- ¿Quién debe aprobar la aceptación del riesgo?
- ¿Qué KPI ayuda a tomar decisiones?
- ¿Cómo se evidencia la mejora continua?
- ¿Qué hallazgo podría aparecer en una auditoría?

<!--
Notas del presentador:
Dar de tres a cinco minutos para reflexión individual y luego seleccionar dos o tres intervenciones. La discusión debe mostrar que el riesgo residual no es un error del sistema, sino una realidad que debe gestionarse. Enfatizar que aceptar un riesgo no significa ignorarlo; significa reconocerlo, documentarlo y aprobarlo de acuerdo con criterios definidos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Errores frecuentes que conviene evitar

::content::
- Confundir riesgo residual con riesgo no identificado.
- Pensar que un SGSI es solo tecnología.
- Definir el alcance sin justificar límites.
- Redactar políticas sin comunicación interna.
- Medir indicadores sin tomar decisiones.
- Hacer auditorías sin seguimiento.
- Aceptar riesgos sin responsable.
- Seleccionar controles sin análisis previo.

<!--
Notas del presentador:
Usar esta diapositiva como recapitulación preventiva antes del cierre. Explicar que muchos errores provienen de memorizar definiciones sin comprender el flujo del sistema. En un SGSI, cada elemento debe conectarse: la política orienta, los objetivos concretan, los riesgos priorizan, los controles reducen, los KPI evidencian, las auditorías verifican y la mejora continua ajusta.
-->

---
layout: slide-08-titulo-texto
---

::title::
Es momento de retomar...

::content::
Recordemos:

- ¿Qué diferencia hay entre riesgo inherente y residual?
- ¿Cómo se define el alcance de un SGSI?
- ¿Qué debe contener una política de seguridad?
- ¿Cómo se priorizan los controles?
- ¿Qué KPI evidencian mejora continua?
- ¿Cómo se clasifican hallazgos de auditoría?

<!--
Notas del presentador:
Administrar el tiempo de dudas agrupando preguntas similares. Si una pregunta requiere explicación extensa, responder lo esencial y sugerir retomarla en tutoría, foro o acompañamiento académico. Mantener el foco en los conceptos centrales de la evaluación: riesgo residual, evaluación de riesgos, controles, indicadores, auditorías, política, alcance y mejora continua.
-->

---
layout: slide-08-titulo-texto
---

::title::
Entonces...

::content::
Un SGSI robusto permite que la organización gestione la seguridad de la información de manera documentada, medible y mejorable.

La clave no está en eliminar todo riesgo, sino en:

- Identificarlo.
- Evaluarlo.
- Tratarlo.
- Medirlo.
- Auditarlo.
- Aprender de él.
- Mejorarlo continuamente.

<!--
Notas del presentador:
Cerrar con una idea integradora: la seguridad de la información es una responsabilidad organizacional compartida. La norma ISO/IEC 27001 ayuda a estructurar esa responsabilidad y a convertirla en procesos verificables. Recordar que el aprendizaje esperado no es repetir definiciones aisladas, sino comprender cómo se toman decisiones de protección de información dentro de un sistema de gestión.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio

::content::
Antes de finalizar, recuerde diligenciar la **Encuesta de Percepción Estudiantil** cuando esté disponible.

Su participación permite valorar la experiencia académica, fortalecer el acompañamiento docente y mejorar continuamente los espacios de formación.

<!--
Notas del presentador:
Realizar el recordatorio de manera clara y respetuosa. Explicar que la encuesta es un mecanismo institucional de mejora y que la retroalimentación estudiantil ayuda a revisar metodologías, recursos, actividades y acompañamiento. Evitar extender demasiado este punto para conservar el cierre dentro de los 90 minutos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Fuentes y recursos de apoyo

::content::
**Norma y marco conceptual**

- ISO/IEC 27001:2022 · Página oficial de ISO:  
  `https://www.iso.org/es/norma/27001`

**Videos sugeridos**

- ISO/IEC 27001:2022 Seguridad de la información:  
  `https://www.youtube.com/watch?v=u2DaBdg-odc`

- ¿Qué es un SGSI? | Todo sobre la Norma ISO 27001:  
  `https://www.youtube.com/watch?v=Mlotxe7tD-0`

- Webinar ISOTools. Gestión de riesgos de seguridad de la información:  
  `https://www.youtube.com/watch?v=jhCTFKumxzc`

<!--
Notas del presentador:
Esta diapositiva puede mantenerse al final como respaldo académico para el docente. Si se desea una presentación más limpia para proyección, puede omitirse durante la exposición y conservarse en el archivo fuente como soporte de curaduría. Recomendar al docente verificar los enlaces antes de la clase y seleccionar fragmentos breves para no afectar la distribución de los 90 minutos.
-->

---
layout: slide-12-cierre
---

::title::
Gracias

::content::
**Gestión de la Seguridad de la Información**

Semana 1 · Open Class

**Idea final:** un SGSI convierte la seguridad en una práctica organizada, medible y mejorable.

<!--
Notas del presentador:
Agradecer la participación, recordar el producto esperado de la práctica y cerrar reforzando la relación entre ISO/IEC 27001, gestión de riesgos, controles, indicadores, auditoría y mejora continua. Invitar a revisar el aula virtual y preparar la actividad evaluativa con énfasis en comprensión conceptual y aplicación práctica.
-->