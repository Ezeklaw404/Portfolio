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
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";


import galaga from "assets/images/portfolioGames/galaga.PNG";
import matchingHP from "assets/images/portfolioGames/matching-hp.PNG";
import digit from "assets/images/portfolioGames/digitRecognizer.PNG";
import mine from "assets/images/portfolioGames/mineSweeper.PNG";
import pong from "assets/images/portfolioGames/pong.PNG";
import notes from "assets/images/portfolioGames/notes++.PNG";
import GameofLife from "assets/images/portfolioGames/GoL.gif";
import Alchemy from "assets/images/portfolioGames/kitchen-alchemy.png";
import AlchemyLogo from "assets/images/portfolioGames/kitchen-alchemy-logo.png";

function Projects() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check out my projects
          </MKTypography>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={galaga}
              title="Galaga"
              description={
              <>
              A simplified Galaga clone, flying through space shooting other alien ships, and avoiding attacks. 
              No implemented levels, just endless, while saving a persistant highscore.
              <br />
              <strong>Technologies:</strong> Java, JPanel
              </>}
              action={{
                type: "external",
                route: "https://github.com/Ezeklaw404/Shooter",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={notes}
              title="Notes++"
              description={<>
              A simple and clean notes app.
              It allows users to create, edit, and delete notes all to ensure that their notes are organized.
              <br />
              <strong>Technologies:</strong> C#, .NET MAUI, Blazor Hybrid, JavaScript, CSS, HTML
              </>}
              action={{
                type: "external",
                route: "https://github.com/tristancable/NotesPlusPlus",
                label: "View Project",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={matchingHP}
              title="Cthuhtlu Card Game"
              description={<>
              A four-player matching card game where players flip two cards at a time to find pairs,
              all wrapped in the eerie theme of classic H.P. Lovecraft horrors.
              <br />
              <strong>Technologies:</strong> Java, Android Studio
              </>}
              action={{
                type: "external",
                route: "https://github.com/Ezeklaw404/MatchingCardGameHP",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={GameofLife}
              title="Conways Game of Life"
              description={<>
              An interactive simulation of Conway’s Game of Life, a grid-based system where cells live, die, or reproduce based on the state of their neighbors.
              Though governed by simple rules, the simulation creates surprisingly complex and dynamic patterns, illustrating the concept of emergent behavior in cellular automata.
              <br />
              <strong>Technologies:</strong> C#, .NET MAUI
              </>}
              action={{
                type: "external",
                route: "https://github.com/Ezeklaw404/GameOfLife",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={digit}
              title="Digit Recognizer"
              description={<>
              This application allows the user to draw a number and with the help of the tained AI it will respond with the digit it recognizes
              <br />
              <strong>Technologies:</strong> C#, TensorFlow.NET
              </>}
              action={{
                type: "external",
                route: "https://github.com/tristancable/Biscuit",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={mine}
              title="Website Game Launcher"
              description={<>
              A sleek, web-based platform featuring a variety of built-in mini-games.
              Designed with simplicity and clean aesthetics in mind, the site offers an intuitive and engaging gaming experience directly in the browser.
              <br />
              <strong>Technologies:</strong> EJS, JavaScript, CSS, HTML
              </>}
              action={{
                type: "external",
                route: "https://github.com/tristancable/WebsiteGameLauncher",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={pong}
              title="Pong"
              description={<>
              A simple two-player Pong clone with keyboard controls, basic sound effects, and a classic minimalist layout.
              <br />
              <strong>Technologies:</strong> Java, JPanel
              </>}
              action={{
                type: "external",
                route: "https://github.com/Ezeklaw404/pong",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={mine}
              title="PuzzleTD"
              description={<>
              PuzzleTD is a tower defense game where players strategically place shape-based towers to stop waves of enemies.
              It features multiple levels and buildable defensive towers that encourage tactical planning and replayability.
              <br />
              <strong>Technologies:</strong> Unity, C#
              </>}
              action={{
                type: "external",
                route: "https://github.com/Ezeklaw404/PuzzleTD",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={mine}
              title="Kitchen Alchemy"
              description={<>
              KitchenAlchemy is a mobile recipe app that tracks pantry and fridge ingredients to recommend meals you can actually make.
              It filters recipes based on what you have on hand, helping reduce food waste and simplify meal planning.
              <br />
              <strong>Technologies:</strong> Flutter, Dart, PostgreSQL, Firebase
              </>}
              action={{
                type: "external",
                route: "https://github.com/Ezeklaw404/Kitchen-Alchemy",
                color: "info",
                label: "View Project",
              }}
            />
          </Grid>



        </Grid>
      </Container>
    </MKBox>
  );
}

export default Projects;
