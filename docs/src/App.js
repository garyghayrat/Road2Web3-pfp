import React, { Fragment, useState } from "react";
import classes from "./App.module.css";

function App() {
  console.log("TEST");
  console.log("TEST");

  //string baseSvg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 375" style="enable-background:new 0 0 375 375" xml:space="preserve"><style>.st1{fill-rule:evenodd;clip-rule:evenodd}</style><g class="stick-person"><defs><path id="SVGID_1_" d="M121.9 123h131.2v195.8H121.9z"/></defs><clipPath id="SVGID_00000083071382484072793570000014903046463196525706_"><use xlink:href="#SVGID_1_" style="overflow:visible"/></clipPath><path class="st1" d="M171.3 123.6 121.9 175l10.3 10.3 39.2-41.6.5 70L138 318s22 .6 22.5-.4c.2-.5 24.5-96.6 25.5-98l27.4 98h21.1l-33.8-103.4.5-70.5 40.2 40.7 11.8-9.8-50.9-50.9-31-.1z" style="clip-path:url(#SVGID_00000083071382484072793570000014903046463196525706_)"/><g><defs><path id="SVGID_00000072995254797605960400000007781732642102793128_" d="M151 56.2h71V119h-71z"/></defs><clipPath id="SVGID_00000069399393737768954180000003360181775912101774_"><use xlink:href="#SVGID_00000072995254797605960400000007781732642102793128_" style="overflow:visible"/></clipPath><path class="st1" d="M186.5 56.5c-46 1-45.6 61.2-1.5 61.7 47.6 0 49-61.2 1.5-61.7z" style="clip-path:url(#SVGID_00000069399393737768954180000003360181775912101774_)"/></g></g>';

  // array of accessories
  //string[] firstWords = ['<g class="acc-1"><path d="M262.4 222.8c-12.9 0-23.4-10.5-23.4-23.4s10.5-23.4 23.4-23.4 23.4 10.5 23.4 23.4-10.4 23.4-23.4 23.4zm0-51.4c-15.3 0-27.6 12.4-27.6 27.6s12.4 27.6 27.6 27.6c15.3 0 27.6-12.4 27.6-27.6.1-15.3-12.3-27.6-27.6-27.6"/><path d="m275.2 199-12.4-20.5v14.9l12.4 5.6M262.9 194.3v12.9l12.3-7.3-12.3-5.6M275.7 201.5l-12.8 7.5v10.5l12.8-18M262 178.5 249.6 199l12.4-5.6v-14.9M262 194.3l-12.3 5.6 12.3 7.3v-12.9M249.2 201.5l12.8 18V209l-12.8-7.5"/></g>', '<g class="acc-2"><path d="m253.3 140.8 18.4 12.9 12.9 18.4-5.1 5.1-31.4-31.4 5.2-5z"/><defs><path id="SVGID_00000082336630363951774140000016085686907494523067_" d="M267.4 85.5H340v72.4h-72.6z"/></defs><clipPath id="SVGID_00000153701823784517945170000016094371754003198389_"><use xlink:href="#SVGID_00000082336630363951774140000016085686907494523067_" style="overflow:visible"/></clipPath><path d="m274.5 151 4.3 6.7 53.4-48.6 7.8-23.5-23.5 7.8-48.6 53.4 6.6 4.2z" style="clip-path:url(#SVGID_00000153701823784517945170000016094371754003198389_)"/><path d="m245.5 185.1-5.1-5.1 20.8-26.3 10.6 10.6-26.3 20.8z"/><g><defs><path id="SVGID_00000054228768398272029320000017718890307512140692_" d="M238 171.9h15.4v15.6H238z"/></defs><clipPath id="SVGID_00000069372633230153410420000017554827048009402000_"><use xlink:href="#SVGID_00000054228768398272029320000017718890307512140692_" style="overflow:visible"/></clipPath><path d="M252.9 180c0 .5 0 1-.1 1.5s-.2.9-.4 1.4c-.2.5-.4.9-.7 1.3-.3.4-.6.8-.9 1.1-.3.3-.7.7-1.1.9-.4.3-.8.5-1.3.7s-.9.3-1.4.4c-.5.1-1 .1-1.5.1s-1 0-1.5-.1-.9-.2-1.4-.4c-.4-.2-.9-.4-1.3-.7-.4-.3-.8-.6-1.1-.9-.3-.3-.7-.7-.9-1.1-.3-.4-.5-.8-.7-1.3-.2-.4-.3-.9-.4-1.4-.1-.5-.1-1-.1-1.5s.1-1 .1-1.5.2-.9.4-1.4.4-.9.7-1.3.6-.8.9-1.1c.3-.3.7-.7 1.1-.9.4-.3.8-.5 1.3-.7.5-.2.9-.3 1.4-.4.5-.1 1-.1 1.5-.1s1 0 1.5.1.9.2 1.4.4.9.4 1.3.7c.4.3.8.6 1.1.9.3.3.7.7.9 1.1.3.4.5.8.7 1.3.2.5.3.9.4 1.4.1.6.1 1.1.1 1.5z" style="clip-path:url(#SVGID_00000069372633230153410420000017554827048009402000_)"/></g></g>', '<g class="acc-3"><path d="M266.3 225.2h1.4c2.2.1 4.1-1.1 6-1.8 4.7-1.6 8.9-4.1 12.4-7.6 1.4-1.4 2.7-3 3.8-4.7 1.1-1.7 2-3.5 2.7-5.4s1.2-3.8 1.5-5.8c.3-2 .3-4 .2-6-.3-4.2-.5-8.4-3.5-11.9-2.4-2.8-4.7-5.6-8-7.3-2.8-1.4-5.7-2.4-8.7-2.9s-6.1-.7-9.2-.3c-2.8.2-5.4.8-8 1.8-2.6 1-5 2.2-7.3 3.8-3.9 2.7-7.3 6-10.2 9.8-2.6 3.3-4.3 6.9-5.2 11-.4 1.6-.5 3.2-.5 4.9 0 1.6.1 3.3.5 4.9.3 1.6.8 3.2 1.5 4.7.6 1.5 1.4 2.9 2.4 4.3 1.3 2.2 3.1 4 5.2 5.3 4.4 2.2 9.1 3.4 14 3.5 2.9-.1 6-.2 9-.3zm10.2-48.1c1.4 1.5 3.1 2.8 4.9 3.9 1.8 1 3.8 1.8 5.9 2.2.3 0 .5.1.8.2.4.2.9.5 1.4.7-.3.3-.5.6-.8 1-.5.9-1 1.8-1.4 2.8-.1.2.2.9.4.9.4.1.8-.1 1.1-.4.4-.7.7-1.3 1.1-2.1.1-.2.3-.4.4-.5.1.2.4.4.4.6-.1 1-.2 2-.5 2.9-.3 1-.6 2.1-1 3.1-.9 2.5-1.1 5-.6 7.6.3 1.7.5 2.2-1.6 2.5-.3 0-.6.6-.9.9.4.2.9.7 1.2.6 1.4-.5 1.3.2 1.2 1.2-.1 1-.3 2-.7 2.9s-1 1.7-1.7 2.4l-.6.3v-.6c-.1-.3-.3-.9-.4-.9-.2 0-.9.1-1 .4-.9 2.2-2.8 3.4-4.6 4.8-1.9 1.4-3.6 3-5.1 4.8-.6.8-1.4 1.5-2.3 2.1-.9.6-1.8 1-2.8 1.3-1 .3-2 .4-3.1.3-1-.1-2-.3-3-.6-5-1.7-10.2-2.4-15.4-2-.6.1-1.2.1-1.8 0-.6-.1-1.2-.3-1.7-.6s-1-.7-1.4-1.1c-.4-.4-.8-1-1-1.5-.4-1-.6-2-.4-3 .4-2 .4-3.9-.1-5.9s-1.2-3.7-2.4-5.3c-.2-.3-.5-.7-.7-1.1-1.6-3-1.3-4.7 1.3-6.9.7-.6 1.4-1.3 2.2-1.9.5-.4 1.1-.6 1.7-.5 1 0 2-1 3-1.6-.3-.3-.6-.6-.8-.9-.3-.3-.5-.4-.5-.6.3-1.6.6-3.2.7-4.9 0-2.3.6-2.8 2.7-3.3 3.2-.6 6.2-1.9 8.9-3.8 1.5-1.2 3.2-2.1 5-2.8 1.9-.6 3.8-1 5.7-1.4 1.6 0 3.1.3 4.6 1 1.3.8 2.6 1.7 3.7 2.8zm-37.6 36.8c-.5-.6-.9-1.3-1.2-2-.7-2.8-1.4-5.6-1.9-8.4 0-.3 0-.6.1-.9l.6.6c1 1.2 1.7 2.5 2.2 4 .5 1.5.7 2.9.7 4.5l-.5 2.2zm40.9-36.7c-1-.8-2-1.6-2.9-2.4-.1-.1-.2-.3-.3-.4.2 0 .4-.1.5 0 1.9.5 3.7 1.3 5.3 2.3 1.7 1 3.2 2.2 4.5 3.6.1.2.2.3.3.5-.2 0-.3.1-.1 0-3.2-.2-5.2-2-7.3-3.6zm-37.9 13c-1.2 1.1-2.4 2.2-3.6 3.2-.1.1-.2.2-.4.2 0-.2-.1-.4 0-.5 1.7-2.5 3.4-5.1 5.2-7.6.1-.1.3-.1.5-.2l.2 1.2c0 .7-.2 1.4-.5 2-.4.7-.8 1.2-1.4 1.7zm49.6 12c0 .2-.2.3-.3.4 0-.1 0-.3-.1-.4-.2-1.5-.4-3-.3-4.5.2-1.7.6-3.4 1-5 0-.1.2-.2.3-.3.1.1.1.3.1.4v2.8h.3c-.3 2.3-.7 4.5-1 6.6zm-13.9 17.1c2-2.4 4.4-4.2 7.2-5.6h.6c-.1.1-.1.4-.3.5l-7.2 5.4c-.1.1-.2.1-.3.2v-.5zm-26.4-40.7c.1-.1.1-.2.2-.3l5.2-3h.3c.1 0 0 .2 0 .2l-5.3 3.4-.4-.3zm3.2 44.3h2.3c.2 0 .4.1.6.2l-.6.3-2.3-.5z"/><path d="M265.7 206.8c1.9-1.2 4-2 6.1-2.5.4-.1.7-.3 1-.5.3-.2.6-.4.9-.7s.5-.5.8-.9c.2-.3.4-.6.6-1s.3-.7.4-1.1.1-.8.1-1.1c0-.4 0-.8-.1-1.1s-.2-.7-.3-1.1c-.9-2-1.6-4.1-2.4-6.2-.2-.7-.5-1.2-1-1.7s-1.1-.8-1.7-1c-1.5-.4-3-.3-4.5.4-1.7.7-3.5 1-5.4.9-1.5 0-3.1.1-4.6.6-1.1.4-1.5.3-1.5-.9v-.2l-.9-1c-.3.3-.5.7-.6 1.2-.1.5-.1 1.1 0 1.6.2 1 0 2-.6 2.8-.5.9-.9 1.9-1.1 2.9-.4 1.9 1 3 2.2 4.1 1.1.8 2 1.8 2.6 3 1.1 3.5 3.7 4.5 7.2 4.7.9-.3 1.9-.7 2.8-1.2zm4.8-11.5c.2.3.4.7.6 1.1l.3 1.2c.1.4 0 .8 0 1.2l-.3 1.2c-.2.4-.4.7-.6 1.1-.2.3-.5.6-.9.9-.3.3-.7.5-1 .7-.4.2-.8.3-1.2.4-1.2.4-2.5.6-3.8.5-1.3-.1-2.5-.4-3.7-1-.4-.2-.7-.4-1-.6-.3-.2-.6-.5-.8-.8s-.4-.7-.6-1c-.2-.4-.3-.7-.3-1.1-.1-.4-.1-.8 0-1.2s.1-.8.3-1.1c.1-.4.3-.7.5-1s.5-.6.8-.9c.8-.8 1.7-1.5 2.8-2 1.1-.5 2.2-.7 3.3-.8.6 0 1.2 0 1.7.2s1.1.4 1.6.6c.5.3 1 .6 1.4 1.1s.6.8.9 1.3zm-12.3-4c.2 0 .4.1.6.1-.1.1-.2.3-.3.4-1.1.7-2 1.6-2.7 2.6-.7 1.1-1.2 2.2-1.4 3.5 0 .1-.6.3-.6.2-.4-.5-.7-1-.8-1.3 0-2.6 2.9-5.5 5.2-5.5zm12.3-.4c.1.1.1.5.1.7-.2-.1-.5-.1-.7-.2l-1.8-.9-.9-.5 1.1-.4.3-.2c.6.5 1.3 1 1.9 1.5zm-10.8 14.3c-.1 0-.1-.2-.2-.2h.4l2.9.7.3.1c-.1 0-.2.1-.3.1h-.6v.2l-2.5-.9zM276.2 209.8c-.2.4-.4.7-.6 1-.6 1-1.3 2.1-2 3-.3.3-.9.4-1.3.6-.1-.4-.5-1-.4-1.3.8-1.4 1.7-2.6 2.7-3.9.3-.2.6-.2.9-.2.3.2.5.6.7.8zM267.1 215c-.7.2-1.2.5-1.5.4-1-.4-2-.9-3-1.5-.2-.1-.2-.7-.3-1.1.4 0 .7-.2 1-.1.9.4 1.8.8 2.7 1.3.4.2.6.5 1.1 1zM243.9 203.2c1.2.6 2.3 1.1 3.4 1.8.2.3.3.5.2.9-.1.2-.6.5-.8.4-1.2-.6-2.3-1.2-3.4-1.9-.2-.1-.3-.6-.2-.7.2-.2.5-.4.8-.5zM254.5 216.7l-.9-.9c.3-.3.6-.6 1-.8.6-.3 1.3-.4 2-.5.4 0 .8.6 1.2.9-.3.3-.6.7-.9.8-.8.2-1.6.3-2.4.5zM282 196.9c-.9 1.3-1.5 2.4-2.1 3.4-.1.1-.6.1-.8 0-.2-.1-.4-.6-.3-.7.5-.9 1.1-1.8 1.8-2.7 0-.2.7 0 1.4 0zM270 176c-.3 1-.7 1.9-1.2 2.8-.1.3-.8.4-1.2.3-.4-.1-.4-.8-.3-1.1.4-.8.8-1.6 1.3-2.4.1-.2.6-.2.8-.2s.4.4.6.6zM263.9 218.6c.3-.5.5-.8.6-.9.3-.1.6 0 .8.2.7.7 1.3 1.5 1.9 2.3.1.3.1.5 0 .8-.1.2-.7.4-.8.3-.8-.9-1.6-1.8-2.5-2.7zM277 178.4c-.2.9-.4 1.8-.7 2.6-.2.3-.5.5-.9.4-.3-.1-.7-.6-.6-.9.2-.8.4-1.6.8-2.4.2-.3.6-.4.9-.4.2.1.4.5.5.7zM259.4 182.8c-.4 1.2-.8 2.2-1.1 3.1-.2.2-.4.3-.7.3-.3 0-.7-.4-.7-.5.4-1.1.8-2.2 1.4-3.2 0 0 .7.2 1.1.3zM253.1 208.7c.4 0 .8.1 1.2.2.3.1.6.6.8.9-.4.2-.7.6-1.1.6-.7 0-1.3-.1-1.9-.3-.4-.1-.6-.6-.9-.9.4-.2.8-.4 1.1-.5.3-.1.4 0 .8 0zM247.2 202.4c.2-.9.5-1.7.9-2.6.1-.3.7-.3 1-.4.2.3.3.6.3.9 0 .7-.1 1.3-.4 2-.2.4-.5.6-.9.7-.3.1-.6-.3-.9-.6zM281.8 206.4c-1-.6-2-1-2.9-1.6-.2-.2-.3-.5-.2-.8.2-.2.5-.3.8-.2 1 .3 1.9.6 2.8 1.1.3.2.4.5.4.8-.1.3-.5.4-.9.7zM284 194.7c-.9-.4-1.8-.7-2.6-1.2-.3-.3-.4-.6-.3-.9 0-.2.6-.4.8-.3.9.2 1.7.5 2.6.9.3.2.4.5.3.9-.1.3-.5.4-.8.6zM282.9 186.7c-1-.4-2-.6-2.8-1-.3-.1-.4-.6-.6-.9.3-.1.6-.3.9-.3 1 .2 2 .4 3 .7.2 0 .5.6.4.7-.2.4-.5.7-.9.8zM245.1 213.6c.1-.6.2-1.2.4-1.8.1-.3.5-.6.8-.6.2 0 .7.4.7.7 0 .8-.1 1.5-.3 2.2-.2.3-.5.4-.9.4-.4-.2-.6-.7-.7-.9zM267.5 182.8c.8.1 1.6.2 2.4.4.3.1.5.5.7.7-.3.2-.6.6-.8.6-.8 0-1.6-.2-2.4-.5-.3-.1-.5-.6-.8-.9l.9-.3zM277 187.3c-.1.8-.3 1.5-.6 2.2-.1.3-.7.4-1.1.5-.2-.3-.3-.7-.4-1 0-.6.2-1.2.4-1.8.3-.3.6-.5 1.1-.6.2 0 .5.5.6.7zM242.9 196.7c.6.2 1.1.4 1.7.7.2.1.4.7.3.8-.2.3-.6.4-.9.4-.5-.1-.9-.3-1.3-.6-.3-.2-.6-.5-.8-.8l1-.5zM249.1 184.1l1.7.9c-.4.2-.9.7-1.4.6-.6-.2-1.2-.5-1.8-.9l1.5-.6zM261.1 180.4l-1.9-1.4c.3-.2.6-.7.9-.6.7.2 1.3.5 2 .9l-1 1.1z"/></g>', '<g class="acc-4"><defs><path id="SVGID_00000021098812375647153130000014794140525482122423_" d="M221.2 172.2H285V260h-63.8z"/></defs><clipPath id="SVGID_00000008846779160416368190000011515461158662490503_"><use xlink:href="#SVGID_00000021098812375647153130000014794140525482122423_" style="overflow:visible"/></clipPath><g style="clip-path:url(#SVGID_00000008846779160416368190000011515461158662490503_)"><path d="M280.4 255.7c0 1.1-.9 1.9-2 1.9h-50.5c-1.1 0-2-.9-2-1.9l-2.2-53.7c0-1 .8-1.8 1.8-1.8h12.9c-.6 2.1-1.3 4-2 5.9l-.6 1.6h7.8l.3-.5c.3-.5.6-1 .8-1.6.7-1.7 1.1-3.5 1.4-5.3h14.4c.3 1.8.7 3.6 1.4 5.3.3.6.5 1.2.8 1.6l.3.5h7.8l-.6-1.6c-.7-1.8-1.4-3.7-2-5.6 0-.1 0-.2-.1-.2H281c1 0 1.8.8 1.8 1.8l-2.4 53.6zm-40.1-54.6c.1-.3.2-.6.2-.9.2-.7.4-1.5.5-2.2.1-.5.2-1.1.2-1.6.1-.9.1-1.7.2-2.6.1-1.4.1-2.7.4-4 .4-2.3 1.3-4.8 2.7-7.6.1-.2.2-.4.4-.7-.5 1.3-.5 2.8-.5 4.1v.6c0 2.8-.1 5.1-.2 7.2v.2c-.1 1.4-.1 2.9-.3 4.3-.1.8-.2 1.5-.3 2.2-.2 1.5-.6 3-1.2 4.4-.1.3-.2.5-.3.7h-3.2c.5-1.2 1-2.6 1.4-4.1zm6.1-7.3v-.2c.1-2.1.2-4.4.2-7.3v-.7c0-1.5 0-2.9.7-4 .6-.9 1.6-1.6 2.9-2 .4-.1 2.1-.4 2.6-.4h.4c.4 0 2.2.3 2.6.4.8.2 2.1.8 2.9 2 .7 1.1.7 2.5.7 4v.7c0 2.9.1 5.2.2 7.3v.2c.1 1.4.1 2.8.3 4.2H246c.3-1.4.4-2.9.4-4.2zm1.4-16.5c1.8-3 5.1-2.9 5.3-2.9h.2s3.5-.1 5.3 2.9c.4.7.8 1.3 1.2 1.9-.8-.7-1.9-1.3-3.1-1.7-.2-.1-2.3-.5-3.2-.5h-.2c-.8 0-3.2.4-3.4.5-1.2.4-2.3.9-3.1 1.7.2-.5.6-1.1 1-1.9zm13.9 5c1.4 2.8 2.3 5.3 2.7 7.6.2 1.3.3 2.6.4 4 0 .8.1 1.7.2 2.6.1.5.1 1.1.2 1.6.1.8.3 1.5.5 2.2.1.3.2.6.2.9.4 1.5.9 2.9 1.4 4.3h-3.2c-.1-.2-.2-.5-.3-.7-.6-1.4-.9-2.9-1.2-4.4-.1-.7-.2-1.5-.3-2.2-.1-1.4-.2-2.9-.3-4.3v-.2c-.1-2.1-.2-4.3-.2-7.2v-.6c0-1.3 0-2.7-.5-4.1.2 0 .3.3.4.5zm21.5 15.7h-15.8l-.3-1.8c-.1-.8-.1-1.6-.2-2.5-.1-1.4-.1-2.9-.4-4.3-.4-2.5-1.4-5.2-2.9-8.2-.4-.8-1-1.9-1.8-2.8-.5-.6-1-1.3-1.6-2.3-2.4-4-6.7-4-7.2-4-.6 0-4.9 0-7.2 4-.6.9-1 1.7-1.6 2.3-.8.9-1.4 2-1.8 2.8-1.5 3-2.5 5.7-2.9 8.2-.2 1.4-.3 2.9-.4 4.3 0 .8-.1 1.6-.2 2.5l-.3 1.8h-15.8c-1 0-1.8.8-1.8 1.8l2.4 58.1c0 1.1.9 1.9 2 1.9h54.8c1.1 0 2-.9 2-1.9l2.4-58.1c.4-1-.4-1.8-1.4-1.8" style="fill:#0a0a0a"/></g></g>', '<g class="acc-5"><defs><path id="SVGID_00000102518261755058943140000001625996276050947464_" d="M238.8 132.3h63.4v63.2h-63.4z"/></defs><clipPath id="SVGID_00000094603360042029552940000008027862420937217952_"><use xlink:href="#SVGID_00000102518261755058943140000001625996276050947464_" style="overflow:visible"/></clipPath><path d="M285.7 132.3c-9.1 0-16.5 7.4-16.5 16.4 0 2.1.5 4 1.2 5.9l-29.3 29.3c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l29.3-29.3c1.8.7 3.8 1.2 5.9 1.2 9.1 0 16.4-7.4 16.4-16.5 0-1.8-.3-3.5-.8-5.1l-.7-2.1-1.5 1.6-9.6 9.6-5.4-2.2-2.2-5.4 9.6-9.6 1.6-1.5-2.1-.7c-1.8-.7-3.5-1-5.3-1zm0 2.7c.7 0 1.3.2 1.9.3l-8.4 8.3-.6.6 3.1 7.7.2.6.6.2 7.7 3.1.6-.6 8.3-8.4c.1.6.3 1.2.3 1.9 0 7.6-6.1 13.7-13.7 13.7-2 0-3.9-.5-5.7-1.2l-.9-.4-30.6 30.6c-1.5 1.5-4 1.5-5.6 0s-1.5-4 0-5.6l30.6-30.6-.4-.9c-.8-1.7-1.2-3.6-1.2-5.7.1-7.5 6.2-13.6 13.8-13.6z" style="clip-path:url(#SVGID_00000094603360042029552940000008027862420937217952_)"/></g>'];

  //string memory finalSvg = string(abi.encodePacked(baseSvg, first, '</svg>'));

  // random accessory is chosen from accesosry array
  /*
   function pickRandomFirstWord(uint256 tokenId) public view returns (string memory) {
    uint256 rand = random(string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId))));
    rand = rand % firstWords.length;
    return firstWords[rand];
}
*/

  //const test = abi.encodePacked("x", "y", "z");

  const [character, setCharacter] = useState({
    clothes: "random",
    hair: "random",
    accessory: "random",
    //location: "random",
    clothes: "random",
    accessory: "random",
  });

  const [avatar, setAvatar] = useState({
    display: false,
  });

  const clothes = ["random", "jeans", "t-shirt", "dress", "socks", "swimsuit"];

  const hair = [
    "random",
    "pink space buns",
    "seaform quiff",
    "purple layers",
    "brown curls",
    "blonde fringe up",
  ];

  const accessory = ["random", "Eth", "sword", "donut", "bubble tea", "wrench"];

  const onChange = (event) => {
    console.log("event.target.name: ", event.target.name);
    console.log("event.target.value: ", event.target.value);
    const tempCharacter = { ...character };
    if (event.target.name === "clothes") {
      tempCharacter.clothes = event.target.value;
    } else if (event.target.name === "hair") {
      tempCharacter.hair = event.target.value;
    } else if (event.target.name === "accessory") {
      tempCharacter.accessory = event.target.value;
    }
    console.log("tempCharacter: ", tempCharacter);
    setCharacter(tempCharacter);
  };

  const submit = () => {
    const final = { display: true };
    if (character.clothes === "random") {
      let index = Math.floor(Math.random() * (clothes.length - 1)) + 1;
      final.clothes = clothes[index];
    } else {
      final.clothes = character.clothes;
    }
    if (character.hair === "random") {
      let index = Math.floor(Math.random() * (hair.length - 1)) + 1;
      final.hair = hair[index];
    } else {
      final.hair = character.hair;
    }
    if (character.accessory === "random") {
      let index = Math.floor(Math.random() * (accessory.length - 1)) + 1;
      final.accessory = accessory[index];
    } else {
      final.accessory = character.accessory;
    }
    console.log("final: ", final);
    setAvatar(final);
  };

  //const

  const reset = () => {
    setCharacter({
      hair: "random",
      clothes: "random",
      accessory: "random",
    });

    setAvatar({ display: false });
  };

  const lineBreak = (
    <hr
      style={{
        borderTop: "2px solid lightgrey",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    ></hr>
  );
  const display = (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "150px 230px",
        boxSizing: "border-box",
      }}
    >
      <div>Clothes</div>
      <div>{avatar.clothes}</div>
      <div>Hair</div>
      <div>{avatar.hair}</div>
      <div>Accessory</div>
      <div>{avatar.accessory}</div>
    </div>
  );

  return (
    <div style={{ paddingTop: "60px", paddingLeft: "calc((100vw - 810px)/2)" }}>
      <div
        style={{
          display: "grid",
          columnGap: "10px",
          gridTemplateColumns: "400px 400px",
        }}
      >
        <div
          style={{
            height: "800px",
            width: "400px",
            border: "2px solid grey",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "600" }}>
            Customize your Avatar
          </div>
          <br></br>
          <br></br>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px",
              boxSizing: "border-box",
            }}
          >
            <div>Clothes</div>
            <select
              style={{ width: "180px" }}
              type="string"
              name="clothes"
              required
              value={character.clothes}
              //className={styles.SelectionBox}
              onChange={onChange}
            >
              {clothes.map((opt, index) => (
                <option key={index}>{opt}</option>
              ))}
            </select>
          </div>

          {lineBreak}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px",
              boxSizing: "border-box",
            }}
          >
            <div>Hair</div>
            <div style={{ width: "180px" }}>
              <select
                style={{ width: "180px" }}
                type="string"
                name="hair"
                required
                value={character.hair}
                //className={styles.SelectionBox}
                onChange={onChange}
              >
                {hair.map((opt, index) => (
                  <option key={index}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {lineBreak}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px",
              boxSizing: "border-box",
            }}
          >
            <div>Accessory</div>
            <div>
              <select
                style={{ width: "180px" }}
                type="string"
                name="accessory"
                required
                value={character.accessory}
                //className={styles.SelectionBox}
                onChange={onChange}
              >
                {accessory.map((opt, index) => (
                  <option key={index}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div
            style={{
              display: "grid",
              columnGap: "10px",
              gridTemplateColumns: "175px 175px",
              boxSizing: "border-box",
            }}
          >
            <button onClick={submit} className={classes.ButtonBlue}>
              SUBMIT
            </button>
            <button onClick={reset} className={classes.ButtonGrey}>
              RESET
            </button>
          </div>
        </div>
        <div
          style={{
            height: "800px",
            width: "400px",
            border: "2px solid grey",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>My Avatar</div>
            {!avatar.display ? (
              <div
                style={{
                  paddingTop: "20px",
                }}
              >
                Submit your Avatar
              </div>
            ) : (
              <Fragment>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "150px 230px",
                    boxSizing: "border-box",
                    paddingTop: "20px",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Trait</div>
                  <div style={{ fontWeight: "600" }}>Description</div>
                </div>
                {display}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
