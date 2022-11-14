import {Link} from 'react-router-dom';


function Checkout(){

  const inputStyle={
    border:'1px solid gray',
    marginBottom:'10px',
    heigth:'100px',
    width:'70%',
  }

  const form = {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      // height:'100vh',
      // width:'50vw',
      // margin:'auto',
  }

  const StyleBox = {
    display:'flex',
    width:'80%',
    margin:'auto',
    marginTop:'100px',
  
  }

  const entire = {
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
    width:'50%',
    margin:'auto',
    padding:'50px 20px',
  }

  const buttonStyle={
    backgroundColor:'yellowgreen',
    padding:'10px',
    borderRadius:'10px',
  }


  return (
    <div style={entire}>
      <div style={StyleBox}>
        <img style={{width:'50%',marginRight:'15px',height:'100px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png' alt='google pay' />
        <img style={{width:'50%',height:'100px'}} src='https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' alt='paypal' />
      </div>
      <form style={form} >
        <input type='name' placeholder='Enter Name' style={inputStyle} />
        <input type='text-area' placeholder='Enter Address' style={inputStyle} />
        <input type='number' placeholder='Enter contact no' style={inputStyle} />
        <label>
            
        </label>
        <Link to='/'>
          <input onClick={()=>alert('order placed')} type='submit' value='place order' style={buttonStyle}/>
        </Link>
      </form>
    </div>
  )
}

export default Checkout;
