import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { PhotoMeta } from './PhotoMeta';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  // By default `string` is mapped to `varchar(255)`.
  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;

  @OneToOne(() => PhotoMeta, (photoMetadata) => photoMetadata.photo)
  metadata: PhotoMeta;

  static fake(): Photo {
    const photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    return photo;
  }
}
