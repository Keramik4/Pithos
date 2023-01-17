import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Storage } from "../storage/storage-entity"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 30 })
  name: string

  @Column("smallint")
  capacity: number

  @OneToMany(() => Storage, (storage) => storage.product, { nullable: true })
  storages: Storage[]
}
