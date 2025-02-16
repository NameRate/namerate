# **Circulación de Tokens $NMRT**

La tokenómica de $NMRT está diseñada para asegurar un equilibrio entre la utilidad, una distribución justa y el crecimiento a largo plazo del precio. Está orientada tanto a los usuarios finales como a los inversores, proporcionando a ambas categorías los máximos beneficios.

------

## Cómo Obtener $NMRT

##### Para la Comunidad

Los tokens se otorgan **gratuitamente** en el [Telegram MiniApp NameRate](https://t.me/NameRateBot/namerate) como recompensa por:

- **Valoración inicial del apodo:** al acceder por primera vez a la aplicación, recibirás inmediatamente una cierta cantidad de $NMRT por valorar tu apodo de Telegram (siempre que)
- !!! info "Nuevo Algoritmo - Nueva Recompensa"
      Con el lanzamiento de cada nueva versión del algoritmo, los nombres se vuelven a valorar y los tokens se otorgan nuevamente. Los $NMRT otorgados anteriormente no se retiran.
- **Votación por otros nombres:** mecánicas de juego que nos ayudan a validar el algoritmo
- !!! info "Ayuda en la Puntuación de Apodos"
      Hoy se ha implementado una mecánica en la que puedes valorar otros apodos (like-dislike) y recibir una recompensa por ello. Límite de 10 votos por día.
- **Realización de tareas:** esto es importante para la promoción de nuestro proyecto
- **Tus Amigos:** que se unan a través de tu enlace
- !!! info "Programa de Referidos"
      La forma más efectiva de obtener una gran cantidad de $NMRT de inmediato. Invita amigos directamente o comparte tu enlace de referido en tus redes sociales.

##### Para los Inversores

Los tokens se podrán adquirir antes de la cotización en dos rondas de presale. Cualquier participante del proyecto que solicite y sea aprobado en el WhiteList puede convertirse en inversor.
!!! info "NameRate Private Sale"
      Presale – la oportunidad de adquirir tokens al mejor precio, antes de salir al mercado. Solo se permite la participación de aquellos incluidos en el WhiteList. Anunciaremos la apertura del WhiteList por separado en la aplicación y en nuestra [comunidad de tg](https://t.me/+eANXlFDqGZ1iZTAy)

------

## Circulación de $NMRT

![](./images/NameRate_Usage_Light.png#only-light)
![](./images/NameRate_Usage_Dark.png#only-dark)

Inicialmente, los tokens para la comunidad se otorgarán de acuerdo con los saldos de $NMRT en @NameRateBot. Después de la cotización, los participantes podrán gestionarlos a su discreción, incluyendo retirarlos y comerciar con ellos en el exchange. Los tokens utilizados para la tokenización de apodos se emplearán para cubrir las comisiones de la red.

Las integraciones con contrapartes externas (marketplaces de TON, la plataforma principal de Telegram, traders de NFT, etc.) se implementan a través de la API de NameRate. Cualquier uso de la API implica el pago en tokens $NMRT, que los participantes del mercado podrán adquirir en el exchange. Los tokens obtenidos por el uso de la API se queman parcialmente y se devuelven parcialmente a la circulación como recompensas por ayudar a validar el modelo.

!!! info "Estímulo a la Demanda"
      Cualquier integración externa obliga a la contraparte a comprar el token en el mercado abierto, apoyando así su demanda. El mecanismo de quema está diseñado para reducir la oferta circulante y fortalecer el precio de $NMRT a largo plazo.

??? info annotate "Quema de $NMRT"
       Está destinado a estimular una escasez artificial. Cada quema se anuncia por separado y ocurre mediante el envío de tokens a una dirección pública "muerta" (1). Solo se queman los tokens recibidos como comisión por el uso. La proporción de tokens quemados variará: en las primeras etapas es 0%, y en etapas posteriores, hasta un 50%.

1. Una dirección "muerta" es una dirección con claves de acceso destruidas o una dirección inválida. Todos pueden ver las transacciones (o la ausencia de ellas), pero nadie tiene acceso.

## **Otros Usos de $NMRT**

**Tokenización de Activos**: $NMRT se utiliza para cubrir (o cubrir parcialmente) las comisiones de TON durante la tokenización de apodos y dominios

??? note annotate "Operaciones Pseudo-Gratuitas"
       En la solución objetivo, los tokens $NMRT se intercambian automáticamente por TON a través de un **pool de liquidez interno** (1), y luego se utiliza TON para pagar la comisión de la red

1. El pool de liquidez interno es una reserva flexible del par de tokens TON-$NMRT en equivalente monetario igual, para asegurar la liquidez en el intercambio técnico. La proporción de tokens en el pool interno responde a los cambios en la proporción en el pool público. El único agente que realiza los intercambios es la plataforma NameRate.

**Integraciones con Plataformas**: El token $NMRT puede utilizarse en integraciones con plataformas externas dentro del ecosistema TON (API de NameRate)

**Staking**: Después del TGE se crearán pools de staking en DEX (Stone.fi), donde los usuarios podrán recibir recompensas aumentadas

**Otros**: Esto incluye el pago en $NMRT para socios promocionales, compras en el marketplace de activos tokenizados y el pago de comisiones por transacciones seguras en p2p. Todas estas iniciativas están en fase de descubrimiento y se planean para una segunda etapa.
