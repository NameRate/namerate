# **Cómo Funciona NameRate**

La base de NameRate es un modelo de aprendizaje automático **ininterpretable** que se reentrena continuamente con datos adicionales. Cuando un nuevo modelo de prueba se vuelve estable, reemplaza al principal, y el entrenamiento continúa en el nuevo modelo de prueba.

## Dónde se Recogen los Datos

### **1. Plataformas para la Venta de Apodos**

Datos abiertos de recursos donde se venden apodos y dominios.

> Hoy, las principales fuentes son:
>
> - **[Fragment](https://fragment.com/?filter=auction)** — una plataforma integrada con TON donde los usuarios compran y venden apodos.
> - **[GetGems](https://getgems.io/collection/EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi)** — un marketplace de NFT para el comercio de apodos y otros activos digitales.
>

**¿Qué se analiza?**

- Transacciones exitosas: apodos que se han vendido, sus precios y la velocidad de venta.
- Listados fallidos: apodos que no encontraron comprador y las razones de ello (precio, baja demanda, etc.).
- Popularidad de temáticas: categorías demandadas, por ejemplo, negocios, criptomonedas o nombres.

### **2. Tendencias del Mercado**

NameRate analiza datos externos relacionados con la popularidad de palabras y frases. Para ello se utilizan:

- **Subastas de motores de búsqueda:** estadísticas utilizadas para la colocación de publicidad contextual.
- **Fuentes en línea**: palabras populares en publicaciones en línea, frases frecuentemente mencionadas.
- **Redes sociales**: tendencias y temas clave, relevantes en Telegram, Twitter y otras plataformas.
- **Cultura popular y literatura**: palabras y expresiones que se encuentran frecuentemente en la cultura pop, libros o películas.

### **3. Preferencias de los Usuarios a través de NameRateBot**

A pesar del gran volumen de información indirecta para el entrenamiento, **aún hay datos insuficientes de ventas** para una validación de calidad del algoritmo.

Por ello, lanzamos la aplicación de Telegram [@NameRateBot](https://t.me/NameRateBot/namerate) para obtener opiniones de los usuarios. Para nosotros, es una **fuente de conocimiento muy valiosa** que utilizamos para verificar la calidad de las valoraciones. Y para los usuarios, es una buena forma de obtener nuestros tokens.

Actualmente se ha añadido una mecánica similar a Tinder:

- Los usuarios deslizan los apodos hacia la derecha (me gusta) o hacia la izquierda (no me gusta)
- Cada deslizamiento ayuda a validar los pesos del modelo
- Los usuarios reciben una recompensa en $NMRT

!!! annotate note ""
    Actualmente solo se ha añadido la mecánica de deslizamientos, pero para mejorar el siguiente modelo de prueba añadiremos otras, por ejemplo:
    
    - Mecánica con entrada del usuario (1)
    - Mecánica con comparación por pares (2)

1. Captura lo que les viene a la mente a los usuarios  
2. Aumenta la precisión de la respuesta

??? info "Para la Protección contra Fraude"
      - **Límite de deslizamientos**: no más de 10 deslizamientos por día, para prevenir manipulaciones
      - **Análisis de patrones anómalos**: si un usuario valora apodos demasiado rápido o de forma caótica, dichos datos se excluyen
---
## Principios del Algoritmo

NameRate es un modelo de ML **ininterpretable**. Esto significa que no se puede determinar con precisión por qué el algoritmo asignó una determinada valoración.
A continuación, presentamos un **ejemplo** que muestra **cómo podrían funcionar** los principios básicos y las características de mayor peso.

!!! info ""
    **Las características y sus pesos cambian** con cada actualización del modelo.
!!! info annotate ""
    El algoritmo actual utiliza todas las características que se enumeran a continuación, pero no se limita a ellas. **La interpretación de las características se proporciona solo a modo de referencia** (1)

1. Nuestro prototipo funcionó de manera similar.

### Ejemplo
Algunas características con alto impacto:

**Longitud del Apodo**

!!! example "Cuanto más corto, mejor:" 
    `@root` o `@final` son más valiosos que `@longnickname123`

**Caracteres No Alfabéticos**: como números o guiones bajos

!!! example "Los números en los apodos reducen el valor:" 

    `@josephine` es mejor que `@josephine12345`

!!! note ""
    Sin embargo, los números en un apodo aumentan su peso si añaden significado (por ejemplo, `@peer2peer` o `@season4`)

**Repeticiones**
!!! example "En general, las repeticiones de caracteres reducen el valor:" 
    `@eeenemy` pierde valor debido a repeticiones excesivas. Excepción: repeticiones como parte de una palabra con significado

!!! note ""
    Curiosamente, las repeticiones de palabras significativas tienen poco impacto en la valoración

**Carga Semántica**
!!! example "Las palabras y frases reales se valoran más" 
    `@space_jaguar` es mejor que `@qazws_jaguar`

**Popularidad:** Tendencias en búsquedas, literatura o redes sociales
!!! example "Más popular = mejor" 
    `@blockchain`, `@meta_boom` o `@music` se valoran más debido a su popularidad

!!! note ""
    Las tendencias se dividen en estáticas y dinámicas, así como por sus fuentes.
   
**Temática**: El valor de la temática lo determinan las tendencias y la subasta publicitaria en buscadores.
!!! example "Diccionarios" 
    Creamos y actualizamos diccionarios temáticos para determinar a qué categorías pertenece el apodo.
    
    Por ejemplo: negocios, criptomonedas, cultura pop, nombres, etc. Se contempla la anidación: en los diccionarios de primer nivel se encuentran diccionarios de segundo nivel, etc.

!!! note "Un apodo poco popular puede pertenecer a una temática popular y viceversa"
    Ejemplo: `@zkevmbidge` casi no se menciona en Internet – esto reduce su valor. Sin embargo, pertenece a una temática de alto valor – blockchain – lo que aumenta su valoración.

**Referencias Geográficas**: Tienen tanto un impacto positivo como negativo.
!!! example ""
    `@NYC_blah` o `@London_example` recibirán una influencia adicional por las características geográficas

Esta es una lista de las características más obvias y comprensibles con alto impacto. Además de estas, existen características de difícil interpretación (como el historial de ventas), características inestables y aquellas que no estamos dispuestos a compartir.
El cálculo actual no tiene en cuenta las conclusiones presentadas anteriormente, a pesar de su obviedad. Nos ayudas mucho cuando votas honestamente en la aplicación por los nombres que consideras buenos. Intencionalmente no proporcionamos criterios de "buen" apodo para que respondas según tus sensaciones.
