import React, { Component } from "react";
import firebase from "firebase";
import ResultsHero from "../components/ResultsHero/ResultsHero";
import ResultsLoading from "../components/ResultsLoading/ResultsLoading";

const Storage = window.localStorage;

class Results extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      userId:
        Storage.getItem("userId") || window.location.hash.replace("#", ""),
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
    var config = {
      apiKey: "AIzaSyBTJb1GOaYeWRLUD8NcTUt9GrTwR6coQMc",
      authDomain: "web-behavior.firebaseapp.com",
      databaseURL: "https://web-behavior.firebaseio.com",
      projectId: "web-behavior",
      storageBucket: "",
      messagingSenderId: "112299024994"
    };

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
      return <ResultsHero historyGist={data} />;
    }
  }
}

export default Results;
