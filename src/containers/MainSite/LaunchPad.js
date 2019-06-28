import React from "react";
import Particles from "react-particles-js";

import MainNavbar from "../../components/MainNavBar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import SignIn from "../../components/SignIn/SignIn";

import HomePage from "../../components/pages/Home/HomePage";
import BuyTicketsPage from "../../components/pages/BuyTickets/BuyTicketsPage";
import GiftCardsAndMembershipsPage from "../../components/pages/GiftCardsAndMemberships/GiftCardsAndMembershipsPage";
import WaiversPage from "../../components/pages/Waivers/WaiversPage";
import PricesAndPromosPage from "../../components/pages/PricesAndPromos/PricesAndPromosPage";
import PartiesAndEventsPage from "../../components/pages/PartiesAndEvents/PartiesAndEventsPage";
import MorePage from "../../components/pages/More/MorePage";

import Page from "../../components/Layout/Page";

import "./LaunchPad.css";

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class LaunchPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: {
        homePage: <HomePage />,
        buyTicketsPage: <BuyTicketsPage />,
        giftCardsAndMembershipsPage: <GiftCardsAndMembershipsPage />,
        waiversPage: <WaiversPage />,
        pricesAndPromosPage: <PricesAndPromosPage />,
        partiesAndEventsPage: <PartiesAndEventsPage />,
        morePage: <MorePage />
      },
      selectedPage: "HOME_SELECTED",
      userStatus: {
        isSignedIn: false,
        userName: null,
      }
    };
  }

  onPageSelectHandler = event => {
    this.setState({ selectedPage: event.target.dataset.value });
  };

  render() {
    
    let renderedPage = [];
    switch (this.state.selectedPage) {
      case "HOME_SELECTED":
        renderedPage = this.state.pages.homePage;
        break;
      case "BUY_TICKETS_SELECTED":
        renderedPage = this.state.pages.buyTicketsPage;
        break;
      case "GIFTCARDS_MEMBERSHIPS_SELECTED":
        renderedPage = this.state.pages.giftCardsAndMembershipsPage;
        break;
      case "WAIVERS_SELECTED":
        renderedPage = this.state.pages.waiversPage;
        break;
      case "PRICES_PROMOS_SELCTED":
        renderedPage = this.state.pages.pricesAndPromosPage;
        break;
      case "PARTIES_EVENTS_SELECTED":
        renderedPage = this.state.pages.partiesAndEventsPage;
        break;
      case "MORE_SELECTED":
        renderedPage = this.state.pages.morePage;
        break;
      default:
        renderedPage = [];
        break;
    }
    return (
      <div className="main-background">
        <Particles className="particles" params={ particleOptions } />
        <SignIn/>
        <MainNavbar onSelect={this.onPageSelectHandler} />
        <Page toRender={renderedPage} />
        <Footer />
      </div>
    );
  }
}

export default LaunchPad;
