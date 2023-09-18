import { AppDataSource } from "./data-source"
import { Photo } from './entity/Photo'
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

  console.log("Inserting a new user into the database...")
  const user = new User()
  user.firstName = "Timber"
  user.lastName = "Saw"
  user.age = 25
  await AppDataSource.manager.save(user)
  console.log("Saved a new user with id: " + user.id)

  console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(User)
  console.log("Loaded users: ", users)

  console.log("Here you can setup and run express / fastify / any other framework.");

  const photo = new Photo();
  photo.name = 'Me and Bears';
  photo.description = 'I am near polar bears';
  photo.filename = 'photo-with-bear.jpg'
  photo.views = 1;
  photo.isPublished = true;

  await AppDataSource.manager.save(photo);
  console.log('Photo has been saved. Photo is', photo.id);

  const photoRepository = AppDataSource.getRepository(Photo);
  await photoRepository.save(photo);
  console.log('Photo has been saved. Photo is', photo.id);

  const savedPhotos = await AppDataSource.manager.find(Photo);
  console.log('All photos from the db: ', savedPhotos);

}).catch(error => console.log(error))
