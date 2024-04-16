import { api } from '@/lib/api'
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

  const fetchProfile = async () => {
    const response = await api.get('/users/wcardosos')

    setProfile(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return profile
}
