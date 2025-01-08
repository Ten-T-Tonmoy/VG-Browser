import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  //show hides ? layout making
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        {" "}
        Nav
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
