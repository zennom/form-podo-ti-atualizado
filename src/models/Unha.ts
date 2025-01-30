import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../database/mysql';
import Cliente from './Cliente';

class Unha extends Model {
  public id_unha!: number;
  public id_cliente!: number;
  public dedo!: string;
  public estado!: string;
  public observacoes!: string;
  public data_consulta!: Date;
}

Unha.init({
  id_unha: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id_cliente'
    }
  },
  dedo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  observacoes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  data_consulta: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'unhas',
  timestamps: false 
});


export default Unha;