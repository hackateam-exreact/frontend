import { Link as ChakraLink, Icon, IconButton } from '@chakra-ui/react'

import { FiTrash } from 'react-icons/fi'
import { ICertificate } from 'interfaces/certificate'
import Link from 'next/link'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'
import { Protected } from 'components/Protected'
import { useCreateCertificate } from 'hooks/useCreateCertificate'

interface CertificateItemProps {
  certificate: ICertificate
}

export function CertificateItem({ certificate }: CertificateItemProps) {
  const { handleDeleteCertificate } = useCreateCertificate()

  return (
    <ProfileSectionItemContainer pos="relative">
      <Protected>
        <IconButton
          aria-label="Excluir certificado"
          icon={<Icon as={FiTrash} />}
          onClick={() => handleDeleteCertificate(certificate.id)}
          pos="absolute"
          bottom="2"
          right="2"
        />
      </Protected>
      <Link href={certificate.url} passHref={true}>
        <ChakraLink>
          <ProfileSectionItemHeading color="blue.500">
            {certificate.title}
          </ProfileSectionItemHeading>
        </ChakraLink>
      </Link>
    </ProfileSectionItemContainer>
  )
}
