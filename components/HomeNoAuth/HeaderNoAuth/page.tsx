"use client";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";

import React from "react";
import Link from "next/link";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <img
          src="homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
        <p>Cadastre-se para ter acesso aos cursos</p>
        <img
          src="homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
      </div>
      <Container className={styles.nav}>
        <img
          src="/logoOnebitflix.svg"
          alt="logo Onebitflix"
          className={styles.imgLogoNav}
        />
        <div>
          <Link href="/login">
            <Button outline color="primary" className={styles.navBtn}>
              Entrar
            </Button>
          </Link>
          <Link href="/registro">
            <Button outline color="primary" className={styles.navBtn}>
              Quero fazer parte
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;
