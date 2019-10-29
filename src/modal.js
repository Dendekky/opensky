import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    display: 'inline-block',
    textAlign: 'center',
    overflow: 'scroll',
    width: '50%',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [allData, setData] = React.useState({ arrivalData:'', departureData:'' });
  React.useEffect(() => {
    const Data = async () => {
      const arrival = await Axios.get(
        props.ARRIVAL_API,
      );
      const departure = await Axios.get(
        props.DEPARTURE_API,
      );
      setData({ arrivalData: arrival.data, departureData: departure.data });
    };
    Data();
  }, [props.ARRIVAL_API, props.DEPARTURE_API]);



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        View flight
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Arriving flights in the last 20 minutes</h2>
              <ul>
                {allData.arrivalData && allData.arrivalData.map((item) => (
                  <div key={item.callsign}>
                    <AirplanemodeActiveIcon />
                    <p>ICAO24: {item.icao24}</p>
                    <p>Flight Callsign: {item.callsign}</p>
                    <p>Estimated Time of Arrival(Unix): {item.lastSeen}</p>
                  </div>
                ))}
                </ul>
            <h2>Departing flights in the last 20 minutes</h2>
              <ul>
                {allData.departureData && allData.departureData.map((item) => (
                  <div key={item.callsign}>
                    <AirplanemodeActiveIcon />
                    <p>ICAO24: {item.icao24}</p>
                    <p>Flight Callsign: {item.callsign}</p>
                    <p>Estimated Time of Departure(Unix): {item.firstSeen}</p>
                  </div>
                ))}
              </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}