declare module '@/types/profile' {
  export interface GithubProfile {
    name: string
    html_url: string
    bio: string
    login: string
    company?: string
    followers: number
  }
}
