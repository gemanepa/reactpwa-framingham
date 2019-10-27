import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from '../Link.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import applogo from './../../static/logos/applogo.png';
import enFlag from './../../static/flags/en-flag.png';
import esFlag from './../../static/flags/es-flag.png';
import fhsLogo from './../../static/logos/fhslogo.png';
import nihLogo from './../../static/logos/nihlogo.png';
import wikipediaLogo from './../../static/logos/wikipedialogo3.png';
import languageResponseHelper from './../../static/responsive-helpers/languages.png'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  langmenuButton: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export function CustomizedMenus() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      
      <Button 
        title="Cambiar idioma"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.langmenuButton}>
          <img 
          src={languageResponseHelper}
          alt=""
          className="langmenuimg"
          />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href='/?lang=en' color="secondary">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <img src={enFlag} alt="" className="navflagsimgs" />
            </ListItemIcon>
            <ListItemText primary="English" />
          </StyledMenuItem>
        </Link>
        <Link href='/?lang=es' color="secondary">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <img src={esFlag} alt="" className="navflagsimgs" />
            </ListItemIcon>
            <ListItemText primary="Español" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
      <style jsx>{`
        .langmenuimg:hover {
          filter: brightness(120%);
        }

        @media (max-width: 1199px) {
          .langmenuimg {
            height: 50px;
            width: auto;
          }
          .navflagsimgs {
            height: 40px;
            width: auto;
          }
        }
        @media (min-width: 1200px) {
          .langmenuimg {
            height: 10vh;
            min-height: 65px;
            width: auto;
          }
          .navflagsimgs {
            height: 5.5vh;
            min-height: 35px;
            margin-top: -0.5vh;
            width: auto;
          }
        }



      `}</style>
    </div>
  );
}


function MobileBar() {
  const classes = useStyles();
  return (
    <>
      <CustomizedMenus />

      <Typography variant="h6" className={classes.title} />

      <img src={applogo} alt="CR Framingham" className="navlogo" />

      <Typography variant="h6" className={classes.title} />

      <div className="navexternallinks">
        <a href="https://www.framinghamheartstudy.org/" target="_blank" rel="noopener noreferrer" title="Framingham Heart Study">
          <img src={fhsLogo} alt="" />
        </a>
        <a href="https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/" target="_blank" rel="noopener noreferrer" title="National Institutes of Health">
          <img src={nihLogo} alt="" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Framingham_Heart_Study" target="_blank" rel="noopener noreferrer" title="Wikipedia">
          <img src={wikipediaLogo} alt="" />
        </a>
      </div>
      <style jsx>{`
        @media (max-width: 1199px) {
          .navlogo {
            height: 50px;
            width: auto;
          }
        }
        @media (min-width: 1200px) {
          .navlogo {
            min-height: 85px;
            height: 13.1vh;
            width: auto;
            position:absolute;
            left: 45%;
            top: 5%;
          }
        }
        .navlogo:hover, .navexternallinks a img:hover {
          filter: brightness(110%);
        }

        .navflagslinks, .navexternallinks a:first-child {
          margin-right: 0.5vw;
        }

        .navflagslinks, .navexternallinks a:not(:first-child) {
          margin-left: 10px;
          margin-right: 10px;
        }

        .navexternallinks a:first-child img {
          height: 40px;
          width: auto;
        }

        .navexternallinks a:nth-child(2) img {
          height: 30px;
          width: auto;
          margin-bottom: 5px;
        }

        .navexternallinks a:nth-child(3) img {
          height: 31px;
          width: auto;
          margin-bottom: 3px;
        }
      `}</style>
    </>
  )
}

function DesktopBar() {
  const classes = useStyles();
  return (
    <>
      <Link href='/?lang=en' title="en" color="secondary" title="English">
        <img src={enFlag} alt="" className="navflagsimgs" />
      </Link>

      <div className="navflagslinks">
        <Link href='/?lang=es' title="es" color="secondary" title="Español">
          <img src={esFlag} alt="" className="navflagsimgs" />
        </Link>
      </div>

      <Typography variant="h6" className={classes.title} />

      <img src={applogo} alt="CR Framingham" className="navlogo" />

      <Typography variant="h6" className={classes.title} />

      <div className="navexternallinks">
        <a href="https://www.framinghamheartstudy.org/" target="_blank" rel="noopener noreferrer" title="Framingham Heart Study">
          <img src={fhsLogo} alt="" />
        </a>
        <a href="https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/" target="_blank" rel="noopener noreferrer" title="National Institutes of Health">
          <img src={nihLogo} alt="" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Framingham_Heart_Study" target="_blank" rel="noopener noreferrer" title="Wikipedia">
          <img src={wikipediaLogo} alt="" />
        </a>
      </div>
      <style jsx>{`
        .navlogo {
          height: 7.6vh;
          min-height: 50px;
          width: auto;
        }
        .navlogo:hover, .navexternallinks a img:hover {
          filter: brightness(110%);
        }

        .navflagslinks, .navexternallinks a:first-child {
          margin-right: 0.5vw;
        }

        .navflagslinks, .navexternallinks a:not(:first-child) {
          margin-left: 0.4vw;
          margin-right: 0.4vw;
        }

        .navexternallinks a:first-child img {
          height: 40px;
          width: auto;
        }

        .navexternallinks a:nth-child(2) img {
          height: 30px;
          width: auto;
          margin-bottom: 5px;
        }

        .navexternallinks a:nth-child(3) img {
          height: 31px;
          width: auto;
          margin-bottom: 3px;
        }
      `}</style>
    </>
  )
}

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <MobileBar />
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}