import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  box: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between' 
  },
  chip: {
    margin: '5px 5px 5px 0',
    padding: '2px 3px'
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: "7px", textAlign: "end" 
  },
}));