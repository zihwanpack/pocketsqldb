import { pool } from '../../config/dbConfig';
import { errStatus } from '../../config/errorStatus';
import {
  deletePokemonQueryByNumber,
  getPokemonQuery,
  getPokemonQueryByNumber,
  createPokemonQuery,
  updatePokemonQuery,
} from './pokemon-sql';
import { CustomError } from '../../config/customError';
import { IOnePokemonProps, TDBItem, TPokemonData } from '../../types';

const getPokemon = async (number: number, limit: number): Promise<TDBItem[]> => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await pool.query(getPokemonQuery, [number, limit]);
    connection.release();
    return rows as TDBItem[];
  } catch (err) {
    throw new CustomError(errStatus.PARAMETER_IS_WRONG);
  }
};

const getOnePokemon = async (number: IOnePokemonProps) => {
  try {
    const connection = await pool.getConnection();
    const [row] = await pool.query(getPokemonQueryByNumber, [typeof number === 'string' ? parseInt(number) : number]);
    connection.release();
    const result = row[0];
    return result;
  } catch (err) {
    throw new CustomError(errStatus.PARAMETER_IS_WRONG);
  }
};

const deletePokemon = async (number: IOnePokemonProps) => {
  try {
    const connection = await pool.getConnection();
    let row;
    if (number !== undefined && !isNaN(Number(number))) {
      [row] = await pool.query(deletePokemonQueryByNumber, [typeof number === 'string' ? parseInt(number) : number]);
    } else {
      throw new CustomError(errStatus.PARAMETER_IS_WRONG);
    }
    connection.release();
    const result = row;
    return result;
  } catch (err) {
    throw new CustomError(errStatus.PARAMETER_IS_WRONG);
  }
};

const postPokemon = async (poketData: TPokemonData) => {
  try {
    const connection = await pool.getConnection();
    const [row] = await connection.query(createPokemonQuery, [poketData.name, poketData.types, poketData.image]);
    connection.release();
    const result = row[0];
    return result;
  } catch (err) {
    throw new CustomError(errStatus.PARAMETER_IS_WRONG);
  }
};

const updatePokemon = async (number: IOnePokemonProps, poketData: TPokemonData) => {
  try {
    const connection = await pool.getConnection();
    const [row] = await connection.query(updatePokemonQuery, [
      poketData.name,
      poketData.types,
      poketData.image,
      number,
    ]);
    connection.release();
    const result = row[0];
    return result;
  } catch (err) {
    throw new CustomError(errStatus.PARAMETER_IS_WRONG);
  }
};

export { getPokemon, getOnePokemon, deletePokemon, postPokemon, updatePokemon };
