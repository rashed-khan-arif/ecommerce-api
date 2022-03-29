import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column({ length: 100, type: "varchar" })
    name: string | undefined
}