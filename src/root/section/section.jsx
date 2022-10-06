import React, { Component } from "react";
import { data } from "../Mock/data";
import { Div, Mpp, Bdiv, Divc, Searchi, H1, Box, Divv, Img, Mini, HAction, HView, Viewi, HStatus, Featured, Published, Name, Info, Money, Oldmoney, Namei, Infoi, Moneyi, Oldmoneyi, For, Data, Datai, Status, Statusi, View, MiniM, Mbox, Action, Heading, Title } from './../styled'

class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: data,
            selected: null,
        }
    }
    render() {
        const onEdit = (selected) => {
            this.setState({ selected })
        };
        const onNameFilter = ({ target: { value } }) => {
            let res = data.filter((vl) => vl.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
            this.setState({ list: res, });
        };
        const del = (id) => {
            let res = this.state.list.filter(value => value.id !== id)
            this.setState({ list: res, });
            console.log(id);
        };

        const onClick = () => {
            let res = this.state.list.map((value) => value.id === this.state.selected.id ? this.state.selected : value)
            this.setState({ list: res, selected: null });
            console.log(this.state.selected.id);
        };
        const onChangee = ({ target: { value, name } }) => {
            this.setState((state) => { return { selected: { ...state.selected, [name]: value } } })
        };
        return (
            <div>
                <Div>
                    <H1>Home</H1>
                    <H1>Properties</H1>
                    <H1>Contacts</H1>

                </Div>
                <Divv>
                    <Bdiv>
                        <Divc>
                            <Mpp>My properties</Mpp>
                            <Searchi type="text" onChange={onNameFilter} placeholder="Search" />
                        </Divc>
                        <Box>
                            <Heading>
                                <Title>Listing Title</Title>
                                <Published>Date Published</Published>
                                <HStatus>Status</HStatus>
                                <HView>View</HView>
                                <HAction>Action</HAction>
                            </Heading>
                            {this.state.list.map((value, id) => (
                                <Mini key={id}>
                                    <Img>{value.img}</Img>
                                    <Featured>{value.featured}</Featured>
                                    <Mbox>
                                        {this.state.selected?.id === value.id ? (<Namei onChange={onChangee} name="name" defaultValue={this.state.selected.name} type="text" />) : (<Name>{value.name}</Name>)}
                                        {this.state.selected?.id === value.id ? (<Infoi onChange={onChangee} name="info" defaultValue={this.state.selected.info} type="text" />) : (<Info>{value.info}</Info>)}
                                        {this.state.selected?.id === value.id ? (<Moneyi onChange={onChangee} name="money" defaultValue={this.state.selected.money} type="text" />) : (<Money>{value.money}</Money>)}
                                        {this.state.selected?.id === value.id ? (<Oldmoneyi onChange={onChangee} name="oldmoney" defaultValue={this.state.selected.oldmoney} type="text" />) : (<Oldmoney>{value.oldmoney}</Oldmoney>)}
                                    </Mbox>
                                    <For>{value.for}</For>
                                    <MiniM>
                                        {this.state.selected?.id === value.id ? (<Datai onChange={onChangee} name="data" defaultValue={this.state.selected.data} type="text" />) : (<Data>{value.data}</Data>)}
                                        {this.state.selected?.id === value.id ? (<Statusi onChange={onChangee} name="status" defaultValue={this.state.selected.status} type="text" />) : (<Status>{value.status}</Status>)}
                                        {this.state.selected?.id === value.id ? (<Viewi onChange={onChangee} name="view" defaultValue={this.state.selected.view} type="text" />) : (<View>{value.view}</View>)}
                                        <Action>{
                                            this.state.selected?.id === value.id ? (
                                                <>
                                                    <button onClick={onClick}>{'save'}</button>
                                                    <button onClick={() => this.setState({ selected: null })}>{'cancel'}</button>
                                                </>
                                            ) : (
                                                <>
                                                    <button onClick={() => onEdit(value,)}>{value.action}</button>
                                                    <button onClick={() => del(value.id)}>{value.del}</button>
                                                </>
                                            )}</Action>
                                    </MiniM>
                                </Mini>
                            ))}
                        </Box>
                    </Bdiv>
                </Divv>
            </div>
        )
    }
}

export default Section;
