import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import ResultsHero from "../components/ResultsHero/ResultsHero";
import ResultsLoading from "../components/ResultsLoading/ResultsLoading";
import Footer from "../components/Footer/Footer";

const Storage = typeof window !== "undefined" && window.localStorage;

const config = {
  apiKey: process.env.GATSBY_GOOGLE_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: "web-behavior",
  storageBucket: "",
  messagingSenderId: process.env.GATSBY_GOOGLE_MESSAGING_SENDER_ID
};

class Results extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      userId:
        (typeof window !== "undefined" &&
          window.location.hash.replace("#", "")) ||
        (Storage && Storage.getItem("userId")),
      isLoading: true
    };
    this.app = null;
  }

  componentDidMount() {
    if (firebase.apps.length > 0) {
      firebase
        .app()
        .delete()
        .then(() => this.initFirebase());
    } else {
      this.initFirebase();
    }
  }

  initFirebase = () => {
    firebase.initializeApp(config);

    firebase
      .database()
      .ref("/history-data/" + this.state.userId + "/history-gist/")
      .once("value")
      .then(snapshot => {
        const data = snapshot.val();

        if (data) {
          const dataList = Object.keys(data).map(key => data[key]);

          if (dataList.length > 0) {
            const latestData = dataList.pop();

            this.setState({
              data: latestData,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        }
      });
  };

  render() {
    const { data, isLoading } = this.state;

    if (!data && isLoading) {
      return <ResultsLoading />;
    }
    if (!data && !isLoading) {
      return <div> eita </div>;
    }
    if (data && !isLoading) {
      return (
        <div>
          <ResultsHero historyGist={data} />
          <Footer />
        </div>
      );
    }
  }
}

export default Results;
