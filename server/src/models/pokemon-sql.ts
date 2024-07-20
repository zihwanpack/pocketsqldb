// store.sql.js

const getPokemonQuery = `SELECT * FROM pokemon;`;

const getPokemonQueryByNumber = `SELECT * FROM pokemon WHERE number = ?;`;

const deletePokemonQueryByNumber = `DELETE FROM pokemon WHERE number = ?;`;

export { getPokemonQuery, getPokemonQueryByNumber, deletePokemonQueryByNumber };
