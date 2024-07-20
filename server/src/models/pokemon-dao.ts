import { pool } from '../../config/db-config';
import { errStatus } from '../../config/errorStatus';
import { deletePokemonQueryByNumber, getPokemonQuery, getPokemonQueryByNumber } from './pokemon-sql';
import { BaseError } from '../../config/baseError';
import { IOnePokemonProps } from '../../types';

const getPokemon = async (number: IOnePokemonProps = {}) => {
  try {
    const connection = await pool.getConnection();

    let data;
    if (number === undefined || number === null) {
      [data] = await pool.query(getPokemonQuery);
    } else {
      [data] = await pool.query(getPokemonQueryByNumber, [typeof number === 'string' ? parseInt(number) : number]);
    }

    connection.release();
    return data;
  } catch (err) {
    throw new BaseError(errStatus.PARAMETER_IS_WRONG);
  }
};

const deletePokemon = async (number: IOnePokemonProps = {}) => {
  try {
    const connection = await pool.getConnection();

    let data;
    if (number !== undefined && !isNaN(Number(number))) {
      [data] = await pool.query(deletePokemonQueryByNumber, [typeof number === 'string' ? parseInt(number) : number]);
    } else {
      throw new BaseError(errStatus.PARAMETER_IS_WRONG);
    }
    connection.release();
    return data;
  } catch (err) {
    throw new BaseError(errStatus.PARAMETER_IS_WRONG);
  }
};

export { getPokemon, deletePokemon };
