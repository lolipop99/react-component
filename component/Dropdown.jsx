import DropBase from './DropBase.jsx';

export default class DropDown extends DropBase {
    constructor(props){
        super(props);
    }

    formatValue(val){
        this.setState({
            value: val, 
        }, () => {
            if (typeof this.props.onChange === 'function') this.props.onChange(val);
            this.toggleOpen(false);
        });
    }

    formatDrop(){
        const [LABEL_NAME = 'name', VALUE_NAME = 'value'] = [this.props.labelName, this.props.valueName];
        let optionNodes = [], selected, node,
            placeHolder = this.props.placeHolder,
            filterText = this.state.filterText,
            compVal = this.state.value,
            searchable = this.props.searchable,
            multi = this.props.multi,
            selectedVals = [];
        
        if (multi) {
            for (let pair of this.state.options){
                for(let val of compVal){
                    
                }
            }
        } else {
            // with a searchbar
            if (searchable) optionNodes.push(this.formatSearchBar());

            // list node format
            for (let pair of this.state.options){
                selected = compVal === pair[VALUE_NAME];
                if(selected) placeHolder = pair[LABEL_NAME];
                node = this.formatOptionCell({ label: pair[LABEL_NAME], value: pair[VALUE_NAME], selected: selected });
                if (searchable) {
                    if (pair[VALUE_NAME].indexOf(filterText) !== -1 || pair[LABEL_NAME].indexOf(filterText) !== -1) optionNodes.push(node);
                    continue;
                }
                optionNodes.push(node);
            }
        }
        
        return <div>
                    { multi ? <DropBase.multiInput selectedVals={selectedVals}></DropBase.multiInput> : 
                        <DropBase.label onClick={this.toggleDropDown.bind(this)}>{placeHolder}</DropBase.label> }
                    {this.formatDropList(optionNodes)}
                </div>
    }
    
    formatOptionCell({label, value, onChange, selected}){
        return <DropBase.Option key={value} onChange={this.selectChange.bind(this)} selected={selected} storeValue={value}>{label}</DropBase.Option>
    }

    formatSearchBar(){
        return <DropDown.SearchBar onUserInputFocus={this.handleFocus.bind(this)} onUserInput={this.handleSearch.bind(this)}>this.props.placeHolder</DropDown.SearchBar>
    }

    formatDropList(nodes){
        return this.state.open ? <ul>{nodes}</ul> : null;
    }

    render() {
        return (
            this.formatDrop()
        );
    }
}

