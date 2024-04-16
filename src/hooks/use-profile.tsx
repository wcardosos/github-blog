import { GithubProfile } from '@/types/profile'
import { useEffect, useState } from 'react'

export function useProfile() {
  const [profile, setProfile] = useState<GithubProfile>({
    name: '',
    html_url: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  useEffect(() => {
    fetch('https://api.github.com/users/wcardosos', {
      method: 'GET',
    }).then((response) => response.json().then((data) => setProfile(data)))
  }, [])

  return profile
}
