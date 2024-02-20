import { EntityRepository } from '@mikro-orm/mysql';
import { User } from './user.entity';

export class UserRepository extends EntityRepository<User> {
    async getRoster(): Promise<any[]> {
        const knex = this.em.getKnex();
        const result = await knex('user as u')
            .leftJoin('article as a', 'u.id', 'a.author_id')
            .leftJoin('user_favorites as uf', 'a.id', 'uf.article_id')
            .select(
                'u.username',
                'u.image',
                knex.raw('COUNT(a.id) as articles_count'),
                knex.raw('COALESCE(SUM(a.favorites_count), 0) as favorites_count'),
                knex.raw('MIN(a.created_at) as first_article_date')
            )
            .groupBy('u.id')
            .orderBy('favorites_count', 'desc')
            .orderBy('u.username');
        
        return result;
    }
}
