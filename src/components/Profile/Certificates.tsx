import { Text, Link } from '@chakra-ui/react'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'

interface CertificatesProps {
  certificatesName: string
  certificatesURL: string
}

export function Certificates({
  certificatesName,
  certificatesURL
}: CertificatesProps) {
  return (
    <ProfileSectionContainer title="Certificados">
      <ProfileSectionItemContainer
        mode="flex"
        alignItems="center"
        justifyContent="space-between"
        py="6"
      >
        <Text fontSize="1.5rem" fontFamily="Poppins">
          {certificatesName}
        </Text>
        <Link
          href={certificatesURL}
          isExternal
          color="green.500"
          fontSize="1rem"
          fontFamily="Ubuntu"
          fontWeight="700"
        >
          Ver o certificado
        </Link>
      </ProfileSectionItemContainer>
    </ProfileSectionContainer>
  )
}
