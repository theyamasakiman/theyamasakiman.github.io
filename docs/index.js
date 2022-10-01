"use strict";

(function() {

  window.addEventListener("load", init);

  function init() {
    id("about-content").classList.toggle("hidden");
    id("about").addEventListener("click", activateAbout);
    id("academics").addEventListener("click", activateAcademics);
    id("resume").addEventListener("click", activateResume);
    // id("clickable", drop);
  }

  /**
   * Transitions the blurb at the bottom of the page to display a short bio about Chris.
   */
  function activateAbout() {
    let display = id("display-content");
    let children = display.childNodes;
    for(let i = 1; i < children.length; i += 2) {
      let child = children[i];
      child.classList.add("hidden");
    }
    let content = id("about-content");
    content.classList.toggle("hidden");
  }

  /**
   * activates the short blurb about academic content
   */
  function activateAcademics() {
    let display = id("display-content");
    let children = display.childNodes;
    for(let i = 1; i < children.length; i += 2) {
      let child = children[i];
      child.classList.add("hidden");
    }
    let content = id("academic-content");
    content.classList.toggle("hidden");
  }

  /**
   * provides the user the ability to view and download my resume.
   */
  function activateResume() {
    let display = id("display-content");
    let children = display.childNodes;
    for(let i = 1; i < children.length; i += 2) {
      let child = children[i];
      child.classList.add("hidden");
    }
    let content = id("resume-content");
    content.classList.toggle("hidden");
  }

  function menuBar() {
    let width = window.innerWidth;
    let threshold = 1000;
    if(width < threshold) {
      let bar = qs("nav");
      bar.innerHTML= "";

      bar.appendChild
    }

  }

  // function drop() {

  // }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }
}());