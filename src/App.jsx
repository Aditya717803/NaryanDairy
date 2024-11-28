import './App.css';  
import './index.css';  
import Header from './component/Header';  
import Hero from './component/Hero';  
import ActiveSlider from './component/ActiveSlider';  
import Banner from './component/Banner';  
import Footer from './component/Footer';  
import Hero2 from './component/Hero2';
import IL from './component/IL';
import Count from './component/Count'
import AnimatedCursor from "react-animated-cursor"
  
function App() {  
  return (  
   <div>  
   <div className="App">
   <AnimatedCursor
        innerSize={20}
        outerSize={40}
        color="255, 179, 0"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={2}
        // Using a custom cow or dairy-related image
      />
    </div>
    <div  className="sticky top-0 bg-white shadow-md z-50 transition duration-300 ease-in-out">
    <Header/>
    </div>
    <div>
    <Hero /> 
    </div>
    <div className = "py-5 ">
    <Banner />  
    </div>  
    <div className="py-6 rounded-2xl bg-yellow-50">
    <ActiveSlider />  
    </div>  
 {/*    <Hero2/>  
    <Footer />   */}
   <div className = "w-full">
   <IL/> 
   </div>
   <div>
      <Count/>
   </div>
   <div>
      <Footer/>
   </div>
   </div>  
  );  
}  
  
export default App;
