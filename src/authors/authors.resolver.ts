import { Resolver, Query } from '@nestjs/graphql'

@Resolver()
export class AuthorsResolver {
  constructor() {}

  @Query(() => String)
  exemplo(): string {
    return 'Olá, Mundo!'
  }

  //   @Query((returns) => Author)
  //   async author(@Args('id', { type: () => Int }) id: number) {
  //     return this.authorsService.findOneById(id);
  //   }

  //   @ResolveField()
  //   async posts(@Parent() author: Author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
