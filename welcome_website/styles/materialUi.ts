import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiStepper: { root: { backgroundColor: "#eee", marginTop: 20, color: "#393e46" } },
    MuiStep: {
      horizontal: {
        justifyContent: "space-around",
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    MuiStepConnector: {
      line: {
        borderColor: "#393e46",
      },
      lineHorizontal: {
        borderStyle: "solid",
      },
    },
    MuiStepIcon: {
      root: {
        color: "#393e46",
        fontSize: 30,
      },
    },
    MuiStepLabel: {
      label: {
        marginBottom: 10,
        color: "#393e46",
      },
    },
    MuiCard: {
      root: {
        flexGrow: 1,
        height: 400,
        width: 270,
        backgroundColor: "#393e46",
        color: "#eee",
        /*boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",*/
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px #2fbcb2",
        },
        cursor: "pointer",
      },
    },
    MuiCardHeader: {
      root: {},
    },
  },
});

export default theme;
