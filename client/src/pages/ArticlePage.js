import React from 'react'
import { useParams } from 'react-router-dom'
import Article from '../components/Article'

const ArticlePage = () => <Article uuid={useParams().uuid} />

export default ArticlePage
