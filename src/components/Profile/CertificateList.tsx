import { CertificateItem } from './CertificateItem'
import { ICertificate } from 'interfaces/certificate'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'

interface CertificateListProps {
  certificates: ICertificate[]
}

export function CertificateList({ certificates }: CertificateListProps) {
  return (
    <ProfileSectionContainer title={`Certificados (${certificates.length})`}>
      {certificates.map((certificate) => (
        <CertificateItem key={certificate.id} certificate={certificate} />
      ))}
    </ProfileSectionContainer>
  )
}
