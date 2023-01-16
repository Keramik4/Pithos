import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Product } from "../products/product-entity"

@Entity()
export class Storage {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 30 })
  name: string

  @Column({
    type: "smallint",
    nullable: true,
  })
  state: number

  @Column({
    type: "date",
    nullable: true,
  })
  expirationDate: string

  @ManyToOne(() => Product, (product) => product.storages, { nullable: true })
  product: Product
}
