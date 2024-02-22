<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Experiences from "./components/Experiences.vue";
import data from "../services/french/resume.js"
import Projects from "./components/Projects.vue";
</script>

<template>
  <header>
    <nav>
      <center>
        <details>
          <summary>Navigation</summary>
          <table>
            <thead>
            <tr>
              <td></td>
              <td width="150px">
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#experience">Experiences</a>
                  </li>
                </ul>
              </td>
              <td></td>
            </tr>
            </thead>
          </table>
        </details>
      </center>
    </nav>
  </header>
  <hr>
  <table>
    <tbody>
    <tr>
      <Header :basics="data.basics"/>
      <About :basics="data.basics"/>
    </tr>
    <tr>
      <td width="40%">

      </td>
      <Experiences :work="data.work"/>
    </tr>
    <tr>
      <td width="40%">
      </td>
      <td>
        <hr>
        <Projects :projects="data.projects"/>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <Footer/>
    </tfoot>
  </table>
</template>
