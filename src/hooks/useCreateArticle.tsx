import { CreateArticleContext } from 'contexts/CreateArticleContext'
import { useContext } from 'react'

export const useCreateArticle = () => useContext(CreateArticleContext)
