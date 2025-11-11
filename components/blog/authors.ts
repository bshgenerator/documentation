export type Author = {
    fullname: string
    tagline: string
    avatar: string
    links: {
        github: string
        in: string
        website: string
    }
}

export type Authors = Record<string, Author>

export default {
    bousalih: {
        fullname: 'Bousalih Hamza',
        tagline: 'Software Engineer | BSH Solutions Founder',
        avatar: '/avatar/hamza_bousalih.avatar.jpeg',
        links: {
            github: 'https://github.com/hamza-bousalih',
            in: 'https://www.linkedin.com/in/bousalih-hamza/',
            website: 'https://hamza.bousalih.com'
        }
    }
} as Authors
