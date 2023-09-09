import { DataTypes, UUIDV4 } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

interface UserCreationAttributes {
  username: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataTypes.UUIDV4,
    unique: true,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: number;
  @Column({ type: DataTypes.STRING, unique: true })
  email: string;
  @Column({ type: DataTypes.STRING })
  password: string;
  @Column({ type: DataTypes.STRING })
  nickname: string;
  @Column({ type: DataTypes.STRING, allowNull: false })
  fullName: string;
  @Column({ type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: ['USER'] })
  roles: string[];
}
