import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserWhereInput } from 'src/@generated/user/user-where.input';
import { User } from 'src/@generated/user/user.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  exemplo(): string {
    return 'Olá, Mundo!';
  }

  @Query(() => [User])
  async user(@Args('where') where: UserWhereInput) {
    return this.prisma.user.findMany({ where }) || [];
  }

  //   @ResolveField()
  //   async posts(@Parent() author: Author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
