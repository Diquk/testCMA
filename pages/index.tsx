import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header } from "components/header/header";
import { SelectPatient } from "components/selectPatient/selectPatient";
import { patientsArray } from "data/patients";
import { symptomsArray } from "data/symptoms";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>СМА</title>
      </Head>
      <Header title={"А вдруг СМА?"} />
      <main className={styles["root"]}>
        <SelectPatient patients={patientsArray} symptoms={symptomsArray} />
      </main>
    </>
  );
};

export default Home;
