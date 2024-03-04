import { Resolver, Query, Args } from '@nestjs/graphql'
import { UserWhereInput } from '../@generated/user/user-where.input'
import { User } from '../@generated/user/user.model'
import { PrismaService } from '../prisma/prisma.service'

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  exemplo(@Args('name', { nullable: true }) name?: string): string {
    return `Olá, ${name ?? 'Mundo'}!`
  }

  @Query(() => [User])
  async user(@Args('where') where: UserWhereInput) {
    return this.prisma.user.findMany({ where }) || []
  }

  //   @ResolveField()
  //   async posts(@Parent() author: Author) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
