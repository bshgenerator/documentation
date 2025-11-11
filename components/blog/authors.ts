export type Author = {
    fullname: string
    tagline: string
    avatar: string
    links: {
        github: string
        in: string
    }
}

export type Authors = Record<string, Author>

export default {
    bousalih: {
        fullname: 'Bousalih Hamza',
        tagline: 'Software Engineer | Founder',
        avatar: '/avatar/hamza_bousalih.avatar.jpg',
        links: {
            github: 'https://github.com/hamza-bousalih',
            in: 'https://www.linkedin.com/in/hamza-bousalih'
        }
    }
} as Authors
