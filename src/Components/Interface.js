import React, { useState, useEffect } from "react";
import PageContent from "./PageContent";

const Interface = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    updateFunction();
  }, []);
  const updateFunction = async () => {
    const information = await fetch(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    const parsedInformation = await information.json();
    setdata(parsedInformation);
    console.log(parsedInformation);
  };

  // let shows = [
  //   {
  //     score: 0.70231444,
  //     show: {
  //       id: 34653,
  //       url: "https://www.tvmaze.com/shows/34653/all-american",
  //       name: "All American",
  //       type: "Scripted",
  //       language: "English",
  //       genres: ["Drama", "Sports"],
  //       status: "Running",
  //       runtime: 60,
  //       averageRuntime: 60,
  //       premiered: "2018-10-10",
  //       ended: null,
  //       officialSite: "http://www.cwtv.com/shows/all-american/",
  //       schedule: { time: "20:00", days: ["Monday"] },
  //       rating: { average: 6.2 },
  //       weight: 99,
  //       network: {
  //         id: 5,
  //         name: "The CW",
  //         country: {
  //           name: "United States",
  //           code: "US",
  //           timezone: "America/New_York",
  //         },
  //         officialSite: "https://www.cwtv.com/",
  //       },
  //       webChannel: null,
  //       dvdCountry: null,
  //       externals: { tvrage: null, thetvdb: 348200, imdb: "tt7414406" },
  //       image: {
  //         medium:
  //           "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg",
  //         original:
  //           "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg",
  //       },
  //       summary:
  //         "<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>",
  //       updated: 1684254496,
  //       _links: {
  //         self: { href: "https://api.tvmaze.com/shows/34653" },
  //         previousepisode: { href: "https://api.tvmaze.com/episodes/2530954" },
  //       },
  //     },
  //   },

  // ];
  return (
    <>
      {
        <div className="row my-5">
          {data.map((ele) => {
            return (
              ele.show.name !== "All Wrong" && (
                <div className="col-md-4 my-4" key={ele.show.url}>
                  <PageContent
                    image={ele.show.image.medium}
                    title={ele.show.name}
                    premiered={ele.show.premiered}
                    summary={ele.show.summary}
                    url={ele.show.url}
                  />
                </div>
              )
            );
          })}
        </div>
      }
    </>
  );
};

export default Interface;

// {"id":31147,"url":"https://www.tvmaze.com/shows/31147/all-wrong","name":"All Wrong","type":"Scripted","language":"English","genres":["Comedy"],"status":"Ended","runtime":null,"averageRuntime":10,"premiered":"2017-04-03","ended":"2018-03-20","officialSite":null,"schedule":{"time":"","days":["Monday"]},"rating":{"average":null},"weight":72,"network":null,"webChannel":{"id":186,"name":"Blackpills","country":{"name":"France","code":"FR","timezone":"Europe/Paris"},"officialSite":"https://blackpills.com/"},"dvdCountry":null,"externals":{"tvrage":null,"thetvdb":328412,"imdb":"tt6285708"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/124/310674.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/124/310674.jpg"},"summary":"<p>Carlos finds himself unemployed, broke, and in debt. When he finally manages to bring home a woman for a one-night stand, everything gets even worse.</p>","updated":1653823870,"_links":{"self":{"href":"https://api.tvmaze.com/shows/31147"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/2336093"}}}}
