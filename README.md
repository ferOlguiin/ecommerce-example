Hola compañero/a programador/a, en caso que clones este repositorio es importante que sepas que vas a necesitar de las siguientes variables de entorno para que el proyecto pueda funcionarte correctamente.
Las variables son:

VARIABLES DEL BACKEND \/

URIMONGO_DB=
PORT=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
llave_publica=
token_acceso=

VARIABLES DEL FRONTEND \/

REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENTID=
REACT_APP_TOKEN=

Estas son todas las variables necesarias para el correcto funcionamiento.

Tambien te comento, esta web tiene las funciones básicas con las que puedes obtener, crear, editar borrar y comprar productos, los cuales contienen varios datos entre ellos una imagen la cual se aloja en cloudinary. Hay diferentes secciones las cuales cada una contienen sus respectivas funciones y que haceres. El panel de administrador (al cual solo se puede acceder una vez logeado, TODOS los usuarios logeados son admins) contiene las funciones básicas para poder crear, editar, borrar, etc.

Primero que nada y antes de proseguir es importante que sepas que la compra de items sólo la podrás hacer en caso de que tengas una cuenta de prueba y una tarjeta de prueba, ambas proporcionada por mercado pago, ya que el "vendedor" de los items de esta web es un usuario de prueba y mercado pago no permite bajo ningún concepto que un usuario real pueda comprar a un usuario de prueba, como en este caso.

Un ejemplo para probar es, entrar en la sección de productos, elegir los items para simular una compra, dirigirse al carrito, modificar las unidades que se desearian comprar en cada productos y clickear el botón de compra. Este una vez ejecutado redirecciona a la interfaz creada por mercado pago para llevar a cabo todo el proceso de compra y registro de datos. Una vez que la compra se ejecutó esa interfaz arroja un resultado, el cual aparte de ver en la interfaz de mercado pago, también se puede ver en la web una vez ya redireccionado. Se pueden visualizar los datos del "estado del pago" y el "id de la compra/pago", estos datos podrian ser de utilidad tanto para el usuario como para el vendedor.
Luego estos datos pueden corroborarse en el admin panel en el botón de "buscar información de pago", una vez colocado el número y clickeado el botón de búsqueda se obtendrá la información correspondiente a ese identificador de pago.

En caso de que detectes algún error, me sería de muchisima utilidad el que me lo puedas comunicar. Muchas gracias, ojala te sirve el código y saludos!