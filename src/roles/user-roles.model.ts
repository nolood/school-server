import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataTypes.INTEGER, unique: false })
  roleId: number;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.INTEGER, unique: false })
  userId: number;
}
