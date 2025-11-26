import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GithubCorner from 'react-github-corner';
import ScrollToTop from './ScrollSystem';

const Router = () => (
  <>
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
    <GithubCorner
      style={{ position: 'fixed', top: 0, right: 0, zIndex: 1 }}
      direction="right"
      href="https://github.com/pamcy/React-Hotel-Booking-Ajax"
      target="_blank"
    />
  </>
);

export default Router;
