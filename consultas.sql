

CREATE TABLE IF NOT EXISTS `respuestas` (
  `respuesta_id` int(11) PRIMARY KEY,
  `id_jugada` int(11) NOT NULL,
  `jugador_codigo` int(11) NOT NULL,
  `respuesta_pregunta` int(11) NOT NULL,
  `respuesta_vuelta` int(11) NOT NULL,
  `respuesta_respuesta` int(11) NOT NULL,
  `jugador_edad` int(11) NOT NULL,
  `jugador_nombre` varchar(255) NOT NULL,
  `jugador_sexo` int(11) NOT NULL,
  `jugador_obs` text NOT NULL
);