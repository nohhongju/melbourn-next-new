import { Footer, Layout, Pagination, Nav, Table, Modal } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head/>
      <Nav/>
      <Table/>
      <Pagination/>
      <Footer/>
      <Modal/>
    </Layout>
  )
}
