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



function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">About Me</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
Hello! I am <strong>Ezekiel Andreason,</strong> currently studying at Neumont the College of Computer Science.
From the beginning of my programming journey, I’ve aimed to build a strong foundation across the entire software development process. My goal has always been to become a versatile, <strong>full-stack developer</strong>, someone capable of handling every layer of a project, from the front-end interface to the back-end logic and database management. 
  <br />
  <br />
  This approach reflects what many industry professionals emphasize: the strength of having a broad programming toolkit.
  As discussed by 
  <a 
    href="https://www.uopeople.edu/blog/how-many-programming-languages-should-i-know/" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#1976d2', textDecoration: 'underline', margin: '0 4px' }}
  >
    Writers of UoPeople (2024)
  </a>
  , knowing multiple programming languages increases flexibility, opens up broader job opportunities, and enhances your ability to choose the right tools for the task.
  I’ve built projects using JavaScript, Python, Java, C#, SQL, and more, giving me both the technical skills and adaptability that employers look for.
  <br />
  <br />
  Following this 
  <a 
    href="https://survey.stackoverflow.co/2024/technology#most-popular-technologies-language" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#1976d2', textDecoration: 'underline', margin: '0 4px' }}
  >
    Stack Overflow Survey (2024)
  </a>
  , I have significant history and hands on experience in many of the top in-demand programming languages.


                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                ></MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
