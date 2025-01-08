import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";

function App() {
  //show hides ? layout making
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav">
        {" "}
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="side" bg="red.400">
          {" "}
          side
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
