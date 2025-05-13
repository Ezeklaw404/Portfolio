/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

import bgImage from "assets/images/curcuit.jpg";


function Skills() {
  return (
    <MKBox component="section" bgcolor="#183059" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Skills
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
            title="Front-End"
            image={bgImage}
            description={
              <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>.NET MAUI</li>
              </ul>
            }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
            title="Back-End"
            image={bgImage}
            description={
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>C#</li>
                <li>Java</li>
              </ul>
            }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
            title="Databases"
            image={bgImage}
            description={
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              title="Deployment & DevOps"
              image={bgImage}
              description={
                <ul>
                  <li>GitHub</li>
                  <li>Vercel</li>
                  <li>Docker</li>
                </ul>
              }
            />
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}

export default Skills;
