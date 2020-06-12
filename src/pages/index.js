import React from "react"
import Header from "../components/header";

export default function Home() {
  return (
      <>
        <Header />
        <div style={{color: `purple`}}>
          <h1>Hello Gatsby!</h1>
          <p>What a world.</p>
        </div>
      </>
  );
}
