import React from 'react';
import {SlideMenu} from './index.js';

export default class SlideMenuDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slide: false,
            slide1: false,
            positionTop: false,
            positionLeft: false,
            positionRight: false,
            positionBottom: false,
        };
    }

    handleCloseSlide1(){
        if (confirm('close slide?')) {
            this.setState({
                slide1: false 
            });
        }
    }

    handleOpenSlide(state){
        this.setState({
            [state.toString()]: true 
        });
    }

    handleAllSlideClose(){
        this.setState({
            slide: false,
            slide1: false,
            positionTop: false,
            positionLeft: false,
            positionRight: false,
            positionBottom: false 
        });
    }


    render() {
        let contentNode  =  <div style={{'padding': '20'}}>
                                <h4>this is header</h4>
                                <p>this is content, where have something here, fill in</p>
                                <a href="http://braavos.me" target="_blank">落在深海</a>
                            </div>;

        return (
            <div>
                <h3>Slide menu</h3>
                <ol>
                    <li>
                        <h4>Default slidemenu</h4>
                        <a href="javascript:;" onClick={() => this.handleOpenSlide('slide')}>open slide menu</a>
                        <SlideMenu display={this.state.slide} onSlideClose={this.handleAllSlideClose.bind(this)}>
                            {contentNode}
                        </SlideMenu>
                    </li>
                    <li>
                        <h4>slide menu with position</h4>
                        <a href="javascript:;" onClick={() => this.handleOpenSlide('positionLeft')}>left, with given width</a>
                        <SlideMenu position="left" display={this.state.positionLeft} width={500} onSlideClose={this.handleAllSlideClose.bind(this)}>
                            {contentNode}
                        </SlideMenu>
                        <a href="javascript:;" onClick={() => this.handleOpenSlide('positionRight')}>right</a>
                        <SlideMenu position="right" display={this.state.positionRight} onSlideClose={this.handleAllSlideClose.bind(this)}>
                            {contentNode}
                        </SlideMenu>
                        <a href="javascript:;" onClick={() => this.handleOpenSlide('positionTop')}>top</a>
                        <SlideMenu position="top" display={this.state.positionTop} onSlideClose={this.handleAllSlideClose.bind(this)}>
                            {contentNode}
                        </SlideMenu>
                        <a href="javascript:;" onClick={() => this.handleOpenSlide('positionBottom')}>bottom</a>
                        <SlideMenu position="bottom" display={this.state.positionBottom} onSlideClose={this.handleAllSlideClose.bind(this)}>
                            {contentNode}
                        </SlideMenu>
                    </li>
                    <li>
                        <h4>Close slidemenu action</h4>
                        <a href="javascript:;" onClick={() => this.handleOpenSlide('slide1')}>open slide</a>
                        <SlideMenu display={this.state.slide1} onSlideClose={this.handleAllSlideClose.bind(this)}>
                            {contentNode}
                            <div style={{'padding': '10'}}>
                                <a href="javascript:;" onClick={this.handleCloseSlide1.bind(this)} style={{'color': 'red'}}>Click to close</a>
                            </div>
                        </SlideMenu>
                    </li>
                </ol>
            </div>
        );
    }
}