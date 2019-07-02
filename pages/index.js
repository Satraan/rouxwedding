import React from "react"
import Link from "next/link"
import Head from "../components/head"
import Nav from "../components/nav"
import Hero from "../components/hero"

const Home = () => (
  <div>
    <Head title="Home" />
    <Hero image="/static/Banner1.jpg">
      <h1>The Roux Wedding</h1>
    </Hero>
  </div>
)

export default Home
