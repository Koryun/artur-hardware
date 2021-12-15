import Head from "next/head";
import Section1 from "../sections/PeojectPage/Section1";
import Section2 from "../sections/PeojectPage/Section2";
import Section3 from "../sections/PeojectPage/Section3";
import Section4 from "../sections/PeojectPage/Section4";

export default function ProjectOne() {
  return (
    <>
      <Head>
        <title>Hardware Design House | Project page</title>

        <meta name="description" content="Project with all possible details." />

        <meta
          name="keywords"
          content="Hardware design, hardware projects, requirements analysis and initial research, concept design, design of hardware"
        />
        {/* Google */}
        <meta itemProp="name" content="Project Page" />
        <meta itemProp="description" content="" />
        <meta itemProp="image" content="/logo.svg" />

        {/* Facebook */}
        <meta property="og:title" content="Hardware design house " />
        <meta property="og:description" content="" />
        <meta property="og:url" content="hhtps://hardwarehouses.com/page" />
        <meta property="og:site_name" content="Hardware design house" />
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
