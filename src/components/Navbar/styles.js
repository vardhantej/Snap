import {makeStyles} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme)=>({

    appBar: {
        borderRadius: 0,
        
        
        position:'fixed',
        marginBottom:'30px'
      },
      heading: {
       color: 'blue',
       justifyContent:'center',
       textDecoration:'none'
      },
      image: {
        marginLeft: '15px',
        height: '80px',
        justifyContent:'center'
        
      },
      
      menuButton: {
        color: "white",
       
        
      },
      title: {
        flexGrow: 1,
        
      },
      titleBox:{
        display: 'flex',
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer:{
          flexDirection: "column-reverse"
        },
        formClass:{
          width:'100%'
        },
        userName:{
          visibility:'hidden',
          position:'absolute',
          
        },

        toolbar:{
          width:'60px'
        }
        
       
      },
      [theme.breakpoints.down('xs')]:{
        headingCreate:{
          display:'none'
        },
        toolbar:{
          paddingLeft:'0px',
          paddingRight:'0px'
        },
        image:{
          height:'70px'
        },
        heading:{
          fontSize:'3rem'
        }

      }, 
      gridContainer:{
        marginTop: '100px'
      },
      addIcon:{
        height:'40px',
        width:'40px'
      },
      headingCreate:{
        color: 'blue',
       justifyContent:'center',
      },
      profile: {
        display: 'flex',
        justifyContent:'flex-end',
        width: '400px',
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginRight: '8px',
        cursor:'pointer',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
        marginRight:'8px'
      }, 
     
     
      

}));

