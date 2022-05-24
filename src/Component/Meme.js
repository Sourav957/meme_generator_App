import React from 'react'
// import memesData from '../Memesdata.js'

function Meme() {
//  const [memeImage,setMemeImage] =useState("https://www.seekpng.com/png/detail/218-2188461_thinking-meme-png-thinking-meme-with-cup.png");

const [meme,setMeme] = React.useState({
  topText:"",
  bottomText:"",
  randomImage:"https://www.seekpng.com/png/detail/218-2188461_thinking-meme-png-thinking-meme-with-cup.png"
})

const[allMemes,setAllmemes] = React.useState([]);
  
    function getMemeImage(){
    const memesArray = allMemes  ;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme({
      ...meme,
      randomImage:url

    })
     
    } 
    
//  using useEffect in our project
React.useEffect(function(){
  fetch("https://api.imgflip.com/get_memes")
  .then(response=>response.json())
  .then(data=>setAllmemes(data.data.memes));
},[])
console.log(allMemes)

    function handleChange(event){
      const {name,value} = event.target;
setMeme((prevData)=>{
     return {
       ...prevData,
       [name]:value
     }
})
    }
  return (
    <main>
        <div className='form'>
            <input  className='form-input' placeholder='Top text' name="topText" value={meme.topText}  onChange={handleChange}/>
            <input  className='form-input' placeholder='Bottom text' name="bottomText" value={meme.bottomText} onChange={handleChange}/>
            <button onClick={getMemeImage} className='form-button'>Get a new meme image &prod;</button>
        </div> 
        <div className='img-container'>
        <img src={meme.randomImage} alt='meme' className='meme--image'/> 
        <h1 className='meme-topText'>{meme.topText}</h1>
        <h1 className='meme-bottomText'>{meme.bottomText}</h1>
        </div> 
    </main>
  )
}

export default Meme