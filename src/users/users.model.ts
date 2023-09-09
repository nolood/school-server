import { DataTypes } from 'sequelize';
import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface UserCreationAttributes {
  username: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({ type: DataTypes.STRING, unique: true })
  email: string;
  @Column({ type: DataTypes.STRING })
  password: string;
  @Column({ type: DataTypes.STRING })
  username: string;
  @Column({ type: DataTypes.STRING, allowNull: false })
  fullName: string;

  @BelongsToMany(() => User, () => UserRoles)
  roles: Role[];
}
