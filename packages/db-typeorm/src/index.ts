import { AppDataSource } from "./data-source"
import { Photo } from './entity/Photo'
import { PhotoMeta } from './entity/PhotoMeta';

AppDataSource.initialize().then(async () => {
  const photo = Photo.fake();
  await AppDataSource.manager.save(photo);
  console.log("Photo has been saved. Photo id is", photo.id);

  const savedPhotos = await AppDataSource.manager.find(Photo);
  console.log('All photos from the db: ', savedPhotos);

  // Using Repositores
  const photoRepository = AppDataSource.getRepository(Photo);

  await photoRepository.save(photo);
  console.log('Photo has been saved');

  const savedPhotos2 = await photoRepository.find();
  console.log('All photo from the db: ', savedPhotos2);

  // Loading from the database
  const firstPhoto = await photoRepository.findOneBy({
    id: 2,
  });
  console.log("First photo from the db: ", firstPhoto);

  const meAndBearsPhoto = await photoRepository.findOneBy({
    name: "Me and Bears",
  });
  console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

  const allViewedPhotos = await photoRepository.findBy({
    views: 1,
  });
  console.log('All viewed photos: ', allViewedPhotos);

  const allPublishedPhotos = await photoRepository.findBy({
    isPublished: true,
  });
  console.log('All published photos: ', allPublishedPhotos);

  const [photos, photoCount] = await photoRepository.findAndCount();
  console.log("All photos: ", photos);
  console.log("Photos count: ", photoCount);

  // Updating in the database
  firstPhoto.name = "Me, my friends and polar bears";
  await photoRepository.save(firstPhoto);

  // Removing from the database
  await photoRepository.remove(photo);

  // Creating a one-to-one relation
  const p9 = Photo.fake();
  const pm = PhotoMeta.fake(p9);
  const metadataRepository = AppDataSource.getRepository(PhotoMeta);
  await photoRepository.save(p9);
  await metadataRepository.save(pm)
  console.log("Meta is saved, and the relation between metadata and photo is created in the database");

  // Loading objects with their relations
  const photosWithMeta = await photoRepository.find({
    relations: {
      metadata: true,
    }
  });
  console.log("Photos with metadata: ", photosWithMeta);
}).catch(error => console.log(error))
