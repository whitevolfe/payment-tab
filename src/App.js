import './App.css';
import ArrowDropDownCircleTwoToneIcon from '@mui/icons-material/ArrowDropDownCircleTwoTone';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DialpadIcon from '@mui/icons-material/Dialpad';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FlipIcon from '@mui/icons-material/Flip';

function App() {
  return (
    <div className="main">
      <div className="sub-main">
      <div className="container">
      <div className="header">
          <div className="h1">
          <div className="icon"><ArrowDropDownCircleTwoToneIcon /></div>
          <div className="row">
              <div className="col-1">
                <h3>Tab #1</h3>
                 <p>No Channel</p> 
              </div>
              </div>
              </div>
          
          <div className="h2">
            |
          </div>
          <div className="h3">
            <div className="icon-2"><LocalPrintshopIcon /></div>
            <div className="icon-3"><CancelOutlinedIcon /></div>
            <div className="row">
              <div className="col-3">
                <h4>Send</h4>
                </div>
                </div>
                </div>
                </div>
        
        
        <div className="second-container">
          <h2>Bills </h2>
          <div className="row">
          <div className="col-6">
            <h4>x1 Ripped Denim Jacket<span className="price-1">$43.00</span><br></br>M-1,Large</h4>
            <p>Add flower patch<span className="price-2">+ $1.50</span></p>
            <p>Alter size down on sleeve<span className="price-3">+ $0.00</span></p>
            <h4>x2 Blue linen shirt, Large<span className="price-4">$34.90</span></h4>
            <p>Free tie<span className="price-5">+ $0.00</span></p>
             </div>
             </div>
             </div>

       
        <div className="third-container">
          <div className="row">
            <div className="col-7">
              <p>Sub Total<span className="price-6">+ $79.40</span></p>
              <p>Tax<span className="price-7">+ $4.45</span></p>
              <h4 className = "total">Total<span className="price-8">+ $83.85</span></h4>
              </div>
              </div>
              </div>

        
        <div className="fourth-container">
          <h2>Payment Method</h2>
        <div className="box">
        <div className="cash"><MonetizationOnIcon /></div>
        <span className="cash-para">Cash</span>
        </div>
        </div>
        
        <div className="box-1">
         <div className="debit-card"><CreditCardIcon /></div>
         <span className="debit-para">Credit</span>
        </div>
        <div className="box-2">
        <div className="scan"><FlipIcon /></div>
        <span className="scan-para">Scan</span>
        </div>

        <div className="footer">
          <div className="f1">
            <h4>Charge Customer $83.85</h4>
          </div>
          <div className="f2">
          <div className="ficon-1"><DialpadIcon /></div>
          </div>
          </div>
          </div>
          </div>
          </div>
 
 );
}

export default App;
