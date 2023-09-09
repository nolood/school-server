import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataTypes.STRING, unique: true })
  value: string;
  @Column({ type: DataTypes.STRING })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
