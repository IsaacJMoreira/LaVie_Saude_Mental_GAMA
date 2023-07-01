CREATE TABLE pacientes (
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    nascimento DATE
);
CREATE TABLE psicologos (
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR (30) NOT NULL,
    apresentacao VARCHAR(1000)
);
CREATE TABLE atendimento (
	id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_psicologo INTEGER NOT NULL,
    id_paciente INTEGER NOT NULL,
    atendimento DATETIME,
    OBS VARCHAR(1000),
    CONSTRAINT psicologo FOREIGN KEY (id_psicologo) REFERENCES psicologos(id),
	CONSTRAINT paciente FOREIGN KEY (id_paciente) REFERENCES pacientes(id)
);