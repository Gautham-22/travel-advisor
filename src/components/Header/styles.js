import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  box: {
    width: "60%",
    display: "flex", justifyContent: "space-between", alignItems: "center"
  },
  title1: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  title2: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between', alignItems: "center", flexWrap:"wrap",
    margin: "10px 0px"
  },
  refContainer: {
    position: "absolute", top: "3px", right: "25%", zIndex: "1", 
    [theme.breakpoints.up('sm')]: {
      top: "15px",
      right: "10px"
    },
  }
}));