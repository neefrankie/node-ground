import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class PhotoMeta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  height: number;

  @Column("int")
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  // This decorator allows us to create a one-to-one
  // relationship between two entities.
  // @OneToOne(() => Photo)
  @OneToOne(() => Photo, (photo) => photo.metadata)
  // This decorator indicates that this side of the relationship
  // will own the relationship.
  // Relations can be unidirectional or bindirectional.
  // Only one side of the relational can be owning.
  // @JoinColumn is required on the owner side of the
  // relationship.
  @JoinColumn()
  photo: Photo;
  // photo: Relation<Photo>; // To avoid circular dependency.

  static fake(photo: Photo): PhotoMeta {
    const m = new PhotoMeta();
    m.height = 640;
    m.width = 480;
    m.compressed = true;
    m.comment = "cybershoot";
    m.orientation = "portraint";
    m.photo = photo;

    return m;
  }
}
