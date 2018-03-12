import React from 'react'
import Link from 'gatsby-link'
import {Slide, Header, Button} from '../components'
import s from './home.module.scss'
import keydown from 'react-keydown';

  // window.addEventListener('keypress', handleEvent);


// turns DOM event into action,
// you can define many of those
// function globalKeyPress(e) {
//   return {
//     type: 'GLOBAL_KEY_PRESS',
//     key: e.key
//   };
// }

// subscribe to event
// let unlistenKeyPress = listenToWindowEvent(dispatch, 'keypress', globalKeyPress);
// eventually unsubscribe
// unlistenKeyPress();

class IndexPage extends React.Component {

  @keydown( ['right', 'left'] )
  onKeyDown(e){
    if(e.key == 'ArrowRight'){
      this.setState((prevState, props) => ({
        current: prevState.current + 1
      }));
    }
    if(e.key == 'ArrowLeft'){
      this.setState((prevState, props) => ({
        current: prevState.current - 1
      }));
    }

    history.pushState({}, "page n", `#${this.state.current}`);
  };

  constructor(props) {
    super(props);
    this.state = {current: 1};
  }

  render() {
    return (
      <div>
        {this.state.current}
        <Slide pos="1" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>@AlexHeeton</p>
          <p>
            Climb and Bloom
            <svg className={s.leaf} viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg">
              <g>
                <title>Layer 1</title>
                <path id="svg_1" d="M51.83 1.62C47.74 -1.95 -7.23 9.24 2.06 55.64C53.1 60.31 55.92 5.18 51.83 1.62Z" fill="#29ca38"/>
              </g>
            </svg>
          </p>
          <p><span className={s.small}>lrug.climbandbloom.com</span></p>
          </div>
        </Slide>


        <Slide pos="2" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Background: <br/> Startups</p>
          </div>
        </Slide>

        <Slide pos="3" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p><span className={s.small}>lrug.climbandbloom.com</span></p>
          </div>
        </Slide>

      </div>
    )
  }
}

export default IndexPage
