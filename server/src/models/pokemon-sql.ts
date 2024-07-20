const getPokemonQuery = `SELECT * FROM pokemon;`;

const getPokemonQueryByNumber = `SELECT * FROM pokemon WHERE number = ?;`;

const deletePokemonQueryByNumber = `DELETE FROM pokemon WHERE number = ?;`;

const createPokemonQuery = `INSERT INTO pokemon (name, types, imageUrl) VALUES (?, ?, ?);`;

export { getPokemonQuery, getPokemonQueryByNumber, deletePokemonQueryByNumber, createPokemonQuery };
