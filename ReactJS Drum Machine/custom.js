const data = [
    { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
    { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
    { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
    { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
    { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
    { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
    { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
    { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
    { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
  ]
  
  class DrumPad extends React.Component {
   
    componentDidMount() {
      console.log(this.audio)
      document.addEventListener('keydown', this.handleKeydown)
      window.focus()
    }
    
   componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeydown)
   }
    
    handleKeydown = e => {
      if(e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
    }
   
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
    
    render() {
      return (
        <div 
            className='drum-pad' 
            id={this.props.id}
            onClick={this.handleClick}
        >
          <h1>{this.props.letter}</h1>
          <audio id={this.props.letter}
                 className='clip'
                 src={this.props.src}
                 ref={ref => this.audio = ref}
            ></audio>
        </div>
      )
    }
  }
  
  class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        display: 'Click or Press a Key'
      }
    }
    
    handleDisplay = display => this.setState({ display })
    
    render(){
      return(
      <div id='drum-machine'>
          <div id='display'>{this.state.display}</div>
          <div id='drum-pads'>{data.map(d => (
            <DrumPad
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={this.handleDisplay}
            />   
           ))}</div>
      </div>
      )
    }
  }
  
  ReactDOM.render(<App/>,document.getElementById("root"))

  /*
  CREDIT: Benjamin 
   https://www.youtube.com/watch?v=nBF6dFjb7p0, https://www.youtube.com/watch?v=QXX4aI9DOVE, www.youtube.com/watch?v=Sqb5oMIa4yo, https://www.youtube.com/watch?v=ESSQykjKmuA

  Script:
  https://cdnjs.cloudflare.com/ajax/libs/react/16.4.0/umd/react.development.js
  https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.0/umd/react-dom.development.js
  
  */