import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database/mysql'

class Cliente extends Model {
  public id_cliente!: number;
  public nome!: string;
  public data_nascimento!: Date;
  public email!: string;
  public telefone!: string;
  public endereco!: string;
  public sexo!: string;  
}
Cliente.init({
  id_cliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sexo: {
    type: DataTypes.ENUM('Feminino', 'Masculino', 'Outro'),
    allowNull: false,  
  },
}, {
  sequelize,
  tableName: 'clientes',
  timestamps: false
});

export default Cliente
