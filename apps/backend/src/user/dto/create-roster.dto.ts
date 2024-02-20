// roster.dto.ts
export class RosterDto {
    constructor(
        public username: string,
        public profileLink: string,
        public articlesCount: number,
        public favoritesCount: number,
        public firstArticleDate: string | null
    ) {}
}
