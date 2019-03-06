import React from "react";
import NoPic from "../assets/img/i1.png";

const Book = ({ books }) => {
  const authrs = authors => (authors ? authors : "N/A");
  const imgLink = imageLinks =>
    imageLinks ? imageLinks.smallThumbnail : NoPic;
  const pblisher = publisher => (publisher ? publisher : "N/A");
  const ttle = title => (title ? title : "N/A");
  const inflink = infolink => (infolink ? infolink : "url");

  return books.map(book => {
    const {
      id,
      volumeInfo: { imageLinks, publisher, authors, title, infolink }
    } = book;

    return (
      <div key={id}>
        <img src={imgLink(imageLinks)} alt={ttle(title)} />
        <div>Title: {ttle(title)}</div>
        <div>publisher: {pblisher(publisher)}</div>
        <div>authors: {authrs(authors)}</div>
        <a href={inflink(infolink)}>book info</a>
      </div>
    );
  });
};

export default Book;
