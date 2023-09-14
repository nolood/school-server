import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

interface CourseCreationAttributes {
  title: string;
}

@Table({ tableName: 'courses' })
export class Course extends Model<Course, CourseCreationAttributes> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
  })
  title: string;

  @Column({
    type: DataTypes.INTEGER,
  })
  description: number;

  @Column({ type: DataTypes.INTEGER })
  price: number;

  @Column({
    type: DataTypes.STRING,
  })
  type: string;
}
