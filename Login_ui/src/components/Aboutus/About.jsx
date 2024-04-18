
import './CenterImage.css';
import imgSrc from '../logos/img.png';
function About(){
return(
  <div>
    <header className='header-color'>
<h1><center><i>About us</i></center></h1>
<p><center>This expense tracker application is dedicated in helping you manage your financial life.</center></p>
    </header>
<div className='center-image'>
<img src={imgSrc} alt="Centered-Image" style={{width: '380px',height:'75%'}}/>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<p><b>E</b>xpense Tracker also known as expense manager and money manager, an expense tracker is a software or application that helps to keep an accurate record of your money inflow and outflow. Many people in all around the world live on a fixed income, and they find that towards the end of the month they don’t have sufficient money to meet their needs. While this problem can arise due to low salary, invariably it is due to poor money management skills.

People tend to overspend without realizing, and this can prove to be disastrous. Using a daily expense manager can help you keep track of how much you spend every day and on what. At the end of the month, you will have a clear picture where your money is going. This is one of the best ways to get your expenses under control and bring some semblance of order to your finances.</p>
<br/>
<br/>
<br/>
<br/>
<h2 className='heading'><i><center>Why this website?</center></i></h2>
<p className='left-align'><b>EASY-TO-USE</b></p>
<p className='left-align'>Simple yet efficient</p>
<br/>
<p><center><b>COMPREHENSIVE</b></center></p>
<br/>
<p className='right-align'><b>SAFE-AND-SECURE</b></p>
<p className='right-align'>Your data is always protected</p>
<br/>
<br/>
<br/>
<br/>
<br/>

</div>

       
);
}

export default About;