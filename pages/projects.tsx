import Head from "next/head";
import { Fragment } from "react";
import MyProjects from "../components/MyProjects";

const projects = () => {
  return <Fragment>
    <Head>
      <title>My Projects | Philani Ncube</title>
    </Head>
    <MyProjects/>
  </Fragment>;
};
export default projects;
