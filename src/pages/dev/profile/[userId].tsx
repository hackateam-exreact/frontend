import { IUser, ProfileSummary } from 'components/Profile/ProfileSummary'

import { EditProfileBtn } from 'components/Profile/EditProfileBtn'
import { EditProfileModal } from 'components/Modal/EditProfileModal'
import { EditProfileProvider } from 'contexts/EditProfileContext'
import Head from 'next/head'

export default function ProfilePage() {
  const user: IUser = {
    id: '123',
    first_name: 'Luis Filipe',
    last_name: 'Fernandes Almeida',
    email: 'luisfilipe.faw@gmail.com',
    location: 'Balneário Camboriú',
    contact: '42988860098',
    status: 'Open',
    created_at: String(Date.now()),
    updated_at: String(Date.now())
  }

  return (
    <>
      <Head>
        <title>Luis Filipe | Devspot</title>
      </Head>

      <ProfileSummary user={user} />
      <EditProfileProvider>
        <EditProfileBtn user={user} />
        <EditProfileModal />
      </EditProfileProvider>
    </>
  )
}
