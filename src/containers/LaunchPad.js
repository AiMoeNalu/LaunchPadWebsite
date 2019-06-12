import React from 'react';

import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

import HomePage from '../components/HomePage';
import BuyTicketsPage from '../components/BuyTicketsPage';
import GiftCardsAndMembershipsPage from '../components/GiftCardsAndMembershipsPage';
import WaiversPage from '../components/WaiversPage';
import PricesAndPromosPage from '../components/PricesAndPromosPage';
import PartiesAndEventsPage from '../components/PartiesAndEventsPage';
import MorePage from '../components/MorePage';

import Page from './Page';

import './LaunchPad.css';
import 'tachyons';

class LaunchPad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pages: [{
                homePage: <HomePage></HomePage>,
                buyTicketsPage: <BuyTicketsPage></BuyTicketsPage>,
                giftCardsAndMembershipsPage: <GiftCardsAndMembershipsPage></GiftCardsAndMembershipsPage>,
                waiversPage: <WaiversPage></WaiversPage>,
                pricesAndPromosPage: <PricesAndPromosPage></PricesAndPromosPage>,
                partiesAndEventsPage: <PartiesAndEventsPage></PartiesAndEventsPage>,
                morePage: <MorePage></MorePage>
            }],
            selectedPage: 'HOME_SELECTED',
            isSignedIn: false,
        };
    }
    
    onPageSelectHandler = (event) => {
        this.setState({selectedPage: event.target.dataset.value});
    }

    render(){
        let renderedPage = [];
        switch(this.state.selectedPage){
            case 'HOME_SELECTED':
                renderedPage=this.state.pages[0].homePage;
                break;
            case 'BUY_TICKETS_SELECTED':
                renderedPage=this.state.pages[0].buyTicketsPage;
                break;
            case 'GIFTCARDS_MEMBERSHIPS_SELECTED':
                renderedPage=this.state.pages[0].giftCardsAndMembershipsPage;
                break;
            case 'WAIVERS_SELECTED':
                renderedPage=this.state.pages[0].waiversPage;
                break;
            case 'PRICES_PROMOS_SELCTED':
                renderedPage=this.state.pages[0].pricesAndPromosPage;
                break;
            case 'PARTIES_EVENTS_SELECTED':
                renderedPage=this.state.pages[0].partiesAndEventsPage;
                break;
            case 'MORE_SELECTED':
                renderedPage=this.state.pages[0].morePage;
                break;
            default:
                renderedPage = [];
                break;
        }
        return(
        <div>
            <MainNavbar onSelect={this.onPageSelectHandler} />
            <Page toRender={renderedPage} />
            <Footer />
        </div>
        );
    }
}

export default LaunchPad;