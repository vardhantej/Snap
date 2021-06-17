import {makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme)=>({

    appBar: {
        borderRadius: 0,
        
        
        position:'fixed',
        marginBottom:'30px'
      },
      heading: {
       color: 'blue',
       justifyContent:'center',
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
      [theme.breakpoints.down('sm')]:{
        mainContainer:{
          flexDirection: "column-reverse"
        },
        formClass:{
          width:'100%'
        },
       
      },
      [theme.breakpoints.down('xs')]:{
        headingCreate:{
          display:'none'
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
      }
      

}));

