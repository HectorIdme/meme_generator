import { useEffect, useState} from 'react'
import './App.css'
import html2canvas from 'html2canvas';

function App() {
  
  const [line1, setline1] = useState('');
  const [line2, setline2] = useState('');
  const [image, setImage] = useState('');

  
  const onChangeLine1 = (event) => setline1(event.target.value);
  const onChangeLine2 = (event) => setline2(event.target.value);
  const onChangeImage = (event) => setImage(event.target.value);
  const exportImage = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = "meme.png";
        link.href = img;
        link.click();
    });
  }
  
  useEffect(() => {
    setImage("raptor");
  },[])


  return (
    <>
      <div className='App'>

        <h1>Meme Generator</h1>


        <div className='generatorContainer'>

          <div className='optionsGenerator'>

            <select onChange={onChangeImage}>
              <option value="fire">Casa en llamas</option>
              <option value="futurama">Futurama</option>
              <option value="aliens">Aliens</option>
              <option value="raptor">Raptor</option>
              <option value="smart">Chico inteligente</option>
            </select>

            <div className='textContainers'>
              <input onChange={onChangeLine1} type='text' placeholder='linea 1' /> <br />
              <input onChange={onChangeLine2} type='text' placeholder='linea 2' /> <br />
            </div>
            
            <div className="buttons">
              <button onClick={exportImage}>Exportar</button> 
            </div>
          </div>

          <div className='memeCreate' id="meme">
            <p className='textMeme line1'>{line1}</p>
            <p className='textMeme line2'>{line2}</p>
            <img className="memeImg" src={"meme_template/"+image+".jpg"} />
          </div>

        </div>

    
      </div>
    </>
  )
}

export default App
