import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  heading: {
    marginBottom: "10px", 
    textAlign: "center",
    [theme.breakpoints.up("md")] : {
      textAlign: "start"
    }
  },
  forms: {
    marginBottom: '23px',
    textAlign: "center",
    [theme.breakpoints.up("md")] : {
      textAlign: "start",
      marginTop: "5px"
    }
  },
  formControl: {
    margin: "5px 16px", minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    width: "min(100%,650px)",
    margin: "0 auto",
    height: '75vh', overflow: 'auto',
  }
}));