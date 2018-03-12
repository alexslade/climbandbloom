import React from 'react';
import Link from 'gatsby-link';
import {Slide, Header, Button} from '../components';
import s from './home.module.scss';
import keydown from 'react-keydown';

import ear from './ear.jpeg';

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
          </div>
        </Slide>


        <Slide pos="2" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Background</p>
          </div>
        </Slide>

        <Slide pos="3" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Background</p>
            <p> Beano </p>
          </div>
        </Slide>

        <Slide pos="4" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Opinions</p>
          </div>
        </Slide>

        <Slide pos="5" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <img src={ear} width="100%" />
          </div>
        </Slide>

        <Slide pos="6" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Strong opinions</p>
          </div>
        </Slide>

        <Slide pos="7" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Strong opinions</p>
            <p>Help me learn</p>
          </div>
        </Slide>

        <Slide pos="8" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Strong opinions</p>
            <p>Loosely held</p>
          </div>
        </Slide>

        <Slide pos="9" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>@AlexHeeton</p>
          </div>
        </Slide>

        <Slide pos="10" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Complexity 😡</p>
          </div>
        </Slide>

        <Slide pos="11" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>
              Frameworks 👍
                         </p>
          </div>
        </Slide>

        <Slide pos="12" current={this.state.current}>
        <div className={`${s.content} ${s.question}`}>
          <p className={s.small}>@AlexHeeton</p>
          <p>
            Frameworks 👍
            <br/>
            <span className={s.small}> "re-frame" </span>
          </p>
        </div>
      </Slide>

        <Slide pos="13" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Magic 😡</p>
          </div>
        </Slide>

        <Slide pos="14" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Rails 😡 </p>
          </div>
        </Slide>

        <Slide pos="15" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>

              Phoenix / Ecto 👍
            </p>
          </div>
        </Slide>

        <Slide pos="16" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Callbacks 😡</p>
          </div>
        </Slide>

        <Slide pos="17" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>God models 😡</p>
          </div>
        </Slide>

        <Slide pos="18" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Concerns 😡</p>
          </div>
        </Slide>

        <Slide pos="19" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Simple 👍</p>
          </div>
        </Slide>

        <Slide pos="20" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>
              "Simple made easy" 🎬
              <br/>
              <span className={s.small}> Rich Hickey </span>
            </p>
          </div>
        </Slide>

        <Slide pos="21" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Your career</p>
          </div>
        </Slide>

        <Slide pos="22" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Remember capitalism</p>
          </div>
        </Slide>

        <Slide pos="23" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Writing code is not your job</p>
          </div>
        </Slide>

        <Slide pos="24" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Provide business value</p>
          </div>
        </Slide>

        <Slide pos="25" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Understand risk</p>
          </div>
        </Slide>

        <Slide pos="26" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Be kind, humble, honest.</p>
          </div>
        </Slide>

        <Slide pos="27" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Teams > Rockstars</p>
          </div>
        </Slide>

        <Slide pos="28" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Work hard, go home.</p>
          </div>
        </Slide>

        <Slide pos="29" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Make yourself obsolete</p>
          </div>
        </Slide>

        <Slide pos="30" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Fix your finances</p>
          </div>
        </Slide>

        <Slide pos="31" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Hiring / Culture</p>
          </div>
        </Slide>

        <Slide pos="32" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Monocultures 😡</p>
          </div>
        </Slide>

        <Slide pos="33" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Monocultures 👍</p>
          </div>
        </Slide>

        <Slide pos="34" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Value communication</p>
          </div>
        </Slide>

        <Slide pos="35" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Publish your interview process</p>
          </div>
        </Slide>

        <Slide pos="36" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Publish your code of conduct</p>
          </div>
        </Slide>

        <Slide pos="37" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Publish your internal policies</p>
          </div>
        </Slide>

        <Slide pos="38" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p className={s.small}>@AlexHeeton</p>
            <p>Advertise a fixed salary 💸</p>
          </div>
        </Slide>

        <Slide pos="39" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Cocktails</p>
          </div>
        </Slide>

        <Slide pos="40" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>Tommy's Margarita 👍</p>
          </div>
        </Slide>

        <Slide pos="41" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>The end</p>
          </div>
        </Slide>

        <Slide pos="42" current={this.state.current}>
          <div className={`${s.content} ${s.question}`}>
            <p>@AlexHeeton <br/> "Prinicples - Ray Dalio"</p>
          </div>
        </Slide>

      </div>
    )
  }
}

export default IndexPage
