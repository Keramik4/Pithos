import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 30 })
  name: string

  @Column("smallint")
  capacity: number
}
