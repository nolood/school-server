import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.STRING, unique: true })
  value: 'USER' | 'EDUCATOR' | 'MODERATOR' | 'ADMIN' | 'TESTER' | 'GM';
  @Column({ type: DataTypes.STRING })
  description: string;
}
