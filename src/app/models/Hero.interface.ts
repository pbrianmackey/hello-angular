export interface Hero {
    id: Number;
    Name: string;
    DOB: string;
}

export interface HeroResolved {
    hero: Hero;
    error?: string;
}