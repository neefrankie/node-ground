import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { DateScalar } from 'src/common/scalars/date.scalar';

@Module({
  providers: [RecipesService, RecipesResolver, DateScalar],
})
export class RecipesModule {}
