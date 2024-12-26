import React from "react";
import TurndownService from "turndown";

export default function newConverter({ value = '', onChange, handleSubmit }) {
  var turndownService = new TurndownService()

  const convertToMarkdownOnChange = (text) => {
    //const markdown = turndownService.turndown(text);
    //onChange(markdown);
    console.log(text);
  };

  return (
    <div className="form-outline">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-success">Success</button>
        <label className="form-label" htmlFor="textAreaExample">Message</label>
        <textarea className="form-control" id="content" rows="4" value={value} onChange={convertToMarkdownOnChange}></textarea>
      </form>
    </div>
  );
}
