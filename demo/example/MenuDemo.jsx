import React from 'react';
import {Menu, Item} from './index.js';

export default class MenuDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: "1",
        };
    }
    displayChange(index){
        this.setState({
            index: index 
        });
    }

    render() {

        return (
            <div id="menu_demo">
                <h3>Menu</h3>
                <ul>
                    <li>
                        <h4>Default menu</h4>
                        <p>you selected item index is {this.state.index}</p>
                        <Menu current={this.state.index} style={{'width': '200'}} onSelect={this.displayChange.bind(this)}>
                            <Item index='sub0' sub={true} active={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="0">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="1">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="2" disabled={true}>
                                        <p>Sub item</p>
                                    </Item>
                                    <Item sub={true} index="2-sub" title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="10">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="11">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="sub1" sub={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="3-sub" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="6">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="7">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="3-sub1" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="8">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="9">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="5">
                                        <p>Sub item</p>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="4">
                                <p>Item <a target="_blank" href="http://braavos.me" style={{'color': '#f00'}}>blog</a></p>
                            </Item>
                        </Menu>
                    </li>
                    {/*<li>
                        <h4>Only show one menu at a atime, mutex</h4>
                        <Menu current={this.state.index1} style={{'width': '200'}} mutex={true}>
                            <Item index='sub0' sub={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="0">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="1">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="2" disabled={true}>
                                        <p>Sub item</p>
                                    </Item>
                                    <Item sub={true} index="2-sub" title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="10">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="11">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="sub1" sub={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="3-sub" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="6">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="7">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="3-sub1" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="8">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="9">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="5">
                                        <p>Sub item</p>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="4">
                                <p>Item <a target="_blank" href="http://braavos.me" style={{'color': '#f00'}}>blog</a></p>
                            </Item>
                        </Menu>
                    </li>
                    <li>
                        <h4>Popped out menu</h4>
                        <Menu style={{'width': '200'}} popped={true}>
                            <Item index='sub0' sub={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="0">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="1">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="2">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item sub={true} index="2-sub" title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="10">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="11" disabled={true}>
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="sub1" sub={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="3-sub" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="6" disabled={true}>
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="7">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="3-sub1" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="8">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="9">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="5">
                                        <p>Sub item</p>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="4">
                                <p>Item <a target="_blank" href="http://braavos.me" style={{'color': '#f00'}}>blog</a></p>
                            </Item>
                        </Menu>
                    </li>*/}
                    <li>
                        <h4>Hover mode menu</h4>
                        <Menu style={{'width': '200'}} popped={true} mode='hover'>
                            <Item index='sub0' sub={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="0">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="1">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item index="2">
                                        <p>Sub item</p>
                                    </Item>
                                    <Item sub={true} index="2-sub" title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="10">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="11">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="sub1" sub={true} title={<p>Sub Menu</p>}>
                                <Menu className="second-menu">
                                    <Item index="3-sub" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="6">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="7">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="3-sub1" sub={true} title={<p>Third Menu</p>}>
                                        <Menu className="third-menu">
                                            <Item index="8">
                                                <p>Third item</p>
                                            </Item>
                                            <Item index="9">
                                                <p>Third item</p>
                                            </Item>
                                        </Menu>
                                    </Item>
                                    <Item index="5">
                                        <p>Sub item</p>
                                    </Item>
                                </Menu>
                            </Item>
                            <Item index="4">
                                <p>Item <a target="_blank" href="http://braavos.me" style={{'color': '#f00'}}>blog</a></p>
                            </Item>
                        </Menu>
                    </li>
                </ul>
            </div>
        );
    }
}
